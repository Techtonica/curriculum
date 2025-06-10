# Recipe Page

## 📌 Prerequisites
- Basic HTML, CSS (for Recipe)
- Bootstrap, jQuery (for advanced phases)
- Git/GitHub basics
- [Any tools like VS Code, Terminal, etc.]

## 🎯 Goal of the Project
 A fully responsive recipe webpage 

## ✅ Project Requirements
- [List of key deliverables for the project]
- HTML structure
- CSS styling
- Responsive design using Bootstrap
- Functional navigation qith javascript
- [Interactive element if required]

## 🗓️ FT Program Weekly Breakdown
| Week | Phase | Description |
|------|-------|-------------|
| Week 1 | Phase 1 | Create structure with HTML |
| Week 1 | Phase 2 |  Add styling with CSS |
| Week 2 | Phase 3 |Incorporate the Bootstrap Framework |
| Week 2 | Phase 4 |Incorporate JS DOM |

## 📁 Folder/File Reference
| File/Folder | Purpose |
|-------------|---------|
| index.html | Main HTML file |
| styles.css | Custom CSS styling |
| /img | Folder for images |
| /scripts.js | Any JS or jQuery scripts |

## 🏁 Project Milestones
- [ ] Setup folder and tools
- [ ] Complete HTML layout
- [ ] Apply CSS styling
- [ ] Add responsive features (Bootstrap)
- [ ] Add interactivity (jQuery)
- [ ] Submit and review

## 🧰 Prep Work
- Review: HTML/CSS basics
- Explore Bootstrap components: Navbar, Grid, Cards
- Read jQuery intro tutorial (if applicable)

# Week 1 Milestones Overview

#### Phase 1 - Create structure with HTML

**Primary Goals**

1. Learning to use main HTML elements such as `<h1></h1>`, `<div></div>`, `<ul></ul>`, `<ol></ol>`, `<li></li>` `<p></p>`, `<img>`, etc.
2. Basic CSS, like rules for divs and IDs or implementing CSS elements like background color
3. Understanding working with different containers
4. Using GitHub to commit and push code, plus making a branch
5. Receiving and incorporating constructive feedback on a project

**Basic Requirements**

1. Create an HTML file
2. Code the basic HTML structure
3. Add the title of the recipe
4. Add a brief background or blurb about the recipe
5. Add an unordered list of ingredients
6. Add an ordered list of the steps required to make the dish
7. Add at least one image
8. Add links to similar recipes you found online
9. Wrap each section in `<div>` tags
10. Push at least 15 commits to GitHub
11. Share a pull request reviewed by your mentor

**LabExercise**
- Step 1 - Create a new HTML project in CodePen
- Step 2 - Code the basic HTML structure
- Step 3 - Add the title of the recipe to the body
- Step 4 - Add a brief background or blurb about the recipe
- Step 5 - Add an unordered list of ingredients
- Step 6 - Add an ordered list of the steps required to make the dish
- Step 7 - Add at least one image
- Step 8 - Add links to similar recipes you found online
- Step 9 - Add some `<div>`s for easy CSS integration later

#### Phase 2 - Add styling with CSS

**Primary Goals**

1. Learning to style HTML using CSS
2. Receiving and incorporating constructive feedback on a project

**Basic Requirements**

1. Create a file tree for your Recipe Page project
2. Create a CSS file in the proper directory of your file tree
3. Link to your CSS file from within your HTML `<head>` tags
4. Change the background color of your webpage
5. Change the font and font color of your headings and paragraphs
6. Constrain the description to the width of the image
7. Make the image and ingredients appear on the left
8. Make the instructions appear on the right

**Lab Instructions**

If you have questions, do not disturb your colleagues until you have spent at least 20 minutes troubleshooting on your own. Be sure to format your question using the template we practiced in the [Asking Good Questions](../../onboarding/asking-good-questions.md) lesson.

**Starter Code**

You'll be building on the HTML code you completed in Phase 1 of this project.

Try to build in your local desktop file this time, since CodePen won't help you understand how the HTML and CSS are connected. Remember that you'll need to save (`command + s` on Mac) and refresh your browser page to see new CSS changes.

**Lab Exercise**

- Part 1 - Create a CSS file in the proper directory of your file tree
- Part 2 - Link to your CSS file from within your HTML `<head>` tags
- Part 3 - Consider some relevant question
- Part 4 - Change the background color of your webpage
- Part 5 - Change the font and font color of your headings and paragraphs
- Part 6 - Make the description the same width as the image
- Part 7 - Make the image and ingredients appear on the left
- Part 8 - Make the instructions appear on the right


# Week 2  Milestones Overview

#### Phase 3 - Incorporate the Bootstrap Framework

### Basic Requirements

1. Properly link to the Bootstrap CSS CDN
2. Add column classes to your divs to make the webpage responsive
3. Add containers for the navigation bar and content
4. Add a navigation bar to the top of your webpage

## Setup Instructions

Use the Terminal for navigating around the file system and creating new folders and files. Refer to the lesson on [The Command Line Interface](../../dev-tools/command-line-interface.md) if you need guidance on using the Terminal.

When you get to the steps below that ask you to initialize a git repo and track files using git, refer to the lesson on [Git and Version Control](../git/git-version-control.md) if you need guidance.

1. Navigate to the `recipe-page` directory.

```shell
cd recipe-page
```

If you have questions, do not disturb your colleagues until you have spent at least 20 minutes troubleshooting on your own. Be sure to format your question using the template we practiced in the [Asking Good Questions](../../onboarding/asking-good-questions.md) lesson.

## Lab Instructions

### Starter Code

You'll be building on the HTML & CSS code files you completed in Phases 1 and 2 of this project.

### Lab Exercise

#### Part 1 - Properly link to the Bootstrap CSS CDN

Using the Terminal, ensure you are in the `recipe-page` directory.

```shell
cd recipe-page
```

Visit [the Bootstrap download page](https://getbootstrap.com/docs/4.0/getting-started/introduction/). Copy and paste the CSS link into the proper place in `index.html`.

Refresh `index.html` in Chrome by pressing `<COMMAND> + r`. Your webpage should, more or less, look the same as it did before. You might notice that the non-header font is different. No problem.

1. If your image is no longer aligned with the header for your instructions, simply remove the `margin-left` declaration from your `.left` class in `styles.css`.

2. If your `.left` div is right along the left side of the screen, with no blank space as a buffer, go ahead and add `margin-left: 20px;` as a declaration in the `body` selector of `styles.css`.

If something is really out of place, see if you can fix it by adjusting the margins or another aspect of the Box Model.

When you're that you've properly linked to the Bootstrap CSS CDN, run `git status`. Add and commit, making sure to write a descriptive commit message in the present tense, such as "Add Bootstrap CSS."

#### Part 2 - Add column classes to your divs to make the webpage responsive

While the Chrome tab that is rendering `index.html` is open, open the Developer Tools. Click on the mobile device icon (shown below) so you can see what your web page will look like on a cell phone. You can use the dropdown menu to change the style of phone or tablet, and thus change the mock-up screen size.

![]()

While your webpage might look OK, it's likely that your headers are getting cut off or that there are other minor adjustments that need to be made. That's because we haven't told `index.html` to take up the whole width of the screen, whatever size it may be. We can do this by pasting this `<meta>` tag into the `<header>` tags:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

Save the file, then refresh `index.html` in Chrome by pressing `<COMMAND> + r`. Your cell-phone mockup should look a lot better now!

![]()

Do you remember how to tell Bootstrap to allow a div to take up a certain number of columns? On a small screen, we usually want divs to take up all 12 columns so things are as large as possible. Let's add the `col-xs-12` class to the divs that currently have the `top`, `left` and `right` classes. (Remember, elements may have more than one class!) Also, don't forget to add `class="row"` before you start to add in your `col` classes.

Here's an abbreviated example:

```html
<div class="top col-xs-12"></div>
<div class="left col-xs-12"></div>
<div class="right col-xs-12"></div>
```

**NOTE:** `col-xs-*` have been dropped in Bootstrap 4 in favor of `col-*`.

Replace `col-xs-12` with `col-12` and it will work as expected.

Also note `col-xs-offset-{n}` were replaced by `offset-{n}` in v4.

When you're satisfied with your new column classes, run `git status`. Add and commit, making sure to write a descriptive commit message in the present tense, such as "Specify column widths."

#### Part 3 - Containers for the Navigation Bar and Content

You learned in the video lesson that Bootstrap requires all content to be inside containers. Let's add those now. We typically use a fluid container for the navbar and a regular container for the other content. Be sure to maintain proper indentation.

You can refresh the webpage in Chrome but there won't be any obvious changes to the layout.

```html
<body>
  <div class="container-fluid">
    <!-- navbar code will go here (Step 4) -->
  </div>

  <div class="container">
    <!-- all your current HTML body code goes here -->
  </div>
</body>
```

When you're satisfied with the placement and indentation of the containers, run `git status`. Add and commit, making sure to write a descriptive commit message in the present tense, such as "Add navbar and main content containers."

#### Part 4 - Add a navigation bar to the top of your webpage

- Visit [the Bootstrap Navigation Bar page](https://getbootstrap.com/docs/4.0/components/navbar/). Skim through the documentation to get a sense of what this component does and how to implement it (you don't need to read everything).

- When you have a good understanding of how the navbar works, read through [the HTML example code in this section](https://getbootstrap.com/docs/4.0/components/navbar/#supported-content). There are a lot of class names in the code that you're probably unfamiliar with. These are Bootstrap-specific classes that have special functionality. Once you mostly understand this code, copy and paste it into the `container-fluid` div in `index.html`

- Refresh `index.html` in Chrome by pressing `<COMMAND> + r`. You should now see the example navbar on your page! Is there a difference in how your navbar appears on the mobile screen version vs. the laptop screen version?

- When you're satisfied with the placement and styling of the navigation bar, run `git status`. Add and commit, making sure to write a descriptive commit message in the present tense, such as "Add and style navbar."

Let's clean up the navbar a little bit. You can remove things like the search bar, the drop down menu, etc. Just leave the "Brand" and a page link or two. You can customize the colors using CSS to suit your theme! Add and commit your changes with a useful commit message.

---

### Phase 4 - Incorporate JS DOM

### Languages

- HTML
- CSS
- Javascript

Hello everyone!
We have a big goal for the EOW: we want to incorporate DOM Methods into your recipe page. How excited are you about this? Let's use JS to make your website interactive.

### Primary Goals

1. Learn how to access and manipulate elements using JS
2. Practice incorporating JS DOM methods

### Overview

You already have an HTML/CSS project, but now you get to surprise your users by adding some JS DOM methods to make your website interactive! You'll add at least three interactive elements of your choosing.

### Use your creativity!

This is practice, so there's no right or wrong approach.
You can add a strikethrough when someone clicks on an ingredient, add a button that will create a space for notes, have a mouse event that shows hidden content. Let's see some examples of what we can do:

#### 1. Adding Content

To add new elements to the page, we’ll need to use a three-step process:

```
// First up, let's create a new list item and store it in a variable.
let newListItem = document.createElement('li');

// Now let's update the text content of that list item.
newListItem.textContent = 'Jalapenos';

// And finally, let's add that list item as a child of the ul.
document.querySelector('ul').appendChild(newListItem);
```

#### 2. Adding a check mark as an element to a list

To add checkbox to the page, we’ll need to use this process:

(n.b. While 'var' is not technically deprecated in JavaScript, it's highly recommended to use 'let' and 'const' instead, to create a variable. It continues to exist mainly for backwards compatibility reasons.)
![Brute Force Approach to adding a checkbox](https://raw.githubusercontent.com/Techtonica/curriculum/af027e9524fff7abab62e65705f8d3427424c7d9/projects/pr-screenshot/pr-dommanipulation1.png)

#### 3. Adding a strikethrough when someone clicks an element

The CSS rule to show HTML text as strikethrough is called `text-decoration: line-through`. You can add CSS rules to an element with a Class or ID. Remember that you can add a className to any element using DOM Manipulation with `yourelementname.className = "checked";`
![Brute Force Approach to adding a checkbox](https://raw.githubusercontent.com/Techtonica/curriculum/af027e9524fff7abab62e65705f8d3427424c7d9/projects/pr-screenshot/pr-dommanipulation2.png)

#### 4. Adding a strikethrough when someone clicks an element inside a checkbox

You can add the strikethrough line at the user action of clicking a checkbox, like in the example.
![Brute Force Approach to adding a checkbox](https://raw.githubusercontent.com/Techtonica/curriculum/af027e9524fff7abab62e65705f8d3427424c7d9/projects/pr-screenshot/pr-dommanipulation3.png)




## ❓ General FAQ
**Q:** What should I do if I’m stuck during a phase?  
**A:** Spend at least 20 minutes troubleshooting, then ask for help with a detailed question.

**Q:** What is the final deliverable?  
**A:** A complete responsive web page or portfolio with interactivity.

