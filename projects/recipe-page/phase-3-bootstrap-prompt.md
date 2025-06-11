# Project 1 - Recipe Page

NOTE: Bootstrap is a powerful and widely used CSS framework. You are welcome to add it to your recipe page if you like, but can initially feel confusing due to class-heavy markup and unfamiliar patterns. This is normal for beginners learning how a framework structures layout and components will improve your front-end flexibility over tim. Feel free to use it or not.

### Real life usage of frameworks

- Writing custom CSS from scratch can be time-consuming, but frameworks simplify the process by providing pre-built styles and components, allowing one to quickly implement a beautiful and consistent design
- When working on a large project using frameworks makes the code cleaner and more maintainable
- Frameworks are used to create consistent design and styling across the whole project
- Highlighting your experience with frameworks in an interview can emphasize your ability to quickly adapt to industry standards and efficiently deliver scalable solutions

### Phase 3 - Incorporate the Bootstrap Framework

### Languages

- HTML
- CSS

### Frameworks & Libraries

Bootstrap

### Primary Goals

1. Linking to Bootstrap within a project
2. Adding Bootstrap components to a project
3. Receiving and incorporating constructive feedback on a project

### Overview

In this project you will create a well-designed webpage that displays one of your favorite recipes. It will include the ingredients, the steps needed to make the dish, links to similar recipes, and at least one photo.

Phase 1

- Add ingredients, steps, links to recipes, and a photo.

Phase 2

- Customize font styles, sizes, colors, and layout.

Phase 3

- Add navigation bar and other Bootstrap components.

Phase 4

- Add interactive features using jQuery.

### Context

- You completed a basic HTML page in Phase 1
- You styled the web page using CSS in Phase 2
- In Phase 3, we'll incorporate some Bootstrap elements into the project

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

### Questions to Consider

- What, if anything, was challenging about this phase of the project?
- What did you enjoy the most while working on this phase of the project?
- What questions came to mind as you were working through the steps?
- If you were to explain to a bright child what you worked on during the phase, what would you tell them?

### Extensions

Some other Bootstrap components you can add to your webpage!

- Bootstrap 5 Buttons:
  Full docs, examples (sizes, states, outlines, toggles):
  Link:(https://getbootstrap.com/docs/5.1/components/buttons/)
  (Latest version with modern semantics)

- Bootstrap Cards
  Detailed guide with layouts, headers, texts
  Link: (https://getbootstrap.com/docs/5.0/components/card/)
