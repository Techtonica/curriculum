# JavaScript - Require & Import

## Project Time

About 40 Minutes

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
- [JavaScript webpack resolver](https://webpack.js.org/concepts/module-resolution/)

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

Webpack has resolver library, which help import and require function in resoluting the url path and also help in reading the file present in different folder. This library helps in locating a module by its absolute path and  helps webpack find the module code that needs to be included in the bundle for every such require/import statement. webpack uses enhanced-resolve to resolve file paths while bundling modules.

Curently, There are 3 resolving rules in webpack,

1. Absolute Path:
      we already have root path and didn't need any resoultion.
      
        ```
        import '/home/Abhishek/file';
        import 'C:\\Users\\Abhishek\\file';
        ```
2. Relative paths:

      Directory of the resource file where the import or require occurs is taken to be the context directory. The relative path                                                          specified in the import/require is joined to this context path to produce the absolute path to the module.
      
      ```
      import '../src/config1';
      import './config2';
      ```
3. Module paths:
      Modules are searched for inside all directories specified in resolve.modules. You can replace the original module path by an alternate path by creating an alias for it using the resolve.alias configuration option.
      
      ```
      import 'module';
      import 'module/lib/config';
      ```

## Codes

**Import code snippet:**

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

**Require code snippet: **

file.js
```
const Square = require('./square.js');
const mySquare = new Square(2);
console.log(`The area of mySquare is ${mySquare.area()}`);
```

square.js
```
module.exports = class Square {
  constructor(width) {
    this.width = width;
  }

  area() {
    return this.width ** 2;
  }
};
```

## Challenge

1. We will learn by doing and let us take example.
2. You need to make module in same file or different directory.
3. Export the function from that library.
4. Use both command by one by one to get those module in working file.
