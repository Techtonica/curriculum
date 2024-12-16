# Deploying your project to Heroku

### Projected Time

About 3-4.5 hours

### Prerequisites

- [JS Lessons I - VI](../javascript)
- [Node Lesson](../node-js/node-js.md)
- [Express Lesson](../express-js/express.md)
- [PostgreSQL Lesson](../databases/installing-postgresql.md)
- [A free Heroku account](https://signup.heroku.com/dc)
- [Node.js and npm must be installed](https://nodejs.org/en/download/)
- An existing Express/Node.js app

### Motivation

Deployment is a fancy term for getting your website on the web. After building out your app, you might want to share it with others and to do that you need to deploy your app to the web where others can access it. In this lesson, we'll learn more about deployment, and learn one way to deploy an app.

### Objectives

**Participants will be able to:**

- Deploy their website to a third-party hosting service such as Heroku.

### Specific Things to Learn

- What is deployment?
- Heroku - a cloud-based server

### Materials

- [Video - What is Heroku (4 mins watch)](https://youtu.be/r5ZUQvl9BtE)
- [Techtonica Slides: Deploying](https://docs.google.com/presentation/d/1Enwhd9hl1fn1-afMXJ6xvkJm5SDJpHjfQoA7s2znHpw/edit?usp=sharing)
- [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs)

### Lesson

- Heroku is a cloud-based service you can use to put your site on the internet for people to interact with.
- Learn about deployment by going through the [Techtonica Slides on Deploying](https://docs.google.com/presentation/d/1Enwhd9hl1fn1-afMXJ6xvkJm5SDJpHjfQoA7s2znHpw/edit?usp=sharing.
- Learn a little about Heroku by watching: [Video - What is Heroku (4 mins watch)](https://youtu.be/r5ZUQvl9BtE).
- Go to https://devcenter.heroku.com/ and note the various languages Heroku supports.
- Read through this tutorial before we do it ourselves in the next section: https://devcenter.heroku.com/articles/getting-started-with-nodejs.

#### Deploying

Now we'll work on deploying your app to Heroku.

We'll be combining your front-end (React) with your back-end (Express) and deploying it to Heroku. Your front-end contains "static" JavaScript files -- when you deploy to Heroku, it turns your whole React app into a couple of static files that it will serve to the browser. No matter what data you have in the database, these files will always be the same.

Your backend, on the other hand, is dynamic -- when you make an API request, the backend runs javascript code to do things like reading and writing to a database. Unlike the React app, which always serves the same files to the browser, the backend will serve different information to the browser depending on what's in the database. We're going to combine your dynamic code (Express), with your static code (React).

1. cd into the React app you created and move _everything_ into a new directory named `client`.

   ```
   cd <my react app>
   mkdir client
   mv * client
   ```

1. Create a server directory. Copy all the files from your Express API folder (1-3 JS files + package.json) into the `server` folder you're about to create inside your React app. _**This is where your API code will live from now on -- don't modify or use the old directory or repo**_

   ```
   mkdir server
   cp -r ~/path.to.source/. ~/path.to.destination/
   # We need to keep package.json, package-lock.json, and node_modules at the top level.
   mv server/package.json .
   mv server/package-lock.json .
   mv server/node_modules .
   ```

   At this point, you should have the following directory structure:

   ```
   ./eventonica-app
   ./eventonica-app/client/* # The code for your React App
   ./eventonica-app/server/* # Your express API (app.js)
   ./eventonica-app/package.json # Top level package.json used by Heroku to run your app
   ./eventonica-app/package-lock.json # Top level package-lock.json used by Heroku to run your app
   ```

   The `*` here denotes all contents within a folder. So `./eventonica-app/client/*` refers to all the files & folders within this ‘client’ folder that make up your frontend React app.

   `./eventonica-app/server/*` refers to all the content within this ‘server’ folder that make up your backend application using Node.js/ Express. This may include the main Node.js application file, ex. `app.js`, and the Express API connecting to the Postgres database.

1. Test out your new server locally.

   ```
   # Make sure you use the <filename> you used when you created your Express API
   node server/<filename.js
   ```

1. Modify your gitignore to ensure you don't commit `build` or `node_modules`, even though they aren't at the root. Add these lines:

   ```
   **/node_modules/
   **/build/
   ```

1. Change the port your server is listening on to
   `process.env.PORT || 3000`. (Replace 3000 by a different number if your Express app was configured to run on a different port).

   When we deploy to Heroku, Heroku will choose what port our server runs on.

1. Modify your express server to serve static files. Add this block to your express server AFTER all your other defined routes:

   ```javascript
   // Add this below all your other routes
   if (process.env.NODE_ENV === 'production') {
     // Serve any static files
     app.use(express.static(path.join(__dirname, '../client/build')));
     // Handle React routing, return all requests to React app
     app.get('*', function (req, res) {
       res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
     });
   }
   ```

   This block of code only runs in production. When it runs, it will serve your JavaScript files if the URL doesn't match an existing API.

1. Configure the top-level `package.json` to work with Heroku. Add the following two lines to the `scripts` section of the JSON file:

   ```json
       "start": "node server/<filename.js>",
       "heroku-postbuild": "cd client && npm install && npm install --only=dev --no-shrinkwrap && npm run build"
   ```

1. Create a free Heroku account. https://signup.heroku.com/dc.
   Through the Heroku web UI, create a new Application.
   Once you create the app, add the Postgres add-on by going to the Resources tab and searching in the "Add-ons" search box for Postgres. Click the "Heroku Postgres" option. Finally, select the free version and click "Provision."

1. Install the Heroku CLI from the command line. `brew tap heroku/brew && brew install heroku` then use `heroku login`

1. Attach your Heroku app to your code. Run `heroku git:remote -a YOUR-APP-NAME` inside the terminal at the root of your project directory.

   If the command is successful, you will see the output `set git remote heroku to https://git.heroku.com/YOUR-APP-NAME.git` in the terminal. A [git remote](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes) is a version of your repository existing on another server. The output confirms that you now have a [git remote hosted on Heroku](https://devcenter.heroku.com/articles/git#creating-a-heroku-remote) — you will be pushing your code to _this_ repository to deploy your app to Heroku.

1. Configure your database. Heroku will specify environment variables you can use to connect to the DB. Insert the piece of code below into the main Node.js application file (ex. `server/app.js`). Fill in your local database name in the Postgres URL. This is the default database URL when your app is running locally.

   When you [create the database on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs#provision-a-database) in the next step, it will be automatically set the `DATABASE_URL` environment variable. The code snippet below ensures that the `DATABASE_URL` is used in lieu of the local Postgres URL when the app runs on Heroku.

   ```javascript
   const { Pool } = require('pg');
   new Pool({
     // Make sure you swap out <database_name> for the name you gave your postgres database
     connectionString: process.env.DATABASE_URL || 'postgres://localhost:5432/<database_name>'
     // Use SSL only in production
     ssl: process.env.NODE_ENV === 'production'
   });
   ```

   Note: If you haven't previously, install [`node-postgres`](https://node-postgres.com/) using `npm install pg` on the terminal. This module is used to connect to the database.

1. Use Heroku to create the database tables you need.
   `heroku pg:psql` You should use the same commands you ran to create your database locally `create table events (.....)`
   If you've forgotten, `psql` into your local database and check your table schema with `\d events`. Copy that schema into your new Heroku database.

1. Commit everything!

   ```
   git add server
   git add client
   git add package.json

   git commit -am "Heroku setup\!"
   ```

   Ensure you don't have any missing files: `git status` and commit them if you need to.

1. Deploy your app!
   `git push heroku main` This takes a long time. This will print the URL your app was deployed to. Trying going to it. If something goes wrong, use `heroku logs --tail` to debug.

### Wrapping Up

Lastly, we'll configure your React frontend client to work seamlessly with your express server backend locally, even though they're running on two different ports.

create-react-app: add the following line to `client/package.json`:

```
"proxy": "http://localhost:3000/"
```

React + Vite: add the following line to `client/vite.config.js`:

```
server: {
    proxy: {
      '/api': {
        target: "http://localhost:8080",
        changeOrigin: true,
        secure: false,
      }
    }
  }
```

### Gotchas

- Ensure you don't accidentally commit `node_modules`
- Don't forget to configure `port` to come from `process.env`
- Use `heroku logs --tail` to see what's wrong

All done! Small differences in the way you've set up your site may make bits of this process not work as expected, so there may be some debugging required.

Here is a [sample repository](https://github.com/esausilva/example-create-react-app-express) that’s been deployed to Heroku using steps in this [blog post](https://esausilva.com/2017/11/14/how-to-use-create-react-app-with-a-node-express-backend-api/). The project uses React for the frontend & Node.js/ Express for the backend. Note: the project does not make use of a Postgres database.

Here is a repository with similar heroku deployment steps performed entirely using the command line and heroku CLI: https://github.com/FTraian/node-express-postgresql-heroku-tutorial. [[Heroku CLI Documentation, for reference]](https://devcenter.heroku.com/articles/heroku-cli-commands)

### Supplemental Resources

- [Tutorial - Heroku Dev Center Deployment](https://devcenter.heroku.com/articles/deploying-nodejs)
- [Overview of Deployment Options - MDN Express & Node Deployment](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/deployment)
