# APIs & JSON

### Projected Time

About 1.5-2 hours

- 20-30 minutes for video walkthrough of slides
- 10 minutes for Guided Practice
- 10 minutes for Independent Practice
- 30-40 minutes for Check for understanding

### Prerequisites

- "Debugging" lesson
- "Command Line Interface" lesson
- "Shell Commands" lesson
- "JS 1 - Variables, strings, & integers" lesson
- "JS 2 - Arrays & functions" lesson
- "AJAX"

### Motivation

APIs let you access a wealth of services that other companies and people have written. For example, you can use them to GET info from databases of medical info and pop culture facts or to POST to the APIs, sending text messages and helping people share content on social media.

### Objectives

**Participants will be able to:**
- Create request URLs
- Send requests to APIs
- Read and utilize JSON response data

### Supplemental Materials

- [CodeNewbie: Intro to APIs](https://www.codenewbie.org/blogs/an-intro-to-apis) The code is in Ruby, but it's a good summary
- [Codecademy APIs](https://www.codecademy.com/apis)
- [List of APIs and documentation](https://any-api.com/)

### Lesson

- [APIs & JSON (Video walkthrough of lesson slides)](https://drive.google.com/open?id=1sQCNXK9u8VD4xqlxmPVBEzB6mE2OqNFH)
- [APIs & JSON (slides)](https://docs.google.com/presentation/d/1sD3nwQnhbe1wPnAWes0Nbt578tJacTtx0Yqy8XFp7w8/edit?usp=sharing)

### Guided Practice
1. Go to https://jsonplaceholder.typicode.com/ and https://jsonplaceholder.typicode.com/posts. The jsonplaceholder website is an open API for beginners to use as a demo. The /posts endpoint contains every post in JSON format in their database.

1. Open your inspector and go to the console. Paste this in your console and press enter:
    ```
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => console.log(json))
    ```
    Your console should get a response of the same 100-something posts you saw in the browser.  But what if you only wanted one?
  
1. To change what is logged to your console, paste this in your console and press enter:
    ```
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => console.log(json[0]))
    ```
    What is the difference?  You just logged the first post in the JSON array you requested, rather than all of them.  
  
1.  Now let's get the last post.
    ```
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => console.log(json[json.length - 1]))
    ```

1.  And what if you just wanted to display the body?.
    ```
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => console.log(json[json.length - 1].body))
    ```
    
1.  How about the body *and* the title?.
    ```
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => {
      console.log(json[json.length - 1].title);
      console.log(json[json.length - 1].body);
      })
    ```
1. Let's try searching for posts with certain content:
  ```
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => console.log(json.filter(post => post.body === "bar")))
  ```
  
1. Or 1 specific post:
  ```
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => console.log(json.find(post => post.id === 92)))
  ```

   This will be how you can use API data to populate your website with info.  For example, instead of console logging it, you could make this call in your project's js file, then use jQuery to print the result to your page.

1. Let's try something slightly more complicated: Posting new data.  Paste this code in your console:
    ```
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'New post',
      body: 'Techtonica',
      userId: 1
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
    })
    .then(response => response.json())
    .then(json => console.log(json))
    ```
    When you make a post request, the expectation is that if the request is successful, you receive a JSON response with your new object that's been posted to the API's database.  However, you wont see it if you visit https://jsonplaceholder.typicode.com/posts, since this is a fake demo API. But if it were a real one, a successful post request would have added your 'New Post' item to the end of the posts array.
    
 You will learn more about forming these requests yourself in the next lesson, [AJAX](/ajax/ajax.md).

### Independent Practice

Spend 5-10 minutes playing with the 'parameters' section of this website, and see what sort of JSON responses you receive: [https://developer.marvel.com/docs](https://developer.marvel.com/docs)

### Challenge/Check for Understanding

**Activity #1**  
Select an API from these lists of public APIs: [https://github.com/abhishekbanthia/Public-APIs](https://github.com/abhishekbanthia/Public-APIs) and [https://github.com/toddmotto/public-apis](https://github.com/toddmotto/public-apis). Get API keys as needed.

**Activity #2**  
Read the docs for the API selected and craft a request function or request URL. Many docs will provide some request body examples or example URLs to modify.  You can also try the simple fetch method at the beginning of 'Guided Practice'.

**Activity #3**
Spend 15-20 minutes sending some GET requests with the request URL to the API by:
1. using an online API tester, such as [REST test test](https://resttesttest.com/)
1. entering your request in the console.
1. opening a new terminal shell and entering `curl [request_query_url]`, for example, `curl https://pokeapi.co/api/v2/pokemon/2/`

Look at the returned JSON response, paying particular attention to the structure of the response body.

If 20 minutes have passed, and you haven't gotten some successful responses, ask for help.

Debugging tip: If the API gives no response, or a confusing response, you can try using the `-v` option to get more information about what is going wrong. For example, it may be the case that the API gives you a 301 redirect response, and that would give a blank output from `curl`. But with `-v` you would see the `301` code and also the new URL that you should be using instead.
