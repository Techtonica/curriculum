## Getting Started with Node.js, Part 2

### Languages

- JavaScript

### Frameworks

- Node.js

### Topics

1. Create a JavaScript file and run it using node
2. Use npm to create a `package.json` file
3. Create a basic web server and run it with Node.js
4. Serve an HTML file with Node.js

### Overview

This is Part 2 of the lab exercise for Node.js. In Part 1 you downloaded and installed Node.js and practiced running JavaScript commands in the Node.js REPL. In Part 2, you will create a JavaScript file in Sublime/VSCODE/ATOM in which you will code a server using Node.js.

### Context

- You've downloaded Node.js; you know how to create new files in the Terminal and open them in your text editor of choice.
- This lab exercise will teach you how to make a webserver using Node.js!
- Knowing how to create a web server is an integral part of being an entry-level software engineer.

### Basic Requirements

1. Apprentices will obtain code from Techtonica staff by posting code in the #tech-help Techtonica Slack channel and pinging and instructor.

## Setup Instructions

Use the Terminal for navigating around the file system and creating new folders and files. Refer to the lesson on [Shell Commands](https://docs.google.com/presentation/d/1LuOLcpSAtNQlbULx9nWgXJNhgWQlfQ4nzLWQ0DuuPQk/edit?usp=sharing) if you need guidance on using the Terminal.

When you get to the steps below that ask you to initialize a git repo and track files using git, refer to the lesson on [Git and Version Control](https://docs.google.com/presentation/d/1znMOomkIkAkFKIz2e6t5tLpyzObKqOwfd90fsixSiec/edit?usp=sharing) if you need guidance.

Navigate to the `techtonica-labs` folder located in your Desktop.
Create a new folder called `getting-started-with-node` within the `techtonica-labs` folder.
Navigate to `getting-started-with-node`.
Initialize `getting-started-with-node` as a git repository.

If you have questions, do not disturb other pairs until you have spent 15-20 minutes troubleshooting within your own pair. Post a message on the #help channel in Slack if you and your pair partner are still stuck after 15-20 minutes. Be sure to format your question using the template we practiced in the [Asking Good Questions](https://docs.google.com/presentation/d/1O45nkq2bZX4ZDenmmA1lJ3iTvI80RXiPuOX2w__6Ykw/edit?usp=sharing) lesson.

## Lab Instructions

### Starter Code

There is no starter code for this lab exercise.

### Useful resource

[This video](https://youtu.be/U8XF6AFGqlc) covers all the material in this lab exercise. Please refer to it if you get stuck.

### Lab Exercise

---

#### Part 1 - Create a JavaScript file and run it using node

**First step**  
From your Terminal, create a new file called `app.js` in your `getting-started-with-node` folder. Open `app.js` using the Sublime shortcut in your Terminal. Add a print statement to your file, such as this:

`console.log("I'm learning to use Node.js!");`

Save the file.

**Second step**  
Return to your Terminal. Make sure your current working directory is your `getting-started-with-node` folder. Run the `app.js` file by entering this command in the Terminal:

`node app.js`

What happened?

**Third step**  
Open the `app.js` file again. Replace the print statement with a function that prints something different to the console. Save the file, then run it again with `node app.js`. What happened?

If nothing printed to the Terminal, you are missing something in your `app.js` file.

---

#### Part 2 - Use npm to create a `package.json` file

**First step**  
Every node project needs to have a `package.json` file because this file holds metadata about the project, such as who created it, what version it is, and what the dependencies are.

The node package manager (npm) guides us through creating a `package.json` file. From your `getting-started-with-node` folder run this command:

`npm init`

![Message from npm init command](/node-js/images/npm-init-msg.png?raw=true)

You will see a succession of prompts appear in the Terminal. Type in your responses where appropriate, though for our purposes it's OK to just go with the defaults for now by pressing < ENTER > for each prompt that does not need to be customized.

![npm walkthrough](/node-js/images/npm-walkthrough.png?raw=true)

Once successful, you'll see a JSON object printed to your Terminal.

![npm json](/node-js/images/npm-json.png?raw=true)

Another way to create a `package.json` file is using `npm init -y`

The -y flag when passed to npm commands tells the generator to use the defaults instead of asking questions.
![Message from npm init command](/node-js/images/npm-init-y-msg.png?raw=true)

**Second step**  
While in your `getting-started-with-node` folder, running the `ls` command should reveal that a new `package.json` file has been added to the folder. Open `package.json` in your text editor and see what's inside the file. It should be the same as the JSON that was printed to your Terminal in Step 1.

---

#### Part 3 - Create a basic web server and run it with Node.js

**First step**  
Open `app.js` and delete the function you wrote in the previous step. In its place, we need to add the code given below. **Do not copy and paste this code into your file.**

```javascript
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader = ('Content-type', 'text/plain');
  res.end('Hello World!');
});
```

Before reading the line-by-line descriptions that follow, discuss with your pair partner what you think each line of code is doing in the above snippet. Then, read the descriptions below.

> So far, you are used to creating a variable with the `var` keyword. The keyword `const` (short for "constant") is a way of creating a variable name that can never be reassigned to another value within your program. When you create a variable with `const`, the value that is associated with that variable name is **constant** throughout the entire program. If you used `var` instead when creating a server, you could mistakenly reassign `port` or `hostname` to other values and accidentally crash your server. [This StackOverflow thread](https://stackoverflow.com/questions/21237105/const-in-javascript-when-to-use-it-and-is-it-necessary) has more details. [This response in particular](https://stackoverflow.com/a/22939592/5166521) is sufficient for our purposes.

What follows is a description of what each line of code is doing. Try to explain the code yourself before reading on.

`const http = require('http');` imports the HTTP module and binds it to a variable called `http`. The HTTP module comes with Node.js so we don't have to download it separately; we can just import it directly.

`const hostname = '127.0.0.1';` binds a string containing the web address of our local server to a variable called `hostname`. Using the web address of our local server lets us serve our webpage to our local machine rather than to a URL. Remember, regardless of which computer you are on, `127.0.0.1` is always `localhost`.

`const port = 3000;` binds the port number we want to listen in on to a variable called `port`. When a server "listens" to a port it is listening for requests and responses sent to/from that port.

```javascript
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader = ('Content-type', 'text/plain');
  res.end('Hello World!');
});
```

calls the `createServer` method on our `http` object. The result is a server instance, which we bind to a variable called `server`. We are setting the response's status code to be 200, which means 'OK'. We are setting the response's header to contain plain text. And `res.end()` concludes the server's response after rendering 'Hello World!'.

Now that you understand what the code is doing, type the code into your `app.js` file by hand. Save the file before continuing.

**Second step**  
There's a little more code we need to write before we can run `app.js` in Node: we need to tell the server to listen to the port we've specified and to send responses to the `hostname` we've specified. To do this, we call the `.listen()` method on our `server` object, passing in `port`, `hostname` and a callback function as arguments. The body of this callback function contains a print statement that will print to the Terminal while the server is running. Type the following code onto the end your `app.js` file by hand.

```javascript
server.listen(port, hostname, () => {
  console.log('Server running on port ' + port + '...');
});
```

Save the changes you made to `app.js`.

From the `getting-started-with-node` directory in your Terminal, run the command `node app.js`. What happens?

You should see the message you specified in your console.log() command appear in your Terminal — that means your server is running! Congratulations!

![Server is running](/node-js/images/server-running.jpg?raw=true)

There's one last thing we need to check. Remember that our server instance is supposed to send 'Hello World!' to the client making the request? Open a new tab in Chrome and navigate to http://127.0.0.1:3000. What do you see? Now, open another tab and navigate to http://localhost:3000. What do you see now?

In the Terminal, press < CONTROL > + C to shut down the server. We'll boot it up again later.

---

#### Part 4 - Serve an HTML file with Node.js

**First step**  
What we've done so far in this lab exercise has allowed you to take a huge leap forward in what is now possible for you to build. But we're not quite there yet. Web servers serve web pages, so let's learn how to do that next.

First, create a new file called `index.html` in your `getting-started-with-node` directory. Open it in Sublime. Copy and paste this code snippet into `index.html`:

```html
<!DOCTYPE html>
    <head>
        <title>First Node App!</title>
    </head>

    <body>
        <h1>Welcome to my first Node app!</h1>
        <p>Node is awesome.</p>
    </body>
</html>
```

Save the file.

**Second Step**
We need to tweak the `app.js` file a little because right now it sends 'Hello World' as a response, and we want it to send the entire `index.html` file as a response instead.

The first thing we need to do is import the filesystem module, called `fs`. We'll do this in exactly the same way we imported the `http` module. Add this line of code just under the line that imports the `http` module:

`const fs = require('fs');`

Next, we need to tell our server that `index.html` exists. We can do that with the `.readFile()` method from the `fs` module, which takes the filename (`index.html`) and a callback function as arguments. The callback function itself takes an error message and some HTML code as arguments. Type (don't copy and paste) this code after the line where you've created the `port` constant variable:

```javascript
fs.readFile('index.html', (err, html) => {});
```

Within this function we first need to handle any error(s) that might appear. Then, we can rendex `index.html`. We can add a few short lines of code inside the callback function in order to process any errors:

```javascript
fs.readFile('index.html', (err, html) => {
  if (err) {
    throw err;
  }
});
```

We can copy and paste all the rest of our code below the if statement, keeping it inside of the `fs.readfile()` call. Putting the rest of our code here means that if there are no errors, the `index.html` file will be rendered to the web page. But if errors are present, an error message will show and the `index.html` file will not be rendered. Make your `app.js` file look like this:

```javascript
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

fs.readFile('index.html', (err, html) => {
  if (err) {
    throw err;
  }

  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader = ('Content-type', 'text/plain');
    res.end('Hello World!');
  });

  server.listen(port, hostname, () => {
    console.log('Server running on port ' + port + '...');
  });
});
```

Save the file.

---

**Third Step**

There are just 3 lines of code we need to edit now in order to have `index.html` served to `localhost`!

First, remove the string inside the `res.end()` method call so all that remains is:

`res.end();`

Second, add a line of code above `res.end()` that looks like the code below. This extra line will send inside the response the HTML code received from `index.html`.

`res.write(html);`

Finally, in the `res.setHeader()` method call, change `text/plain` to `text/html`.

Save the file.

Re-start the server in the Terminal by running `node app.js` from within the `getting-started-with-node` directory. You should see "Server running on port 3000..." printed to the Terminal.

Next, open a new tab in Chrome and navigate to http://localhost:3000. You should see the `index.html` in all its rendered glory! Also note that the text that appears in the tab's title matches what you specified inside the `<title>` tags in `index.html`.

---

### Questions to Consider

- Discuss with your pair partner what you did in this lab exercise. What surprised you? What was challenging? What was fun about it?
- What concepts from the lesson slides appeared in this lab exercise?
- Based on what you were able to accomplish in the lab exercise, what else do you think will be possible to do with Node in terms of getting a website onto the "real" Internet?

### Extensions

- Write down in your journal the steps you took to create your first web app using Node.js. Use your own words and voice instead of copying the prompts from the lab exercise.
