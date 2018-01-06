# AJAX

### Projected Time
30-45 minutes

### Prerequisites
"jQuery" lesson
APIs and JSON (note to admins: though this occurs later in the lesson plan)

### Motivation
Interactive websites often need to make API calls to query and present data the user asks for. AJAX uses JavaScript to make asynchronous calls to the server and then updates only the necessary portion of the rendered HTML page.

### Objective
**Students will be able to** make asynchronous calls to an API.

### Specific Things To Teach
- what is async
- threads of execution
- APIs (e.g., Google Maps)
- promises

### Materials
- [WS3 Schools](https://www.w3schools.com/xml/ajax_intro.asp)
- [AJAX Tutorial](https://www.tutorialspoint.com/ajax/)
- [jQuery AJAX Resource](https://learn.jquery.com/ajax/)
- [AJAX copmared with xhr](https://blog.garstasio.com/you-dont-need-jquery/ajax/)

### Mini Lesson
AJAX requests are triggered by JavaScript code; your code sends a request to a URL, and when it receives a response, a callback function can be triggered to handle the response. Because the request is asynchronous, the rest of your code continues to execute while the request is being processed, so it's imperative that a callback be used to handle the response.

- [AJAX Slides](https://docs.google.com/presentation/d/1S3BjcLZNjex2_qiA9MdyJOjWZ_qmJ78STbUeDEyHH_8/edit#slide=id.g241461b869_0_5)


### Common Mistakes / Misconceptions
-  jQuery applications don't in fact use XML (anymore), despite the name "AJAX"; instead, they transport data as plain HTML or JSON
-  Different browsers implement the AJAX API differently
  -  jQuery provides AJAX support that abstracts away painful browser differences
- Because it is *asynchronous*, you must pass in a callback function to handle the received data
- AJAX is a jQuery wrapper around the browser's built-in `XMLHttpRequest` object, you can use that object directly too if you prefer

### Guided Practice

Suggestion: Write an HTML page with a button that when clicked, queries for some text from another site then displays it in a specified div.


### Independent Practice

Try the thing above again, but have it process and display JSON data or HTML blocks.


### Challenge

- Try the [AJAX Tutorial](https://www.tutorialspoint.com/ajax/)
- Try the same exercises above using the `XMLHttpRequest` object instead of AJAX to better understand what the AJAX wrapper does

### Check for Understanding

Have students summarize to each other, make a cheat sheet, take a quiz, do an assignment, or something else that helps assess their understanding.
