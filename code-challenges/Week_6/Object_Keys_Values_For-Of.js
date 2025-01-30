// Iterating Over the Values of an Object [Object.values]
const user1 = { name: 'Alice', age: 30, city: 'New York' };
// console.log(Object.values(user1));

// Object.values(user1).forEach((value) => console.log(value))




// Iterating Over the Keys of an Object [Object.keys]
const user2 = { name: 'Alice', age: 30, city: 'New York' };

// Object.keys(user2).forEach((key) => console.log(key))




// Iterate over an Array of Strings [For Of]

// Define an array of strings
const fruits = ['apple', 'banana', 'cherry'];

for(const fruit of fruits){
  console.log(fruit);
}

/*
const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}
*/