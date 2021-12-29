# Functional Programming

### Projected Time

About 2 - 2.5 hours

- materials: 20 mins
- lesson: 30 mins
- videos: 20-40 mins
- independent practice: 30 mins

### Prerequisites

- [JavaScript basics](../javascript)
- [JavaScript 4 - Loops](/javascript/javascript-4-loops.md)
- [JavaScript 2 - Arrays, Functions](/javascript/javascript-2-array-functions.md)
- [Object-oriented programming](../javascript/javascript-7-oop.md)

### Motivation

**Functional Programming** (FP) is a programming paradigm that's different from object-oriented programming. Functional programming is all about separating data from behavior so that software is **more predictable, more robust, and easier to test**. Certain tools become readily available with functional programming because **functions can be used as data**, which means they can be passed around as parameters and used as inputs into other functions. This can make the code more concise and easier to read.

**Which companies use Functional Programming?**

- [Bloomberg uses Ocaml which is a functional programming language](http://cufp.org/2014/maxime-ransan-adopting-functional-programming-with-ocaml-at-bloomberg-lp.html)
  - Bloomberg utilizes functional programming (OCaml) in production for powering part of its Bloomberg Professional Services product. Aided by a collaboration with LexiFi, several Bloomberg applications are now making use of GUI generation and financial contract representation; Bloomberg furthermore has embraced OCaml to develop domain specific languages and the problem of integrating the vast amount of data available in the Bloomberg infrastructure.[(cufp.org)](http://cufp.org/2014/maxime-ransan-adopting-functional-programming-with-ocaml-at-bloomberg-lp.html)
- Walmart uses Clojure, a dialect of the Lisp programming language. [Walmart runs Clojure at scale.](http://blog.cognitect.com/blog/2015/6/30/walmart-runs-clojure-at-scale)
  - How did Walmart's eReceipts team of 8 developers build a system to process and integrate every purchase at Walmart's 5000+ stores, including online and mobile data? Simple - they used Clojure "all the way down" to build a powerful data system enabling the popular Savings Catcher, Vudu Instawatch, Black Friday's 1-Hour Guarantee, and other programs to improve the customer experience and streamline operations.[(cognitect.com)](http://blog.cognitect.com/blog/2015/6/30/walmart-runs-clojure-at-scale)

[(futurelearn.com)](https://www.futurelearn.com/courses/functional-programming-haskell/0/steps/27239)

### Objectives

Participants will be able to learn the basics of functional programming in JavaScript.

### Specific Things to Learn

- map
- filter
- reduce
- mutation

### Materials

- [What is Functional Programming (11 mins read)](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0)
- [Map, Filter, and Reduce in JavaScript (6 mins read)](https://medium.com/jsguru/javascript-functional-programming-map-filter-and-reduce-846ff9ba492d)
- [4 10-min Videos: Fun Fun Functional Programming (watch all 4 parts)](https://youtu.be/BMUiFMZr7vk)

### Lesson

<img width="608" alt="Tweet about functional programming" src="https://cloud.githubusercontent.com/assets/16581819/22812830/e2d723fe-eefb-11e6-87ed-775e2b5fd105.png">

Here is a list of tools that become available with functional programming. These functions are commonly used on containers, such as an array, to apply another function across all elements in that container.

#### Part I. Map

The purpose of `map` is to process every element of an array in the exact same way. When you call `map` on an array, it executes that callback on every element within it, returning a new array with all of the values that the callback returned.
Example: an array of integers, add '3' to every integer

```JS
    const intArray = [1, 2, 3]

    function add3(value) {
      return value + 3;
    }

    const result = intArray.map(add3) // result is [4, 5, 6]
```

#### Part II. Filter

The purpose of the filter is to return a specified subset of the original array elements. When you call `filter` on an array and a function, it uses the function to check to see if the elements in the array meet a certain condition. If it does meet the condition, it keeps it in the array; if it does not meet the condition, it filters it out of the array.
Example: Let's say that you have an array of restaurants, and you want to know what your options are for only restaurants that are open at 7 am. You have a class called `Restaurant`, which has a property `openingTime`.

```JS
    const validRestaurants = allRestaurants.filter(restaurant => restaurant.openingTime <= 7)
```

#### Part III. Reduce

The purpose of `reduce` is to process elements of an array in a way that every element will be incorporated into the final solution. When you call `reduce` on an array and a function, it applies the function to every element of the array, while keeping track of a previous value.
Example: You are going to binge-watch Season 2 of "Stranger Things", and you want to know how long it will take. You have a class called `Episode`, which has `duration` as the value, and you have all of the episodes of Stranger Things stored in an array.

```JS
    const seasonTwoEpisodes = allEspisodes.filter((episode) => episode.season == 1)

    function addDuration(episode1, episode2) {
      return episode1.duration + episode2.duration;
    }

    const total = seasonTwoEpisodes.reduce(addDuration, 0)
```

#### Part IV. Mutation

Something you may have noticed is that when the new values were calculated from the original arrays, the old array values stayed unchanged. Therefore, they are considered to be "non-mutating". Let's look back at the example in Part I.
Example: an array of integers, add `3` to every integer

```JS
    const intArray = [1, 2, 3]

    function add3(value) {
      return value + 3;
    }

    const result = intArray.map(add3) // result is [4, 5, 6]
```

If you inspect `intArray`, the values are still: [1, 2, 3]. There are many functions that have mutating vs. non-mutating behavior. For example, `splice` is a mutating way to replace values, as opposed to `map`. A good article that explains different mutating vs. non-mutating functions can be found [here](https://lorenstewart.me/2017/01/22/javascript-array-methods-mutating-vs-non-mutating/)

Generally, according to the functional programming paradigm, it's better to avoid mutation of data. This will help keep code behaving more robustly and predictably. In fact, some programming languages are specially crafted for, or influenced by Functional Programming, some examples of Functional Programming Languages are:

- [Scala](<https://en.wikipedia.org/wiki/Scala_(programming_language)>)
- [Rust](<https://en.wikipedia.org/wiki/Rust_(programming_language)>)
- [Haskell](<https://en.wikipedia.org/wiki/Haskell_(programming_language)>)
- [Lisp](<https://en.wikipedia.org/wiki/Lisp_(programming_language)>) and it's dialect [Clojure](https://en.wikipedia.org/wiki/Clojure)

JavaScript is not a purely functional language, but has some methods like `map`, `reduce`, and `filter` are functional in nature. Purely functional languages are specialized languages and have often have limited applications.

#### Why is avoiding mutation a good idea?

You may wonder why you would want to avoid mutation. Let's say we defined a method, `add3(intArray)`, that would update an array of integers whenever we called it instead of returning a new array. We would say that such a method has a "side effect" of changing the array (`intArray`). Now, what if we had to call `add3` from two different parts of our application? We would have to start worrying about how many times `add3(intArray)` was called because every time we call it, `intArray` would change.

This might not be a problem in a small application, but as the application grows over time, we may get unexpected results. As more people start working on the project, they may not be aware that each time they call `add3(intArray)` the `intArray` would change. This could quickly break an application in weird and hard-to-debug ways. For that reason, developers tend to prefer avoiding side-effects. Using a method like `map`, which returns a new array and leaves `intArray` as it is, is an easy way to avoid these types of mistakes.

- Watch [Fun Fun Functional Programming Video (watch all 4 parts)(10 mins watch)](https://youtu.be/BMUiFMZr7vk)

#### Independent Practice

- Find a partner and spend what is left of the hour going through the problems in this guided set of exercises. The exercises build on each other and should be done in order.
- [Interactive lesson in functional programming - great beginner's resource](http://reactivex.io/learnrx/)

#### Extensions

- The previous exercise is great for getting some extra practice with functional programming... finish the rest of the 41 exercises when you have time.

#### Supplemental Materials

- [Professor Frisby's Mostly Adequate Guide to Functional Programming](https://mostly-adequate.gitbooks.io/mostly-adequate-guide/)
- [Blog post: What is Functional Programming](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0)
- [Blog post: Arrays, Objects and Mutations](https://medium.com/@fknussel/arrays-objects-and-mutations-6b23348b54aa)
