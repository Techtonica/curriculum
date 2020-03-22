# Reset.css

### Projected Time

About 30-40 minutes

- Lesson: 15 min
- Guided Practice: 10 min
- Check for Understanding: 15 min

### Prerequisites

- [HTML Lesson](/web/html.md)
- [CSS Lesson](/web/css.md)

### Motivation

- In order to deal with the inconsistencies between user agent stylesheets across different browsers, CSS resets were born.
- A CSS reset is a set of styles you load prior to your other styles, to remove browser built-in styles.([reference from stack overflow](https://stackoverflow.com/questions/11578819/css-reset-what-exactly-does-it-do/11578989))

### Objectives

**Participants will be able to:**

- Understand what is reset.css & why it is used.
- Understand browser styling differences.

### Specific Things to Learn

- how to use reset.css

### Materials

- [Default browser styles and CSS Resets article (4 min read)](https://medium.com/@tinydinosaur/a-wordy-history-of-default-browser-styles-and-css-resets-befdd614d93b)
- [Default browser styles and CSS Resets video (5 min watch)](https://www.youtube.com/watch?v=xLP8IM3jkgE)

### Lesson

- [Default browser styles and CSS Resets video (5 min watch)](https://www.youtube.com/watch?v=xLP8IM3jkgE)

### Guided Practice

#### Practice implementation of reset.css

1. Create an HTML file with a linked CSS file (named style.css), a heading, a paragraph and an order list like this:

```
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h2>Lorem Ipsum</h2>
  <p>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
  </p>
  <ol>
    <li>One item</li>
    <li>Two item</li>
    <li>Three item</li>
  </ol>
</body>
</html>
```

[Reference for dummy text(Lorem Ipsum)](https://www.lipsum.com/)

2. Create a CSS file (named style.css), and style your HTML elements like this:

```
h2{
  background-color:#87CEFA;
}

p{
  background-color:#FFB6C1;
}

ol{
  background-color:#90EE90;
  -moz-border-radius:5px;
  -webkit-border-radius:5px;
  border-radius:5px;
}
```

3. Refresh your page, and then examine the webpage.
4. You can observe that there is some white gap between each Html elements and as well as between HTML element & page sides. You can also access them by the inspect tool present in your browser.
5. Once you examine `h2` element and `ol` element through inspect tool available in your chrome browser you can clearly observe that some styles are coming from **user agent stylesheet** like this:

```
user agent stylesheet

h2 {
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
```

```
user agent stylesheet

ol {
    display: block;
    list-style-type: decimal;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}
```

6. Are you wondering where these styles are coming from when you didn’t write them in style.css? These are browser specific styles which every browser provide for some HTML elements.
7. Sometimes they are useful and sometimes they make our life complex so to destroy them and present HTML elements completely with our styles we use **reset.css**.
8. So to demonstrate this, add link of [reset.css](https://meyerweb.com/eric/tools/css/reset/reset.css) file in your HTML file above style.css link like this:

```
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <link rel="stylesheet" href="https://meyerweb.com/eric/tools/css/reset/reset.css">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h2>Lorem Ipsum</h2>
  <p>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
  </p>
  <ol>
    <li>One item</li>
    <li>two item</li>
    <li>three item</li>
  </ol>
</body>
</html>
```

9. Now Refresh your page and you can clearly see the difference there is no white gap between HTML elements this is because we use **reset.css** which overrides default browser style and set them to null.
10. You can also see that we use `border-radius:5px`, `-moz-border-radius:5px` and `-webkit-border-radius:5px` in our style.css file this is because sometimes to apply some CSS properties we need to use CSS Vendor Prefixes **-webkit-**, **-moz-**, **-ms-**, **-o-**. They are a way for browser makers to add support for new CSS features before those features are fully supported in all browsers and to deliver consistent styles in all browsers.

### Common Mistakes / Misconceptions

- A most common mistake that newbies developer do is that they insert their reset.css file link below all CSS file link in HTML file which is not the right way of doing it. The reset.css file link must be inserted above all CSS file link.

### Check for Understanding

Form small groups and discuss:

- What do you mean by browser styling differences?
- What do you mean by resetting CSS & Why it is needed?
- Why are CSS vendor prefixes used?

### Supplemental Materials

- [Difference between resetting and normalizing CSS video (5 min watch)](https://www.youtube.com/watch?v=S4I4Fjl2mLw)
