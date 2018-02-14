# Sass

### Projected Time
- 10 minutes for walkthrough of Sass slides (1 - 13)
- 10 minutes Activity 1
- 3 Hours to Activity 2 complete Code Academy Sass course
- 30 minutes Activity 3
- 10 minutes Challenge
- 4 Hours Total ~

### Prerequisites
- HTML
- CSS
- Know that a browser is a software application for retrieving, presenting, and traversing resources on the web (processor).
- Know that a preprocessor is a program that processes its input data (Sass) to produce output that is used as an input (in the form of CSS) so that it can be understood by other programs like our browsers.

### Motivation
**Sass** is an industry standard used by companies such as Vox, NBC Universal, and Toyota.
Learning how to use Sass will give you exposure, practice, and the know-how to jump into a Sass stack. Sass is packed with super features that make creating, maintaining, and updating CSS a simplified and elegant process.

### Objective
**Students will be able to:**

- Use Sass to preprocess the CSS on a web page.
- Add dynamic programming functionality to CSS.
- Implement the DRY (don't repeat yourself) rule.
- Build modular and scalable CSS.

### Specific Things To Teach
- Sass is a tool (CSS preprocessor) that makes it easy to write CSS
- Instead of writing CSS files, you write Sass files that are compiled to CSS
- Specific useful Sass features include:
	- Variables
	- Nesting
	- Partials
	- Operators
	- Mixins
	- File imports
	- Extend/Inheritance

### Materials

- [Lecture Slides](https://docs.google.com/presentation/d/1kwiRu5C26U1Q06rpipbh2ldtJBWI-f1VwPKOKdxs9d4/edit?usp=sharing)
- [Practice Site](https://blog.codepen.io/documentation/editor/using-css-preprocessors/)

### Mini Lesson

- Syntactically Awesome Style Sheets
Sass has been defined as a layer between the stylesheets you create and the .css files you serve to the browser.

- Sass makes writing CSS more efficient - with it you can reuse code with variable declaration or nesting.
- Break down lengthy CSS files into more digestible and reusable components with the import feature
- Use partials for storing bits of CSS

- Sass is written in .scss then translated using a program into .css for the browser.
- Sass is sophisticated but also a direct extension of CSS3. 
- Sass makes powerful features available, so that with a few lines of code, you can make changes to long and complex style sheets faster and easier.
- Sass is just one CSS preprocessor, and Less and Stylus are alternatives.
- Live code a nesting example with apprentice input/direction

**How to use Sass**:
- Install Sass in terminal
- Compile Sass using the ```sass``` command - run using ``` sass input.scss  output.css``` (here you are telling sass which file to run on, in this case it's input.scss, and which file to output CSS into).

### Common Mistakes / Misconceptions

- Nesting more than four levels deep. Don't nest more than four levels deep because selectors that are too specific are problematic in the long run.
- Use arguments or an @content block when using mixins otherwise use an [@extend directive](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#extend).
- Commit your .sass or .scss files and not your compiled .css files. This prevents the temptation to commit to the wrong file in the future.

### Independent Practice
#### Activity 1 - How to set up SaaS
- Follow steps to [Install Sass](http://sass-lang.com/install)
#### Activity 2 - Roll your sleeves up and learn Sass with Code Academy
- Hands on practice with Interactive Lessons [Code Academy](https://www.codecademy.com/learn/learn-sass)
#### Activity 3 - Put your new skills to work
- After reviewing Sass syntax,convert your first Recipe Project style sheet to Sass.
Challenge yourself and add at least one of each:  mixin, variables, nesting, and inheritance to your stylesheet.


### Challenge

After exchanging CSS for Sass in Independent Practice, Activity 4, include advanced mixins to revamp your stylesheet.

### Check for Understanding

Add two to three partials, mixins, and file imports to stylesheets and show another apprentice the before and after.
