# Express.js Project

### SetUp

You need to use express to do this exercise.
So, please do this locally and add it to your **Assignments** folder on GitHub and submit it with a PR

### Task

1. Make a project directory and create the following files inside that directory:

`index.html`
`about.html`

Create your "node.js" server file `index.js` and add the code needed to serve the right page according to the URL.

`localhost:8080` should take users to index.html

`localhost:8080/about` should take users to about.html

Keep in mind that the content of these pages isn’t really all that important. So there’s no need to spend a lot of time filling them up or trying to make them look pretty.

### Quick Guide

- Initialize the project with `npm init` command
- Install express as a dependency `npm install express`
- Create `index.html`, `about.html` and `index.js` file. Copy the content from this repo.
- Open the browser and visit `http://localhost:8080/` and `http://localhost:8080/about`. `res.sendFile()` method serve html file with a response

### Resource

[Serving Static Files with Node and Express.js](https://stackabuse.com/serving-static-files-with-node-and-express-js/)
