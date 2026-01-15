# HTML

### Prerequisites

* Day one tasks (create a project folder, open a code editor such as VS Code, create `index.html`).

---

### Week 1 Keywords and Questions

* **Heading (clarified as Headings)** — in HTML, this refers to the heading elements `<h1>` through `<h6>` not header (the specification calls them *headings*)
* Paragraphs (`<p>`)
* Links (`<a>`)
* Images (`<img>`)
* Ordered list (`<ol>`)
* Unordered list (`<ul>`)
* Tables (`<table>`, `<thead>`, `<tbody>`, `<tr>`, `<td>`)
* Divs (`<div>`) and spans (`<span>`)
* Forms (`<form>`, `<input>`, `<label>`, `<button>`)

**Questions to answer this week**

* How is an HTML document structured?

* What is the key difference between HTML **Elements** and **Tags**?

* What is a **semantic element**?

* How is an HTML document structured?

* What is the key difference between HTML **elements** and **tags**?

* What is a **semantic element** and why use it?

---

### Motivation

* Hyper Text Markup Language (HTML) is the markup language for creating web pages and web applications.
* Almost all modern web applications use HTML for their front-end. If you want to be a web developer, you need to learn HTML.
* HTML is simple to get started with, but using it correctly is essential for accessibility and long-term maintenance.

---

### Objectives

**Participants will be able to:**

* Create an HTML file and open it in Chrome.
* Code a bare-bones HTML structure.
* Draw a hierarchy of the HTML elements.
* Properly write opening and closing tags for commonly used HTML elements.
* Use proper indentation to improve readability.
* Code an unordered and ordered list and explain how they are different.
* Make a word or phrase link to an external webpage.
* Separate HTML code into containers.
* Identify semantic and non-semantic elements.

---

### Specific Things to Learn

* How to open an HTML file in Chrome (file → open, or drag-and-drop the file into the browser).
* Standard HTML document structure (`<!doctype html>`, `<html>`, `<head>`, `<body>`).
* Common HTML tags and what they mean.
* How indentation and whitespace improve readability (no effect on layout, big help for developers).
* Semantic elements and why they help accessibility and search engines.

---

## Lesson

### Guided Practice

1. **Read (5 minutes)** — Open MDN's HTML overview: [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)

   * On wide screens, use the left "References" menu and briefly open these: *HTML Elements*, *Global attributes*, *Input types*.
   * Goal: start building a sense of where to look things up.

2. **Interactive practice (30–60 minutes)** — Try the Codecademy HTML lessons: [https://www.codecademy.com/learn/learn-html](https://www.codecademy.com/learn/learn-html)

   * These short exercises help you type and see results immediately.

3. **Quick scan (5 minutes)** — Review an elements reference or cheatsheet to know common tags: [https://www.codecademy.com/learn/learn-html/modules/learn-html-elements/reference](https://www.codecademy.com/learn/learn-html/modules/learn-html-elements/reference)

4. **Take a short break**, then continue to the slideshow or hands-on section below.

---

### Slideshow

* Watch the walkthrough video (20 min): [HTML (video walkthrough of slides)](https://drive.google.com/open?id=1FO4AdWgYUTIuX03T0ZSmSXKTDadoZopT)
* Or read the slides at your own pace: [HTML (slides)](https://docs.google.com/presentation/d/1FyV-I_lVkT6KH47VHjFpDNkk-m5ABz2wLyzk4MOcx50/edit?usp=sharing)

---

### Key Concept Clarifications (important corrections requested)

#### Headings vs Head vs Header — short, precise definitions

**Headings** (**header**, **head**, & **heading** ) 
**header**: semantic elements that define the document outline and the relative importance of sections. Use them to communicate *structure* (what the content is).

**head** : metadata container for the document (title, meta tags, links to stylesheets, scripts). Not visible as page content.

**heading**: a semantic container (often used at the top of a page or section) which *can contain* headings, navigation, and branding. It is *not* the same as a heading element.

**Example**

```html
<head>
  <title>My Site</title>
</head>
<body>
  <header>
    <h1>My Site</h1>
    <nav>...</nav>
  </header>
  <main>...</main>
</body>
```

**Practical tip:** If you want large bold text for visual effect, don’t use `<h1>` purely for style. Choose the right semantic element (e.g., `<p>` or `<h2>` depending on structure) and use CSS to change its appearance. Headings are about meaning, not size.

---

### Semantic vs Non-semantic Elements

* **Semantic elements** give meaning to the content they contain. They help humans, browsers, screen readers, and search engines understand your page. Examples: `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`, `<figure>`, `<figcaption>`.

* **Non-semantic elements** provide no meaning by themselves — they are generic containers. Examples: `<div>` and `<span>`.

**Why prefer semantic HTML?**

* Easier navigation for assistive technologies (screen readers can jump to `<main>` or `<nav>`).
* Better SEO and content discovery.
* Clearer structure for other developers and future you.

**When to use a **`** or **`

* Use them when there is no appropriate semantic element and you need a wrapper for styling or scripting. Add descriptive class names (e.g., `class="card"`) so the purpose is clear.

---

### Common Mistakes / Misconceptions

* **Only front-end engineers need to know HTML.** Knowing a little bit of HTML, even if you want to be purely a backend web developer or work on non-Internet-based products, is very useful. It allows you to make simple static webpages to showcase your work and to collaborate more effectively with teammates.

* **HTML isn't a "serious" language.** HTML is indeed a language, although it cannot perform logic or decision-making like JavaScript or Python. Its purpose is different: HTML describes the structure and meaning of content, and it does this job extremely well.

* **Using headings because they look big and bold.** Headings (`<h1>`–`<h6>`) should be used to describe the structure of the page, not for visual styling. CSS should be used to control how elements look.

* **Mixing up **header**, **head**, and headings.** The `<head>` element is for metadata, `<header>` is a semantic container, and headings are the `<h1>`–`<h6>` elements.

---

### Check for Understanding

(If you don’t know an answer, search MDN or ask a peer.)

* What are semantic and non-semantic elements in HTML?
* How do you write comments in HTML?
* Why is indentation used in HTML?
* How do we insert an image in an HTML document? Give an example with `alt` text.
* What does `meta charset="utf-8"` do and why is it important?

---

## Short Examples (copy & paste)

**Minimal document**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Example</title>
  </head>
  <body>
    <header>
      <h1>Site Title</h1>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <section>
        <h2>Section title</h2>
        <p>Some paragraph text.</p>
      </section>
    </main>

    <footer>
      <p>© 2026 Your Name</p>
    </footer>
  </body>
</html>
```

**Image with accessible alt text**

```html
<img src="market.jpg" alt="A busy outdoor market in Kano at noon"> 
```

**Styled big text (do not misuse headings)**

```html
<p class="hero">This looks big and bold but semantically it is a paragraph.</p>
<!-- CSS -->
<style>
.hero { font-size: 2rem; font-weight: 700; }
</style>
```

---

## Quick Exercises (hands-on)

1. Create `index.html` using the minimal document above. Add a header, two sections in `<main>`, an aside, and a footer.
2. Replace a non-semantic group of `<div>`s with semantic elements and explain why you changed each one.
3. Find an HTML file (from an example or a classmate) and fix three accessibility issues (missing `alt`, no labels on form inputs, heading order problems).

---

## Small Quiz Answers (short)

* **Semantic vs non-semantic:** Semantic elements describe meaning (`<nav>`, `<article>`). Non-semantic (`<div>`, `<span>`) do not.
* **Comments in HTML:** `<!-- This is a comment -->`.
* **Why indentation:** Improves human readability and helps developers understand structure quickly.
* **Insert image:** `<img src="path.jpg" alt="description">`.
* ``**:** Declares the character encoding for the document so text is rendered correctly (important for multilingual content).

---
### Check for Understanding

If you don't know the answers to any of these, search for the answer in your resources or online for a few minutes. If you're still not sure, figure it out with a peer before moving on.

- What are semantic and non-semantic elements in HTML?
- How do you write comments in HTML?
- Why is indentation used in HTML?
- How can we insert an image in an HTML document?
- What does the line 'meta charset=“utf-8”' mean?

### Supplemental Resources (always optional)

- [Intro to HTML/CSS (KhanAcademy)](https://www.khanacademy.org/computing/computer-programming/html-css)
- [Intermediate HTML (HTML Dog)](https://www.htmldog.com/guides/html/intermediate/)
- [Intermediate CSS (HTML Dog)](https://www.htmldog.com/guides/css/intermediate/)
- [Learn to Code Advanced HTML & CSS (from the Learn to Code HTML & CSS Book)](https://learn.shayhowe.com/advanced-html-css/)
- [Hostinger: how to add favicons to your site](https://www.hostinger.in/tutorials/how-to-add-favicon-to-website)
- [NPM favicon package](https://www.npmjs.com/package/favicons)
