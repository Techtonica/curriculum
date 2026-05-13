// jest-dom adds custom jest matchers for asserting on DOM nodes.
import "@testing-library/jest-dom"

// Suppress specific console errors
const originalError = console.error
console.error = (...args) => {
  const errorMsg = args[0] || ""

  // Skip if any of these patterns match
  const patternsToSuppress = [
    // ReactDOMTestUtils.act deprecation warning
    "ReactDOMTestUtils.act is deprecated",
    "`ReactDOMTestUtils.act` is deprecated",

    // Not wrapped in act warnings for specific components
    "An update to MultipleFetches inside a test was not wrapped in act",
    "An update to Fetch inside a test was not wrapped in act",

    // General act-related warnings (if needed)
    "When testing, code that causes React state updates should be wrapped into act",
  ]

  // Check if the error message contains any of the patterns to suppress
  if (typeof errorMsg === "string" && patternsToSuppress.some((pattern) => errorMsg.includes(pattern))) {
    return // Suppress the warning
  }

  // Otherwise, log the original error
  originalError(...args)
}

// Suppress the punycode deprecation warning via process.emitWarning
const originalEmitWarning = process.emitWarning
process.emitWarning = (warning, type, code, ...args) => {
  // Check specifically for the punycode deprecation warning
  if (code === "DEP0040" || (typeof warning === "string" && warning.includes("punycode"))) {
    return // Suppress the warning
  }
  return originalEmitWarning(warning, type, code, ...args)
}

// Additional suppression for punycode warnings that might be emitted differently
process.on("warning", (warning) => {
  // If this is a punycode deprecation warning, do nothing
  if (
    warning.name === "DeprecationWarning" &&
    (warning.code === "DEP0040" || (warning.message && warning.message.includes("punycode")))
  ) {
    // Suppress the warning
    return
  }

  // Otherwise, let the warning through to the default handler
  process.defaultWarningHandler(warning)
})

// Disable deprecation warnings entirely if needed
// Comment this in if the above methods don't work
// process.noDeprecation = true;

// Set up global IS_REACT_ACT_ENVIRONMENT flag
// This tells React that we're in a test environment that supports act
globalThis.IS_REACT_ACT_ENVIRONMENT = true

// Mock global fetch if needed
global.fetch = jest.fn()
