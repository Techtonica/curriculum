# Reset.css

### Projected Time

Example: 30-45 minutes
- Lesson: ? min
- Guided Practice: ?-? min
- Independent Practice: ? min
- Check for Understanding: ?-? min

### Prerequisites
- [CSS Lesson](/css/css.md)

### Motivation

Here's why this topic should be learned. Strengthen this section by including a company that uses this skillset, and a screenshot example if possible.

### Objectives

**Participants will be able to:**

- leave this lesson knowing this
- and how to do this on their own
- Even more things
- Even more things

### Specific Things To Teach

- about reset.css

### Materials

- [Example video (10 min)](https://example.com) - Write a very short description of this resource.
- [Other example article(20 min read)](https://otherexample.com) - Answer the 3 questions at the end.
(Be sure to explain how to use these materials in directions in one of the sections below (ie: lesson, guided practice).  If you are not assigning them somehow, they should be placed under Supplemental Materials at the bottom.) 

### Lesson

Here's text about introducing something and how it works.

- [Be sure to link the slideshow, video,](google.com)
- [or other materials you expect them to follow as part of the lesson.](google.com)

Build on the first information. Have apprentices guess things, do an activity, etc.

Make sure to mention these things:

- Things
    - This is a sub-thing
- More things
- Even more things
- Even more things


### Common Mistakes / Misconceptions

List things that apprentices might not realize, might assume at first, or should avoid.

- Example
- Example


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
    <li>two item</li>
    <li>three item</li>
  </ol>
</body>
</html>
```
2. Create a CSS file (named style.css), and style your HTML elements like this:
```
h2{
  background-color:lightblue;
}

p{
  background-color:lightpink;
}

ol{
  background-color:lightgreen;
  -moz-border-radius:5px;
  -webkit-border-radius:5px;
  border-radius:5px;
}
```
3. Refresh your page, and then examine the webpage.
4. You can observe that there is some white gap between each Html elements and as well as between Html element & page sides. You can also access them by the inspect tool present in your browser.
5. Once you examine `h2` element and `ol` element through inspect tool available in your chrome browser you can clearly observe that some styles are coming from **user agent stylesheet** like this:
```
h2 {                                                user agent stylesheet
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
ol {                                                user agent stylesheet
    display: block;
    list-style-type: decimal;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}
```
6. Amaze from where these styles are coming because you didn't mention them in your CSS file (named style.css). These are browser specific styles which every browser provide for some HTML elements.
7. Sometimes they are useful and sometimes they make our life complex so to destroy them and present HTML elements completely with our styles we use **reset.css**.
8. So to demonstrate this, add link of [reset.css](https://meyerweb.com/eric/tools/css/reset/reset.css) file in your HTML file above style.css link like this:
```
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="https://meyerweb.com/eric/tools/css/reset/reset.css">
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
9. Now Refresh your page and you can clearly see the difference there is no white gap between Html elements this is because we use **reset.css** which overrides default browser style and set them to null.
10. You can also see that we use `border-radius:5px`, `-moz-border-radius:5px` and `-webkit-border-radius:5px` in our style.css file this is because sometimes to apply some CSS properties we need to use CSS Vendor Prefixes **-webkit-**, **-moz-**, **-ms-**, **-o-**. They are a way for browser makers to add support for new CSS features before those features are fully supported in all browsers and to deliver consistent styles in all browsers.

### Independent Practice

Class does this thing themselves with specific additional items. This could be alone, with a partner, or small group; but the idea is that it's less guided, more independent.

### Challenge

Apprentices can try to do this other thing. Ideally, they will be challenged to connect what they've learned to some previous knowledge or additional research.


### Check for Understanding

Some ideas: have apprentices summarize to each other, make a cheat sheet, take a quiz, do an assignment, or something else that helps them self-assess their understanding. This exercise should help apprentices determine whether they've met the outline objectives, or if they need to review.

### Supplemental Materials
- [example website](https://example.com) - Write a very short description of how to use this optional resource.
- [Other example website](https://otherexample.com) - Write a very short description of how to use this optional resource.
