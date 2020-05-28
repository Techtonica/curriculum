# Optimization

### Projected Time

About 30-45 minutes

- 20 mins Lesson
- 10 mins Independent Practice
- 10 mins Challenge

### Prerequisites

Understand that JavaScript goes into websites and that when you go to a website on a browser, the code needs to get sent to the browser and loaded, likely needing to make API calls to retrieve data.

### Motivation

Users are fickle: website performance matters.

### Objectives

**Participants will be able to:**

- explain caching and minification

### Materials

- [Optimization Slides](https://docs.google.com/presentation/d/1Q1FZHrChooVHydr9Rg05T0rUFGFnzqcPmwtgMUYc6P0/edit?usp=sharing)
- [Short Blog Article: Effect of webpage load time on user retention](https://ai.googleblog.com/2009/06/speed-matters.html)
- [Minifying JS and CSS video (6 mins watch)](https://www.youtube.com/watch?v=8aAuNQqgGAg)
- [Caching techniques video (6 mins watch)](https://www.youtube.com/watch?v=RgPf5RDv4-s)
- [Live JavaScript minifier tool](https://javascript-minifier.com/)

### Lesson

- _Caching_

  - What is caching?

    - temporarily saving small chunks of data locally

  - How does caching make a website faster?

    - reduces the number of API network requests, which are slow compared to retrieving the data locally

  - What are some tips for implementing caching?
    - cache consistency: data will be fast, but not necessarily up to date
    - complexity: maintaining the code will be more difficult
    - memory: caching takes up memory (RAM)

- _Minification_

  - What is minification?

    - Making JavaScript files smaller without changing the logic in them
    - for example, white spaces are removed, variable names are shortened...

  - How does minification make a website faster?

    - Large files take longer to download. Minification makes the files smaller.

  - What are some tips for implementing minification?
    - You can find free tools to minify your code before it gets deployed to users and developers on the non-minified version.
    - CSS files can also be minified.

- Read through lesson slides [Optimization](https://docs.google.com/presentation/d/1Q1FZHrChooVHydr9Rg05T0rUFGFnzqcPmwtgMUYc6P0/edit?usp=sharing)
- Watch [Minifying JS and CSS video (6 mins watch)](https://www.youtube.com/watch?v=8aAuNQqgGAg)
- Watch [Caching techniques video (6 mins watch)](https://www.youtube.com/watch?v=RgPf5RDv4-s)
- Utilize [Live JavaScript minifier tool](https://javascript-minifier.com/)

### Common Mistakes / Misconceptions

Code on the server-side (ie. backend code) doesn't benefit from being minified because that code is not delivered to the user's browser.

### Independent Practice

Find a minifier online and test it out with some JavaScript code, like this [JavaScript minifier](https://javascript-minifier.com/).

### Challenge

Look up the advanced optimization concepts introduced in the slides:

1. Algorithm optimization

- What is "big O" notation?

2. Asynchronous I/O (input/output)

- What are JavaScript Promises? How do they improve performance?

3. Precaching

4. Concurrency

- Do different languages have different concurrency models? How does JavaScript one work?
- What are stack, heap, and queue?
- What is the JavaScript event loop?
