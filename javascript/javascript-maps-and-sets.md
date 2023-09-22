# JavaScript Maps and Sets

### Week 3 Keywords and Questions

(see resource on Map and Set with examples)

- What is a JS Map?
- When should I use a Map?
- What is a JS Set?
- When should I use a Set?

## Prerequisites

- [JavaScript 6 - Object Literals Lesson](../javascript/javascript-6-object-literals.md)

## Motivation

ES6 brought with it some powerful upgrades, and the inclusion of Maps and Sets are two of them.

A Map is a collection of elements where each element is stored as a Key, value pair.

- Map object can hold both objects and primitive values as either key or value.
- You can use objects of all kinds as map keys.
- The system will not automatically convert the keys to strings as it does for object literals.
- Unlike with objects, map keys can be of any type, even objects or functions.
- With maps we can iterate in the order in which the values were added, unlike objects where there’s no guarantee about the order.

A Set is a special type collection – “set of values” (without keys), where each value may occur only once.

- The values in a set can be either simple primitives like strings or integers, or more complex object types like object literals or arrays

## Materials

- [Map and Set with examples](https://javascript.info/map-set-weakmap-weakset)
- [Maps in JavaScript (3 min video)](https://www.youtube.com/watch?v=hYu6TCCk8Yo) - This video gives a perfect, short rundown on how to create new Maps and set the properties within them.
- [JavaScript ES6 - Maps (3 min video)](https://www.youtube.com/watch?v=QjYk58e-8v4) - This video walks through ES6 Maps. How they are similar and different to Objects and how to use them.
- [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) - Detailed layout on maps.
- [Let's Learn ES6 - Map & Set (20 min video)](https://www.youtube.com/watch?v=4B4Q0EZVPU8) - A simple video demonstrating maps & sets.
- Reference: [geeksforgeeks.org](https://www.geeksforgeeks.org/map-in-javascript/)

### When to use map? And when to use object?

- Object is the great choice for scenarios when we only need simple structure to store data and knew that all the keys are either strings or integers, because creating plain object and accessing object’s property with a specific key is much faster than creating a map.

- Map preserves the order of its keys unlike object, and map was built with iteration in mind, so in case iteration or elements order are highly significant, consider map — it will ensure stable iteration performance in all browsers.

- Map tends to perform better in storing large set of data, especially when keys are unknown until run time, and when all keys are the same type and all values are the same type.
