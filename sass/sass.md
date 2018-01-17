# Sass

### Projected Time
90 minutes

### Prerequisites
+ HTML - Hyper Text Markup Language
+ CSS - Cascading Style sheets
+ Know what a browser is - software application for retrieving, presenting, and traversing resources on the web (processor).
+ Know that a preprocessor - is a program that processes it's input data (Sass) to produce output that is used as an input(in the form of CSS) so that it can be understood by another program (our browsers). 

### Motivation
**Sass** is an industry standard used by companies such as Vox, NBC Universal, and,Toyota.
Learning how to use Sass will give you exposure, practice, and the know-how to jump into a Sass stack. Sass is packed with super features that make creating, maintaining and updating CSS a simplified and elegant process. 


### Objective
**Students will be able to:**

- Use Sass to preprocess the CSS on a web page.
- Add dynamic prgramming functionality to CSS.
- Implement the DRY (Don't repeat yourself)rule.
- Build modular and scalable CSS.
### Specific Things To Teach
- Sass is a tool (CSS preprocessor) that makes it easy to write CSS
- Instead of writing CSS files, you write Sass files that are compiled to CSS
- Specific useful Sass features
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

+ Syntactically Awesome Style Sheets 
Sass has been defined are a layer between the stylesheets you create and the .css files you serve to the browser.

+ Sass makes writing css more efficient - with it you can reuse code with variable declaration or nesting.
+ Brake down lengthy css files into more digestible and reusable components with the import feature
- Use partials for storing bits of css 

- Sass is written in .scss then translated using a program into .css for the browser.
- Sass is sophisticated but also a direct extension of CSS3. Sass makes powerful features available, so that with a few lines of code, you can make changes to long and complex style sheets faster and easier.

- Sass is just one CSS preprocessor, and Less and Stylus are alternatives.
  - + Live code a nesting example with student input/direction 


** How to use Sass:
- Install Sass in terminal
- Compile Sass using the ```sass``` command - run using ``` sass input.scss  output.css``` (here you are telling sass which file to run on, in this case it's input.scss and hwich file to outpuf css into).



### Common Mistakes / Misconceptions

- Don't nest more than four levels deep
  (overly specific selectors are problematic in the long run).
- Use arguments or an @content block when using mixins otherwise use an [@extend directive](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#extend).
- Commit your .sass or .scss files and not your compiled .css files. This prevents the temptation to commit to the wrong file in the future.


### Guided Practice

- Follow steps to [Install Sass](http://sass-lang.com/install)
- Get familiar with Sass syntax by using [Sass Docs](http://sass-lang.com/)
- After reviewing Sass syntax, we'll convert bits of an old style sheet into Sass together, then we will add mixins, variables, nesting, and inheritance to our stylesheets.

### Independent Practice

Students will start small, converting bits of an old style sheet little by little into Sass until all css is sassfied.

### Challenge

After exchanging CSS for Sass (Independent Practice), include advanced mixins to revamped stylesheet.


### Check for Understanding
Students will add two to three partials, mixins, and file imports to stylesheets.