# Functional Programming

### Projected Time
30-45 minutes

### Prerequisites
JavaScript basics
`for` loops
arrays
Object-oriented programming

### Motivation
 Functional Programming (FP) is a programming paradigm that's different from object-oriented programming. Functional programming is all about separating data from behavior, so that software is more predictable, more robust, and easier to test. Certain tools become readily available with functional programming, because functions can be used as data, which means they can be passed around as parameters, and used as inputs into other functions. This can make code more concise and easier to read.

### Objectives
**Participants will be able to** learn the basics of functional programming in JavaScript.

### Specific Things To Teach
- mutation
- map
- filter
- reduce

### Materials

-[What is Functional Programming[(https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0)
-[Map, Filter, and Reduce in JavaScript (https://medium.com/jsguru/javascript-functional-programming-map-filter-and-reduce-846ff9ba492d)]
- <img width="608" alt="steven_luscher_on_twitter___map_filter_reduce_in_a_tweet__map__ __ __ ___cook______ __ __ __filter__ __ __ ___isvegetarian______ __ __reduce__ __ ___eat_____ _" src="https://cloud.githubusercontent.com/assets/16581819/22812830/e2d723fe-eefb-11e6-87ed-775e2b5fd105.png">
- [This other website](otherexample.com)

### Lesson
Here are a list of tools that become available with functional programming. They are common functions that take apply functions across all elements in a container, such as an array.

Part I. Map
The purpose of `map` is to process every element of an array in the exact same way. When you call `map` on an array, it executes that callback on every element within it, returning a new array with all of the values that the callback returned.
Example: array of integers, add '3' to every integer
    var intArray = [1, 2, 3]

    function add3(value) {
      return value + 3;
    }

    array.intArray(add3)

Part II. Filter
The purpose of filter is to return a specified subset of the original array elements. When you call `filter` on an array and a function, it uses the function to check to see if the elements in the array meet a certain condition. If it does meet the condition, it keeps it in the array; if it does not meet the condition, it filters it out of the array.

Part III. Reduce
The purpose of `reduce` is to process elements of an array in a way that every element will be incorporated into the final solution. When you call `reduce` on an array and a function, it applies the function to every element of the array, while keeping track of a previous value.
Example: You are going to binge watch Season 2 of "Stranger Things", and you want to know how long it will take. You have a class called `Episode`, which has `duration` as the value, and you have all of the episodes of of Stranger Things stored in an array. 
    var seasonTwoEpisodes = allEspisodes.filter((episode) => episode.season == 1)

    function addDuration(episode1, episode2) {
      return episode1.duration + episode2.duration;
    }

    var total = seasonTwoEpisodes.reduce(addDuration, 0)

Make sure to mention these things:
- Things
	- This is a sub-thing
- More things
- Even more things
- Even more things


### Common Mistakes / Misconceptions

This is something that participants might not realize or might assume at first.

Make sure they avoid this: thing


### Guided Practice

Have the participants work with you as you do something.


### Independent Practice

Class does this thing themselves with specific additional items.


### Challenge

Participants can try to do this other thing.


### Check for Understanding

Have participants summarize to each other, make a cheat sheet, take a quiz, do an assignment, or something else that helps assess their understanding.
