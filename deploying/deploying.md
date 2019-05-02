# Deploying your project to Heroku

### Projected Time
3-4 hours

### Prerequisites
[Create a free Heroku account](https://signup.heroku.com/dc)
Download and install the Heroku CLI with `brew install heroku/brew/heroku`

Node.js and npm must be installed
An existing Node.js app
- [JS I - VI](https://github.com/Techtonica/curriculum/tree/master/javascript)
- [Node](../node-js/node-js.md)
- [Express](../express-js/express.md)
- [MongoDB](../databases/mongo-db.md)


### Motivation
Deployment is a fancy term for getting your website or on the web. After building out your app, you might want to share it with others.
One typical work flow to deploying your app could include creating your website, finding a domain name, finding a hosting service, uploading files with SFTP, and lastly deploying your server-side app.


### Objectives
**Apprentices will be able to:**
- Deploy their website to a third-party hosting service such as Heroku.

### Specific Things To Teach
- Heroku - a cloud based server

### Materials
- [Video - What is Heroku](https://youtu.be/r5ZUQvl9BtE)
- [Techtonica Slides: Deploying](https://docs.google.com/presentation/d/1Enwhd9hl1fn1-afMXJ6xvkJm5SDJpHjfQoA7s2znHpw/edit?usp=sharing)
- [Overview of Deployment Options - MDN Express & Node Deployment](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/deployment)
- [Tutorial - Heroku Dev Center Deployment](https://devcenter.heroku.com/articles/deploying-nodejs)
- [Code School Tutorial(requires sign-in) - Domain Names,Name Servers, and Cloud Based Servers](https://www.codeschool.com/beginners-guide-to-web-development/deploying-your-first-website)
- [Deploy Node.JS Apps to Heroku (10 min Video)](https://youtu.be/AZNFox2CvBk)

### Lesson

Work through the lasson materials above, and then move on to deploying your own site.

Heroku is a cloud-based service you can use to put your site on the internet for people to interact with and for you showcasing your work. The apps that you made have two components:
1. A static component -- the React App you created. These files are static and unchanging.
2. A dynamic component -- The Express app you created. This is a webserver that is serving custom content depending on what the user does.

Deploying both of these on Heroku can be a bit tricky, however, someone has already documented a good approach: https://medium.freecodecamp.org/how-to-make-create-react-app-work-with-a-node-backend-api-7c5c48acb1b0

In their approach, they use Express to serve your static content as well as the dynamic content from your server. It works by adding a fallback request handler to express to serve files from your static content if no other URLs match.

These are the key components:
1. Add code to your server.js to serve the static content from express:
```
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
```

2. Configure your package.json to work with heroku:
```
// If "scripts" already exists, just add the contents to the already existing entry
"scripts": {
  "heroku-postbuild": "cd client && npm install && npm install --only=dev --no-shrinkwrap && npm run build"
  "start": "node server.js"
}
```
3. Create your new deployment on Heroku. Click "create new app" and follow the instructions including installing the Heroku CLI. Feel free to ask a mentor if you get stuck.

All done! Small differences in the way you've set up your site may make bits of this process not work as expected, so there may be some debugging required. Here is a sample repository you can refer to: https://github.com/esausilva/example-create-react-app-express
