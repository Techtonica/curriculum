# Javascript Maps

## Projected Time

30-45 minutes

## Prerequisites

- [Javascript 6 Lesson](https://github.com/Techtonica/curriculum/blob/master/javascript/javascript-6-object-literals.md)

## Motivation

Map object provided by ES6. Map is a collection of elements where each element is stored as a Key, value pair. Map object can hold both objects and primitive values as either key or value.

## Objectives

**Participants will be able to:**

- Learn maps.
- Learn Sets.
- Know the difference between maps and objects.
- Create and use maps & sets.

## Specific Things To Teach

- Maps.
- Sets.
- Maps and objects compared.

## Materials

- [JavaScript ES6 - Maps (3 min video)](https://www.youtube.com/watch?v=QjYk58e-8v4) - This video walks through ES6 Map's. How they are similar and different to Objects and how to use them!

## Lesson

**Maps** are a new object type that allow to store collections of key-value pairs. Unlike with objects, map keys can be of any type, even objects or functions. With maps we can iterate in the order in which the values were added, unlike objects where there’s no guarantee about the order.

* Syntax:<br>
  	```javascript
	new Map([iterable]);
	```

* The main methods are:
	- **new Map()** – creates the map.
	- **map.set(key, value)** – stores the value by the key.
	- **map.get(key)** – returns the value by the key, undefined if key doesn’t exist in map.
	- **map.has(key)** – returns true if the key exists, false otherwise.
	- **map.delete(key)** – removes the value by the key.
	- **map.clear()** – clears the map.
	- **map.size** – returns the current element count.

* Example:<br>
	```javascript
	let things = new Map();
	things.set('🚗', 'Car');
	things.set('🏠', 'House');
	things.size; // 2
	things.clear();
	things.size; // 0
	```

* The differences from a regular Object:

	- Any keys, objects can be keys.
	- Iterates in the insertion order.
	- Additional convenient methods, the size property.	

**Sets** are a new object type with **ES6 (ES2015)** that allow to create collections of unique values. The values in a set can be either simple primitives like strings or integers, or more complex object types like object literals or arrays.

* Syntax:<br>
	```javascript
  	new Set([iterable]);
	```

* Example:<br>
	```javascript
 	let animals = new Set();
 	animals.add('🐷');
 	animals.add('🐼');
 	console.log(animals.size); // 2
 	animals.add('🐼');
 	console.log(animals.size); // 2
 	animals.delete('🐼');
 	console.log(animals.size); // 1
	```

## Independent Practice

Create a map and try performing set, get, clear, delete, has etc methods on it.

## Supplemental Materials
- [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) - Detailed layout on maps.
- [Let's Learn ES6 - Map & Set (20 min video)](https://www.youtube.com/watch?v=4B4Q0EZVPU8) - A simple video demonstrating maps & sets.
