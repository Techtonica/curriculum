# JavaScript 2 - Arrays, Functions

### Prerequisites

- [JavaScript 1 - Variables, Strings, Numbers lesson](/javascript/javascript-1-variables.md)

### Motivation

JavaScript is used on the frontend of almost every website. It's also a widely-used scripting language that be used on the backend as well. The JavaScript lessons set a solid foundation in JavaScript basics so we can use the language in more robust ways in later lessons.

The data structures and syntax introduced in this course are fundamental for creating applications at all scales. They are tools that are used in any technology company and are often part of assignments for technical phone screens or on-site interviews. They ask questions about these concepts in interviews at [Lumosity](https://www.lumosity.com/), [Google](https://www.google.com/), and [Facebook](https://www.facebook.com/), to name a few.

### Objectives

**Participants will be able to:**

- Create arrays using the proper syntax
- Create nested arrays
- Index into arrays
- Change data inside an array using index reassignment
- Change data inside an array using `.push()`, `.pop()`, `.shift()` and `.unshift()`
- Define a function using proper syntax
- Pass arguments into a function
- Understand the difference between global scope and local scope
- Differentiate between var/const/let

### Supplemental Materials

**JavaScript Arrays**

- [JavaScript Array Docs (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [JavaScript Array Reference (JAVASCRIPT.INFO)](https://javascript.info/array)

**General JavaScript**

- [MDN has tons of info](https://developer.mozilla.org/bm/docs/Web/JavaScript)
- [JavaScript for Cats for foundational concepts (and cats)](http://jsforcats.com/)
- [Eloquent JavaScript is a free online book](http://eloquentjavascript.net/)
- [JavaScript Garden has more advanced topics](https://bonsaiden.github.io/JavaScript-Garden/)

### Lesson

[JavaScript II - Arrays, Functions (video walkthrough of slides 1)](https://drive.google.com/file/d/1aLxRv80fyaeVSxnFjKz6dxD5bmCP37Jt/view?usp=sharing)

- Please watch the video the first time without working along with the demonstration. Just absorb the concepts. Then, you can watch the demonstration a second time and code with the instructor if you like.

[JavaScript II - Arrays, Functions (video walkthrough of slides 2)](https://drive.google.com/file/d/1sAXR8pUv6GEJEx7dQSOclA5efom8a9tV/view?usp=sharing)

- Please watch the video the first time without working along with the demonstration. Just absorb the concepts. Then, you can watch the demonstration a second time and code with the instructor if you like.

[JavaScript II - Arrays, Functions (slides)](https://docs.google.com/presentation/d/10FUe4xQHrWOc7Ys3bWUFJDvM4IhYxMX5AgmPY8cxjlM/edit?usp=sharing)

[JavaScript II - Arrays, Functions (difference between var/const/let and scopes explained video)](https://www.youtube.com/watch?v=6vBYfLCE9-Q)

[JavaScript II - Arrays, Functions (difference between var/const/let additional reading)](https://codeburst.io/const-let-and-var-which-and-when-541a2721c18)

### Things to Remember

- **Use commas in your array to separate each data point.** You'll get a syntax error if you don't.

- **Parameters are placeholders (p and p!). Arguments are actual values (a and a!).** Parameters serve as placeholders in the function definition. Arguments are actual values you want the function to process once you call it.

### Independent Practice

1. In [REPL.it](https://www.repl.it), create a function called `printCuteAnimals` that expects an array to be passed in as an argument. You can name the function parameter whatever you like. When you pass the array to the function, it should contain strings, and the strings should be types of animals you think are cute.

Your function should:

1. First print the entire array and its length.
2. Print the array after you have called the `.pop()` method on it.
3. Concatenate another array of animal names onto the existing array. Feel free to look up how to do this using Google!
4. Print the array again and its new length.
5. Return the array.

### Challenge

Using MDN's JavaScript documentation, identify 1 - 3 array methods (look on the left column) that you can incorporate into your function, and see if you can.

### Check for Understanding

- What do the methods push() and pop() do?
- How would you access the first and last item in an array?
- What does arrayName.length do?
- How would you index into the following array to get Cookie?
  `let dessertArray = [ ["Pie", 4], ["Cupcake”, 5], ["Cookie", 12] ];`
- What's the difference and similarities between var, let and const?
- What's the difference between parameters and arguments? Show an example.
- What is the difference between local scope and global scope?
