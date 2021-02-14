# AJAX

### Projected Time

About 4 hours

- Lesson: 50 mins
- Hands-on Explanation: 50 mins
- Guided Practice: 1 hr
- Independent Practice: 1 hr
- Check for understanding: 20-30 mins

### Prerequisites

- [JavaScript Lessons](/javascript)
- [jQuery Lesson](/web/jquery.md)
- [API/JSON Lesson](/api/apis-and-json.md)
- [Promises](/javascript/javascript-9-async.md)

### Motivation

Front-end code of interactive websites often needs to talk to backend servers to get and present data that the user asks for. Usually, this is done using API calls. AJAX is a way to make asynchronous calls to the server using JavaScript.

### Objectives

**Participants will be able to:**

- Make AJAX calls to API servers.

### Materials

- [AJAX Slides](https://docs.google.com/presentation/d/1S3BjcLZNjex2_qiA9MdyJOjWZ_qmJ78STbUeDEyHH_8/edit#slide=id.p)
- [AJAX tutorial on Codecademy.](https://www.codecademy.com/courses/introduction-to-javascript/lessons/requests-i/exercises/requests-intro-i)

### Lesson

- Read through lesson slides [AJAX](https://docs.google.com/presentation/d/1S3BjcLZNjex2_qiA9MdyJOjWZ_qmJ78STbUeDEyHH_8/edit#slide=id.p)
- Video walkthrough of lesson slides [AJAX](https://drive.google.com/file/d/1pLyMqvC-8cFroVTWMUBeG1_BRd4L-rL3/view?usp=sharing)

### What is AJAX ?

AJAX stands for Asynchronous JavaScript and XML. It is a **technique** by which the front-end gets data by making _asynchronous_ calls either to the project's API in the back-end, or a 3rd-party API. Because AJAX is _asynchronous_, you must pass in a callback function to handle the received data. Making an AJAX request without any callback function will not have any effect on your application.

### What does AJAX do?

Let's say this website that the end user is visiting is an e-commerce site. The end user is browsing a list of products, sees a product they want to buy, and clicks the "Buy" button. This action (clicking the "Buy" button) triggers the request/response steps listed above, this time for the purpose of putting the product in the shopping cart.

Before AJAX, the request/response cycle could only happen with the web page _as a whole_. The end user, by clicking the "Buy" button, would cause the backend server to generate a completely new set of HTML and JavaScript, and the browser would reload and render it as an entirely new page.

AJAX, however, enabled the browser to make requests and only re-render _parts_ of a webpage. This was beneficial performance-wise, because smaller strings of HTML, rather than all the HTML for the entire page, was all that was needed to be sent by the server and rendered by the browser. This also made the end user's browsing experience smoother: interactions with the webpage resulted in changes on screen without being interrupted by a reload.

### Full Page Load vs AJAX

> Lets say there is an input box and a button. Onclick of button the page shows some data say _hello world_ send by the _server_. When the button is clicked -

#### Full load Application Flow

1. The browser sends a request to a server designated by the URL.
2. The server does some processing, probably queries a database, then responds to the browser by sending back HTML and JavaScript
3. The browser renders that HTML and JavaScript into a webpage.

#### AJAX Flow

1. The client sends a request to the server.
2. The server does some processing and returns the corresponding data (usually in JSON format).
3. When the request is successful, the callback function is executed with the new data. The callback function could do anything you like; for example, it could use JS to add the new data to the HTML page

| Difference Point          |           Full Load Page           |                        AJAX                        |
| ------------------------- | :--------------------------------: | :------------------------------------------------: |
| Client requests to server |         waits for response         |       can perform other task simultaneously        |
| Server Response           | responds a corresponding HTML page |       responds with data (preferably JSON )        |
| Render                    |  a complete new page is rendered   | only that part of page changes which has requested |
| Thread Blocked            |                true                |                       false                        |
| Data Received by          |    the browser in form of HTML     |          JavaScript (callback or Promise)          |

Now Let us understand this concept in more brief by implementing it practically. Follow the [Link](https://github.com/ashishnagpal2498/AjaxVsFullLoadPage), clone the repository and start working.

### Remember

It is important to understand the concept of [Thread of Execution](/javascript/javascript-9-async.md) before we start with AJAX.

### Hands-On Practice

#### Let's create a simple button. On click of this button the browser will fetch data from the server and that data we will display on DOM using javascript.

1. HTML - create a html file _say_ `index.html`

- Create a button on which has an `onClick` attribute. This will take a function which is called when the button is click.

```
<button class="btn" onclick="getData()"> Show Data </button>
```

2. CSS (Not Necessary, just to make button presentable. Can be skipped)
   `index.css`.

- Add simple style to the button.

```
.btn{
	padding: 10px;
  	border: none;
 	color: #fff;
  	background-color: green;
  	cursor:pointer;
}
```

3. JS - `index.js`

- JavaScript file will have a function that is passed as value to the attribute in _HTML_. This function will fetch data from API and displays that data received as response from that API on the HTML page.
- > Let's write a function that fetches data from an API and displays it on the HTML page.
      	```
      	function getData() {
      console.log("Function getData is executed");
      fetch("https://jsonplaceholder.typicode.com/todos/1", {
  headers: { "Content-Type": "application/json" }
  })
  .then(res => res.json())
  .then(data => {
  console.log("data", data);
  let element = document.getElementById("data");
  element.textContent = data.title;
  });
  }
  ``` - #### Breaking this down. - `fetch` is a keyword, a function, used to call the server and get the data. It takes two parameters - - A string which is the URL of API. - An object, which has headers, method etc. - `fetch` function returns a **Promise**, whether it is successful or not. If request is successful `.then()` function will receive Response object, if request fails then `.catch()` function will receive an error object. - When the promise is resolved we get a Response object in return. But wait, if you try logging Response object on the console you will find that it didn’t have the data which we want. That’s because a Response object has information about the response itself. To actually get the data, we need to get the body of the response. - Since we passed the `content-type` as `application/json` in headers, the response object is expected to be in `.json()` method. - The `.json()` method on a Response object returns a Promise, so we need to chain on another `.then()` in which actual data is received.

#### The complete code has been executed on this [CodePen](https://codepen.io/ashish24_nagpal/pen/NWqXjWN). Try consoling at different places and see the response in browser.

### Guided Practice

- Work through [this AJAX tutorial on Codecademy.](https://www.codecademy.com/courses/introduction-to-javascript/lessons/requests-i/exercises/requests-intro-i)

### Independent Practice

- Look at this article on alternative ways to make asynchronous calls. AJAX, Fetch, and Async/Await are just different syntaxes for making the same sort of call. [Beginners Guide To Fetching Data With (AJAX, Fetch API & Async/Await)](https://dev.to/bjhaid_93/beginners-guide-to-fetching-data-with-ajax-fetch-api--asyncawait-3m1l)
- Read [this very short article on Axios](https://flaviocopes.com/axios/), which is an npm package that uses ajax under the hood. Developers like it because it is supported by all legacy and current browsers, and has methods that make some tasks like interpreting received data or setting request timeouts really simple.
- Build an app that gets its data from the Pokémon API!: https://atom-morgan.github.io/blog/2018-12-15-ajax/

### Points to Remember

- AJAX is not a programming language. It is a technique.
- It works _Asynchronously_ to fetch data from API.
- Since it works _Asynchronously_, data is received in form of Promise or Callback function.

### Supplemental Materials

- [MDN getting started with ajax](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started)
- [Beginners Guide To Fetching Data With (AJAX, Fetch API & Async/Await)](https://dev.to/bjhaid_93/beginners-guide-to-fetching-data-with-ajax-fetch-api--asyncawait-3m1l)
- [AJAX Tutorial](https://www.tutorialspoint.com/ajax/)
- [Fetch AJAX Resource](https://medium.com/beginners-guide-to-mobile-web-development/the-fetch-api-2c962591f5c)
- [AJAX compared with xhr](https://blog.garstasio.com/you-dont-need-jquery/ajax/)
- [Understanding Asynchronous Code](https://www.sohamkamani.com/blog/2016/03/14/wrapping-your-head-around-async-programming/)
- [Short Article: What is Axios?](https://flaviocopes.com/axios/)
- Try the same exercises above using the [`XMLHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) object instead of AJAX to better understand what the AJAX wrapper does

### Check for Understanding

Make the simplest project you can on Codepen.io. The project must:

- make a successful ajax 'get' request to an external API
- Display all or part of that request on the webpage using `fetch API`.
