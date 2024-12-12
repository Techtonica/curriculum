# Deploying your project to Heroku

### Projected Time

About 3-4.5 hours

### Prerequisites

- Node.js and npm must be installed.
- An existing Node.js app
- [JS I - VI](../javascript)
- [Node](../node-js/node-js.md)
- [Express](../express-js/express.md)
- [PostgreSQL](../databases/installing-postgresql.md)

### Motivation

Deployment is a fancy term for getting your website on the web. After building out your app, you might want to share it with others and to do that you need to deploy your app to the web where others can access it. In this lesson, we'll learn more about deployment and learn one way to deploy an app.

### Objectives

**Participants will be able to:**

- Deploy their website to a third-party hosting service such as Heroku.

### Specific Things to Learn

- What is deployment?
- Heroku - a cloud-based server

### Materials

- [Video - What is Heroku (4 mins watch)](https://youtu.be/r5ZUQvl9BtE)
- [Techtonica Slides: Deploying](https://docs.google.com/presentation/d/1Enwhd9hl1fn1-afMXJ6xvkJm5SDJpHjfQoA7s2znHpw/edit?usp=sharing)
- [Deploy Node.JS Apps to Heroku (10 mins Video)](https://youtu.be/AZNFox2CvBk)

### Lesson

- Heroku is a cloud-based service you can use to put your site on the internet for people to interact with.
- Learn about deployment by going through the [Techtonica Slides on Deploying](https://docs.google.com/presentation/d/1Enwhd9hl1fn1-afMXJ6xvkJm5SDJpHjfQoA7s2znHpw/edit?usp=sharing)
- Learn a little about Heroku by watching: [Video - What is Heroku (4 mins watch)](https://youtu.be/r5ZUQvl9BtE)
- Watch [Deploy Node.JS Apps to Heroku (10 min Video)](https://youtu.be/AZNFox2CvBk)

#### Deploying

Now we'll work on deploying your app to Heroku.

We'll be combining your front-end (React) with your back-end (Express) and deploying it to Heroku. Your front-end contains "static" JavaScript files -- when you deploy to Heroku, it turns your whole React app into a couple of static files that it will serve to the browser. No matter what data you have in the database, these files will always be the same.

Your backend, on the other hand, is dynamic -- when you make an API request, the backend runs javascript code to do things like reading and writing to a database. Unlike the React app, which always serves the same files to the browser, the backend will serve different information to the browser depending on what's in the database. We're going to combine your dynamic code (Express), with your static code (React).

1. cd into the React app and create 2 new directories `client` and `server`, then move _everything_ into the directory `client`:

```
cd <my react app>
mkdir client
mv * client
```

2. Create a server directory. You will copy all the files from your Express API folder (1-3 JS files + package.json) into the `server` folder you're about to create inside your React app. _**This is where your API code will live from now on -- don't modify or use the old directory or repo**_

```
mkdir server
cp my-express-server/* server
# We need to keep package.json and node_modules at the top level.
mv server/package.json .
mv server/package-lock.json .
mv server/node_modules .
```

At this point, you should have the following directory structure:

```
./eventonica-app
./eventonica-app/client/* # The code for your React App
./eventonica-app/server/* # Your express API (app.js etc.)
./eventonica-app/package.json # Toplevel package.json used by Heroku to run your app
./eventonica-app/package-lock.json # Toplevel package-lock.json used by Heroku to run your app
```

3. Test out your new server locally:

```
# Make sure you use the filename you used when you created your Express API
node server/app.js
```

4. Modify your gitignore to ensure you don't commit `build` or `node_modules`, even though they aren't at the root. Add these lines:

```
**/node_modules/
**/build/
```

5. Change the port your server is listening on to be
   `process.env.PORT || 3000` (Replace 3000 by a different number if your Express app was configured to run on a different port)

When we deploy to Heroku, Heroku will choose what port our server runs on.

6. Modify your express server to serve static files by adding this block to your express server AFTER all your other defined routes:

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

6. Configure the top-level `package.json` to work with Heroku by adding the following two lines to the `scripts` section:

```json
    "start": "node server/server.js",
    "heroku-postbuild": "npm install --only=dev --no-shrinkwrap && npm run build"
```

You can replace `node server/server.js` with whatever you named your API code
file.

7.  Create a free Heroku account at https://signup.heroku.com/dc.  
    ThroughtheHerokuwebUI,createanewApplication.Onceyoucreatetheapp,addthePostgresadd-onbygoingtotheResourcestabandsearchinginthe"Add-ons"searchboxforPostgres.Clickthe"HerokuPostgres"option.Finally,selectthefreeversionandclick"Provision".OryoucancreateanewApplicationfromtheCLI.Tocreateanapplicationwithname,installtheHerokuCLIandrunthefollowingcommand`heroku create app_name`
    This command will only be used on an initialized git repository. In that case, the command creates the application as well as a git remote, that you can use to push your code to Heroku:

    ```mkdir example
      cd example
      git init
      heroku apps:create app_name

    ```

8.  Install the Heroku CLI: `brew tap heroku/brew && brew install heroku` then use `heroku login`

9.  Attach your Heroku app to your code by running `heroku git:remote -a YOUR-APP-NAME`
    inside the terminal at the root of your project directory.

10. Configure your database. Heroku will specify environment variables you can use to connect to the DB:

```javascript
new Pool({
  // Make sure you swap out <user> and <password>
  connectionString: process.env.DATABASE_URL || 'postgres://localhost:5432/<database_name>'
  // Use SSL but only in production
  ssl: process.env.NODE_ENV === 'production'
});
```

Fill in your local database name in the Postgres URL. This is the default
database URL when your app is running locally.

11. Use Heroku to create the database tables you need:
    `heroku pg:psql`
    You should use the same commands you ran to create your database locally
    `create table events (.....)`
    If you've forgotten, `psql` into your local database and check your table schema
    with `\d events`. Copy that schema into your new Heroku database.

12. Commit everything!

```
git add -a
git commit -m "Heroku setup\!"
```

Ensure you don't have any missing files: `git status` and commit them if you need to.

13. Deploy your app!
    `git push heroku main`
    This takes a long time.
    This will print the URL your app was deployed to. Try going to it! If something goes wrong, use `heroku logs --tail` to debug.

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

All done! Small differences in the way you've set up your site may make bits of this process not work as expected, so there may be some debugging required. Here is a sample repository you can refer to https://github.com/esausilva/example-create-react-app-express

### Supplemental Resources

- [Tutorial - Heroku Dev Center Deployment](https://devcenter.heroku.com/articles/deploying-nodejs)
- [Overview of Deployment Options - MDN Express & Node Deployment](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/deployment)
