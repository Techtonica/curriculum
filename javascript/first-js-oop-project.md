# Mini Project: Object Oriented Programming in JS

#### Due by 12:00pm PST the day after assigned

### Prerequisites

- [JavaScript lesson 7](../javascript/javascript-7-oop.md)

### Objectives

- Use the new JS object-oriented programming skills to create an "Event" class.
- Write functions on the "Event" class that will:
  - allow the event host to add tickets with prices and "ticket type" (e.g. regular, VIP, mezzanine, balcony, etc)
  - allows a user to input a price range they are willing to pay to see what ticket types are available to them
- Create a few event objects
- Push the event objects into an array and use [DOM manipulation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents) to display the list of events to an html page.

### Specific Things to Learn

- Creating event array
- Iterating through the array
- Displaying array items in HTML page

### Materials

- [DOM manipulation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
- [Arrays in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

### Lesson

This mini project will help you to learn basic concepts about objects in JavaScript. The below code will show you how to display the objects in a web page.

- Once you are done with the code, run the index.html file in your browser to check the result.
- Keep on refreshing the browser to keep track of the changes you make every time.
- Follow the steps described below:

1. Create an HTML file named `index.html`. This is the HTML file that contains the unordered list(ul) element where the final list of events will be displayed.
   ```html
   <!DOCTYPE html>
   <html>
     <head>
       <title></title>
     </head>
     <body>
       <h1>Events:</h1>
       <ul id="event">
         <!-- EVENTS GET INSERTED HERE -->
       </ul>
     </body>
     <script src="./event.js"></script>
   </html>
   ```
1. Create a JS file `event.js`.

1. Create an Event class.
   ```javascript
   class Event {
     constructor(name, description) {
       this.name = name;
       this.description = description;
       this.availableTickets = [];
     }
   }
   ```
1. Now use this class to create an object and assign values to them.
   ```javascript
   // The below statement creates an object.
   const eventObj1 = new Event(
     'KLOS Golden Gala',
     'An evening with hollywood vampires'
   );
   ```
1. Create few more objects with different values.
   ```javascript
   const eventObj2 = new Event('Skillet & Sevendust', 'Victorious war tour');
   const eventObj3 = new Event('Jenny Lewis', 'On the line tour 2019');
   ```
1. Create an empty Event array.
   ```javascript
   const eventArray = new Array();
   ```
1. Now push the objects created into the array. In order to push objects in the array, do the following.
   ```javascript
   // pushing single object to an array
   eventArray.push(eventObj1);
   // pushing multiple objects to an array at once
   eventArray.push(eventObj1, eventObj2, eventObj3);
   ```
1. Keep checking every time you push the element using **_console.log_**.

   ```javascript
   // in order to check whether the elements are pushed, use console.log
   console.log(eventArray);
   ```

1. After you have created the array now we need to write the code to iterate through it in the same js file `event.js` .

   Below is the code to iterate through the eventArray that you have already created.

   - [`forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) is used to iterate through the array of objects.
   - [`.innerHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML) is used to return the HTML code from js file to the target element of the HTML page.
   - **event** is the target element in the below code.
     ```javascript
     document.addEventListener('DOMContentLoaded', () => {
       // Handler when the DOM is fully loaded
       let html = '';
       eventArray.forEach((item) => {
         html += `<li>${item.name} - ${item.description}`;
       });
       document.querySelector('#event').innerHTML = html;
     });
     ```

   > Note that all methods in this examples are inside `DOMContentLoaded` event handler. This is to prevent any javascript code from running before the document is finished loading (is ready).

1. Once you are done with the above code, you will get an unordered list of all the events along with the descriptions in the web page as the output of your code. The output on the web page should show the following:

   - KLOS Golden Gala - An evening with Hollywood vampires
   - Skillet & Sevendust - Victorious war tour
   - Jenny Lewis - On the line tour 2019

1. Now that you have the basic class working, let's add more functionality to the app. We're going to add the ability for events to have different ticket types with different prices. Start by creating a class `TicketType` that can store the name and price of a ticket type (for example, maybe "Balcony" tickets are \$35).

1. Now add a function on the Event class called `addAvailableTickets` that will create a ticket type for the event. The function should accept two parameters. The first parameter will be the name of the ticket type, and the second parameter will be the price of the ticket. The method should look like this when it is called:

   ```
      eventObj1.addAvailableTickets("human", 299);
      eventObj1.addAvailableTickets("vampire", 99);
   ```

   > Hint: Use Event's `availableTickets` property to store ticket types for the event.

1. Now that your class has the capability of adding tickets, go ahead and use that function to add different types to every single one of your events. Here are some more examples for how it will be called:

   ```
      eventObj2.addAvailableTickets("General Admission", 25)
      eventObj2.addAvailableTickets("Floor Seating", 80)

      eventObj3.addAvailableTickets("Orchestra", 300)
      eventObj3.addAvailableTickets("Mezzanine", 200)
      eventObj3.addAvailableTickets("Balcony", 100)

   ```

1. Add a function to `Event` called `allTickets` that returns a string representing all ticket types and prices, like: `All tickets: 1. Orchestra ($300) 2. Mezzanine ($200) 3. Balcony ($100)`

1. Now, modify your code to call the `allTickets` function and display the ticket types. When you run your code, it should now look something like this:

   - KLOS Golden Gala - An evening with Hollywood vampires - All tickets: 1. human ($299) 2. vampire ($99)
   - Skillet & Sevendust - Victorious war tour - All tickets: 1. General Admission ($25) 2. Floor Seating ($80)
   - Jenny Lewis - On the line tour 2019 - All tickets: 1. Orchestra ($300) 2. Mezzanine ($200) 3. Balcony (\$100)

1. Now let's add another function. Write a function on Event named `searchTickets` that will take in two values (to specify the lower and upper bounds of a price range), and return a list of ticket types available. The method should look like this when it is called:
   `eventObj3.searchTickets(0, 250)`
   and will return the string: `Eligible tickets: 1. Balcony ($100) 2. Mezzanine ($200)` for that particular call. If no tickets are available in that range, it will instead return: `No tickets available.`
   Use console.log to test your function and make sure it works for different inputs.

1. Now, view the results of calls to this function by modifying your code to call the function and display the matched tickets instead of all tickets. You can hardcode the price range for now. When you run your code, it should now look something like this:

   - KLOS Golden Gala - An evening with Hollywood vampires - Eligible tickets: 1. vampire (\$99)
   - Skillet & Sevendust - Victorious war tour - Eligible tickets: 1. General Admission ($25) 2. Floor Seating ($80)
   - Jenny Lewis - On the line tour 2019 - Eligible tickets: 1. Balcony (\$100)

   The above output should be identical to yours if you added the same tickets that were added in this tutorial _and_ you passed in the parameters 0 and 100 into your function call. Try it out with different parameters.

### Challenge

Try doing at least one of the below extensions:

- Update the code that specifies price range to ensure that your function works for edge cases (such as 0, negative numbers, same numbers e.g. 100, 100, etc.)
- Try adding additional attributes to the Event class (for example, event date)
- Add another function that shows the cheapest ticket for the event, and display it on the HTML page
- Add a UI that lets the user specify their price range
