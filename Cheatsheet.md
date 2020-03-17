# Cheatsheet
## Commonly used functions on [Array](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays)
### [**1. map**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

**Description:**
Creates an array by calling a specific function on each element present in the parent array.

**Syntax:**
* _array.map(function(currentValue, index, arr), thisValue)_

| Parameter | Description |
| :-------- | :---------- |
| function(currentValue,index,arr) | Required function to be run for each array element |
| thisValue | Optional. |

**Return value:** 
An Array containing the results of calling the provided function for each element in the original array.

### [**2. filter**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

**Description:**
Creates an array filled with all array elements that pass a test (provided as a function).

**Syntax:**
 * _array.filter(function(currentValue, index, arr), thisValue)_

| Parameter | Description |
| :-------- | :---------- |
| function(currentValue,index,arr) | Required function to be run for each array element |
| thisValue | Optional. |

**Return value:**
Array containing all elements that pass the test else an empty array.

**Example:**

 ```
    function isPositive(value) {
      return value > 0;
    }
    var filtered = [112, 52, 0, -1, 944].filter(isPositive);
    print(filtered);
 ```
*Output:*

    [112,52,944]
    
### [**3. reduce**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

**Description:**
reduces the array to a single value and executes provided function for each value of the array (from left-to-right).

**Syntax:**
 * _array.reduce( function(total, currentValue, currentIndex, arr), initialValue )_

 | Parameter | Description |
| :-------- | :---------- |
| function(currentValue,index,arr) | Required function to be run for each array element |
|initialValue | Optional.|

**Return value:**
returns accumulated result fron the last call of the callback function

### [**4. slice**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

**Description:**
Returns the selected elements in an array, as a new array object and selects the elements starting at the given start argument, and ends at the given end argument(excluding end argument).

**Syntax:**
 * _array.slice(start, end)_

 | Parameter | Description |
 | :-------- | :---------- |
 | start     | Optional. specifies starting index of the selection    |
 | end       | Optional. specifies ending index of the selection    |

 **Return value:**
 New array containing the selected elements.

 **Example:**
```
    var arr = [23,56,87,32,75,13];
    var new_arr = arr.slice();
    print(arr);
    print(new_arr);
```    
*Output:*

    [23,56,87,32,75,13]
    [23,56,87,32,75,13]

### [**5. splice**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

**Description:**
Adds/removes items to/from an array, and returns the removed item(s).

**Syntax:**
 * _array.splice(index, howmany, item1, ....., itemX)_

| Parameter | Description|
| :-------- | :--------- |
| index	    | Required. An integer that specifies at what position to add/remove items |
| howmany | Optional. The number of items to be removed.|
| item1, ..., itemX | Optional. The new item(s) to be added to the array |

**Return value:**
Array without the removed items.

**Example:**
```
    var languages = ['C++', 'Java', 'Html', 'Python', 'C']; 
    document.write(languages + "<br>"); 
    // Add 'Julia' and 'Php' after removing 'Html'. 
    var removed = languages.splice(2, 1, 'Julia', 'Php') 
    document.write(languages + "<br>"); 
    document.write(removed + "<br>"); 
```
*Output:*

    C++,Java,Html,Python,C
    C++,Java,Julia,Php,Python,C

### [**6. concat**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)

**Description:**
used to join two or more arrays.

**Syntax:**
 *  _array1.concat(array2, array3, ..., arrayX)_

| Parameter | Description |
| :-------- | :---------- |
| array2, array3, ..., arrayX | Required. The arrays to be joined. |

**Return value:**
joined array

**Example:**
```
    var num1 = [11, 12, 13],
    num2 = [14, 15, 16],
    num3 = [17, 18, 19];
    print(num1.concat(num2, num3));
```
*Output:*

    [11,12,13,14,15,16,17,18,19]

### [**7. join**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

**Description:**
Returns the array as a string. The elementsare separated by a specified separator. The default separator is comma (,).

**Syntax:**
 * _array.join(separator)_

| Parameter | Description |
| :-------- | :---------- |
| separator	| Optional.   | 

**Return value:**
String, representing the array values, separated by the specified separator.

**Example:**
```
    var elements = [\'geeksforgeeks\', \'gfg\']; console.log(elements.join()); 
    console.log(elements.join(\'.\')); 
    console.log(elements.join(\'-\')); 
```
*Output:*

    > \"geeksforgeeks, gfg\"
    > \"geeksforgeeks.gfg\"
    > \"geeksforgeeks-gfg\"

### [**8. push**](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

**Description:**
Adds new items to the end of an array, and returns the new length.

**Syntax:**
 * _array.push(item1, item2, ..., itemX)_

| Parameter | Description |
| :-------- | :---------- |
| item1, item2, ..., itemX | Required. The item(s) to add to the array |

**Return value:**
New length of hte array.

**Example:**
```
    var arr = [34, 234, 567, 4];
    print(arr.push(23,45,56));
    print(arr);
```
*Output:*

    7
    34,234,567,4,23,45,56

### [**9. find**](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

**Description:**
Returns the value of the first element in an array that pass a test (provided as a function).

**Syntax:**
 * _array.find(function(currentValue, index, arr),thisValue)_

| Parameter | Description |
| :-------- | :---------- |
| function(currentValue, index, arr) |	Required. A function to be run for each element in the array.|
| thisValue	| Optional. |

**Return value:**
 The array element value if any of the elements in the array pass the test, otherwise it returns undefine.

**Example:**
 ```  
    var array = [2, 7, 8, 9]; 
    var found = array.find(function(element) { 
    return element > 4; 
    }); 

    // Printing desired values. 
      console.log(found); 
```
*Output:*
    
    > 7

### [**10. indexOf**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

**Description:**
returns the position of the first occurrence of a specified value in a string.

**Syntax:**
 * _string.indexOf(searchvalue, start)_

| Parameter | Description |
| :-------- | :---------- |
| searchvalue | Required. The string to search for |
| start	      | Optional. <br>Default 0. At which position to start the search.|

**Return value:**
Number, representing the position where the specified searchvalue occurs for the first time, or -1 if it never occurs.

**Example:**
```
    print('Departed Train'.indexOf('Train'));
```
*Output:*
    
    9
    
## Commonly used functions on [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) 

### [**1. substring**](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/substring)

**Description:**
Extracts the characters in a string between "start" and "end", not including "end" itself.

**Syntax:**
 * _string.substring(start, end)_

| Parameter | Description |
| :-------- | :---------- |
|start	| Required. The position where to start the extraction. First character is at index 0 |
| end	| Optional. The position (up to, but not including) where to end the extraction. If omitted, it extracts the rest of the string|

**Return value:**
New string containing the extracted characters.

**Example:**
```
    // Taking a string as variable 
    var string = "geeksforgeeks"; 
    a = string.substring(0, 4) 
    b = string.substring(1, 6) 
    c = string.substring(5) 
    d = string.substring(0) 
  
    // Printing new string which are 
    // the part of the given string 
    document.write(a + "<br>"); 
    document.write(b + "<br>"); 
    document.write(c + "<br>"); 
    document.write(d + "<br>"); 
```
*Output:*
    
    geek
    eeksf
    forgeeks
    geeksforgeeks

### [**2. split**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)

**Description:**
Used to split a string into an array of substrings, and returns the new array.

**Syntax:**
 * _string.split(separator, limit)_

| Parameter | Description |
| :-------- | :---------- |
|separator	| Optional. Specifies the character, or the regular expression, to use for splitting the string. If omitted, the entire string will be returned (an array with only one item)|
| limit	| Optional. An integer that specifies the number of splits, items after the split limit will not be included in the array |

**Return value:**
Array containing splitted values.

**Example:**
```
    var str = 'It iS a 5r&e@@t Day.'
    var array = str.split(" ");
    print(array);
```
*Output:*

    [It,iS,a,5r&e@@t,Day.]

### [**3. toLowerCase**](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)

**Description:**
Converts a string to lowercase letters.

**Syntax:**
 * _string.toLowerCase()_

**Return value:**
A string, representing the value of a string converted to lowercase.

**Example:**
 ```   
    var str = 'It iS a Great Day.';
    var string = str.toLowerCase();
    print(string);
```
*Output:*

    it is a great day.

### [**4. trim**](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/trim)

**Description:**
Removes whitespace from both sides of a string.

**Symtax:**
 * _string.trim()_

**Return value:**
String, representing the string with removed whitespace from both ends

**Example:**
```
    var str = "GeeksforGeeks      ";
    var st = str.trim();
    print(st);
```
*Output:*
   
    GeeksForGeeks

### [**5. charAt**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)

**Description:**
Returns the character at the specified index in a string.

**Syntax:**
 * _string.charAt(index)_

**Return value:**
String, representing the character at the specified index, or an empty string if the index number is not found
**Example:**
```
    var str = 'JavaScript is object oriented language';
    print(str.charAt(9));
```  
  *Output:*

    t
    
## Many forms of for loops

### [**1. for...in**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)

**Description:**
 Loops through the properties of an object. The block of code inside the loop will be executed once for each property.

**Syntax:**
 * _for (var in object) {<br>
  code block to be executed<br>
 }_

| Parameter | Description |
| :---      | :---        |
|var	|Required. A variable that iterates over the properties of an object|
|object	| Required. The specified object that will be iterated|

**Example:**
 ```  
    const array1 = ['a', 'b', 'c'];
    for (const element of array1) {
      console.log(element);
    }
```
*Output:*

    "a"
    "b"
    "c"

### [**2.for...of**](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for...of)

**Description:**
Loops through the values of an iterable objects.

**Syntax:**
 * _for (variable of iterable) {<br>
  // code block to be executed<br>
}_

| Parameter | Description |
| :---      | :---        |
| variable | For every iteration the value of the next property is assigned to the variable. Variable can be declared with const, let, or var.|
|iterable | An object that has iterable properties.|

**Example:**
 ```  
	var languages = { first : "C", second : "Java", 
					third : "Python", fourth : "PHP", 
					fifth : "JavaScript" }; 

	// iterate through every property of the 
	// object languages and print all of them 
	// using for..in loops 
  
	for (itr in languages) 
	{ 
		document.write(languages[itr] + "<br >"); 
	} 
```
*Output:* 
    
    C
    Java
    Python
    PHP
    JavaScript

### [**3. for loop**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement)

**Description:**
Loops through a block of code a number of times based on whether a given condition testes to ve true or false.

**Syntax:**
 * _for (statement 1; statement 2; statement 3) {<br>
  // code block to be executed<br>
}_

| Parameter | Description |
| :---      | :---        |
| _statement 1_ : variable declaration| Executed (one time) before the execution of the code block.|
| _statement 2_ : test condition| Defines the condition for executing the code block. |
| _statement 3_ : change in variable| Executed (every time) after the code block has been executed. |

**Example:**
 ```
    var i; 

    for (i = 0; i < 10; i++) 
    { 
    	document.write("Hello World!\n"); 
    }
 ```
This will print *Hello World* on the screen 10 times. 

### [**4. .forEach**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

**Description:**
Calls a function once for each element in an array, in order.

**Symtax:**
 * _array.forEach(function(currentValue, index, arr), thisValue)_

| Parameter | Description |
| :---      | :---        |
| function(currentValue, index, arr)| Required. A function to be run for each element in the array.|
| thisValue	Optional. |

**Example:**
```
    const items = [1, 29, 47];
    const copy = [];

    items.forEach(function(item){
    copy.push(item*item);
    });
    print(copy);
```
*Output :* It squares each number in the array *items* .
        
        1,841,2209
