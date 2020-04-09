# JavaScript - Require & Import

## Project Time

About 45 Minutes

- video and reference material: 20 minutes
- Understanding topics: 10 minutes 
- Pratice challenge: 10 minutes

## Prerequisites

- JavaScript 7

## Motivation

Javascript is one of the most used language. It is lightweight, Interpreted and Just-in-time compiled programming language with the first-class function. While it is most well-known as the scripting language for a webpage, Many no-browser environments also use it. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative and declarative style.

Here in Javascript, Import and Require is one of the important part and  also crucial part of it. It major useful function, It help us to divide the files into different modules and divide our code modules in systematic ways.

```
Porject:
        assert
          |
          --> index.js
        img
          |
          --> file.png
        css
          |
          --> index.css
          
        index.html
```
Now you will get one question in your mind that How we use index.js in index.html, Now Import and Require will come is use here and using these function, you can organize your work in systematic way.

## Objectives

- Create understanding of import and require in user

## Supplemental Materials

- [JavaScript reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
- [JavaScript Modules: ES6 Import and Export](https://www.youtube.com/watch?v=_3oSWwapPKQ)
- [JavaScript Import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
- [JavaScript Require](https://nodejs.org/en/knowledge/getting-started/what-is-require/)

## Lesson

**Why REQUIRE and IMPORT are important in Javascript?**

Code is easier to manage when it is in small, bite-size chunks. This is the thinking behind keeping functions to only one task or having files contain only a few, or one, component at a time. Here both import and require play major role in minimize and allow us to handle large number of module effectively and efficently. It is mainly used to get modules from different dictionary and use them. If you have a complex app and have to scroll through hundreds or thousands of lines of code, then the job of debugging or just understanding the app becomes that much harder.

Javascript helps us out with this by having ‘imports’ and ‘require’. This is how you can write code in one file and share that code so it can be used by another file or files

**What are the differences between IMPORT and REQUIRE?**
|Import|Require|
|---|---|
|As import remains in stage three and not<br> enforced by browsers natively, we’re unable to<br> run any performance take a look at.|Presently once you use import in your code,<br> your transpilers it back to require,<br> the commonJS modeling system. <br>Therefore for nowadays each is the same|
|Though there aren’t any performance profit at the instant,<br> however, I’ll still counsel to use import over<br> require because it’s about to be native in JS|As a result of import is native therefore<br>require doesn’t perform higher as compare to import|
|You will have dynamic loading wherever the loaded module<br> name is not predefined.Loading is synchronous.<br> Meaning if you have got multiple requires,<br> they’re loaded and processed one by one.|Import is asynchronous and may perform a touch higher.<br> Also, the require module system is not<br> customarily based mostly. |

**when we can and cannot use IMPORT in our Web Application?**

The **import** statement is used to get bindings which are exported by another module and imported modules are in strict mode whether you declare them as such or not. There is one condition when **import** statement cannot be used in embedded scripts, till the time you delcare type="module" in script file.

**why IMPORT and REQUIRE neither works in the browser unless you fake it with webpack or equivalent?**

In javascript two different moules cannot be used togather, If one cannot be imported. So, we use [Webpack](https://insights.untapt.com/webpack-import-require-and-you-3fd7f5ea93c0) which have one impressive feature which is called tree shaking. This technique is uses to reduce the size of your javascript bundle.
let us take one example,

we have two file, config.js and file.js

config.js
```
export {
  localhost: "Main",
  database:"personal_info",
  port: 3306
};
```

file.js
```
import {localhost} from ./config;
console.log(localhost);
```

config.js export three different variables – the strings localhost, database, and port. file.js only imports the locahost item, export localhost. Since exports variable database and port are never used, Webpack can eliminate them from the main module.
Webpack deine this as “tree shaking” because it’s like shaking leaves off of your project’s dependency tree and here leafs refered to files.

## Codes

**Get Module using EXPORT**

dep.js

```
export{
  var bar = "do you love coding?"
  function foo(){
    return "yes, It is my life.";
  }
}
```

**Get Module using IMPORT**

```
import {foo, bar} from “dep”;
console.log(bar);
foo();
```

## Challenge

1. We will learn by doing and let us take example.
2. You need to make module in same file or different directory.
3. Export the function from that library.
4. Use both command by one by one to get those module in working file.
