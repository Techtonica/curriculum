# APIs & JSON

### Projected Time

About ___ hours
- __ minutes for video walkthrough of slides
- __ minutes for live demonstration
- __ minutes for Independent Practice
- __ minutes for Challenge

### Prerequisites

- "Debugging" lesson
- "Command Line Interface" lesson
- "Shell Commands" lesson
- "JS 1 - Variables, strings, & integers" lesson
- "JS 2 - Arrays & functions" lesson

### Motivation

APIs let you access a wealth of services that other companies and people have written.  For example, you can use them to GET info from databases of medical info and pop culture facts or to POST to the APIs, sending text messages and helping people share content on social media.

### Objective

**Students will be able to**
- Create request URLs
- Send requests to APIs
- Read and utilize JSON response data

### Supplemental Materials

- [CodeNewbie: Intro to APIs](https://www.codenewbie.org/blogs/an-intro-to-apis) The code is in Ruby, but it's a good summary
- [Codecademy APIs](https://www.codecademy.com/apis)
- [List of APIs and documentation](https://any-api.com/)

### Mini Lesson

- [APIs & JSON (Video walkthrough of lesson slides)](https://drive.google.com/open?id=1sQCNXK9u8VD4xqlxmPVBEzB6mE2OqNFH)
- [APIs & JSON (slides)](https://docs.google.com/presentation/d/1sD3nwQnhbe1wPnAWes0Nbt578tJacTtx0Yqy8XFp7w8/edit?usp=sharing)

### Demonstration/Guided Practice

Instructor walks through the process of getting started using a sample API, including acquiring the requisite keys, crafting the request, and interpreting how to parse the doc, request, and JSON response.

Recommended API for this demo: [https://developer.marvel.com/docs](https://developer.marvel.com/docs)

### Independent Practice

**Activity #1**  
Select an API from these lists of public APIs: [https://github.com/abhishekbanthia/Public-APIs](https://github.com/abhishekbanthia/Public-APIs) and [https://github.com/toddmotto/public-apis](https://github.com/toddmotto/public-apis).  Get API keys as needed.

**Activity #2**  
Read the docs for the API selected and craft a request URL.  Many docs will provide some example URLs to modify.

**Activity #3**
Test sending a GET request with the request URL to the API by:
1. using an online API tester, such as [REST test test](https://resttesttest.com/) or [Apigee's API Console](https://apigee.com/console/others)
2. opening a new terminal shell and entering `curl [request_query_url]`, for example, `curl https://pokeapi.co/api/v2/pokemon/2/`

Look at the returned JSON response, paying particular attention to the structure of the response body.

Debugging tip: If the API gives no response, or a confusing response, you can try using the `-v` option to get more information about what is going wrong.  For example, it may be the case that the API gives you a 301 redirect response, and that would give a blank output from `curl`.  But with `-v` you would see the `301` code and also the new URL that you should be using instead.

### Challenge/Check for Understanding

Using JavaScript, send a new GET request to an API, select an attribute to access from the returned JSON response, then print that attribute to the console.  As another challenge, figure out when and how to send a POST request to an API then do so using JavaScript or `curl`.
