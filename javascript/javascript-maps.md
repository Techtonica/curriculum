# JavaScript Maps

## Projected Time

30-45 minutes

## Prerequisites

- [JavaScript 6 - Object Literals Lesson](../javascript/javascript-6-object-literals.md)

## Motivation

Map object provided by ES6. Map is a collection of elements where each element is stored as a Key, value pair. Map object can hold both objects and primitive values as either key or value. You can use objects of all kinds as map keys. The system will not automatically convert the keys to strings as it does for object literals. This opens up a wide range of opportunities to do interesting things with maps.

- Reference: [geeksforgeeks.org](https://www.geeksforgeeks.org/map-in-javascript/)

## Objectives

**Participants will be able to:**

- Learn maps.
- Learn sets.
- Know the difference between maps and objects.
- Create and use maps & sets.

## Specific Things to Learn

- Maps.
  - Syntax.
  - Methods or operations.
  - Example.
  - When to use maps or objects!
- Sets.
  - Syntax.
  - Example.
- Maps and objects compared.

## Materials

- [JavaScript ES6 - Maps (3 min video)](https://www.youtube.com/watch?v=QjYk58e-8v4) - This video walks through ES6 Map's. How they are similar and different to Objects and how to use them!

- [Javascript Map and Set Explained](https://www.youtube.com/watch?v=hLgUTM3FOII) - 15 min

## Lesson

- **Reference**: [Map, Set - javascript.info/](https://javascript.info/map-set-weakmap-weakset)

### Map

**Maps** are a new object type that allow to store collections of key-value pairs. Unlike with objects, map keys can be of any type, even objects or functions. With maps we can iterate in the order in which the values were added, unlike objects where there’s no guarantee about the order.

- Syntax:<br>
  `new Map([iterable]);`

- The main methods are: - **new Map()** – creates the map. - **map.set(key, value)** – stores the value by the key. - **map.get(key)** – returns the value by the key, undefined if key doesn’t exist in map. - **map.has(key)** – returns true if the key exists, false otherwise. - **map.delete(key)** – removes the value by the key. - **map.clear()** – clears the map. - **map.size** – returns the current element count.

- Example:

  ```javascript
  // Create a Map
  const things = new Map();
  // Set Map Values
  things.set('🚗', 'Car');
  things.set('🏠', 'House');
  // get the value
  things.get('🚗'); // Car
  // check key exists
  things.has('🏠'); // true
  // get the number of elements
  things.size; // 2
  // delete all elements in the map
  things.clear();
  things.size; // 0
  ```

- The differences from a regular Object:

  - Object follows the rule of normal dictionary. The keys must be simple types  either integer or string or symbols. But in Map, it can be any data type (an object, an array, etc).
  - In Map, original order of elements (pairs) is preserved, while in Object, it isn’t. For example:

  ```javascript
  let myObject = new Map();

  myObject.set('z', 1);
  myObject.set('@', 2);
  myObject.set('b', 3);
  for (let [key, value] of myObject) {
    console.log(key, value);
  }
  // z 1
  // @ 2
  // b 3
  ```

- Map does keep its size updated automatically unlike objects. Objects size needs to be calculated manually with `object.keys()` which returns an array of all existing keys.

- When to use map? And when to use object?

  - Object is the great choice for scenarios when we only need simple structure to store data and knew that all the keys are either strings or integers, because creating plain object and accessing object’s property with a specific key is much faster than creating a map.

  - Map preserves the order of its keys  unlike object, and map was built with iteration in mind, so in case iteration or elements order are highly significant, consider map — it will ensure stable iteration performance in all browsers.

  - Map tends to perform better in storing large set of data, especially when keys are unknown until run time, and when all keys are the same type and all values are the same type.

### Set

**Sets** are a new object type with **ES6 (ES2015)** that allow to create collections of unique values. The values in a set can be either simple primitives like strings or integers, or more complex object types like object literals or arrays.

- Syntax:<br>

  `new Set([iterable]);`

- Example:

  ```javascript
  // create a Set
  const animals = new Set();
  // Add Values to the Set
  animals.add('🐷');
  animals.add('🐼');
  console.log(animals.size); // 2
  animals.add('🐼');
  console.log(animals.size); // 2
  // delete value from Set
  animals.delete('🐼');
  console.log(animals.size); // 1
  ```

## Independent Practice

Create a map and try performing set, get, clear, delete, has etc methods on it.

## Supplemental Materials

- [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) - Detailed layout on maps.
- [Let's Learn ES6 - Map & Set (20 min video)](https://www.youtube.com/watch?v=4B4Q0EZVPU8) - A simple video demonstrating maps & sets.
