# Short mini project to prepare apprentices for their first JS OOP project

### Projected Time

Total: 65 min- 80min
- Lesson: 30 min
- Independent Practice: 15 min
- Materials: 25 min

### Prerequisites

- [Java script lesson 7](/javascript/javascript-7.md)


### Objectives

- To  use the new JS object-oriented programming skills to create a few event objects, push them to an array, then use jQuery to display the list of events to an html page.

### Specific Things To Teach

- creating event array.
- iterating through the array.
- Displaying array items in HTML page.

### Materials

- [Documentation on each statement of jquery](http://api.jquery.com/jquery.each/)
- [Arrays in javascript](https://www.w3schools.com/js/js_arrays.asp)
- [.html function of jquery](https://www.w3schools.com/jquery/html_html.asp)

### Lesson

- Create a js file ***index.js***. Starting with the project, first we need to create an empty array.
```javascript
  var events = new events();
```

- Begining with pushing single items to the array, you need to use ***.push***.
```javascript
 events.push("Java");
 events.push("C++","C");
 //inorder to check whether the elements are pushed, Use Console.log
 console.log(events);
```
- keep checking everytime you push the element using ***console.log***.
- In order to push objects in the array, do the following.
```javascript
 var obj ={"1":"name"};
 events.push(obj);
```
- Now try pushing the below object to your events array.
```javascript
  var events = [{name: "HTML Study Group",
description: "Beginners can study HTML together in a cozy environment"},
{name: "CSS Study Group",
description: "Beginners can study CSS together in a cozy environment"},
{name: "JS Study Group",
description: "Beginners can study JavaScript together in a cozy environment"},
{name: "GDG Bootcamp on JavaScript",
description: "One day session on JavaSript"},
]
```
- After that you have created the array now we need to write the jquery code to iterate through it in the same js file indesx.js .
- The jQuery library is a single JavaScript file, and you reference it with the HTML.
```html
<head>
<script src="jquery-3.4.0.min.js"></script>
</head>
```
- You might have noticed that all jQuery methods in our examples, are inside a document ready event.
- This is to prevent any jQuery code from running before the document is finished loading (is ready).
- If an object is used as the collection, the callback is passed a key-value pair each time:
```javascript
 var obj = {
  "flammable": "inflammable",
  "duh": "no duh"
};
$.each( obj, function( key, value ) {
  alert( key + ": " + value );
});
```
- Below is the jquery code to iterate through the array events that you are asked to create.
- ***.each()*** is used to iterate through the array of objects. Above code represents the  syntax to iterate using ***.each()***
- The ***.html()*** function is used to return the html code from jqeury to the target element of the HTML page.
  - "Videos" be the target element in the below code.

  ```javascript
   $(document).ready(function(){
    var html = "";
    $.each(events, function(itemName, item){
        $.each(item, function(subItemName, subItem){
             html += ("<h1>"+ subItem + "</h1>"); });
        });
        // insert final html into #videos...
    $("#videos").html(html); });```

- Create the html file name ***index.html***. 
- This is the HTML file containing the div tag or that can be any other element as per the requirement.

```html
<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    </head>
    <body>
            <div id="videos">
                    <!-- VIDEOS GET INSERTED HERE -->
            </div>
    </body>
    <script src = "./iterate.js"></script>
</html>
```

- The above example is the just a part of a mini project that will help you to learn basic concept about arrays in javascript and iterating through the arrays. The above code will allow you to learn about displaying the array objects in the web pages.
- Once you are done with the code, run the index.html file in your browser to check the result.
- Keep on refreshing the browser to keep track of the changes you make everytime.

### Independent Practice

- Make changes in the structure of array to understand the iteration process.
- Go through the concept of "each" in jquery which will allow you to know more about jquery.




