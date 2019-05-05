# Short mini project to prepare apprentices for their first JS OOP project

### Projected Time

Total: 65 min- 80min
- Lesson: 20 min
- Guided Practice: 15 min
- Independent Practice: 15 min
- Materials: 20 min

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

- Below is the example of code to create a array of events. This needs to be written in a js file. 
- In order to push more elements to this array you simply use
".push()" function.
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
- After that you have created the array now we need to write the jquery code to iterate through it.
  ```javascript
   $(document).ready(function(){
    var html = "";
    $.each(events, function(itemName, item){
        $.each(item, function(subItemName, subItem){
             html += ("<h1>"+ subItem + "</h1>"); });
        });
        // insert final html into #videos...
    $("#videos").html(html); });```

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



### Guided Practice

- Go through the codes in lesson properly. And try it out on your own.

### Independent Practice

- Make changes in the structure of array to understand the iteration process.
- Go through the concept of "each" in jquery which will allow you to know more about jquery.




