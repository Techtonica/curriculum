# Intro to HTML

### Projected Time
30-45 min

### Objective
**Students will be able to** write semantic markup using:

     <html> <head> <title> <body> <h1-6> <p> <ul>/<ol>/<li> <code>


### Specific Things To Teach
- HTML
- These are called “tags”
- `<OPEN></CLOSE>` tags
  - Slash vs no slash
  - Tags apply to everything between OPEN and CLOSE
  - Nesting: BODY is NESTED in HTML
    - Both the OPEN and CLOSE tag for BODY is INSIDE of HTML
    - Think putting one bowl inside another (or box, or whatever)
  - Indentation
    - Legibility
    - Shows nesting
- Structure
  - Html tag wraps the whole page
  - Has first HEAD then BODY tags within it
  - TITLE must go inside of HEAD
  - Some tags must go inside of other tags: LI must go inside of UL or OL
  - How to comment - useful with nested elements  
- Semantics
  - When things are ordered, use `<OL>`. 
  - If it’s a header, use an `<H#>`. 
  - Separate multiple paragraphs into multiple `<P>` tags.

### Materials

Michelle Personal Website
 - [codepen](http://codepen.io/jleven/pen/VaVmzZ?editors=1000) 
 - [raw file](your-first-tags/personal-website.html)

### Mini Lesson

Introduce the concept of a tag. That it has an open `<p>` and close `</p>` and that it applies to what is between the open and close tags.

Open up the sample page in developer tools. Inspect the sample page with the class. Make changes and let them see how the real page changes. Can they guess what some of the tags stand for?

Make sure to mention the following:
- Nesting. For example: BODY is NESTED in HTML
  - Think putting one bowl inside another (or box, or whatever)
- Indentation
  - Legibility
  - Shows nesting
- Structure
  - `<HTML>` tag wraps the whole page
  - Has first `<HEAD>` then `<BODY>` tags within it
  - `<TITLE>` must go inside of `<HEAD>`
  - Some tags must go inside of other tags: LI must go inside of UL or OL
- Semantics
  - When things are ordered, use `<OL>`. 
  - If it’s a header, use an `<H#>`. 
  - Separate multiple paragraphs into multiple `<P>` tags.


### Common Mistakes / Misconceptions

Students will not realize that, when tags are nested, both the OPEN and CLOSE tag for the inner tag are INSIDE of the outer tags. 

Avoid:  `<HTML><BODY></HTML></BODY>`


### Guided Practice

Starting from a blank page, rebuild the demo page. Have each student type along in their own file as you build up using each tag once or twice.


### Independent Practice

Class continues building out their personal site. Students can continue adding more and more about themselves. Teacher walks around making sure everyone has grasped the material before moving on.


### Challenge

None
