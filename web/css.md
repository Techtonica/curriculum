# Intro to CSS

### Week 1 Keywords and Questions

- What is CSS?
- Why Cascading
- Does order matter?
- What is the difference between a Class and an ID?
- Do you know what a parent, child, sibling component is?
- What does inline, block, inline-block mean? 
- Can you name one element that natively has each of those display properties?

### Week 2 Keywords and Questions

- What is the box model?
- How does padding relate to the box?
- How do margins relate to the box?
- Display (get these memorized): Block, Inline-block, Inline
- Why would I want to change the default display of a span? 
- What is a media query?
- At what sizes should I plan on having breakpoints? (mobile, tablet, desktop, large screen)
- What is a breakpoint?


### ProTip

Create a bookmark folder on your bookmarks bar called CSS and save the CSS articles from the curriculum in one space so you can review a list of what you've learned when building projects.

### Prerequisites

[HTML lesson](./html.md)

### Motivation

- Cascading style sheets(CSS) is a style sheet language used for describing the look and formatting of a document written in a markup language like HTML. (reference from [wikipedia](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) & [town open-data portal](https://manualzz.com/doc/6479032/town-open-data-portal---dip%C3%B2sit-digital-de-la-ub))
- CSS enables the separation of presentation and content and this separation can improve content accessibility, provide more flexibility, reduce complexity and repetition in the structural content.(referenced from [Alan Dotchin academy](http://alandotchinacademy.com/content/technologies/css/index.html))
- It can completely control how your web pages look without changing your HTML. It's an important language for front-end and full-stack web developers to know because today it is used in all webpages.(referenced from [skillcrush](https://skillcrush.com/2017/02/27/front-end-back-end-full-stack/) & [quora](https://www.quora.com/What-are-the-important-concepts-in-CSS))

  **Which companies use CSS?** Everyone. Some companies with very beautiful sites are [Uber](https://www.uber.com) and [Nokia](https://www.nokia.com/).

#### Looking at an example website

- Have you ever noticed that some websites are much more appealing than others?
- Go to [wildrenfrew.com](https://wildrenfrew.com/) and see how unique this website is. Some sections in this site are marvelous.
- The website is a complete package of correct font, color, images, and video that make it engaging.

### Objectives

**Participants will be able to:**

- Select HTML elements using the type, `.class` and `#id` CSS selectors
- Explain the difference between classes and ids
- Explain what CSS properties and CSS values are, and how they're related
- Describe the 3 ways that CSS code can be incorporated into a project
- Sketch the basic file tree for web projects
- Describe several text properties that can be altered using CSS
- Describe how borders can be styled using CSS
- Describe the hierarchy of specificity for CSS selectors
- Describe the different parts of the "Box" model
- Effectively use the `display` property
- Changing and Removing styles from CSS in a webpage.

### Specific Things to Learn

- CSS selectors
- Common CSS properties and their allowable values
- How to incorporate CSS into web projects
- Web project file tree
- Specificity hierarchy
- The Box Model
- How to style with the `display` property
- Experimenting with styles in the inspector

### Materials
- [Codecademy: Learn CSS](https://www.codecademy.com/courses/learn-css/)
- [CSS Part 1 (slides)](https://docs.google.com/presentation/d/1p-IXWxo0NEbZbHQ_Mdoo-A9dlFXqfSPOfW6navfyeTI/edit?usp=sharing)
- [CSS Part 1 (video walkthrough of slides)](https://drive.google.com/file/d/1IyAozbB3BAuFXdAZH1tu0kr-eL3El0Cn/view)
- [CSS Part 2 (slides)](https://docs.google.com/presentation/d/1r0e--y5dWWvAY1TmBYMfln91g9_WTy4yoKBJCVx-M18/edit?usp=sharing)
- [CSS Part 2 (video walkthrough of slides)](https://drive.google.com/file/d/1KTJgJEZfJnBPNALcSe7zQb8Q87f7lfB9/view)


## Lesson

1. Work through all the free lessons in order on the [Codecademy: Learn CSS](https://www.codecademy.com/courses/learn-css/) syllabus (~ 4 hours). If it says "this lesson only comes with a Pro paid plan", you do not need to do it. Taking breaks in between each is recommended! They should each take around 30 minutes. If you are stuck on a certain step, reach out to your peers. This shouldn't happen often, though - it's very straight-forward.
  - [CSS Setup and Syntax](https://www.codecademy.com/courses/learn-css/lessons/learn-css-setup-and-syntax/)
  - [CSS Selectors](https://www.codecademy.com/courses/learn-css/lessons/learn-css-selectors/)
  - [Visual Rules](https://www.codecademy.com/courses/learn-css/lessons/css-visual-rules/)
  - [The Box Model](https://www.codecademy.com/courses/learn-css/lessons/box-model-intro/)
  - [Changing the Box Model](https://www.codecademy.com/courses/learn-css/lessons/box-model-new/)
  - [Display and Positioning](https://www.codecademy.com/courses/learn-css/lessons/css-display-positioning/)
  - [Color](https://www.codecademy.com/courses/learn-css/lessons/color/resume)
  - [Typography](https://www.codecademy.com/courses/learn-css/lessons/css-typography/)

1. This is a good time for a longer break. Take one!

1. Read through Part 1 (30 min) and Part 2 (15 min) slides or watch the corresponding videos.  They review what you covered in codecademy.  

  - [CSS Part 1 (slides)](https://docs.google.com/presentation/d/1p-IXWxo0NEbZbHQ_Mdoo-A9dlFXqfSPOfW6navfyeTI/edit?usp=sharing)
  - [CSS Part 1 (video walkthrough of slides)](https://drive.google.com/file/d/1IyAozbB3BAuFXdAZH1tu0kr-eL3El0Cn/view)
  - [CSS Part 2 (slides)](https://docs.google.com/presentation/d/1r0e--y5dWWvAY1TmBYMfln91g9_WTy4yoKBJCVx-M18/edit?usp=sharing)
  - [CSS Part 2 (video walkthrough of slides)](https://drive.google.com/file/d/1KTJgJEZfJnBPNALcSe7zQb8Q87f7lfB9/view)


### Things to Remember

- **You need some HTML code before you can add styling with CSS.**

- **HTML and CSS are two different languages.** Though commonly referred to together as "HTML/CSS", these are two distinct languages that do completely different things. They work really well together.

- **There are specificity rules in CSS.** You need to understand these rules so you can work within them to produce the styling you want.

### Common Mistakes / Misconceptions
- A very common mistake made by intermediate developers is, "If I can make things look how I want, then it doesn't matter if something is actually a header, button, or label. I can just make a bunch of divs that look like headers, buttons and labels." *Good semantic elements and sections have more built-in functionality than just changing visual styles.*
  - A search engine uses the headers and sub-headers on a page for search terms and potential relevance.  This is also known as SEO: Search Engine Optimization.
  - Those who use a keyboard instead of a mouse, or who use screen readers to navigate a page, actually receive extra information for their situation.  
  - For example, a screenreader user can quickly jump from header to header to find what they need without having to listen to the entire page content, or be reminded that they are still inside the same choice set in a [select element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select), how many choices there are, and which one is selected.
  - (Note: no need to read any links in this section thoroughly, they're just for your reference.)
  - Also note that there are [typical patterns](https://webaim.org/techniques/keyboard/#testing) many users are used to, and changing them will likely frustrate a user, causing them to give up on using your app.
  - This is not what we are learning today, but keep this in mind as you continue to learn more HTML.  Accessibility and SEO will be covered in future outlines.

### Independent Practice

Change and remove style and link tags from [Google](https://www.google.com/) and [Amazon](https://www.amazon.in/) and watch the website design change accordingly. Spend 5 minutes for each site.

### Check for Understanding

If you can answer these questions, you can feel confident that you understand the lesson.  If you are unsure about any of these, reach out to a peer.
- What is the benefit of using CSS in HTML?
- Explain the difference between class and id in CSS.
- Describe how borders can be styled using CSS.
- Describe the different parts of the "Box" model.
- Explain use of inline and block value in display property.
- Name a common mistake developers often make when using CSS.

### Supplemental Resources

- [Freecodecamp has detailed lessons](https://learn.freecodecamp.org/responsive-web-design/basic-css/)
- [MDN provides great documentation](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Rithm School has a lesson on specificity](https://www.rithmschool.com/courses/html-css-fundamentals/specificity)
- [HTML Dog has some simple CSS tutorials](http://www.htmldog.com/guides/css/)
- [Learn to Code](https://learn.shayhowe.com/html-css/) has simple and comprehensive guide dedicated to helping beginners learn HTML and CSS.
