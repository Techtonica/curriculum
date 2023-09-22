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

Sure! I'll provide additional JavaScript problems involving objects.

#### Problem 2 -

Write a function that returns all the values of an object's values.

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

#### Problem 3 -

Create a grades object that stores a collection of student grades in an object. Provide a function for adding a grade and a function for displaying the student’s grade average.

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

#### Problem 4 -

Create an object that stores individual letters in an array and has a function for displaying the letters as a single word.

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