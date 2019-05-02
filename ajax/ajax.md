# AJAX

### Projected Time
About 3 hours

- Lesson: 20-30 min
- Guided Practice: 1 hr
- Independent Practice: 1 hr
- Check for understanding: 20-30 min

### Prerequisites
- [JavaScript Lessons](/javascript)
- [jQuery Lesson](/jquery/jquery.md)
- [API/JSON Lesson](/api/apis-and-json.md)

### Motivation
Front-end code of interactive websites often need to talk to backend servers to get and present data that the user asks for. Usually this is done using API calls. AJAX is a way to make asynchronous calls to the server using JavaScript.

### Objectives

**Participants will be able to:**
- form AJAX calls to an API.

### Lesson
[Slides](https://docs.google.com/presentation/d/1S3BjcLZNjex2_qiA9MdyJOjWZ_qmJ78STbUeDEyHH_8/edit#slide=id.g241461b869_0_5) | [Slides with Audio](https://drive.google.com/file/d/1pLyMqvC-8cFroVTWMUBeG1_BRd4L-rL3/view?usp=sharing)

### Materials
- [AJAX tutorial on Codecademy.](https://www.codecademy.com/courses/introduction-to-javascript/lessons/requests-i/exercises/requests-intro-i)
- [Beginners Guide To Fetching Data With (AJAX, Fetch API & Async/Await)](https://dev.to/bjhaid_93/beginners-guide-to-fetching-data-with-ajax-fetch-api--asyncawait-3m1l)
- [short article: What is Axios?](https://flaviocopes.com/axios/)

### What is AJAX?

AJAX stands for Asynchronous JavaScript and XML. It is a way for front-end code to talk to the backend by making *asynchronous* API calls.

What is *asynchronous*?  You can think of this as a sequence of activities that respond to one another, but not in a continuous stream of time. Synchronous activities happen in a continuous, uninterrupted stream of time. A phone call, for example, is a synchronous method of communication, because two people are on the phone at the same time having a conversation. Email, on the other hand, is asynchronous communication. Even though a single conversation will happen across a thread of emails, each email by itself has a gap of time after the preceding email. On top of this, you never know when the next email response will arrive. This is the same thing that happens with asynchronous server calls. The front end will send a request to the backend, there is an indeterminable period of time that passes, then the server sends a response.

What is *XML*?  XML is a type of data interchange format, which means that it's a standard format that computers use to send data to one another. It stands for eXtensible Markup Language. While XML was commonly used when AJAX began, nowadays JSON has taken over as the preferred data format. This is because JSON is native to JavaScript. If your application was using XML, the application would have to take the extra step of converting XML into something that JavaScript could read and manipulate.

AJAX came into being because of the XMLHttpRequest API, which was developed by Microsoft in the late 1990's. This API was a way for Microsoft's backend servers to communicate with front end clients, specifically with Internet Explorer. Other browsers and backend servers began to adopt this technique and the XMLHttpRequest object became a web standard over time, and as a general concept it came to be called AJAX.

### What does AJAX do?

Let's think about how web applications work. Generally, the steps go like this:
- The end user types a URL into a browser
- The browser sends a request to a server designated by the URL
- The server does some processing, probably queries a database, then responds to the browser by sending back HTML and JavaScript
- The browser renders that HTML and JavaScript into a webpage

Let's say this website that the end user is visiting is an e-commerce site. The end user is browsing a list of products, sees a product they want to buy, and clicks the "Buy" button. This action (clicking the "Buy" button) triggers the request/response steps listed above, this time for the purpose of putting the product in the shopping cart.

Before AJAX, the request/response cycle could only happen with the web page *as a whole*. The end user, by clicking the "Buy" button, would cause the backend server to generate a completely new set of HTML and JavaScript, and the browser would reload and render it as an entirely new page.

AJAX, however, enabled the browser to make requests and only re-render *parts* of a webpage. This was beneficial performance-wise, because smaller strings of HTML, rather than all the HTML for the entire page, was all that was needed to be sent by the server and rendered by the browser. This also made the end user's browsing experience smoother: interactions with the webpage resulted in changes on screen without being interrupted by a reload.

### Threads of Execution

When your JavaScript code runs in the browser, it does so in a *single thread of execution*. What this means is that it runs your code in sequence, one command at a time. It cannot, for example, take two different lines in your code and run them simultaneously.

To understand why asynchrony is an important feature of AJAX, we can think about a synchronous scenario. Let's return to the example above of the end user visiting an e-commerce site. Imagine that the end user clicks on the "Buy" button to put an item in their shopping cart. This code might look something like this:

```
var request = require('request');
request('https://api.mywebsite.com/users/12345/cart', function (error, response, body) {
  refreshCart(response);
});
progressBar.start();
```

Note the line of code that starts the progress bar. In this situation, the progress bar is meant to display before the cart gets refreshed with the product. It is a nice visual indicator to the user that something is happening as a result of clicking the "Buy" buttton. If the code was synchronous, the thread in which your code runs must WAIT to receive the response from the backend API *before it can execute any other code*. This means then that the line `progressBar.start()` could not execute until after the API response is back from the server. This wouldn't make much sense. The point of the progress bar is to indicate activity while the browser waits for the server response. But if that line couldn't even execute until after the server response arrives, the progress bar is pointless.

This is where the benefit of asynchronous execution comes in. Notice that when the API call is made via the `request` function, one of the arguments is another function--the *callback* function. It's a function that is called when the server response comes back. With asynchrony, the execution thread can send the request to the API, then *without waiting* can proceed to the line of code that starts the progress bar. Then once the browser gets the response back from the API, it executes the callback function.

### Common Mistakes / Misconceptions
- Most web applications that use AJAX don't in fact use XML anymore, despite the name "AJAX"; instead, they transport data using other formats, most commonly as JSON.
- AJAX is technically not an API and it is not a library in and of itself. It is a set of *techniques* that uses the XMLHttpRequest (XHR) API. There are many JavaScript libraries, including jQuery, that contain wrappers around the XHR API, and these are colloquially called AJAX libraries.
- Because AJAX is *asynchronous*, you must pass in a callback function to handle the received data. Making an AJAX request without any callback function will not have any effect in your application.

### Guided Practice
- Work through [this AJAX tutorial on Codecademy.](https://www.codecademy.com/courses/introduction-to-javascript/lessons/requests-i/exercises/requests-intro-i)

### Independent Practice
- Look at this article on alternative ways to make asynchronous calls.  AJAX, Fetch, and Async/Await are just different syntaxes for making the same sort of call.  [Beginners Guide To Fetching Data With (AJAX, Fetch API & Async/Await)](https://dev.to/bjhaid_93/beginners-guide-to-fetching-data-with-ajax-fetch-api--asyncawait-3m1l)
- Read [this very short article on Axios](https://flaviocopes.com/axios/), which is an npm package that uses ajax under the hood. Developers like it because it is supported by all legacy and current browsers, and has methods that make some tasks like interpreting received data or setting request timeouts really simple.
- Build an app that gets it's data from the Pokémon API!: https://atom-morgan.github.io/ajax/

### Supplemental Materials
-[MDN getting started with ajax](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started)
-[MDN](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
- [AJAX Tutorial](https://www.tutorialspoint.com/ajax/)
- [jQuery AJAX Resource](https://learn.jquery.com/ajax/)
- [AJAX compared with xhr](https://blog.garstasio.com/you-dont-need-jquery/ajax/)
- [Understanding Asynchronous Code](https://www.sohamkamani.com/blog/2016/03/14/wrapping-your-head-around-async-programming/)
- Try the same exercises above using the `XMLHttpRequest` object instead of AJAX to better understand what the AJAX wrapper does

### Check for Understanding
Make the simplest project you can on Codepen.io.  The project must:
- make a successful ajax 'get' request to an external API
- Display all or part of that request on the webpage using jQuery
