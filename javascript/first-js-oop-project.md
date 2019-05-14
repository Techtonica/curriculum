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
- Follow the steps described below:

1. Create a js file `event.js`.
2. Create an empty Event array.
   ```javascript
      var event_array = new Array();
   ```
3. Create an Event class.
    ```javascript
       class Event
       {
        constructor(name, description)
        {
         this.name = name;
        this.description = description;
        }
       }
    ```
4. Now Use to class to create an object and assign values to them.
   ```javascript
      // The below statement creates an object.
      let event_obj1 = new Event("KLOS Golden Gala", "An evening with hollywood vampires");
   ```
5. Create few more objects with different value.
   ```javascript
    let event_obj2 = new Event("Skillet & Sevendust", "Victorious war tour");
    let event_obj3 = new Event("Jenny Lewis", "On the line tour 2019");
   ```
6. Now push the objects created into the array. In order to push objects in the array, do the following.
   ```javascript
      // pushing single object to an array
      event_array.push(event_obj1);
      // pushing multiple objects to an array at once
      event_array.push(event_obj1, event_obj2, event_obj3);
   ```
7. Keep checking everytime you push the element using ***console.log***.
   ```javascript
       //inorder to check whether the elements are pushed, Use Console.log
       console.log(event_array);
   ```

8. After that you have created the array now we need to write the jQuery code to iterate through it in the same js file event.js .
   - The jQuery library is a single JavaScript file, and you reference it with the HTML.
      ```html
        <head>
         <script src="jquery-3.4.0.min.js"></script>
        </head>
      ```
  
- The following code is the syntax to iterate through an array of objects.
  ```javascript
     var obj = 
     [
       {name:"KLOS Golden Gala",
        description : "An evening with hollywood vampires"},
       {name:"Jenny Lewis",
        description: "On the line tour 2019"}
     ];
    $.each( obj, function( index, value )
     {
       $.each(value, function(key, value1)
       {
         alert( key + ": " + value1 );
       });
     });
  ```
7. Below is the jQuery code to iterate through the event_array that you have already created.
    - `.each()` is used to iterate through the array of objects. Above code represents the syntax to iterate using `.each()`
    - `.html()` is used to return the HTML code from jQuery to the target element of the HTML page.
    - **event** is the target element in the below code.
      ```javascript
       $(document).ready(function()
        {
          var html = "";
          // Here index represents the position of each object and item here represents the object
          $.each(event_array, function(index, item)
           {
             //Here subItemName and subItem represents the key value pair to iterate through each object in the array
             $.each(item, function(subItemName, subItem)
              {
                html += ("<li>"+ subItem + "</li>");
             });
           });
        // insert final html into #event...
       $("#event").html(html);
       });
      ```
+ Things to notice:
   - All jQuery methods in our examples, are inside a document ready event.
   - This is to prevent any jQuery code from running before the document is finished loading(is ready).

8. Create an HTML file named `index.html`. This is the HTML file containing the div tag or that can be any other element as per the requirement.
   ```html
      <!DOCTYPE html>e an HTML file named `index.html`. This is the HTML file containing the div tag or that can be any other element as per the requirement.
   ```html
      <!DOCTYPE html>
      <html>
       <head>
         <title></title>
         <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
      </head>
      <body>
            <ul id="event">
                    <!-- EVENTS GET INSERTED HERE -->
            </ul>
     </body>
    <script src = "./event.js"></script>
    </html>
   ```

### Independent Practice

- Make changes in the structure of array like adding or removing elements or objects, to understand the iteration process.
- Go through the concept of [each](http://api.jquery.com/jquery.each/) in jQuery which will allow you to know more about array.




