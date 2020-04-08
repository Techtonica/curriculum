# JavaScript - Require & Import

## Project Time

About 45 Minutes

- 30 minutes for the video and reference material
- 10 minutes for Check for Understanding
- 5 minutes for verify

## Prerequisites

- JavaScript 7
- [JavaScript Import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
- [JavaScript Require](https://nodejs.org/en/knowledge/getting-started/what-is-require/)

## Motivation

JavaScript is one of most used language. It is lightweight, Interpreted and Just-in-time compiled programming language with first-class function. While it is most well-known as the scripting language for webpage, Many no-browser environmemts also use it. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative and declarative style.

## Objectives

- Create understanding in user regarding of import and require

## Supplemental Materials

- [JavaScript reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
- [JavaScript Modules: ES6 Import and Export](https://www.youtube.com/watch?v=_3oSWwapPKQ)
- [Javascript require vs import in 3 min](https://www.youtube.com/watch?v=vGEnYyO_r2g)
- [Node JS Tutorial: Modules and require()](https://www.youtube.com/results?search_query=understand+require+in+javascript)

## Lesson

**Why both used required in today?**

Code is easier to manage when it is in small, bite-size chunks. This is the thinking behind keeping functions to only one task or having files contain only a few, or one, component at a time. Here both import and require play major role in minimize and allow us to handle large number of module effectively and efficently. It is mainly used to get modules from different dictionary and use them. If you have a complex app and have to scroll through hundreds or thousands of lines of code, then the job of debugging or just understanding the app becomes that much harder.

Javascript helps us out with this by having ‘imports’ and ‘require’. This is how you can write code in one file and share that code so it can be used by another file or files

**What are differences between Import and Require?**
|Import|Require|
|---|---|
|As import remains in stage three and not<br> enforced by browsers natively, we’re unable to<br> run any performance take a look at.|Presently once you use import in your code,<br> your transpilers it back to require,<br> the commonJS modeling system. <br>Therefore for nowadays each is the same|
|Though there aren’t any performance profit at the instant,<br> however, I’ll still counsel to use import over<br> require because it’s about to be native in JS|As a result of import is native therefore<br>require doesn’t perform higher as compare to import|
|You will have dynamic loading wherever the loaded module<br> name is not predefined.Loading is synchronous.<br> Meaning if you have got multiple requires,<br> they’re loaded and processed one by one.|Import is asynchronous and may perform a touch higher.<br> Also, the require module system is not<br> customarily based mostly. |

**when we can and cannot use import in our Web Application?**

The import statement is used to import bindings which are exported by another module. Imported modules are in strict mode whether you declare them as such or not. The import statement cannot be used in embedded scripts unless such script has a type="module".

**why neither works in the browser unless you fake it with webpack or equivalent?**

Webpack tries to handle all require calls during application working, even those not meant for browser usage which makes it almost impossible to have a module that works in both Node.js and it creates browser problem to work with it.


## Codes

**Get Module using REQUIRE**

```
var dep = require(“dep”);
console.log(dep.bar);
dep.foo();
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
