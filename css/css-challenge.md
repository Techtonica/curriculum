# CSS - Challenge

### Projected Time

45-60 minutes

- 20-30 min interactive lesson
- 20-30 min for independent practice
- 10-15 min check for understanding

### Prerequisites

- [HTML Lesson](/html/html.md)
- [CSS Lesson](/css/css.md)
- [An Interactive Guide to Flexbox](https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/)
- [Flexbox Froggy](https://flexboxfroggy.com/)

### Motivation

- The best way to learn CSS rules is practicing them on a website.
- CSS can make your website look more professional, and make you look css-savvy to employers.

### Objectives

**Participants will be able to:**

- Understand what is and how to use a CSS rule.
- Use flex box to make your website look different with changing just one parameter.
- Understand that later styles will override styles earlier in the code
- Troubleshoot override issues

### Specific Things to Learn

- Practice implementing CSS rules
- Practice using flexbox
- Practice overriding styles and troubleshooting any unexpected overrides

#### Practice implementing a CSS style sheet

1. Create a very simple project, or follow along in an existing project.
2. Create an HTML file with a linked css file,like this:

```
<!DOCTYPE html>
<html>
<head>
  <title>CSS Challenge</title>
</head>
<body>
  <header>
    <h1>Welcome to the CSS Challenge!</h1>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </header>

  <section>
    <h2>About Us</h2>
    <div class="flex-container">
      <div class="flex-item">
        <img src="https://techtonica.org/static/img/2022-H1-Launch-Celebration.png" alt="About Image">
      </div>
      <div class="flex-item">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac ipsum finibus, consequat nisl vitae, lobortis nisl. Vestibulum a nibh vel nisl luctus lacinia ut et mauris. Nunc ut ante eu ligula tristique sagittis. Curabitur a ante eu nisl venenatis viverra. Donec auctor sapien non nisl aliquam, ac varius dui malesuada.</p>
      </div>
    </div>
  </section>

  <section>
    <h2>Contact Us</h2>
    <div class="flex-container">
      <div class="flex-item">
        <p>Email: info@example.com</p>
      </div>
      <div class="flex-item">
        <p>Phone: 123-456-7890</p>
      </div>
    </div>
  </section>

  <footer>
    <p>Techtonica 2023 CSS Challenge. All rights reserved.</p>
  </footer>
</body>
<link rel="stylesheet" href="styles.css">
</html>
```

1. Create a CSS file,that match the name of the style sheet linked in the previous HTML and style the images

2. Make your website look like this using only CSS rules (Hint: use the classes in the HTML file)

![CSS with no image](https://github.com/Yosolita1978/screenshoots/blob/main/2023/h2/Screen%20Shot%202023-07-10%20at%203.46.08%20PM.png?raw=true)

3. Add CSS rules to make your website look like this:

![CSS with no image](https://github.com/Yosolita1978/screenshoots/blob/main/2023/h2/Screen%20Shot%202023-07-10%20at%203.53.54%20PM.png?raw=true)

Hint: Notice the different color in the links when the mouse is hoovering.

### Challenge

1. Pair up with a peer an make the website look completely different.
