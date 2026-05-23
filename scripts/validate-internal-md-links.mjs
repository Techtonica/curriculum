import { access, readdir, readFile } from 'node:fs/promises'
import path from 'node:path'
import { remark } from 'remark'
import unistUtilVisit from 'unist-util-visit'

const visit = unistUtilVisit

const repoRoot = process.cwd()

const IGNORED_DIR_NAMES = new Set(['.git', 'node_modules'])
const IGNORED_URL_PREFIXES = [
  'http://',
  'https://',
  'mailto:',
  'tel:',
  'ftp://',
  'data:',
]

function isIgnoredUrl(url) {
  if (!url) return true
  if (url.startsWith('#')) return true
  if (url.startsWith('//')) return true
  return IGNORED_URL_PREFIXES.some((prefix) => url.startsWith(prefix))
}

function safeDecodeURIComponent(value) {
  try {
    return decodeURIComponent(value)
  } catch {
    return value
  }
}

async function pathExists(filePath) {
  try {
    await access(filePath)
    return true
  } catch {
    return false
  }
}

async function walkMarkdownFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  /** @type {string[]} */
  const files = []

  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (IGNORED_DIR_NAMES.has(entry.name)) continue
      files.push(...(await walkMarkdownFiles(path.join(dir, entry.name))))
      continue
    }

    if (!entry.isFile()) continue
    if (entry.name.toLowerCase().endsWith('.md')) {
      files.push(path.join(dir, entry.name))
    }
  }

  return files
}

function normalizeLinkTarget(rawUrl) {
  const trimmed = rawUrl.trim()
  const beforeHash = trimmed.split('#')[0]
  const beforeQuery = beforeHash.split('?')[0]
  return safeDecodeURIComponent(beforeQuery)
}

function isMarkdownFileLink(targetPath) {
  return targetPath.toLowerCase().endsWith('.md')
}

function resolveTargetAbsolute(sourceFilePath, linkTargetPath) {
  if (linkTargetPath.startsWith('/')) {
    return path.resolve(repoRoot, linkTargetPath.slice(1))
  }
  return path.resolve(path.dirname(sourceFilePath), linkTargetPath)
}

function formatLocation(filePath, position) {
  const relative = path.relative(repoRoot, filePath).replaceAll('\\', '/')
  const line = position?.start?.line ?? 1
  const column = position?.start?.column ?? 1
  return `${relative}:${line}:${column}`
}

async function main() {
  const markdownFiles = await walkMarkdownFiles(repoRoot)

  /** @type {Array<{location: string, url: string, resolved: string, reason: string}>} */
  const problems = []

  for (const filePath of markdownFiles) {
    const content = await readFile(filePath, 'utf8')
    const tree = remark().parse(content)

    visit(tree, (node) => {
      if (node.type !== 'link' && node.type !== 'image' && node.type !== 'definition') {
        return
      }

      const url = node.url
      if (typeof url !== 'string') return
      if (isIgnoredUrl(url)) return

      const linkTarget = normalizeLinkTarget(url)
      if (!linkTarget) return
      if (!isMarkdownFileLink(linkTarget)) return

      const resolvedAbsolute = resolveTargetAbsolute(filePath, linkTarget)
      const resolvedNormalized = path.normalize(resolvedAbsolute)

      if (
        resolvedNormalized !== repoRoot &&
        !resolvedNormalized.toLowerCase().startsWith(repoRoot.toLowerCase() + path.sep)
      ) {
        problems.push({
          location: formatLocation(filePath, node.position),
          url,
          resolved: path.relative(repoRoot, resolvedNormalized).replaceAll('\\', '/'),
          reason: 'escapes-repo-root',
        })
        return
      }

      problems.push({
        location: formatLocation(filePath, node.position),
        url,
        resolved: path.relative(repoRoot, resolvedNormalized).replaceAll('\\', '/'),
        reason: 'missing-file',
      })
    })
  }

  // De-duplicate and check existence only once per (location,url,resolved).
  const uniqueKey = (p) => `${p.location}::${p.url}::${p.resolved}::${p.reason}`
  const unique = new Map()
  for (const p of problems) unique.set(uniqueKey(p), p)

  /** @type {Array<{location: string, url: string, resolved: string, reason: string}>} */
  const checked = []
  for (const p of unique.values()) {
    if (p.reason === 'missing-file') {
      const abs = path.resolve(repoRoot, p.resolved)
      if (await pathExists(abs)) continue
    }
    checked.push(p)
  }

  if (checked.length === 0) {
    process.stdout.write('✅ No broken internal markdown file links found.\n')
    return
  }

  checked.sort((a, b) => a.location.localeCompare(b.location))

  process.stdout.write(`❌ Broken internal markdown file links found: ${checked.length}\n\n`)
  for (const p of checked) {
    process.stdout.write(
      `- ${p.location} → ${p.url} (resolved: ${p.resolved}, reason: ${p.reason})\n`
    )
  }

  process.exitCode = 1
}

main().catch((error) => {
  // eslint-disable-next-line no-console
  console.error(error)
  process.exitCode = 2
})
