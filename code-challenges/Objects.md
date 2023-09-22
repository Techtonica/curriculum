# Code Challenges Problem 1 and 4 using Objects - JavaScript - Jennifer Tran

#### Problem 1 -

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

#### Problem 4 -

Create an object that stores individual letters in an array and has a function for displaying the letters as a single word.

```javascript
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

```Output
ALEXIS
```
