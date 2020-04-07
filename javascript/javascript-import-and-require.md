# JavaScript - Require & Import

## Project Time

About 1 hours

- 30 minutes for the video walkthrough of the slides
- 10 minutes for Check for Understanding

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

Why both used required in today?

Code is easier to manage when it is in small, bite-size chunks. This is the thinking behind keeping functions to only one task or having files contain only a few, or one, component at a time. Here both import and require play major role in minimize and allow us to handle large number of module effectively and efficently. It is mainly used to get modules from different dictionary and use them. If you have a complex app and have to scroll through hundreds or thousands of lines of code, then the job of debugging or just understanding the app becomes that much harder.

Javascript helps us out with this by having ‘imports’ and ‘require’. This is how you can write code in one file and share that code so it can be used by another file or files

What are differences between Import and Require?
|Import|Require|
|---|---|
|var dep = require(“dep”);<br>console.log(dep.bar);<br>dep.foo();|import {foo, bar} from “dep”;<br>console.log(bar);<br>foo();|
|As import remains in stage three and not<br> enforced by browsers natively, we’re unable to<br> run any performance take a look at.|Presently once you use import in your code,<br> your transpilers it back to require,<br> the commonJS modeling system. <br>Therefore for nowadays each is the same|
|Though there aren’t any performance profit at the instant,<br> however, I’ll still counsel to use import over<br> require because it’s about to be native in JS|As a result of import is native therefore<br>require doesn’t perform higher as compare to import|
|You will have dynamic loading wherever the loaded module<br> name is not predefined.Loading is synchronous.<br> Meaning if you have got multiple requires,<br> they’re loaded and processed one by one.|Import is asynchronous and may perform a touch higher.<br> Also, the require module system is not<br> customarily based mostly. |


