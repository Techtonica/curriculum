# Portfolio Project with HTML and CSS

### Additional Skills

* VS Code
* Developer Tools
* Keyboard Shortcuts
* [Web Patterns](/electives/web-patterns.md)
* UI/UX
* GitHub for code storage and static-site hosting
* Ergonomics
* Writing a good README

### Primary Goals

To demonstrate understanding of the foundational topics covered in the first week of Techtonica, before diving further into the PERN stack.

1. Create a new HTML/CSS webpage
2. Modify the contents of your page using DOM methods
3. Use common CSS rules to align content (left, right, center), modify colors, adjust sizes of containers and text, etc.
4. Get comfortable using CSS media queries

### Overview

In this project, you will build a simple portfolio page to practice what you've learned about VS Code, HTML, CSS, Git, and GitHub. In the future, a great portfolio page will be a valuable way to showcase your skills as you look for engineering work.

### Motivation

Increase your job prospects dramatically with your web page. Get creative and show off your technical skills. Employers will love you!  
Here’s a list of example portfolios:  
https://github.com/HackathonHackers/personal-sites

---

## Project Requirements

You should write clear and informative commit messages for each commit. Create pull requests once big or multiple changes have been made for your mentor to review. Add the GitHub link to your portfolio page to the cohort shared sheet (“Checklist items” tab).

* At least 50 commits  
  * Pro-tip: Get used to committing your code every single time a new line of code works
* At least one PR  
  * Consider pushing your code to GitHub every time you finish a bolded section, but at least every day
* Use of the command line to create files and implement Git
* Practice the use of developer tools

---

## HTML Requirements

Use HTML to describe the **structure and meaning** of your content. Visual styling should be handled with CSS.

* Photo
* **Headings (h1–h6)** to create a clear content hierarchy
* Sections
* Semantic tags
* Links to social media accounts
* Contact information for yourself
* Contact form with required fields:
  * Name (required)
  * Email (required)
  * Phone number (not required)
  * Address (not required)

### Semantics Note

Use semantic HTML elements whenever possible to describe what the content **is**, not how it should look. Semantic elements improve accessibility, readability, and long-term maintainability of your code.

Examples of semantic elements include:  
`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, and `<footer>`.

Avoid using headings(H1 - H6) or other elements purely for visual styling. If you want text to look larger or styled differently, use CSS instead of changing the HTML structure.

---

### Suggested Page Structure

Your portfolio page should generally follow this structure:

* `<header>`  
  * Your name  
  * Short description  
  * Navigation links

* `<main>`  
  * About section  
  * Projects section  
  * Contact section

* `<footer>`  
  * Copyright or additional links

---

### Example HTML Body

```html
<body>
  <header>
    <h1>Your Name</h1>
    <p>Short description of your experience</p>
    <nav>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <main>
    <section id="about">
      <h2>About Me</h2>
      <p>A brief introduction about who you are and what you do.</p>
    </section>

    <section id="projects">
      <h2>Projects</h2>
      <p>Examples of your work or experience.</p>
    </section>

    <section id="contact">
      <h2>Contact</h2>
      <p>How people can reach you.</p>
    </section>
  </main>

  <footer>
    <p>© Your Name</p>
  </footer>
</body>
This structure helps create a clear document outline and supports accessibility tools such as screen readers.

---

## CSS Requirements

* At least 3 style properties applied to text
* Border
* Use of columns
* Use of at least 1 ID
* Use of at least 3 [web design patterns](https://github.com/Techtonica/curriculum/blob/main/electives/web-patterns.md)
* Override a CSS rule in an obvious way at least once
* Change the display property of at least 1 element

### Additional Requirements

* Have at least 1 style change for narrow, medium, and wide browser views

---

## Project Checklist

### Ergonomics

* [ ] Remember to get up to stretch or walk for 5–10 minutes every hour (set an alarm)
* [ ] Each hour, check foot, knee, elbow, and spine position and correct if necessary (set an alarm)

### Create Your Project

* [ ] Use bash to create a local portfolio-website directory
* [ ] Create `portfolio.html` and `portfolio.css`
* [ ] Rename files to `index.html` and `styles.css`
* [ ] Create a `.gitignore` file and add at least one unwanted file
* [ ] Move `.gitignore` into the project directory
* [ ] Initialize a Git repository
* [ ] Create a remote GitHub repository
* [ ] Add, commit, and push your code
* [ ] Open the project in VS Code
* [ ] Adjust VS Code text size
* [ ] Open VS Code’s integrated terminal
* [ ] Add a linting extension

### HTML Checklist

* [ ] Use VS Code shortcuts to create boilerplate HTML
* [ ] Open and view your HTML file in Chrome
* [ ] Create a header with your name and a short description
* [ ] List coding experience and relevant work experience
* [ ] Add a `<title>` tag
* [ ] Use proper indentation
* [ ] Use semantic tags where possible
* [ ] Commit after each set of changes
* [ ] Add a contact form with required and optional fields

### Developer Tools

* [ ] Inspect your page using Source Code Viewer
* [ ] Inspect your page using Quick Source Viewer
* [ ] Check the JavaScript console for errors

### CSS Checklist

* [ ] Link `styles.css` to `index.html`
* [ ] Style text using at least 3 properties
* [ ] Add and style a profile photo with a border
* [ ] Display information in a second column
* [ ] Use one ID correctly
* [ ] Implement 3 web design patterns
* [ ] Use search to jump to an element or style
* [ ] Use two `.override` CSS rules
* [ ] Change the display property of at least one element

### Media Queries, UI, UX

* [ ] Style for narrow, medium, and wide screens
* [ ] Use developer tools to inspect styles
* [ ] Ensure the UI is usable and simple at all widths
* [ ] Get peer feedback and improve UX

### README

* [ ] Create a README.md file
* [ ] Include project description, license, and installation steps
* [ ] Use Markdown for organization

---

### Recommended Extension Activity (Optional)

* [ ] Enable GitHub Pages for your repo
* [ ] Add the live site link to your README

---

Full Time Program Week 3: Portfolio App (Part 1 of 3)