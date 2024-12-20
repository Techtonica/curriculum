# Sass

### Projected Time

- 10 minutes for walkthrough of Sass slides (1 - 13)
- 10 minutes Activity 1
- 3 Hours to Activity 2 complete Code Academy Sass course
- 30 minutes Activity 3
- 10 minutes Challenge
- 4 Hours Total ~

### Prerequisites

- [HTML](/web/html.md)
- [CSS](/web/css.md)
- Know that a browser is a software application for retrieving, presenting, and traversing resources on the web (processor).
- Know that a preprocessor is a program that processes its input data (Sass) to produce output that is used as an input (in the form of CSS) so that it can be understood by other programs like our browsers.

### Motivation

**Sass** is an industry standard used by companies such as Vox, NBC Universal, and Toyota.
Learning how to use Sass will give you exposure, practice, and the know-how to jump into a Sass stack. Sass is packed with super features that make creating, maintaining, and updating CSS a simplified and elegant process.

### Objectives

**Participants will be able to:**

- Use Sass to preprocess the CSS on a web page.
- Add dynamic programming functionality to CSS.
- Implement the DRY (don't repeat yourself) rule.
- Build modular and scalable CSS.

### Specific Things to Learn

- Sass is a tool (CSS preprocessor) that makes it easy to write CSS
- Instead of writing CSS files, you write Sass files that are compiled to CSS
- Specific useful Sass features include: - Variables - Nesting - Partials - Operators - Mixins - File imports - Extend/Inheritance

### Materials

- [Lecture Slides](https://docs.google.com/presentation/d/1kwiRu5C26U1Q06rpipbh2ldtJBWI-f1VwPKOKdxs9d4/edit?usp=sharing)
- [Practice Site](https://blog.codepen.io/documentation/using-css-preprocessors/)

### Lesson

- Syntactically Awesome Style Sheets
  Sass has been defined as a layer between the stylesheets you create and the .css files you serve to the browser.

- Sass makes writing CSS more efficient - with it you can reuse code with variable declaration or nesting.
- Break down lengthy CSS files into more digestible and reusable components with the import feature
- Use partials for storing bits of CSS

- Sass is written in .scss then translated using a program into .css for the browser.
- Sass is sophisticated but also a direct extension of CSS3.
- Sass makes powerful features available, so that with a few lines of code, you can make changes to long and complex style sheets faster and easier.
- Sass is just one CSS preprocessor, and Less and Stylus are alternatives.
- Live code a nesting example with others' input/direction

**How to use Sass**:

- Install Sass in terminal
- Compile Sass using the `sass` command - run using `sass input.scss output.css` (here you are telling sass which file to run on, in this case it's input.scss, and which file to output CSS into).

### Common Mistakes / Misconceptions

- Nesting more than four levels deep. Don't nest more than four levels deep because selectors that are too specific are problematic in the long run.
- Use arguments or an @content block when using mixins otherwise use an [@extend directive](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#extend).
- Commit your .sass or .scss files and not your compiled .css files. This prevents the temptation to commit to the wrong file in the future.

### Independent Practice

#### Activity 1 - How to set up SaaS

- Follow steps to [Install Sass](http://sass-lang.com/install)

#### Activity 2 - Roll your sleeves up and learn Sass with Code Academy

- Hands on practice at [w3schools](https://www.w3schools.com/sass/default.asp)

#### Activity 3 - Put your new skills to work

- After reviewing Sass syntax,convert your first Recipe Project style sheet to Sass.
  Challenge yourself and add at least one of each: mixin, variables, nesting, and inheritance to your stylesheet.

**Steps on linking**:

1. cd to your Static directory (/recipe-page/static), and mkdir SCSS, cd SCSS, and then touch main.scss main.css (any name you want)
2. VS Code . to open those files
3. http://css2sass.herokuapp.com/ Use this website to convert your original CSS code (from styles.css) into SCSS (make sure it’s SCSS form and not SASS!)
4. Copy the SCSS code that is converted and paste it into your “main.scss”
5. Cmd S to save (main.scss)
6. Go to Terminal, type in “sass main.scss main.css” (this will link them)
7. After this, you can open main.css and it should have converted the code there
8. Go to your index.html (in VS Code) and delete the original CSS link and change it with this: <link rel="stylesheet" type="text/css" href="static/scss/main.css">
9. Cmd S to save (index.html)
10. Go to your webpage and refresh. It’ll look the same, but now go ahead and add new SCSS features (as extra practice, try to recreate your SCSS code from scratch)

**NOTE _VERY_ IMPORTANT!!!**: whenever you make changes to the main.scss, remember to go back to the terminal and type in “sass main.scss main.css” to update everything

**Tip**: for future reference, it is best practice to make individual .scss files for variables, nesting, mixins, etc. and then using @import to import them into your primary (main.scss). It will keep all your code organized and easy to find.

### Challenge

After exchanging CSS for Sass in Independent Practice, Activity 4, include advanced mixins to revamp your stylesheet.

### Check for Understanding

Add two to three partials, mixins, and file imports to stylesheets and show someone else the before and after.
