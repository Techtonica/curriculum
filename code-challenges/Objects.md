# Code Challenges using Objects - JavaScript

## Problem 1

Write a function that deletes the cohortNumber property from the following object. Also print the object after deleting the property.

```javascript

function cohortNumberDelete(object){
    delete object.CohortNumber;
}

let sample = {Name: "Julio", Work: "Techtonica", CohortNumber: 25};
// Before Deletion
console.log(sample);

// After Deletion
cohortNumberDelete(sample);
console.log(sample);
```

## Problem 2

Write a function clone(obj) that takes in an object and returns a deep copy of that object. The function should be able to handle nested objects.

Example:

```javascript

let obj = { a: 1, b: { c: 2, d: 3 } };
let copiedObj = clone(obj);
copiedObj.b.c = 4;
console.log(obj.b.c); // Should print 2
console.log(copiedObj.b.c); // Should print 4
```

## Problem 3

Write a function filterKeys(obj, keys) that takes in an object and an array of keys. The function should return a new object containing only the key-value pairs from the original object where the key exists in the keys array.

```javascript

//Defining the deleteCohortNumber Function

function deleteCohortNumber(studentObject) {
    delete studentObject.cohortNumber;
}
```

```javascript
//Sample Object
let Techtonica = { studentName: "Alex", favoriteLanguage: "JavaScript", cohortNumber: 5 };

console.log("Before deleting");
console.log(Techtonica);

console.log("After deleting");
deleteCohortNumber(Techtonica);

console.log(Techtonica);
```

```
Output:
Before deleting
{
  studentName: 'Alex',
  favoriteLanguage: 'JavaScript',
  cohortNumber: 5
}
After deleting
{ studentName: 'Alex', favoriteLanguage: 'JavaScript' }
```
Example:

```javascript
let obj = { a: 1, b: 2, c: 3, d: 4 };
let keys = ['a', 'c'];
let filteredObj = filterKeys(obj, keys);
console.log(filteredObj); // Should print { a: 1, c: 3 }
```

## Problem 4

Create an object that stores individual letters in an array and has a function for displaying the letters as a single word.

```javascript
function getObjectValues(object) {

    return Object.values(object);
}

```


```javascript
let sampleObject = {

    sampleProp1: "sample value 1",
    sampleProp2: "sample value 2",
    sampleProp3: "sample value 3"
}

let person = {
    name: "Mark Zuckerberg",
    age: 39,
    profession: "CEO of META",
};

let car = {
    brand: "Tesla",
    model: "Model S",
    year: 2022,
    color: "red",
};

console.log("Getting Object Values of an object");
console.log(getObjectValues(sampleObject));
console.log(getObjectValues(person));
console.log(getObjectValues(car));
```

```
Output:
Getting Object Values of an object
[ 'sample value 1', 'sample value 2', 'sample value 3' ]
[ 'Mark Zuckerberg', 39, 'Software Engineer' ]
[ 'Tesla', 'Model S', 2022, 'red' ]
```
let word = {
        letter: ['W', 'O', 'R', 'K'],
        
        wordDisplay(){
            return this.letter.join('');
        }
}

console.log(word.wordDisplay());

console.log("Printing the word");
console.log(word.getWord());
```

```
Output
ALEXIS
```

```javascript
let grades = {
    john: [85, 90, 92],
    sarah: [78, 80, 88],
    michael: [92, 95, 88],
    emily: [87, 82, 90],
    addGrade: function (studentName, grade) {

        /* This condition is used to check if the studentName is present in an object or not.
        If not we will add a new key in an object
        */
        if (studentName in grades) {

            grades[studentName].push(grade);
        }

        else {

            grades[studentName] = [grade];
        }
    },

    getAverage: function (studentName) {

        //Check if the studentName is present in the Object. If not display a message in console
        if (!(studentName in grades))
            return "Student not found";

        let count = 0;

        let studentGrade = grades[studentName];

        studentGrade.forEach(number => {

            count += number;
        });

        return count / studentGrade.length;
    }
};


console.log("Original Object");
console.log(grades);

//Adding the grades to the existing user
grades.addGrade("emily", 95);
console.log("Object after adding the grade of existing user");
console.log(grades);

//Adding grades to the new user
grades.addGrade("Sherlock", 90);
console.log("Object after adding the grade of new user");
console.log(grades);

//Getting the average grade of the existing user
console.log("Getting the average of emily");
console.log(grades.getAverage("emily"));

//Getting the average grade of the newly added user
console.log("Getting the average of Sherlock");
console.log(grades.getAverage("Sherlock"));

//Getting the average grade of the user who is not present in an object
console.log("Getting the average of the user who is not present in an object");
console.log(grades.getAverage("Alex"));

```


```Output
Original Object
{
  john: [ 85, 90, 92 ],
  sarah: [ 78, 80, 88 ],
  michael: [ 92, 95, 88 ],
  emily: [ 87, 82, 90 ],
  addGrade: [Function: addGrade],
  getAverage: [Function: getAverage]
}
Object after adding the grade of existing user
{
  john: [ 85, 90, 92 ],
  sarah: [ 78, 80, 88 ],
  michael: [ 92, 95, 88 ],
  emily: [ 87, 82, 90, 95 ],
  addGrade: [Function: addGrade],
  getAverage: [Function: getAverage]
}
Object after adding the grade of new user
{
  john: [ 85, 90, 92 ],
  sarah: [ 78, 80, 88 ],
  michael: [ 92, 95, 88 ],
  emily: [ 87, 82, 90, 95 ],
  addGrade: [Function: addGrade],
  getAverage: [Function: getAverage],
  Sherlock: [ 90 ]
}
Getting the average of emily
88.5
Getting the average of Sherlock
90
Getting the average of the user who is not present in an object
Student not found
```

## Problem 5

Write a function merge(obj1, obj2) that takes in two objects and returns a new object that contains the properties of both obj1 and obj2. If there are overlapping keys, the value from obj2 should overwrite the value from obj1.

Example:

```javascript
let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };
let mergedObj = merge(obj1, obj2);

console.log(mergedObj); // Should print { a: 1, b: 3, c: 4 }
```

## Problem 6

Write a function getValueAtPath(obj, path) that retrieves a value from an object given a string path. If the path doesn't exist, return null.

Example:

```javascript
let obj = { a: { b: { c: 10 } } };
let value = getValueAtPath(obj, 'a.b.c');
console.log(value); // Should print 10

let nonExistentValue = getValueAtPath(obj, 'a.b.d');
console.log(nonExistentValue); // Should print null
```

## Problem 6

Given an object, write a function rotate(obj) that moves the last key-value pair to the front, shifting all other key-value pairs to the right.

Example:

```javascript
let obj = { a: 1, b: 2, c: 3 };
let rotatedObj = rotate(obj);

```javascript
let word = {

    letters: ['A', 'L', 'E', 'X', 'I', 'S'],
    getWord: function () {

        let word = "";

        // "this" is a keyword which is used to refer an object and access the properties of it
        this.letters.forEach(letter => {

            word += letter;
        });

        return word;
    }
}

console.log("Printing the word");
console.log(word.getWord());
```

```Output
ALEXIS
```

### Problem 5 -

Write a function named `addProperty` that adds a new key-value pair to an object and returns the updated object.

```javascript
function addProperty(obj, key, value) {
    obj[key] = value;
    return obj;
}
```

```javascript
//Sample Object
let student = { name: "Sarah", age: 20 };

console.log("Before adding");
console.log(student);

console.log("After adding");
student = addProperty(student, 'grade', 'A');
console.log(student);
```

```
Output:
Before adding
{
  name: 'Sarah',
  age: 20
}
After adding
{ name: 'Sarah', age: 20, grade: 'A' }
```

### Problem 6 -

Write a function named `hasKey` that checks if a specific key exists within an object. Return `true` if the key exists, otherwise `false`.

```javascript
function hasKey(obj, key) {
    return obj.hasOwnProperty(key);
}
```

```javascript
//Sample Object
let book = { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 };

console.log(hasKey(book, 'author'));  // true
console.log(hasKey(book, 'pages'));   // false
```

### Problem 7 -

Write a function named `invertObject` that inverts the key-value pairs of an object.

```javascript
function invertObject(obj) {
    let invertedObj = {};
    for(let key in obj) {
        invertedObj[obj[key]] = key;
    }
    return invertedObj;
}
```

```javascript
//Sample Object
let colors = { red: '#FF0000', green: '#00FF00', blue: '#0000FF' };

console.log("Original Object");
console.log(colors);

console.log("Inverted Object");
let invertedColors = invertObject(colors);
console.log(invertedColors);
```

```
Output:
Original Object
{ 
  red: '#FF0000',
  green: '#00FF00',
  blue: '#0000FF'
}
Inverted Object
{ 
  '#FF0000': 'red',
  '#00FF00': 'green',
  '#0000FF': 'blue'
}
```

### Problem 8 -

Write a function named `countKeys` that counts the number of keys in an object and returns the count.

```javascript
function countKeys(obj) {
    return Object.keys(obj).length;
}
```

```javascript
//Sample Object
let car = { brand: "Toyota", model: "Camry", year: 2021, color: "blue" };

console.log(countKeys(car));  // 4
```

These are some problems that involve operations on objects in JavaScript. Each problem helps to understand different aspects of working with objects, such as adding properties, checking for keys, inverting keys and values, and counting keys.

console.log(rotatedObj); // Should print { c: 3, a: 1, b: 2 }
```
