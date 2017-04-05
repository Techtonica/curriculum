# CSS Selector Specificity

### Projected Time
45 minutes

### Motivation
To deepen the student's understanding of how CSS parses style rules and determines which ones to apply

### Objective
**Students will be able to**:
- Use the Chrome DevTools Elements panel to see the CSS that applies to
  a given web page
- Write a CSS selector that uses an HTML element's tag name to apply
  a style to that HTML element
- Override the HTML element selector with a CSS class selector
- Override the previous CSS class selector with a selector using 
  multiple CSS class selectors chained together
- Override the chained multiple CSS class selector with a CSS id selector

### Specific Things To Teach
- The most common CSS selector to use in a working situation is 
  the CSS class selector
- All other things being equal, the CSS selector at the bottom of a 
  stylesheet will override the rules above it
- The CSS id selector is the most specific of all, and can be the
  most difficult to override
- There are new CSS selectors gaining browser support every day, so learning
  about CSS selectors is ongoing

### Materials
- [Using Chrome DevTools to inspect a page's HTML/CSS](https://developers.google.com/web/tools/chrome-devtools/inspect-styles/)
- [Outline of simple CSS selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Simple_selectors)
- [CSS: Specificity Wars](https://stuffandnonsense.co.uk/archives/css_specificity_wars.html). A very detailed explanation of how CSS calculates specificity, using *Star Wars* characters as metaphors. 
- [Outline of CSS attribute selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Attribute_selectors)

### Mini Lesson
1.  Open the Chrome web browser
1.  In Chrome, open the [sample HTML file](css-selector-specificity/css-selectors.html)˝
1.  Right-click on the page to open [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/)
1.  Check out the styles already applied to the sample HTML file

Screenshot: Inspecting the page with Chrome DevTools
![Inspecting the page](./css-selector-specificity/inspecting-html.png?raw=true)

### Common Mistakes / Misconceptions
- The order of rules in the stylesheet matters. If a style rule seems buggy,  use Chrome DevTools to check whether another CSS selector further down in the stylesheet file is overriding it
- Punctuation matters! `.` and `#` can be hard to distinguish when our eyes are tired, yet make a big difference in CSS
- When we take over an existing project, we don't need to start from scratch and write new CSS rules to override all the existing ones. Develop the bare minimum to get the desired visual effect.
- Note that Chrome DevTools will **not** save the edits and additions you make to a page's HTML/CSS

### Guided Practice
1. Open the Chrome web browser
1. In Chrome, open the [sample HTML file](css-selector-specificity/css-selectors.html)
1. Right-click on the page to open [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/)

1. **Styling an HTML element**
- 
1. **Styling with a CSS class selector**

1. **Using multiple CSS class selectors**

1. **Using an ID selector**

1. **Independent Practice**
  1. In Chrome, go to a site you visit often, such as [Google](google.com)
  2. Right-click on the page to open Chrome DevTools
  3. Use the techniques outlined above to change some of the styles applied to this page
  4. Are you proud of your work? Make sure to copy it to a file on your hard drive before you refresh the page! Chrome DevTools will **not** save the changes you made.


### Challenges
- Skim the [CSS Tricks Almanac on selectors](https://css-tricks.com/almanac/selectors/). Choose three that you haven't used, and try them out on [css-selectors.html]((css-selector-specificity/css-selectors.html).
- - Download the sample HTML and CSS files at [CSS Zen Garden](http://csszengarden.com/). Leave the HTML as is; try styling the page just by adding your own CSS rules.
