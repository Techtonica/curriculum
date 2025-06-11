# **JavaScript Maps and Sets**

## **Week 3 Keywords and Questions**

(see resource on Map and Set with examples)

- What is a JS Map?
- When should I use a Map?
- What is a JS Set?
- When should I use a Set?

## **Prerequisites**

- [JavaScript 6 - Object Literals Lesson](../javascript/javascript-6-object-literals.md)

## **Motivation**

ES6 brought with it some powerful upgrades, and the inclusion of Maps and Sets are two of them.

A Map is a collection of elements where each element is stored as a Key, value pair.

- Map objects can hold both objects and primitive values as either key or value.
- You can use objects of all kinds as map keys.
- The system will not automatically convert the keys to strings as it does for object literals.
- Unlike with objects, map keys can be of any type, even objects or functions.
- With maps we can iterate in the order in which the values were added, unlike objects where there’s no guarantee about the order.

A Set is a special type collection – “set of values” (without keys), where each value may occur only once.

- The values in a set can be either simple primitives like strings or integers, or more complex object types like object literals or arrays

## **Materials**

- [Map and Set with examples](https://javascript.info/map-set-weakmap-weakset)
- [Maps in JavaScript (3 min video)](https://www.youtube.com/watch?v=hYu6TCCk8Yo) - This video gives a perfect, short rundown on how to create new Maps and set the properties within them.
- [JavaScript ES6 - Maps (3 min video)](https://www.youtube.com/watch?v=QjYk58e-8v4) - This video walks through ES6 Maps. How they are similar and different to Objects and how to use them.
- [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) - Detailed layout on maps.
- [Let's Learn ES6 - Map & Set (20 min video)](https://www.youtube.com/watch?v=4B4Q0EZVPU8) - A simple video demonstrating maps & sets.
- Reference: [geeksforgeeks.org](https://www.geeksforgeeks.org/map-in-javascript/)

## **When to use a map? And when to use an object?**

- Object is the great choice for scenarios when we only need simple structure to store data and know that all the keys are either strings or integers, because creating a plain object and accessing an object's property with a specific key is much faster than creating a map.
- Map preserves the order of its keys unlike object, and map was built with iteration in mind, so in case iteration or elements order are highly significant, consider map — it will ensure stable iteration performance in all browsers.
- Map tends to perform better in storing large sets of data, especially when keys are unknown until run time, and when all keys are the same type and all values are the same type.

## **Independent Practice**

1. **Map Basics:**
    - Create a new Map called userRoles.
    - Add three users to the map: 'Alice' with role 'admin', 'Bob' with role 'editor', and 'Charlie' with role 'viewer'.
    - Retrieve and log Alice's role to the console.
    - Check if a user named 'David' exists in the map. Log the result.
    - Iterate over userRoles and log each user's name and role.
    - What happens if you try to add 'Alice' again with a different role, say 'subscriber'? Log the map to see.
    - Remove 'Bob' from the map.
    - Log the size of the map.
    - Clear the map and log its size again.
2. **Set Basics:**
    - Create a new Set called uniqueTags.
    - Add the following tags: 'javascript', 'es6', 'nodejs', 'react', 'javascript'.
    - Log the uniqueTags set to the console. What do you notice about the duplicate 'javascript' tag?
    - Check if the tag 'es6' exists in the set. Log the result.
    - Remove the tag 'react' from the set.
    - Iterate over uniqueTags and log each tag.
    - Log the size of the set.
    - Clear the set and log its size.
3. **Map vs. Object:**
    - Create an object objCounts and a Map mapCounts.
    - Add the following key-value pairs to both: 1: 'one', true: 'yes', {id: 1}: 'first object'.
    - Log both objCounts and mapCounts. What differences do you observe in how the keys are handled, especially the boolean and object keys?
    - Try to iterate over both and log their keys and values. Note any differences in iteration order if applicable.
4. **Advanced Set Operations:**
    - Given two arrays: arr1 = \[1, 2, 3, 4, 5\] and arr2 = \[4, 5, 6, 7, 8\].
    - Use Sets to find:
        - The union of the two arrays (all unique elements from both).
        - The intersection of the two arrays (elements present in both).
        - The difference arr1 - arr2 (elements in arr1 but not in arr2).
    - Log the results of each operation.

## **Activities**

1. **Inventory Management:**
    - **Task:** Create a simple inventory system using a Map. The keys will be item names (strings), and the values will be the quantity in stock (numbers).
    - **Features:**
        - Function to add a new item or update the quantity of an existing item.
        - Function to remove an item from inventory.
        - Function to check the quantity of a specific item.
        - Function to list all items and their quantities, maintaining the order of addition.
    - **Challenge:** How would you handle an item whose key is an object (e.g., {name: 'Laptop', model: 'XPS13'})?
2. **Unique User List:**
    - **Task:** You are given a list of user IDs, some of which might be duplicates. Use a Set to store only the unique user IDs.
    - **Input:** \[101, 102, 103, 101, 104, 102, 105\]
    - **Output:** A Set containing \[101, 102, 103, 104, 105\].
    - **Extension:** Write a function that takes an array of user objects (e.g., {id: 101, name: 'Alice'}) and returns a Set of unique user _objects_. How does Set handle object uniqueness?
3. **Anagram Checker:**
    - **Task:** Write a function areAnagrams(str1, str2) that checks if two strings are anagrams of each other (i.e., they contain the same characters with the same frequencies).
    - **Hint:** You can use a Map to store character counts for each string.
    - **Example:** areAnagrams('listen', 'silent') should return true. areAnagrams('hello', 'world') should return false.
4. **Tagging System:**
    - **Task:** Simulate a tagging system for blog posts.
        - Use a Map where keys are post IDs (or titles) and values are Sets of tags associated with that post.
        - Implement functions to:
            - Add a tag to a post.
            - Remove a tag from a post.
            - Get all tags for a specific post.
            - Find all posts that have a specific tag.
    - **Discussion:** Why is a Set a good choice for storing tags for a single post?
5. **Debate: Map vs. Object for Configuration:**
    - **Scenario:** You need to store application configuration settings. Some keys might be dynamic or non-string types. The order of settings might be important for logging or display.
    - **Activity:** Divide into two groups. One group argues for using a JavaScript Object, the other for using a Map. Discuss pros and cons based on the scenario. Consider performance, ease of use, key types, and iteration order.
