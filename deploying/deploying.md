# Deploying your project to Heroku

### Projected Time
3-4 hours

### Prerequisites
- Node.js and npm must be installed
- Have an existing create-react-app frontend to go with your Node.js/express backend
- Have already learned about:
  - JS I - VI
  - Node
  - Express
  - MongoDB

### Motivation
Deployment is a fancy term for getting your website on the web. After building out your app, you might want to share it with others, and to do that you need to deploy your app to the web where others can access it. In this lesson we'll learn more about deployment, and learn one way to deploy an app.

### Objectives
**Apprentices will be able to:** 
- Deploy their website to a third-party hosting service such as Heroku.

### Specific Things To Teach
- What is deployment?
- Heroku - a cloud based server

### Materials
- [Video - What is Heroku](https://youtu.be/r5ZUQvl9BtE)
- [Techtonica Slides: Deploying](https://docs.google.com/presentation/d/1Enwhd9hl1fn1-afMXJ6xvkJm5SDJpHjfQoA7s2znHpw/edit?usp=sharing)
- [Overview of Deployment Options - MDN Express & Node Deployment](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/deployment)
- [Tutorial - Heroku Dev Center Deployment](https://devcenter.heroku.com/articles/deploying-nodejs)
- [Code School Tutorial(requires sign-in) - Domain Names,Name Servers, and Cloud Based Servers](https://www.codeschool.com/beginners-guide-to-web-development/deploying-your-first-website)
- [Deploy Node.JS Apps to Heroku (10 min Video)](https://youtu.be/AZNFox2CvBk)

### Lesson

Heroku is a cloud-based service you can use to put your site on the internet for people to interact with.

Learn about deployment by going through the [Techtonica Slides on Deploying](https://docs.google.com/presentation/d/1Enwhd9hl1fn1-afMXJ6xvkJm5SDJpHjfQoA7s2znHpw/edit?usp=sharing)

Learn a little about Heroku by watching: [Video - What is Heroku](https://youtu.be/r5ZUQvl9BtE)

#### Deploying
Now we'll work on deploying your app to Heroku.

We'll be combining your frontend (create-react-app) with your backend (express) and deploying it to Heroku. Your frontend 
contains "static" Javascript files -- when you deploy to heroku, heroku turns your whole React app into a couple of static files that it will serve to the browser. No matter what data you have in the database, these files will always be the same.

Your backend, on the other hand, is dynamic -- when you make an API request, the backend runs javascript code to do things like reading and writing to a database. Unlike the React app, which always serves the same files to the browser, the backend will serve different information to the browser depending on what's in the database. We're going to combine your dynamic code (express), with your static code (create-react-app).

1. cd into the React app you created and move _everything_ into a new directory named `client`:
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
mv server/node_modules .
```

At this point, you should have the following directory structure:
```
./eventonica-app
./eventonica-app/client/* # The code for your React App
./eventonica-app/server/* # Your express API (app.js etc.)
./eventonica-app/package.json # Toplevel package.json used by Heroku to run your app
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
```process.env.PORT || 3000``` (Replace 3000 by a different number if your Express app was configured to run on a different port)

When we deploy to Heroku, Heroku will choose what port our server runs on.

6. Modify your express server to serve static files by adding this block to your express server:

```javascript
if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "../client/build")));
  // Handle React routing, return all requests to React app
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });
}
```

This block of code only runs in production. When it runs, it will serve your Javascript files if the URL doesn't match an existing API.

6. Configure the top-level `package.json` to work with Heroku by adding the following two lines to the `scripts` section:
```json
    "start": "node server/server.js",
    "heroku-postbuild": "cd client && npm install && npm install --only=dev --no-shrinkwrap && npm run build"
```

7. `cd client` and run `npm build`. `cd ..` then run `npm start` You should see your react app on `localhost:3000` and your API on `localhost:3000/<api-url>`

8.  Create a free Heroku account at https://signup.heroku.com/dc.  
Through the Heroke web UI, create a new Application. 
Once you create the app, add the Postgres add-on.

9. Configure your database. Heroku will specify environment variables you can use to connect to the DB:
```javascript
new Pool({
  // Make sure you swap out <user> and <password>
  connectionString: process.env.DATABASE_URL || 'postgres://<user>@localhost:5432&password=<password>'
  // Use SSL but only in production
  ssl: process.env.NODE_ENV === 'production'
});
```

9. Install the Heroku CLI: ```brew tap heroku/brew && brew install heroku``` then use `heroku login`

10. Use Heroku to create the database tables you need:
```heroku pg:psql```
You should use the same commands you ran to create your database locally
```create table events (.....)```

11. Commit everything!
```
git add server
git add client
git add package.json

git commit -am "Heroku setup\!"
```

Ensure you don't have any missing files: `git status` and commit them if you need to.

12. Deploy your app!
```git push heroku master```
This takes a loooonnnng time.
This will print the URL your app was deployed to. Trying going to it! If something goes run, use `heroku logs --tail` to debug.

### Wrapping Up
Lastly, we'll configure your create-react-app client to work seamlessly with your express backend locally, even though they're running on two different ports. You can do this by adding the following line to `client/package.json`:
```
"proxy": "http://localhost:3000/"
```

### Gotchas
- Ensure your don't accidentally commit `node_modules`
- Don't forget to configure `port` to come from `process.env`
- Use `heroku logs --tail` to see what's wrong



All done! Small differences in the way you've set up your site may make bits of this process not work as expected, so there may be some debugging required. Here is a sample repository you can refer to: https://github.com/esausilva/example-create-react-app-express 
