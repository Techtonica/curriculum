# Require and Import Mini Lesson

### Prerequisites

Here are topics that should be understood before this topic:

- [Node](node-js/node-js.md)

### Motivation

Why it is worth learning this topic

- Knowing when to use `require` and when using `import` is very helpful when building a full stack application.
- This mini lesson will also help you understand the differences of using each while building [web APIs](https://github.com/Techtonica/curriculum#week-6---web-apis), when doing the [Eventonica with React](https://github.com/Techtonica/curriculum#week-8---eventonica-with-react) section, and also for the [PERN Mini-Project](https://github.com/Techtonica/curriculum#week-9---pern-mini-project-postgresexpressreactnode)
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
- [Chart of the Differences](#chart-of-the-differences)

### Lesson

With JavaScript, when you want to include code that another developer has produced and made available to the open source community, you now have two main ways to bring in that code into your own script: `require` and `import`. When starting out, it can sometimes become confusing when to use one or another. So, in order to clarify this a little bit, let's dive into the core of what they are, how they differ, and when you should use one or the other.

#### What are JavaScript modules?

The first thing we need to do is to understand what a JavaScript module is. To put it simply, a module allows you to use chunks of code that you haven't written in your program. However, if you would like to dig deeper on the subject, I invite you to have a look at the official MDN documentation in the [supplemental materials section](#supplemental-materials).

#### What is require?

When using Node, if you want to include modules that are in another file, you can use the `require` built-in function. It will first read a JavaScript file, then execute it, and finally return the `exports` object. More technically, the `require` function will look for the specified file in the following order:

1. Built-in core Node.js modules. For example: `fs`

2. Installed NPM Modules. It will look in the node_modules folder. For example: `express`

3. Local Modules.

It is important to note that if the specified module name has a `./`, a `/` or a `../`, it will look for the directory/file in the given path, matching the `.js` and `.json` extensions. Moreover, if you want to import a file, you can just use the filename without the extension. For example, if you would like to import `code.js`, you could simply do:

```javascript
import * from `code`
```

For your convenience, here are some examples of popular Node built-in modules: `http`, `url`, `path` and `os`. For a more complete list, see this nicely laid out [W3School Reference](https://www.w3schools.com/nodejs/ref_modules.asp).

In the [guided practice below](#guided-practice), you will be able to test the `require` function.

#### What is import?

The `import` statement was first introduced in ES6, in 2015. It is a _static_ import statement, which basically means that it will only bring in what has been exclusively and specifically exported from another module.

The syntax is also quite different, as the module path must be a string literal, whereas when we use `require`, the module path can be dynamic.

For example, with `require`, this will work:

```javascript
const name = 'module2';
const obj = require('./' + name);
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
import { Component } from 'react';
```

You can also import a complete namespace. To do so, you simply use the following syntax:

```javascript
// Namespace import
import * as React from 'react';
```

If you simply import the name of the module, you will get the default export. This is common in libraries such as React:

```javascript
// Default import
import React from 'react';
```

And, of course, you can combine these:

```javascript
// Combinations:
import React, { Component } from 'react';
```

Finally, you can also refer to an ES Module (if you need more information on modules, see the reference in the [supplemental materials](#supplemental-materials)).

This means that you can export objects and methods you have created.

For example:

```javascript
export default message = 'This is a big export!';
```

In the [guided practice](#guided-practice), you will also be able to test using `import`.

#### Difference between import and require

While there are many differences between `require` and `import`, which are detailed in the chart below, in my opinion the two major ones are:

1. Use `import` and `export` when it has been configured for you, such as in a React + Vite app.
2. Use `require` and `module.exports` everywhere else.

#### Chart of the Differences

For your convenience, here is a detailed chart of the differences between `require` and `import`.

| REQUIRE                                                                                                      | IMPORT                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| Can be called at any time and place in the program.                                                          | Always run in the beginning of the file.                                |
| You can directly run the code with the require statement.                                                    | Will not run directly in Node without lots of annoying special setup.   |
| Can leave out a .js extension when importing a local module                                                  | Cannot leave the extension                                              |
| To include multiple functions, you first export the functions in an object, then import them using `require` | To include multiple functions, simply import them between curly braces. |

### Guided Practice

#### Using `require`

The first thing we need to to is to create our export file. So, opening your favorite code editor, navigate to a new a folder for this practice and create a file named `my-module-for-require.js`. Inside the file, enter the following snippet:

```javascript
const messageToExport = 'This message has been exported.';

module.exports = messageToExport;
```

This basically creates something to be exported and then it attaches it to the `exports` object.

Then, you need to create the file in which we will call our module. So within the same folder for now, create a file named `example-for-require.js`, and then use `require` as such:

```javascript
// require your module
const message = require('./my-module-for-require');

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

As such, it's not possible to use `import` in Node directly. Now, as stated above, we can circumvent this by creating a simple `package.json` file to set an environment that will allow us to use `import`.

##### creating a `package.json` file

Without going to much into the details of what is a `package.json` file and why we use it, let's keep things simple and say that this file is like a blueprint of what your app will need to run properly. It can contain many things, depending on the app specificity. When you want to "activate" the blueprint, you simply run `npm install`, and then you should see a file called `package-lock.json` appear. This file contains details on the installation you have just made, and you can disregard it for now.

Don't worry if this seems a bit confusing as we just need to use this in order to set the environment and use `import` with a `.js` file.

First, create a file named `my-module-for-import.js` and enter the following code:

```javascript
export const firstMessage = 'This is a the first message!';
export const secondMessage = 'This is a the second message!';
```

Then, create a file named `example-for-imports.js` and enter the following code:

```javascript
import { firstMessage, secondMessage } from './my-module-for-import.js';

console.log(firstMessage);
console.log(secondMessage);
```

Finally, we need to create the `package.json` file and put this code in:

```javascript
{
  "type": "module"
}
```

This simply will lay the grounds for our program to run as a module. To test this, inside of the new created folder, we first need to run the install command like I mentioned above:

```bash
npm install
```

NPM will run the installation . It is possible that you will see warnings or notices, but don't mind them as it's fine for our purposes.

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

- Using both the `require` and `import` methods, try exporting something different than the simple Strings we used in the practice, and then import it in your program. It could be a number, it could be an object, it could be a function, etc. How will you call what you have exported? Reflect on the many usage of this and how you could apply this to a real app.

- Try a mix of the imports seen for the `import` method. Which one do you find more useful? Which one do you think is easier to work with?

- Try to create different modules in different paths and call them within the same file.

### Check for Understanding

- Try to recreate the summary chart by yourself, see what information you retained.

- Make a detailed cheatsheet of the syntax for `require` and `import`, clearly differentiating between the different imports for the latest.

### Supplemental Materials

- [Official MDN documentation on modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

- [More info (via cartoons) on what an ES module is](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)

#### This mini-lesson contains content taken from these different sources:

- [Difference between require and import in JavaScript - Programmer Sought](https://www.programmersought.com/article/6510946447/)

- [Modules - JavaScript for impatient programmers (ES2020 edition)](https://exploringjs.com/impatient-js/ch_modules.html#importing)

- [Difference between node.js require and ES6 import and export - GeeksforGeeks](https://www.geeksforgeeks.org/difference-between-node-js-require-and-es6-import-and-export/)

- [The three differences between require and import in Node.js | by Matt Lim | Medium](https://medium.com/@pencilflip/the-three-differences-between-require-and-import-in-node-js-f54f78f5936f)

- [What's New in Node.js 12: ESM Imports | www.thecodebarbarian.com](https://thecodebarbarian.com/nodejs-12-imports)

- [node.js - The difference between "require(x)" and "import x" - Stack Overflow](https://stackoverflow.com/questions/46677752/the-difference-between-requirex-and-import-x)

- [Understanding ES6 Modules](https://www.sitepoint.com/understanding-es6-modules/)

- [Import vs Require in Node.js - Mastering JS](https://masteringjs.io/tutorials/node/import-vs-require)
