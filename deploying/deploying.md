# Deploying

### Projected Time
30-45 minutes

### Prerequisites
[Create a free Heroku account](https://signup.heroku.com/dc)
Download and install the Heroku CLI with `brew install heroku/brew/heroku`

Node.js and npm must be installed
An existing Node.js app
JS I - VI
Node
Express
MongoDB


### Motivation
Deployment is a fancy term for getting your website or on the web. After building out your app, you might want to share it with others.
One typical work flow to deploying your app could include creating your website, finding a domain name, finding a hosting service, uploading files with SFTP, and lastly deploying your server-side app.


### Objectives
**Apprentices will be able to:** 
- Deploy their website to a third-party hosting service such as Heroku.

### Specific Things To Teach
- Heroku - a cloud based server

### Materials
- [What is Heroku - YouTube Video](https://youtu.be/r5ZUQvl9BtE)
- [MDN Express & Node Deployment ](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/deployment)
- [Heroku Dev Center Deployment](https://devcenter.heroku.com/articles/deploying-nodejs)
- [Domain Names,Name Servers, and Cloud Based Servers explained with CodeScool](https://www.codeschool.com/beginners-guide-to-web-development/deploying-your-first-website)

### Mini Lesson

Have you heard of Heroku before? If you had to guess what it is or what it does, what would your guess be? Take a minute and jot down at least two sentences to document your answers. Great, now that we've gotten that part out of the way . . . Heroku is a cloud-based service you can use to put your site on the internet for people to interact with and for you showcasing your work.

-Create a Heroku app using the link found in the prerequisites
-Download the Heroku CLI using the brew install link above
-Navigate to the root directory of your app, and run `npm init`
-That last step will walk you through creating a package.json file, in it you can expect to JSON
-Next run `heroku local web` if dependencies are missing type `rm -rf node_modules; npm install --production`


### Common Mistakes / Misconceptions




### Guided Practice




### Independent Practice




### Challenge




### Check for Understanding

Summarize to each other, make a cheat sheet, take a quiz, do an assignment, or something else that helps assess understanding.
