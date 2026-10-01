/*


Create a function named `filterObjects` that takes three arguments: 
- an array of objects (`data`),
- a string representing a property name (`propertyName`), and
- a value.

The function should return a new array containing only the objects from the original array whose value for the specified property matches the provided value. If no objects match the criteria, the function should return an empty array.

Note: propertyName contains a string such as "role". Because the property name is stored in a variable, use bracket notation: object[propertyName].

Example:
const users = [
  { name: "Ana", role: "admin" },
  { name: "Sam", role: "user" },
  { name: "Lee", role: "admin" }
];

filterObjects(users, "role", "admin");

Expected output:
[
  { name: "Ana", role: "admin" },
  { name: "Lee", role: "admin" }
]
*/
