# APIs & JSON

### Projected Time

About 1.5-2 hours

- 20-30 minutes for video walkthrough of slides
- 10 minutes for Guided Practice
- 10 minutes for Independent Practice
- 30-40 minutes for Check for understanding

### Prerequisites

- [Debugging lesson](/debugging/debugging.md)
- [Command Line Interface lesson](/dev-tools/command-line-interface.md)
- [JavaScript Lessons](/javascript)
- [JavaScript 9 - Async, Callbacks, Promises](/javascript/javascript-9-async.md)

### Motivation

APIs let you access a wealth of services available on the Internet, both free and paid. Unlike some older formats, JSON is easy for both computers and humans to work with, and is natively supported by JavaScript (and many other languages).

### Objectives

**Participants will be able to:**

- Create request URLs
- Send requests to APIs
- Read and utilize JSON response data

### Materials

- [APIs & JSON (slides)](https://docs.google.com/presentation/d/1sD3nwQnhbe1wPnAWes0Nbt578tJacTtx0Yqy8XFp7w8/edit?usp=sharing)

### Lesson

- Read through lesson slides [APIs & JSON](https://docs.google.com/presentation/d/1sD3nwQnhbe1wPnAWes0Nbt578tJacTtx0Yqy8XFp7w8/edit?usp=sharing)
- Video walkthrough of lesson slides [APIs & JSON](https://drive.google.com/file/d/1dVQJWV7UNYzpWD0-eHk7Aqk0H5ppKZdD/view?usp=sharing)

### Guided Practice

1. Go to https://jsonplaceholder.typicode.com/ and https://jsonplaceholder.typicode.com/posts. The jsonplaceholder website is an open API for beginners to use as a demo. The /posts endpoint contains every post in JSON format in their database.

**Please note that these API requests are made using AJAX which you will learn about in more detail in the next lesson, [web/AJAX](/web/ajax.md).**

1. Open your inspector and go to the console. Paste this in your console and press enter:

   ```js
   fetch('https://jsonplaceholder.typicode.com/posts')
     .then((response) => response.json())
     .then((json) => console.log(json));
   ```

   Your console should get a response of the same 100-something posts you saw in the browser. But what if you only wanted one?

   Besides seeing data returned in the Chrome Dev Tools inspector console how can you tell the code was successful? [Status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) are the internets way of communicating success or failure. This request returns a 200 status code meaning the server is "OK" with this request and returned what was requested. ( Find under Network section of inspector. )

1. To change what is logged to your console, paste this in your console and press enter:

   ```js
   fetch('https://jsonplaceholder.typicode.com/posts')
     .then((response) => response.json())
     .then((json) => console.log(json[0]));
   ```

   What is the difference? You just logged the first post in the JSON array you requested, rather than all of them.

   Observe how the browser communicates with the server, in real time. Open the Network tab in Chrome Dev Tools inspector to watch your request to the server as a separate entry.

1. Now let's get the last post.

   ```js
   fetch('https://jsonplaceholder.typicode.com/posts')
     .then((response) => response.json())
     .then((json) => console.log(json[json.length - 1]));
   ```

   Notice there is a column labeled "Type". This shows we are using a "fetch". Also notice that "fetch" is part of our code. What is another popular JavaScript object for making API request? [XMLHttpRequest (XHR)](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest), for an additional challenge look this up and try it. What is the core difference between the two and why we use fetch? Fetch returns a promise which is an improved coding practice over XHR.

1. And what if you just wanted to display the body?.

   ```js
   fetch('https://jsonplaceholder.typicode.com/posts')
     .then((response) => response.json())
     .then((json) => console.log(json[json.length - 1].body));
   ```

   Click on one of the "posts" entries in the network tab. Notice that the screen changes and additional tabs appear. The "Header" tab gives additional details about the communication happening between the client and the server for this request.

1. How about the body _and_ the title?.

   ```js
   fetch('https://jsonplaceholder.typicode.com/posts')
     .then((response) => response.json())
     .then((json) => {
       console.log(json[json.length - 1].title);
       console.log(json[json.length - 1].body);
     });
   ```

1. Let's try searching for posts with certain content:

```js
fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => console.log(json.filter((post) => post.body === 'bar')));
```

1. Or 1 specific post:

```js
fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => console.log(json.find((post) => post.id === 92)));
```

This will be how you can use API data to populate your website with info. For example, instead of console logging it, you could make this call in your project's js file, then use jQuery to print the result to your page.

1. Let's try something slightly more complicated: Posting new data. Paste this code in your console:

   ```js
   fetch('https://jsonplaceholder.typicode.com/posts', {
     method: 'POST',
     body: JSON.stringify({
       title: 'New post',
       body: 'Techtonica',
       userId: 1
     }),
     headers: {
       'Content-type': 'application/json; charset=UTF-8'
     }
   })
     .then((response) => response.json())
     .then((json) => console.log(json));
   ```

   When you make a post request, the expectation is that if the request is successful, you receive a JSON response with your new object that's been posted to the API's database. However, you won't see it if you visit https://jsonplaceholder.typicode.com/posts since this is a fake demo API. But if it were a real one, a successful post request would have added your 'New Post' item to the end of the posts array.

   In the inspector Network tab, you should see 2 entries for this code. One has a status code of 204 and the other 201. What is the difference? 201 = "Created" and 204 = "No Content".

   The above examples use GET and POST [http methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) which are the most commonly used methods, but there are more. Challenge yourself and read about some of the other ones like PUT and DELETE.

You will learn more about forming these requests yourself in the next lesson, [AJAX](/web/ajax.md).

### Independent Practice

Spend 5-10 minutes playing with the 'parameters' section of this website, and see what sort of JSON responses you receive: [https://developer.marvel.com/docs](https://developer.marvel.com/docs)

### Challenge/Check for Understanding

**Activity #1**  
Select an API from these lists of public APIs: [https://github.com/n0shake/Public-APIs](https://github.com/n0shake/Public-APIs) and [https://github.com/public-apis/public-apis](https://github.com/public-apis/public-apis). Get API keys as needed.

**Activity #2**  
Read the docs for the API selected and craft a request function or request URL. Many docs will provide some request body examples or example URLs to modify. You can also try the simple fetch method at the beginning of 'Guided Practice'.

**Activity #3**
Spend 15-20 minutes sending some GET requests with the request URL to the API by:

1. using an online API tester, such as [REST test](https://resttesttest.com/)
1. enter your request in the console.
1. opening a new terminal shell and entering `curl [request_query_url]`, for example, `curl https://pokeapi.co/api/v2/pokemon/2/`

Look at the returned JSON response, paying particular attention to the structure of the response body.

If 20 minutes have passed, and you haven't gotten some successful responses, ask for help.

Debugging tip: If the API gives no response or a confusing response, you can try using the `-v` option to get more information about what is going wrong. For example, it may be the case that the API gives you a 301 redirect response, and that would give a blank output from `curl`. But with `-v` you would see the `301` code and also the new URL that you should be using instead.

### Supplemental Materials

- [CodeNewbie: Intro to APIs (The code is in Ruby, but it's a good summary)](https://www.codenewbie.org/blogs/an-intro-to-apis)
- [List of APIs and documentation](https://any-api.com/)
- [JSON Lint: The JSON Validator](https://jsonlint.com/)
- [APIs for Beginners—How to Use an API 2-Hour Video](https://youtu.be/GZvSYJDk-us)
