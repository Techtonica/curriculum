# Optimization

### Projected Time
30-45 minutes


### Prerequisites
Understand that Javascript goes into websites, and that when you go to a website on a browser, the code needs to get sent to the browser and loaded, likely needing to make API calls to retrieve data.


### Motivation
Users are fickle: website performance matters.


### Objectives
**Participants will be able to:**
- explain caching and minification


### Materials

- [Effect of webpage load time on user retention](https://ai.googleblog.com/2009/06/speed-matters.html)
- [Javascript minifier](https://javascript-minifier.com/)


### Lesson
_Caching_
- What is caching?
	- temporarily saving small chunks of data locally
	
- How does caching make a website faster?
	- reduces the number of API network requests, which are slow compared to retrieving the data locally

- What are some tips for implementing caching?
	- cache consistency: data will be fast, but not necessarily up to date
	- complexity: maintaining the code will be more difficult
	- memory: caching takes up memory (RAM)

_Minification_
- What is minification?
	- Making Javascript files smaller without changing the logic in them
	- for example, white spaces are removed, variable names are shortened...

- How does minification make a website faster?
	- Large files take longer to download. Minification makes the files smaller.

- What are some tips for implementing minification?
	- You can find free tools to minify your code before it gets deployed to users, and develop on the non-minified version.
	- CSS files can also be minified.


### Common Mistakes / Misconceptions

Code on the server-side (ie. backend code) don't benefit from being minified because that code is not delivered to the user's browser.


### Independent Practice

Find a minifier online and test it out with some Javascript code, like this [Javascript minifier](https://javascript-minifier.com/).


### Challenge

Look up the advanced optimization concepts introduced in the slides:
1. Algorithm optimization
- What is "big O" notation?

2. Asynchronous I/O (input/output)
- What are Javascript Promises? How do they improve performance?

3. Precaching

4. Concurrency
- Different languages have different concurrency models? How does the Javascript one work?
- What is a stack, heap and queue?
- What is the Javascript event loop?
