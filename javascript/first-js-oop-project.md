# Mini Project: Object Oriented Programming in JS

### Projected Time

Total: 65-80 min
- Independent Practice: 15 min
- Materials: 25 min
- Lesson: 30 min

### Prerequisites

- [JavaScript lesson 7](../javascript/javascript-7-oop.md)


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
- [Arrays in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [.html function of jQuery](http://api.jquery.com/html/)
- [.each function in jQuery](http://api.jquery.com/jquery.each/)

### Lesson

This mini project will help you to learn basic concepts about arrays in JavaScript and iterating through the arrays. The below code will show you how to display the array objects in a web page.
- Once you are done with the code, run the index.html file in your browser to check the result.
- Keep on refreshing the browser to keep track of the changes you make everytime.
- Follow the steps described below:

1. Create an HTML file named `index.html`. This is the HTML file that contains the unordered list(ul) element where the final output will be displayed.
   ```html
      <!DOCTYPE html>
      <html>
       <head>
         <title></title>
         <!--  The jQuery library is a single JavaScript file, and you reference it with the HTML.-->
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
2. Create a JS file `event.js`.
3. Create an empty Event array.
   ```javascript
      const event_array = new Array();
   ```
4. Create an Event class.
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
5. Now Use this class to create an object and assign values to them.
   ```javascript
      // The below statement creates an object.
      const event_obj1 = new Event("KLOS Golden Gala", "An evening with hollywood vampires");
   ```
6. Create few more objects with different value.
   ```javascript
    const event_obj2 = new Event("Skillet & Sevendust", "Victorious war tour");
    const event_obj3 = new Event("Jenny Lewis", "On the line tour 2019");
   ```
7. Now push the objects created into the array. In order to push objects in the array, do the following.
   ```javascript
      // pushing single object to an array
      event_array.push(event_obj1);
      // pushing multiple objects to an array at once
      event_array.push(event_obj1, event_obj2, event_obj3);
   ```
8. Keep checking everytime you push the element using ***console.log***.
   ```javascript
       //in order to check whether the elements are pushed, Use Console.log
       console.log(event_array);
   ```

9. After that you have created the array now we need to write the jQuery code to iterate through it in the same js file event.js .
  
10. Below is the jQuery code to iterate through the event_array that you have already created.
    - `.each()` is used to iterate through the array of objects. Above code represents the syntax to iterate using `.each()`
    - `.html()` is used to return the HTML code from jQuery to the target element of the HTML page.
    - **event** is the target element in the below code.
      ```javascript
       $(document).ready(function()
        {
          let html = "";
          $.each(event_array, function(index, item)
           {
            html+= `<li>${item.name} - ${item.description}</li>`;
           });
        // insert final html into #event...
       $("#event").html(html);
       });
      ```
+ Things to notice:
   - All jQuery methods in our examples, are inside a document ready event.
   - This is to prevent any jQuery code from running before the document is finished loading(is ready).


11. Once you are done with the above code, you will get an unordered list of all the events along with the descriptions in the web page as the output of your code.
  - The output on the web page will finally show the following:
     - KLOS Golden Gala - An evening with hollywood vampires
     - Skillet & Sevendust - Victorious war tour
     - Jenny Lewis - On the line tour 2019
12. Finally you are done with the project.

### Independent Practice

- Make changes in the structure of array like adding or removing elements or objects, to understand the iteration process.
