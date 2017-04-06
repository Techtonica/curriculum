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
1.  In Chrome, open the [sample HTML file](css-selector-specificity/css-selectors.html)
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
1. Use Chrome DevTools to complete the tasks below

---   

#### Styling an HTML element
  1. In Chrome DevTools, click on the H1 in the Elements panel
  2. Click on the + icon in the Styles panel to add a new CSS rule that applies to this H1

    Screenshot: Adding a new style
![Adding a new style](./css-selector-specificity/add-new-style.png?raw=true)

  3. Add a new CSS rule to apply to this H1, such as `color`

    Screenshot: Adding a style to H1

 
![adding h1 style](./css-selector-specificity/adding-to-h1.png?raw=true)

---   

#### Styling with a CSS class selector
  1. In the Chrome DevTools Elements panel, click on the `header` with the class of `block`
  
    Screenshot: selecting .block
![selecting block](./css-selector-specificity/selecting-block.png?raw=true)

  2. Click on the + icon in the Styles panel to add a new CSS rule
  
    Screenshot: Adding a new style
![Adding a new style](./css-selector-specificity/add-new-style.png?raw=true)

  3. Add a new CSS rule to apply to `.block`, such as `background`

    Screenshot: Adding a style to .block
![adding to block](./css-selector-specificity/add-to-block.png?raw=true)
  
---   

#### Using multiple CSS class selectors
  1. In the Chrome DevTools Elements panel, click on the `div` with the classes of `block` and `preamble`
  
    Screenshot: selecting .block.preamble
![selecting block.preamble](./css-selector-specificity/selecting-preamble.png?raw=true)

  2. Click on the + icon in the Styles panel to add a new CSS rule
  
    Screenshot: Adding a new style
![Adding a new style](./css-selector-specificity/add-new-style.png?raw=true)

  3. Add a new CSS rule to apply only to `.preamble`, and to override what you just applied to `.block`, above. For example,

```css
    .block.preamble {
      background: dodgerblue;
  }
```

    Screenshot: Overriding a style to .block
![overriding a style to block](./css-selector-specificity/override-block.png?raw=true)

---   

#### Using an ID selector
  1. In the Chrome DevTools Elements panel, click on the `div` with the id of `preamble`
  
    Screenshot: selecting #preamble
![selecting #preamble](./css-selector-specificity/selecting-preamble.png?raw=true)

  2. Click on the + icon in the Styles panel to add a new CSS rule
  
    Screenshot: Adding a new style
![Adding a new style](./css-selector-specificity/add-new-style.png?raw=true)

  3. Add a new CSS rule to apply only to `#preamble`, and to override what you just applied to `.block` and to `.preamble`, above. For example,

```css
    #preamble {
    background: rebeccapurple;
}
```
### Independent Practice
  1. In Chrome, go to a site you visit often, such as [Google](google.com)
  2. Right-click on the page to open Chrome DevTools
  3. Use the techniques outlined above to change some of the styles applied to this page
  4. Are you proud of your work? Make sure to copy it to a file on your hard drive before you refresh the page! Chrome DevTools will **not** save the changes you made.


### Challenges
- Skim the [CSS Tricks Almanac on selectors](https://css-tricks.com/almanac/selectors/). Choose three that you haven't used, and try them out on [css-selectors.html](css-selector-specificity/css-selectors.html).
- Download the sample HTML and CSS files at [CSS Zen Garden](http://csszengarden.com/). Leave the HTML as is; try styling the page just by adding your own CSS rules
- Click on `CSS > Selectors level 3` at [Know It All](https://know-it-all.io/). Evaluate which selectors you already know well, which you know less well, and which you need to learn.
- Read the poignant story of how the web color `rebeccapurple` [obtained its name](http://www.economist.com/blogs/babbage/2014/06/digital-remembrance)
