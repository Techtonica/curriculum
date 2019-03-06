# Deploying your project to Heroku

### Projected Time
3-4 hours

### Prerequisites
- [Create a free Heroku account](https://signup.heroku.com/dc)
- Node.js and npm must be installed
- Have an existing Node.js app to deploy
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

We'll be combining (or creating) your frontend (create-react-app) with your backend (express) and deploying it to Heroku.

Heroku is a cloud-based service you can use to put your site on the internet for people to interact with.

Learn about deployment by going through the [Techtonica Slides on Deploying](https://docs.google.com/presentation/d/1Enwhd9hl1fn1-afMXJ6xvkJm5SDJpHjfQoA7s2znHpw/edit?usp=sharing)

Learn a little about Heroku by watching: [Video - What is Heroku](https://youtu.be/r5ZUQvl9BtE)

Now we'll work on deploying your app to Heroku.

Create a free Heroku account at https://signup.heroku.com/dc

Download and install the Heroku CLI with `brew install heroku/brew/heroku`

The apps that you made have two components:
1. A static component -- the React App you created. These files are static and unchanging.
2. A dynamic component -- The Express app you created. This is a webserver that is serving custom content depending on what the user does.

0. At the end of all of this, you will end up with the following directory structure:
```
./eventonica-app
./eventonica-app/client/* # The code for your React App
./eventonica-app/server/* # Your express API (app.js etc.)
./eventonica-app/package.json # Toplevel package.json used by Heroku to run your app
```
1. cd into the React app you created and move _everything_ into a new directory named `client`:
```
cd <my react app>
mkdir client
mv * client
```

3. Create a server directory. You will copy all the files from your Express API folder (1-3 JS files + package.json) into the `server` folder you're about to create inside your React app. _**This is where your API code will live from now on -- don't modify or use the old directory or repo**_
```
mkdir server
cp my-express-server/* server
# We need to keep package.json and node_modules at the top level.
mv server/package.json .
mv server/node_modules .
```

4. Test out your new server locally:
```
# Make sure you use the filename you used when you created your Express API
node server/app.js
```



4. Modify your gitignore to ensure you don't commit `build` or `node_modules`, even though they aren't at the root:
```
**/node_modules/
**/build/
```
5. Change the port your server is listening on to be
```process.env.PORT || 5000``` (or whatever you chose)

When we deploy to Heroku, heroku will choose what port our server runs on.

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

This block of code only runs in production. When it runs, it will server your Javascript files if the URL doesn't match an existing API.

6. Configure the top-level `package.json` to work with Heroku by adding the following two lines to the `scripts` section:
```json
    "start": "node server/server.js",
    "heroku-postbuild": "cd client && npm install && npm install --only=dev --no-shrinkwrap && npm run build"
```

7. `cd client` and run `yarn build`. `cd ..` then run `npm start` You could see an empty react app on `localhost:3000` and your API on `localhost:3000/<api-url>`

8. Create a Heroku Account + Application. Once you create the app, add the Postgres add-on.

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

git commit -am "First commit\!"
```

Ensure you don't have any missing files: `git status` and commit them if you need to.

12. Deploy your app!
```git push heroku master```
This takes a loooonnnng time.
This will print the URL your app was deployed to. Trying going to it! If something goes run, use `heroku logs --tail` to debug.

### Wrapping Up
Lastly, we'll configure your create-react-app client to work seamlessly with your express backend, even though they're running on two different ports. You can do this by adding the following line to `client/package.json`:
```
"proxy": "http://localhost:5000/"
```

### Gotchas
- Ensure your don't accidentally commit `node_modules`
- Don't forget to configure `port` to come from `process.env`
- Use `heroku logs --tail` to see what's wrong



All done! Small differences in the way you've set up your site may make bits of this process not work as expected, so there may be some debugging required. Here is a sample repository you can refer to: https://github.com/esausilva/example-create-react-app-express 
