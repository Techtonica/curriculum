# Code Challenges using Objects - JavaScript

## Resources:

- [Techtonica Lesson about Objects Literals](https://github.com/Techtonica/curriculum/blob/main/javascript/javascript-6-object-literals.md)

## Motivation

Techtonica's JavaScript lessons set a solid foundation in JavaScript basics so we can use the language in more robust ways in later studies. Nevertheless, you want to practice problems that use objects as a preparation for your technical interview.

## Objectives

Participants will be able to:

- Work each problem as a code challenge
- Work their solutions using functions
- Test their solutions with several test cases

## Things to Remember

- If a property name is composed of multiple words, the convention is to use camelCase.
- If a property name with spaces is absolutely required, then you'll only be able to use braket notation to access it's associated value. You won't be able to use dot-notation.
- Accessing the value of an Object Literal's properties with dot-notation makes the code easier to read and requires less typing. But bracket-notation allows for dynamic accessing, like what you do when you use a loop
- An Object Literal's values can be any data type, but its properties can only be strings
- Object Literals can be nested in complex ways
- All Object Literals come with some default methods, such as `.hasOwnProperty()`
- Never use reserved keywords for property names (like `function, var, switch,` etc.)

### Problem Sets

Question | Test Cases | Solutions

#### Problem 1 -

Write a function that deletes the cohortNumber property from the following object. Also print the object after deleting the property.

Sample object:
let Techtonica = {
studentName : "Your Name",
favoriteLanguage : "Your favorite language",
cohortNumber : 3 };

Needs sample solution.

```javascript
let Techtonica = { studentName: "Alex", favoriteLanguage: "JavaScript", cohortNumber: 5 };

console.log("Before deleting");
console.log(Techtonica);

console.log("Before deleting");

delete Techtonica.cohortNumber

console.log(Techtonica);
```

#### Problem 2 -

Write a function that returns all the values of an object's values.

let sampleObject = {
sampleProp1: “sample value 1”,
sampleProp2: “sample value 2”,
sampleProp3: “sample value 3”
}

objectValues() → “sample value 1”, “sample value 2”, “sample value 3”

Needs 2 more test objects
Needs sample solution

#### Problem 3 -

Create a grades object that stores a collection of student grades in an object. Provide a function for adding a grade and a function for displaying the student’s grade average.

Needs sample solution

#### Problem 4 -

Create an object that stores individual letters in an array and has a function for displaying the letters as a single word.

Needs sample solution
