# Require and Import Mini Lesson

### Projected Time

Example: 2h15 min

- Lesson: 45 min
- Guided Practice: 60 min
- Check for Understanding: 30 min

### Prerequisites

Here are topics that should be understood before this topic:

- [JavaScript 1 - Variables, Strings, Numbers Lesson](/javascript/javascript-1-variables.md)
- [JavaScript 2 - Arrays, Functions Lesson](/javascript/javascript-2-arrays-functions.md)
- [JavaScript 3 - Conditionals, Comparisons, Booleans Lesson](/javascript/javascript-3-conditionals.md)
- [JavaScript 4 - Loops Lesson](/javascript/javascript-4-loops.md)
- [JavaScript 5 - Switch Statements Lesson](/javascript/javascript-5-switch.md)
- [JavaScript 6 - Object Literals Lesson](/javascript/javascript-6-object-literals.md)
- [JavaScript 7 - Object-Oriented Programming](/javascript/javascript-7-oop.md)

### Motivation

Why it is worth learning this topic

- Knowing when to use Require and when using Import is very helpful when building a full stack application.
- This mini lesson will also help you understand the differences of using each while building [web APIs](https://github.com/Techtonica/curriculum#week-6---web-apis), when doing the [Eventonica with React](https://github.com/Techtonica/curriculum#week-8---eventonica-with-react) section and also the [PERN Mini-Project](https://github.com/Techtonica/curriculum#week-9---pern-mini-project-postgresexpressreactnode)
- In a technical interview, you will be confident to answer the question: `When should you use Import instead of Require?`

### Objectives

**Participants will be able to:**

- Differentiate between `require` and `import`
- Be initiated to modular programming

### Specific Things To Learn

- [What are JavaScript modules?](#what-are-javascript-modules)
- [What is require?](#what-is-require)
- [What is import?](#what-is-import)
- [Difference between import and require](#difference-between-import-and-require)
- [Can we use import in node?](#can-we-use-import-in-node)
- [Which one to use? And When?](#which-one-to-use?-and-when?)
- [Chart of the Differences](#chart-of-the-differences)


### Lesson

With JavaScript, when you want to include code that another developer has produced and made available to the DEV community, you now two main ways to bring in that code into your own script: `require` and `import`. When starting out, it can sometimes become confusing when to use one or another. So, in order to clarify this a little bit, let's dive into the core of what they are, how they differ, and when you should use one or the other.

#### What are JavaScript modules?

The first thing we need to do is to understand what a JavaScript module is. Basically, it's a piece of code which is *exporting* objects that you can import in your own code. So, yes, `require` imports, and `import`, well, you've guessed it alright. The only thing is that they do it differently.

If you want more information on modules, I invite you to have a look at the official MDN documentation in the [supplemental materials section](#supplemental-materials).

#### What is require?

In order to deal with JavaScript outside of the browser, Node.js follows the CommonJS module specification in which modules are loaded synchronously, i.e. one after the other. This is why you cannot use `require` as such in the browser, unless it is transpiled. A code is said to be transpiled when it is converted from a certain source code to another source code but producing the equivalent functionalities.

In that perspective, when using Node, if you want to include modules that are in another file, you can use the `require` built-in function. It will first read a JavaScript file, then execute it, and finally return the `exports` object. Ultimately, the `require` function will look for the specified file in the following order:

1. Built-in core Node.js modules. For example: `fs`

2. Installed NPM Modules. It will look in the node_modules folder. For example: `express`

3. Local Modules. 

It is important to note that if the specified module name has a `./`, a `/` or a `../`, it will look for the directory/file in the given path. Please note that it will match the `.js`, `.json`, `.mjs`, `.cjs`, `.wasm` and `*.node` extensions.

Here are some examples of popular Node built-in modules: `HTTP`, `URL`, `path` and `os`. For a more complete list, see this nicely laid out [W3School Reference](https://www.w3schools.com/nodejs/ref_modules.asp).

Now, in the [guided practice below](#guided-practice), you will be able to test the `require` function.

#### What is import?

The `import` statement was first introduced in ES6, in 2015. It is a *static* import statement, which basically means that it will only bring in what has been exclusively and specifically exported from another module.

The syntax is also quite different, as the module path must be a string literal, whereas when we use `require`, the module path can be dynamic.

For example, with `require`, this will work:

```javascript
const name = "module2"; 
const obj = require("./" + name);
```

However, due to the static aspect of `import`, you cannot do:

```javascript
// THIS WILL NOT WORK
const name = "module2"; 
import * from "./" + name;
```

You can also import multiple functions with the `import` statement. These are called **named imports**. To do so, you simply include the functions in curly braces.

For example:

```javascript
// Named imports
import {firstMessage, secondMessage} from './my-module.mjs';
```

You can also import a complete namespace. To do so, you simply use the following syntax:

```javascript
// Namespace import
import * as myModule from './my-module.mjs';
```

If you simply import the name of the module, you will get the default export. This is common in libraries such as React:

```javascript
// Default import
import myModule from './my-module.mjs';
```

And, of course, you can combine these:

```javascript
// Combinations:
import myModule, {firstMessage, secondMessage} from './my-module.mjs';
```

Finally, you can also refer to an ES Module (if you need more information on modules, see the reference in the [supplement materials](supplement-materials)) This means that you can export objects and methods you have created.

For example:

```javascript
module.exports = 'This is a big export!';
```

As with `require`, in the [guided practice](#guided-practice), you will be able to test all of this.

#### Difference between import and require

While there are many differences, which are detailed in the chart below, in my opinion, the two major difference between `require` and `import` is first that the `require` one will automatically scan node_modules to find modules whereas because it comes from ES6, `import` will not. Second, `import` won't support node_modules since it is based on ES6, but `require` will. Effectively, `import` must specify the path of the module.

#### Can we use import in node?

Although you will not be seeing this a lot, it is possible if you:

1. Add the `--experimental-modules` flag when running Node

2. Use the `.mjs` extension or set `"type": "module"` in your `package.json`.

Altghough these, like I said, are not seen often, it is worthy to know.

#### Which one to use? And When?

With `import` you can use named imports, import namespace, it's asynchronous... However, it's not easy to use with Node. Nonetheless, although there doesn't seem to be any performance benefit at the moment, it is still advisable to think about using `import` over `require`, since it’s about to be native in JS should later on perform better than `require`.

If you want to build a full stack app and would prefer to use the same syntax for the whole application, then using `imports` is a no-brainer. However, if your app uses `__dirname` for relative file paths with the `fs` module, or if you need to import JSON files, then you would better consider using `require`.


#### Chart of the Differences

For your convienience, here is a detailed chart of the differences between `require` and `import`.

|REQUIRE|IMPORT|
|--|--|
|Can be called at any time and place in the program.|Always run in the beginning of the file.|
|You can directly run the code with the require statement.|If you are running Node 13 and above, to run a program containing import statement you have to use the `--experimental-modules` flag.|
|If you want to use the require module, you have to save file with ‘.js’ extension.|If you are running Node 13 and above, if you want to use import module, you have to save file with ‘.mjs’ extension.|
|Can leave out a .js extension when importing a local module|Cannot leave the extension|
|Loading is synchronous, which means that if you have multiple `require`, they are loaded and processed one by one.|Import is asynchronous.|
|Loading is synchronous, which means that if you have got multiple requires, they’re loaded and processed one by one.| Import is asynchronous|
|To include multiple functions, you first export the functions in an object, then import them using `require`|To include multiple functions, simply import them between curly braces.|


### Guided Practice

In order to be able to follow this guided practice, make sure you are using Node.js 13 and above. To install Node, simply go to [https://nodejs.org/en/download/](https://nodejs.org/en/download/) and choose the correct installation for your system.

#### Using `require`

The first thing we need to to is to create our export file. So, opening your favorite code editor, navigate to a new a folder for this practice and create a file named `my-module-for-require.js`. Inside the file, enter the following snippet:

```javascript
const messageToExport = "This message has been exported.";

exports.exportedMessage = messageToExport;
```

This basically creates something to be exported and then it attaches it to the `exports` object.

Then, you need to create the file in which we will call our module. So within the same folder for now, create a file named `example-for-require.js`, and then use `require` as such:

```javascript
// require your module
const obj = require("./module-with-functions");
// place the exported data in a constant
const message = obj.exportedMessage;

// console log it
console.log(message);
```

Now, open a terminal, make sure you are inside of the folder where the `example-for-require.js` file is and enter the following command to run your program:

```bash
node example-for-require.js
```

If all goes well, you should see:

```bash
This message has been exported.
```

Awesome! You've just created a small module and used it in your own program. I'm sure you can appreciate all the possibilities!

#### Using `import`

As such, it's not possible to use `import` in Node directly. Now, as stated above, there are two ways that we can circumvent this. First, by using an `.msj` extension and second by creating a simple `package.json` file to set the environment. Let's try an example of each.

##### `.mjs` extension

First, create a new file named `my-module-for-import.mjs` and inside, enter the following code:

```javascript
export const firstMessage = "This is the first message!";
export const secondMessage = "This is the second message!";
```

You can see that the syntax is quite simple. You simply export the data you create. 

Now, create a new file named `example-for-import.mjs` and enter the following code:

```javascript
// importing the data using named imports
import { firstMessage, secondMessage} from './my-module-for-import.mjs';

console.log(firstMessage);
console.log(secondMessage);
```

Now, open a terminal, enter the following command to run your program:

```bash
node example-for-import.mjs
```

You should see:

```bash
This is a the first message!
This is a the second message!
```

##### creating a `package.json` file

Without delving to much into the details of what is a `package.json` file and why we use it, let's just simplify it. This file is kind of the blueprint of what your app will need to run properly. It can contain many things, depending on the app you will be creating. When you want to "activate" the blueprint, you simply run `npm install` and then you should see a file called `package-lock.json` appear, which will contain details on the installation you have just made.

Now, don't worry if this seems a bit confusing, as we just need to use the file in order to set the environment and use `import` with a `.js` file instead of the `.mjs` that we created above.

So, in order to do this, you create a subfolder (I called mine `import-with-package-json`) and copy the two files `my-module-for-import.mjs` and `example-for-import.mjs` and then rename them to have a `.js` extension. Depending on the code editor you are using, you might get a message asking you if you want to change the import statement. It's perfectly normal, just say no for now, we will change it manually.

So, open the `example-for-imports.js` file and change the first line for this one:

```javascript
import { firstMessage, secondMessage} from './my-module-for-import.js';
```

Since we changed the file extension, we need to change it in our import.

Next, we need to create the `package.json` file and put this code in:

```javascript
{
  "type": "module"
}
```

This simply will lay the grounds for our program to run as a module. To test this, inside of the new created folderwe first need to run the install command like I mentioned above:

```bash
npm install
```

NPM will run the installation and you can possibly see warnings or notices, don't mind them, it's fine for our purposes.

When the installation is done, you can now run:

```bash
node example-for-import.js
```

And you should see:

```bash
This is a the first message!
This is a the second message!
```

That's it! You now know how to use `import` with Node!

Please note that the key thing with this is to always stay tuned to changes in the ECMA specifications, as they change often and the codebase progresses to bring in usually more depth and better performance. In my opinion, a good developer is a developer who's always keen to learn and is on the lookout for these changes!

Now, pat yourself on the back, as you've gone through somewhat tough material. Go back, revise, try different things, and when you're ready, tackle on some of the challenges below!

### Challenges

- How could you change the line `const obj = require("./module-with-functions");` and change it to become more dynamic? Can you refactor it by using ES6 syntax? What's the benefit for this?

- Using both the `require` and `import` methods, try exporting something different than the simple Strings we used in the practice, and then import it in your program. It could be a number, it could be an object, it could be a function, etc. How will you call what you have exported? Reflect on the many usage of this and how you could apply this to a real app.

- Try a mix of the imports seen for the `import` method. Which one do you find more useful? Which one do you think is easier to work with?

- Try to create different modules in different paths and call them within the same file.

### Check for Understanding

- Try to recreate the summary chart by yourself, see what information you retained.

- Make a detailed cheatsheet of the syntax for `require` and `import`, clearly differentiating between the different imports for the latest.


### Supplemental Materials

- [Official MDN documentation on modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

- [Browser Suppor For Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#Browser_support)

- [More info on what an ES module is](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)

#### This mini-lesson contains content taken from these different sources:

- [Difference between require and import in JavaScript - Programmer Sought](https://www.programmersought.com/article/6510946447/)

- [Modules - JavaScript for impatient programmers (ES2020 edition)](https://exploringjs.com/impatient-js/ch_modules.html#importing)

- [Webpack: Import vs Require, and why | by Jake Carson Zerrer | untapt Insights](https://insights.untapt.com/webpack-import-require-and-you-3fd7f5ea93c0)

- [Difference between node.js require and ES6 import and export - GeeksforGeeks](https://www.geeksforgeeks.org/difference-between-node-js-require-and-es6-import-and-export/)

- [The three differences between require and import in Node.js | by Matt Lim | Medium](https://medium.com/@pencilflip/the-three-differences-between-require-and-import-in-node-js-f54f78f5936f)

- [What is require? | Node.js](https://nodejs.org/en/knowledge/getting-started/what-is-require/)

- [What's New in Node.js 12: ESM Imports | www.thecodebarbarian.com](https://thecodebarbarian.com/nodejs-12-imports)

- [node.js - The difference between "require(x)" and "import x" - Stack Overflow](https://stackoverflow.com/questions/46677752/the-difference-between-requirex-and-import-x)

- [Understanding ES6 Modules](https://www.sitepoint.com/understanding-es6-modules/)

- [Import vs Require in Node.js - Mastering JS](https://masteringjs.io/tutorials/node/import-vs-require)

