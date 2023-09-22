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

#### Problem 2 -

Write a function clone(obj) that takes in an object and returns a deep copy of that object. The function should be able to handle nested objects.

Example:

```javascript

let obj = { a: 1, b: { c: 2, d: 3 } };
let copiedObj = clone(obj);
copiedObj.b.c = 4;
console.log(obj.b.c); // Should print 2
console.log(copiedObj.b.c); // Should print 4
```
### Problem 3: 
Write a function filterKeys(obj, keys) that takes in an object and an array of keys. The function should return a new object containing only the key-value pairs from the original object where the key exists in the keys array.

Example:

```javascript

let obj = { a: 1, b: 2, c: 3, d: 4 };
let keys = ['a', 'c'];
let filteredObj = filterKeys(obj, keys);
console.log(filteredObj); // Should print { a: 1, c: 3 }
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

```
Output
ALEXIS
```
### Problem 5:
Write a function merge(obj1, obj2) that takes in two objects and returns a new object that contains the properties of both obj1 and obj2. If there are overlapping keys, the value from obj2 should overwrite the value from obj1.

Example:

```javascript

let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };
let mergedObj = merge(obj1, obj2);
console.log(mergedObj); // Should print { a: 1, b: 3, c: 4 }
```

### Problem 6:
Write a function getValueAtPath(obj, path) that retrieves a value from an object given a string path. If the path doesn't exist, return null.

Example:

```javascript

let obj = { a: { b: { c: 10 } } };
let value = getValueAtPath(obj, 'a.b.c');
console.log(value); // Should print 10

let nonExistentValue = getValueAtPath(obj, 'a.b.d');
console.log(nonExistentValue); // Should print null
```

### Problem 6:
Given an object, write a function rotate(obj) that moves the last key-value pair to the front, shifting all other key-value pairs to the right.

Example:

```javascript

let obj = { a: 1, b: 2, c: 3 };
let rotatedObj = rotate(obj);
console.log(rotatedObj); // Should print { c: 3, a: 1, b: 2 }
```

