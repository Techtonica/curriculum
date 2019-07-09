# Mini Project: Object Oriented Programming in JS

### Projected Time

Total: 65-80 min
- Independent Practice: 15 min
- Materials: 25 min
- Lesson: 30 min

### Prerequisites

- [JavaScript lesson 7](../javascript/javascript-7-oop.md)


### Objectives

- Use the new JS object-oriented programming skills to create an "Event" class.
- Write functions on the "Event" class that will:
   - allow the event host to add tickets with prices and "ticket type" (e.g. regular, VIP, mezzanine, balcony, etc)
   - allows a user to input a price range they are willing to pay to see what ticket types are available to them
- Create a few event objects
- Push the event objects into an array and use jQuery to display the list of events to an html page.

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

This mini project will help you to learn basic concepts about objects in JavaScript. The below code will show you how to display the objects in a web page.
- Once you are done with the code, run the index.html file in your browser to check the result.
- Keep on refreshing the browser to keep track of the changes you make every time.
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
1. Create a JS file `event.js`.

1. Create an Event class.
    ```javascript
    class Event {
      constructor(name, description) {
        this.name = name;
        this.description = description;
        this.availableTickets = []
      }
    }
    ```
1. Now use this class to create an object and assign values to them.
   ```javascript
   // The below statement creates an object.
   const event_obj1 = new Event("KLOS Golden Gala", "An evening with hollywood vampires");
   ```
1. Now add a function on the class called `addAvailableTickets` to create a ticket type, that will accept two parameters. The method should look like this when it is called:
```javascript
   event_obj1.addAvailableTickets("human", 299);
   event_obj1.addAvailableTickets("vampire", 99);
```
\**Hint: You might want to create another class, "Ticket" with two properties on it
1. Create few more objects with different values.
   ```javascript
   const event_obj2 = new Event("Skillet & Sevendust", "Victorious war tour");
   event_obj2.addAvailableTickets("General Admission", 25)
   event_obj2.addAvailableTickets("Floor Seating", 80)
   
   const event_obj3 = new Event("Jenny Lewis", "On the line tour 2019");
   event_obj2.addAvailableTickets("Orchestra", 300)
   event_obj2.addAvailableTickets("Mezzanine", 200)
   event_obj2.addAvailableTickets("Balcony", 100)
   ```
1. Create an empty Event array.
   ```javascript
   const event_array = new Array();
   ```
1. Now push the objects created into the array. In order to push objects in the array, do the following.
   ```javascript
   // pushing single object to an array
   event_array.push(event_obj1);
   // pushing multiple objects to an array at once
   event_array.push(event_obj1, event_obj2, event_obj3);
   ```
1. Keep checking everytime you push the element using ***console.log***.
   ```javascript
   // in order to check whether the elements are pushed, use console.log
   console.log(event_array);
   ```
1. Write a function named `matchTickets` that will take in two values for a price range, and return a list of ticket types available. The method should look like this when it is called:
```javascript
event_obj3.matchedTickets(0, 250)
```
and will return the string: `Eligible tickets: 1. Balcony 2. Mezzanine` for that particular call. If no tickets are available in that range, it will instead return: `No tickets available.`

1. After you have created the array now we need to write the jQuery code to iterate through it in the same js file event.js .
  
   Below is the jQuery code to iterate through the event_array that you have already created.
    - `.each()` is used to iterate through the array of objects. Above code represents the syntax to iterate using `.each()`
    - `.html()` is used to return the HTML code from jQuery to the target element of the HTML page.
    - **event** is the target element in the below code.
      ```javascript
      $(document).ready(function() {
        let html = "";
        $.each(event_array, function(index, item) {
          html+= `<li>${item.name} - ${item.description} - ${item.matchedTickets(0, 100)}</li>`;
        });
        // insert final html into #event...
        $("#event").html(html);
      });
      ```
   + Note that all jQuery methods in our examples are inside a document ready event. This is to prevent any jQuery code from running before the document is finished loading (is ready).


1. Once you are done with the above code, you will get an unordered list of all the events along with the descriptions in the web page as the output of your code. The output on the web page should show the following:
- KLOS Golden Gala - An evening with hollywood vampires - Eligible Tickets: 1. vampire
- Skillet & Sevendust - Victorious war tour - Eligible Tickets: 1. General Admission 2. Floor Seating
- Jenny Lewis - On the line tour 2019 - Eligible Tickets: 1. Balcony

### Independent Practice

- Update the jquery line that specifies price range to ensure that your function works for edge cases
- Try adding additional attributes to the Event class (for example, event date) 
