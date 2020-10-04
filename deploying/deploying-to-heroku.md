# Issue 1358 Notes
Issue comments/suggestions will appear <span style='color:red'>in red text</span>. Non-code changes are likely not commented and will on be visible on ???WHAT'S THAT CALLED??? (i.e. grammar, spelling)

Note: I have not followed previous curriculum instruction prior to complete this issue. I did not build the apps as a student would prior to this issue, I utilized student code on GitHub which required some breaking apart and rebuild to follow the Deployment instructions. I may also have been limited in following some instructions by my own new learning with respect to the topic (specifically database).

# Deploying your project to Heroku

### Projected Time

About 3-4.5 hours

### Prerequisites
<span style='color:red'>all links active, previously reported 7/28/20</span>

- [JS Lessons I - VI](../javascript)
- [Node Lesson](../node-js/node-js.md)
- [Express Lesson](../express-js/express.md)
- [PostgreSQL Lesson](../databases/installing-postgresql.md)
- [A free Heroku account](https://signup.heroku.com/dc)
- Node.js and npm must be installed
- An existing Express/Node.js app

### Motivation

Deployment is a fancy term for getting your website on the web. After building out your app, you might want to share it with others and to do that you need to deploy your app to the web where others can access it. In this lesson, we'll learn more about deployment, and learn one way to deploy an app.

### Objectives

**Apprentices will be able to:**

- Deploy their website to a third-party hosting service such as Heroku.

### Specific Things to Learn

- What is deployment?
- Heroku - a cloud-based server

### Materials
<span style='color:red'>as previously reported 7/28/20. "Materials links all active. Notes below regarding content of individual resources in Materials.

Video "What is Heroku," no issues.

Techtonica Slides: Deploying
Slide 6, FYI, refers to only PAAS and IAAS, video on slide 7 refers to SAAS, PAAS, and IAAS.
Slide 14 Rackspace video is dead link/null.
Slide 18 Links are not clickable (because they are in Google docs), copied links active for all except #3 to Digital Ocean which is a 404 error.

Video "The Deploy Node.JS Apps to Heroku" is four years old and the links shown in it are somewhat different than in the actual Heroku Dev Center guide it follows. In the video there is one jump the instructor makes that is done with no instruction to the student (about 3 minutes in), "So let's go ahead and take a look at the directory we just cloned..."

The Heroku guide is beginner friendly, thorough, and presented in short increments. Students can start here https://devcenter.heroku.com/ and see the various languages Heroku supports and click "Get Started" OR they can click on Node.js. Both options will bring them to https://devcenter.heroku.com/articles/getting-started-with-nodejs which is the tutorial. I viewed some videos on YouTube and recommend no video, the tutorial is the most appropriate and will not go out of date."</span>

- [Video - What is Heroku (4 mins watch)](https://youtu.be/r5ZUQvl9BtE)
- [Techtonica Slides: Deploying](https://docs.google.com/presentation/d/1Enwhd9hl1fn1-afMXJ6xvkJm5SDJpHjfQoA7s2znHpw/edit?usp=sharing)
- [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs)

### Lesson
<span style='color:red'>links active as previously reported 7/28/20</span>

- Heroku is a cloud-based service you can use to put your site on the internet for people to interact with.
- Learn about deployment by going through the [Techtonica Slides on Deploying](https://docs.google.com/presentation/d/1Enwhd9hl1fn1-afMXJ6xvkJm5SDJpHjfQoA7s2znHpw/edit?usp=sharing.
- Learn a little about Heroku by watching: [Video - What is Heroku (4 mins watch)](https://youtu.be/r5ZUQvl9BtE).
- Go to https://devcenter.heroku.com/ and note the various languages Heroku supports.
- Read through this tutorial before we do it ourselves in the next section: https://devcenter.heroku.com/articles/getting-started-with-nodejs.

#### Deploying

Now we'll work on deploying your app to Heroku.

We'll be combining your frontend (create-react-app) with your backend (express) and deploying it to Heroku. Your frontend contains "static" JavaScript files -- when you deploy to Heroku, Heroku turns your whole React app into a couple of static files that it will serve to the browser. No matter what data you have in the database, these files will always be the same.

Your backend, on the other hand, is dynamic -- when you make an API request, the backend runs javascript code to do things like reading and writing to a database. Unlike the React app, which always serves the same files to the browser, the backend will serve different information to the browser depending on what's in the database. We're going to combine your dynamic code (express) with your static code (create-react-app).

1. cd into the React app you created and move _everything_ into a new directory named `client`.

```
cd <my react app>
mkdir client
mv * client
```
<span style='color:red'>`mv * client` returned this warning "mv:cannot move 'client' to a subdirectory of itself, 'client/client'." This code adds an extra directory level. Suggest feedback to the student of what they should see at this point to ensure accuracy as similarly prompted below after directions for `mkdir server`</span>.

2. Create a server directory. Copy all the files from your Express API folder (1-3 JS files + package.json) into the `server` folder you're about to create inside your React app. _**This is where your API code will live from now on -- don't modify or use the old directory or repo**_

```
mkdir server
cp my-express-server/* server
# We need to keep package.json, package-lock.json, and node_modules at the top level.
mv server/package.json .
mv server/package-lock.json .
mv server/node_modules .
```
<span style='color:red'>`cp my-express-server/* server` did not work as expected. This code worked: `cp -r ~/path.to.source/. ~/path.to.destination/ NOTE: trailing / is important.</span>

At this point, you should have the following directory structure:

```
./eventonica-app
./eventonica-app/client/* # The code for your React App
./eventonica-app/server/* # Your express API (app.js etc.)
./eventonica-app/package.json # Top level package.json used by Heroku to run your app
./eventonica-app/package-lock.json # Top level package-lock.json used by Heroku to run your app
```
<span style='color:red'> "etc." was confusing to me, is it necessary?</span>

3. Test out your new server locally.

```
# Make sure you use the <filename> you used when you created your Express API
node server/app.js
```
<span style='color:red'>Recommend `node server/<filename.js>` instead of `node server/app.js`</span>

4. Modify your gitignore to ensure you don't commit `build` or `node_modules`, even though they aren't at the root. Add these lines:

```
**/node_modules/
**/build/
```

5. Change the port your server is listening on to
   `process.env.PORT || 3000`. (Replace 3000 by a different number if your Express app was configured to run on a different port).

When we deploy to Heroku, Heroku will choose what port our server runs on.

6. Modify your express server to serve static files. Add this block to your express server AFTER all your other defined routes:

```javascript
// Add this below all your other routes
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, '../client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}
```

This block of code only runs in production. When it runs, it will serve your JavaScript files if the URL doesn't match an existing API.

<span style='color:red'>NOTE: there are two Step 6s in the original instruction; numbering updated</span>
7. Configure the top-level `package.json` to work with Heroku. Add the following two lines to the <span style='color:red'>json</span> `scripts` section:

```
    "start": "node server/<span style='color:red'><filename.js>",
    "heroku-postbuild": "cd client && npm install && npm install --only=dev --no-shrinkwrap && npm run build"
```
<span style='color:red'>NOTE: is instruction below (line 149) "You can replace..." necessary if above instruction is re-written as suggested above?</span>
You can replace `node server/server.js` with whatever you named your API code
file.

8.  Create a free Heroku account. https://signup.heroku.com/dc.
    Through the Heroku web UI, create a new Application.
    Once you create the app, add the Postgres add-on by going to the Resources tab
    and searching in the "Add-ons" search box for Postgres.
    Click the "Heroku Postgres" option. Finally, select the free version and click
    "Provision."

9.  Install the Heroku CLI<span style='color:red'> from the command line</span>. `brew tap heroku/brew && brew install heroku` then use `heroku login`

10.  Attach your Heroku app to your code. Run `heroku git:remote -a YOUR-APP-NAME`
    inside the terminal at the root of your project directory.

  <span style='color:red'>NOTE: After running this code I got the message 'set git remote heroku to https://git.heroku.com/linda-booktonica.git' This step confused me and following research I proceeded but I never was sure I did the correct thing and it impacted the remainder of the tutorial. Not having my own database didn't help! Perhaps this is intentional for the student however there have been previous check-in instances in this tutorial which were helpful to me and prevented me from making a mistake. I suggest additional instruction.</span>

11. Configure your database. Heroku will specify environment variables you can use to connect to the DB. Fill in your local database name in the Postgres URL. This is the default
database URL when your app is running locally.

```javascript
new Pool({
  // Make sure you swap out <user> and <password>
  <span style='color:red'>what user and password?</span>
  connectionString: process.env.DATABASE_URL || 'postgres://localhost:5432/<database_name>'
  // Use SSL only in production
  ssl: process.env.NODE_ENV === 'production'
});
```

<span style='color:red'>NOTE: the heroku docs direction are different than the directions here, lots of research again as to where `new Pool` code should go, I reviewed the deploying slides and click on the link in slide 17 for help </span>

12.  Use Heroku to create the database tables you need.
    `heroku pg:psql`
    You should use the same commands you ran to create your database locally
    `create table events (.....)`
    If you've forgotten, `psql` into your local database and check your table schema
    with `\d events`. Copy that schema into your new Heroku database.

13.  Commit everything!

```
git add server
git add client
git add package.json

git commit -am "Heroku setup\!"
```

Ensure you don't have any missing files: `git status` and commit them if you need to.

14. Deploy your app!
    `git push heroku main`
    This takes a long time.
    This will print the URL your app was deployed to. Trying going to it. If something goes wrong, use `heroku logs --tail` to debug.

### Wrapping Up

Lastly, we'll configure your create-react-app client to work seamlessly with your express backend locally, even though they're running on two different ports. You can do this by adding the following line to `client/package.json`:

```
"proxy": "http://localhost:3000/"
```

### Gotchas

- Ensure you don't accidentally commit `node_modules`
- Don't forget to configure `port` to come from `process.env`
- Use `heroku logs --tail` to see what's wrong

All done! Small differences in the way you've set up your site may make bits of this process not work as expected, so there may be some debugging required. Here is a sample repository you can refer to https://github.com/esausilva/example-create-react-app-express<span style='color:red'>NOTE: I did not find this repo helpful</span>

### Supplemental Resources
<span style='color:red'>change from 7/28/20 report, links 1 and 2 active, Code School Tutorial is now a dead link</span>

- [Tutorial - Heroku Dev Center Deployment](https://devcenter.heroku.com/articles/deploying-nodejs)
- [Overview of Deployment Options - MDN Express & Node Deployment](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/deployment)
- [Code School Tutorial(requires sign-in) - Domain Names,Name Servers, and Cloud Based Servers](https://www.codeschool.com/beginners-guide-to-web-development/deploying-your-first-website)