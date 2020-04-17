# Cheatsheet
## Commonly used functions on [Array](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays)
### [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

#### Description
Creates an array by calling a specific function on each element present in the parent array.

#### Syntax
```javascript
array.map(function(currentValue)
```

| Parameter | Description |
| :-------- | :---------- |
| function(currentValue) | Required function to be run for each array element |

#### Return value 
An Array containing the results of calling the provided function for each element in the original array.

### [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

#### Description
Creates an array filled with all array elements that pass a test (provided as a function).

#### Syntax
 ```javascript
 array.filter(function(currentValue)
 ```

| Parameter | Description |
| :-------- | :---------- |
| function(currentValue) | Required function to be run for each array element |

#### Return value
Array containing all elements that pass the test else an empty array.

#### Example
```javascript
let filtered = [112, 52, 0, -1, 944].filter(function(value){
  return value > 0;})
```
*Output:*

    [112,52,944]
    
### [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

#### Description
reduces the array to a single value and executes provided function for each value of the array (from left-to-right).

#### Syntax
 ```javascript
 array.reduce( function(total, currentValue, currentIndex, arr), initialValue )
 ```

| Parameter | Description |
| :-------- | :---------- |
| function(currentValue) | Required function to be run for each array element |

#### Return value
returns accumulated result fron the last call of the callback function.

#### Example
```javascript
const array1 = [1, 2, 3, 4];
const reducer = function(accumulator, currentValue)
{
  return accumulator + currentValue;
}
console.log(array1.reduce(reducer));
console.log(array1.reduce(reducer, 5));
```
*Output:*
    
    10
    15

### [slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

#### Description
Returns the selected elements in an array, as a new array object and selects the elements starting at the given start argument, and ends at the given end argument(excluding end argument).

#### Syntax
 ```javascript
 array.slice(start, end)
 ```

 | Parameter | Description |
 | :-------- | :---------- |
 | start     | Optional. specifies starting index of the selection    |
 | end       | Optional. specifies ending index of the selection    |

 #### Return value
 New array containing the selected elements.

 #### Example
```javascript
let arr = [1,2,3,4,5,6];
let new_arr = arr.slice(3);
```    
*Output:*

    [1,2,3,4,5,6]
    [4,5,6]

### [splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

#### Description
Adds/removes items to/from an array, and returns the removed item(s).

#### Syntax
 ```javascript
 array.splice(index, howmany, item1, ....., itemX)
 ```

| Parameter | Description|
| :-------- | :--------- |
| index	    | Required. An integer that specifies at what position to add/remove items |
| howmany | Optional. The number of items to be removed.|
| item1, ..., itemX | Optional. The new item(s) to be added to the array |

#### Return value
Array without the removed items.

#### Example
```javascript
const languages = ['C++', 'Java', 'Html', 'Python', 'C']; 
// Add 'Julia' and 'Php' after removing 'Html'. 
const removed = languages.splice(2, 1, 'Julia', 'Php') 
```
*Output:*

    C++,Java,Html,Python,C
    C++,Java,Julia,Php,Python,C

_**Note**_
| splice | slice |
| :---  | :---   |
| Returns the removed item(s) in an array| Returns the selected element(s) in an array, as a new array object|
| Changes the original array| Doesn’t change the original array|
| Can take n number of arguments(1 required)| Can take 2 arguments(1 required)|


### [concat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)

#### Description
Used to add a single item to an array(or to add two or more arrays).

#### Syntax
 ```javascript
 array1.concat(item)
 ```
 _or_
 ```javascript
 array1.concat(array2, array3, ..., arrayX)
 ```
 
| Parameter | Description |
| :-------- | :---------- |
| array2, array3, ..., arrayX | Required. The arrays to be joined. |

#### Return value
Joined array

#### Example
```javascript
const num1 = [1,2,3],
num2 = [4,5,6],
num3 = 7;
console.log(num1.concat(num2,num3));
```
*Output:*

    [1,2,3,4,5,6,7]

_*Note*_
| concat | .push |
| :---   | :---  |
| Adds elements to the end of an array| Adds element or merges arrays|
| Returns the new length of the array| Returns a new array|
    
### [join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

#### Description
Returns the array as a string. The elementsare separated by a specified separator. The default separator is comma (,).

#### Syntax
 ```javascript
 array.join(separator)
 ```

| Parameter | Description |
| :-------- | :---------- |
| separator | Optional.   | 

#### Return value
String, representing the array values, separated by the specified separator.

#### Example
```javascript
const languages = ['C++', 'Java', 'Html', 'Python', 'C']; 
languages.join(); 
languages.join('.'); 
languages.join('-'); 
```
*Output:*

    C++,Java,Html,Python,C
    C++.Java.Html.Python.C
    C++-Java-Html-Python-C
 
### [push](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

#### Description
Adds new items to the end of an array, and returns the new length.

#### Syntax
 ```javascript
 array.push(item1, item2, ..., itemX)
 ```

| Parameter | Description |
| :-------- | :---------- |
| item1, item2, ..., itemX | Required. The item(s) to add to the array |

#### Return value
New length of the array.

#### Example
```javascript
let arr = [1,2,3,4,5];
console.log(arr.push(6,7,8));
```
*Output:*

    8
    [1,2,3,4,5,6,7,8]

### [find](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

#### Description
Returns the value of the first element in an array that pass a test (provided as a function).

#### Syntax
 ```javascript
 array.find(function(currentValue)
 ```

| Parameter | Description |
| :-------- | :---------- |
| function(currentValue) | Required. A function to be run for each element in the array.|

#### Return value
 The array element value if any of the elements in the array pass the test, otherwise it returns 'undefined'.

#### Example
```javascript  
 let array = [1,3,5,7,9]; 
 const found = array.find(function(element){
   return element > 4;
 })
// Printing desired value. 
```
*Output:*
 
    5

### [indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

#### Description
returns the position of the first occurrence of a specified value in a string.

#### Syntax
 ```javascript
 string.indexOf(searchvalue, start)
 ```

| Parameter | Description |
| :-------- | :---------- |
| searchvalue | Required. The string to search for |
| start	      | Optional. <br>Default 0. At which position to start the search.|

#### Return value
Number, representing the position where the specified searchvalue occurs for the first time, or -1 if it never occurs.

#### Example
```javascript
console.log('Departed Train'.indexOf('Train'));
```
*Output:*
    
    9
    
## Common String Functions 
[Full Mozilla MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) 

### [substring](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/substring)

#### Description
Extracts the characters in a string between "start" and "end", not including "end" itself.

#### Syntax
 ```javascript
 string.substring(start, end)
 ```

| Parameter | Description |
| :-------- | :---------- |
| start	| Required. The position where to start the extraction. First character is at index 0 |
| end	| Optional. The position (up to, but not including) where to end the extraction. If omitted, it extracts the rest of the string|

#### Return value
New string containing the extracted characters.

#### Example
```javascript
// Taking a string as variable 
const string = "JavaScriptCheatsheet"; 
a = string.substring(0, 4) 
b = string.substring(1, 6) 
c = string.substring(5) 
d = string.substring(0) 
// Printing new string which are 
// the part of the given string 
```
*Output:*
    
    Java
    avaSc
    criptCheatsheet
    JavaScriptCheatsheet

_*Note*_
| array.slice() | string.substring() |
| :--- | :--- |
| Displays selected array elements | Displays selected part of string| 
| Returns new array| Returns new string|

### [split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)

#### Description
Used to split a string into an array of substrings, and returns the new array.

#### Syntax
 ```javascript
 string.split(separator, limit)
 ```

| Parameter | Description |
| :-------- | :---------- |
|separator	| Optional. Specifies the character, or the regular expression, to use for splitting the string. If omitted, the entire string will be returned (an array with only one item)|
| limit	| Optional. An integer that specifies the number of splits, items after the split limit will not be included in the array |

#### Return value
Array containing splitted values.

#### Example
```javascript
let str = 'It iS a great Day.'
let array = str.split(" ");
```
*Output:*

    ["It","iS","a","great","Day."]

### [toLowerCase](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)

#### Description
Converts a string to lowercase letters.

#### Syntax
 ```javascirpt
 string.toLowerCase()
 ```

#### Return value
A string, representing the value of a string converted to lowercase.

#### Example
```javascript   
const str = 'It iS a Great Day.';
const string = str.toLowerCase();
```
*Output:*

    it is a great day.

### [trim](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/trim)

#### Description
Removes whitespace from both sides of a string.

#### Syntax
 ```javascript
 string.trim()
 ```
 
#### Return value
String, representing the string with removed whitespace from both ends

#### Example
```javascript
const str = "     \"JavaScript\"      ";
const st = str.trim();
```
*Output:*
   
    "Javascript"

### [charAt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)

#### Description
Returns the character at the specified index in a string.

#### Syntax:
```javascript
string.charAt(index)
```

#### Return value
String, representing the character at the specified index, or an empty string if the index number is not found

#### Example:
```javascript
const str = 'JavaScript is object oriented language';
console.log(str.charAt(9));
```  
*Output:*

    t
    
## For Loop Variants

### [for...in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
#### Syntax
 ```javascript
 for (var in object)
 {
    //code block to be executed
 }
 ```
#### Example
 ```javascript  
 const array1 = ['a', 'b', 'c'];
 for (const element in array1) {
   console.log(element);
 }
```
*Output:*

    "a"
    "b"
    "c"

### [for...of](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for...of)

#### Description
Loops through the values of an object.

#### Syntax
 ```javascript
 for (variable of object) 
 {
    // code block to be executed
 }
 ```

#### Example
```javascript  
const languages = { first : "C", second : "Java", 
    third : "Python", fourth : "PHP", 
       	    fifth : "JavaScript" }; 
// iterate through every property of the 
// object languages and print all of them 
// using for..in loops 
for (itr in languages) 
 { 
  console.log(languages[itr]); 
 } 
```
*Output:* 
    
    C
    Java
    Python
    PHP
    JavaScript

### [for loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement)

#### Description
Traditional index-based loop as found in many languages.

#### Syntax
```javascript
for (statement 1; statement 2; statement 3) 
{
 	// code block to be executed
}
```

#### Example
```javascript
const i; 
for (i = 0; i < 10; i++) 
{ 
	console.log("Hello World!\n"); 
}
```
This will print *Hello World* on the screen 10 times. 

### [.forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

#### Description
Calls a function once for each element in an array, in order.

#### Syntax
```javascript
array.forEach(function(currentValue)
```

| Parameter | Description |
| :---      | :---        |
| function(currentValue)| Required. A function to be run for each element in the array.|

#### Example:
```javascript
const items = [1, 29, 47];
const copy = [];
items.forEach(function(item){
 copy.push(item*item);
});
```
*Output :* It squares each number in the array *items* .
        
        1,841,2209
