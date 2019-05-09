# Mini Project: Object Oriented Programming in JS

### Projected Time

Total: 65 min - 80min
- Independent Practice: 15 min
- Materials: 25 min
- Lesson: 30 min

### Prerequisites

- [Java script lesson 7](../javascript/javascript-7-oop.md)


### Objectives

- To use the new JS object-oriented programming skills.
- To create a few event objects and push them to an array.
- Use jQuery to display the list of events to an html page.

### Specific Things To Teach

- Creating event array.
- Iterating through the array.
- Displaying array items in HTML page.

### Materials

- [Documentation on each statement of jQuery](http://api.jquery.com/jquery.each/)
- [Arrays in javaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [.html function of jQuery](http://api.jquery.com/html/)

### Lesson

- The below example is the just a part of a mini project that will help you to learn basic concept about arrays in javaScript and iterating through the arrays. The below code will allow you to learn about displaying the array objects in the web pages.
- Once you are done with the code, run the index.html file in your browser to check the result.
- Keep on refreshing the browser to keep track of the changes you make everytime.

1. Create a js file `event.js`. 
2. Create an empty Event array.
3. Create an Event object and push the object to the array. In order to push objects in the array, do the following.

```javascript
var EventArray = new Array();
var EventObj =
{"name":"KLOS Golden Gala",
 "description": "An evening with hollywood vampires."};

EventObj.push(EventObj);
```
4. Similarly, push few more event objects to the array.
5. The EventArray should be like the below after pushing more objects.
```javascript
 EventArray = [
  {name: "KLOS Golden Gala",
   description: "An evening with hollywood vampires."},
  {name: "Skillet & Sevendust",
   description: "Victorious war tour."},
  {name: "Jenny Lewis",
   description: "On the line tour 2019."},
]
```
- Working with Event Class.
  - You can also try creating an event class and than enter the details.
  - You can try the belo code for the same.
```javascript
  class Event
  {
   constructor(name, description)
    {
    this.name = name;
    this.description = description;
    }
  }
  let Event = new Event("KLOS Golden Gala", "An evening with hollywood vampires");
```

6. keep checking everytime you push the element using ***console.log***.
```javascript
  //inorder to check whether the elements are pushed, Use Console.log
 console.log(EventArray);
```

7. After that you have created the array now we need to write the jQuery code to iterate through it in the same js file event.js .
8. The jQuery library is a single JavaScript file, and you reference it with the HTML.
```html
<head>
<script src="jquery-3.4.0.min.js"></script>
</head>
```

- If an object is used as the collection, the callback is passed a key-value pair each time:
```javascript
 var obj = {
  "KLOS Golden Gala": "An evening with hollywood vampires",
  "Jenny Lewis": "On the line tour 2019"};
$.each( obj, function( key, value )
{
  alert( key + ": " + value );
});
```
9. Below is the jQuery code to iterate through the array events that you are asked to create.
  - `.each()` is used to iterate through the array of objects. Above code represents the syntax to iterate using `.each()`
  - `.html()` is used to return the HTML code from jQuery to the target element of the HTML page.
  - **event** be the target element in the below code.

  ```javascript
   $(document).ready(function()
   {
     var html = "";
     $.each(events, function(itemName, item)
      {
        $.each(item, function(subItemName, subItem)
         {
             html += ("<h1>"+ subItem + "</h1>");
         });
      });
        // insert final html into #events...
   $("#event").html(html);
 });```

- You might have noticed that all jQuery methods in our examples, are inside a document ready event.
- This is to prevent any jQuery code from running before the document is finished loading(is ready).

10. Create an HTML file named `index.html`. This is the HTML file containing the div tag or that can be any other element as per the requirement.

```html
<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    </head>
    <body>
            <div id="events">
                    <!-- EVENTS GET INSERTED HERE -->
            </div>
    </body>
    <script src = "./event.js"></script>
</html>
```



### Independent Practice

- Make changes in the structure of array like adding or removing elements or objects, to understand the iteration process.
- Go through the concept of [each](http://api.jquery.com/jquery.each/) in jQuery which will allow you to know more about array.




