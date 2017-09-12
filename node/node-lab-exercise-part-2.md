## Getting Started with Node.js, Part 2

### Languages
- JavaScript

### Frameworks
- Node.js

### Topics
1. Create a JavaScript file and run it using node
2. Use npm to create a `package.json` file
3. Create a basic web server and run it with Node.js

### Overview
This is Part 2 of the lab exercise for Node.js. In Part 1 you downloaded and installed Node.js and practiced running JavaScript commands in the Node.js REPL. In Part 2, you will create a JavaScript file in Sublime in which you will code a server using Node.js.

### Context
- You've downloaded Node.js; you know how to create new files in the Terminal and open them in Sublime.
- This lab exercise will teach you how to make a webserver using Node.js!
- Knowing how to create a web server is an integral part of being an entry-level software engineer.

### Basic Requirements
1. Students will obtain code reviews from Techtonica staff as specified in the instructions below.

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

### Lab Exercise

-----

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
Open the `app.js` file again. Replace the print statement with a function that prints something different to the console. Run the file again with `node app.js`. What happened?  

If nothing printed to the Terminal, you are missing something in your `app.js` file. Once `app.js` prints something to the Terminal, obtain a code review.

> **PAUSE.** Obtain a code review from Techtonica staff.

-----

#### Part 2 - Use npm to create a `package.json` file

**First step**  
Every node project needs to have a `package.json` file because this file holds metadata about the project, such as who created it, what version it is, and what the dependencies are. 

The node package manager (npm) guides us through creating a `package.json` file. From your `getting-started-with-node` folder run this command:

`npm init`

You will see a succession of prompts appear in the Terminal. Type in your responses where appropriate, though for our purposes it's OK to just go with the defaults for now by pressing < ENTER > for each prompt that does not need to be customized.

Once successful, you'll see a JSON object printed to your Terminal.

**Second step**  
While in your `getting-started-with-node` folder, running the `ls` command should reveal that a new `package.json` file has been added to the folder. Open `package.json` in Sublime and see what's inside the file. It should be the same as the JSON that was printed to your Terminal in Step 1. 

> **PAUSE.** Obtain a code review from Techtonica staff.

-----

#### Part 3 - Create a basic web server and run it with Node.js

**First step**  
Open `app.js` and delete the function you wrote in the previous step. In its place, we need to add the code given below. **Do not copy and paste this code into your file.** Before reading the description that follows, discuss with your pair partner what you think each line of code is doing. Then, read the description. Finally, type the code into your `app.js` file by hand so you fully understand what you are telling the file to do.

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

**Second step**  
There's a little more code we need to write before we can run `app.js` in Node: we need to tell the server to listen to the port we've specified and to send responses to the `hostname` we've specified. To do this, we call the `.listen()` method on our `server` object, passing in `port`, `hostname` and a callback function as arguments. The body of this callback function contains a print statement that will print to the Terminal while the server is running. Type the following code onto the end your `app.js` file by hand.

```javascript
server.listen(port, hostname, () => {
    console.log('Server running on port ' + port + ' ...');
});
```

Save the changes you made to `app.js`.

From the `getting-started-with-node` directory in your Terminal, run the command `node app.js`. What happens?

You should see the message you specified in your console.log() command appear in your Terminal — that means your server is running! Congratulations!

There's one last thing we need to check. Remember that our server instance is supposed to send 'Hello World!' to the client making the request? Open a new tab in Chrome and navigate to http://127.0.0.1:3000. What do you see? Now, open another tab and navigate to http://localhost:3000. What do you see now?

> **PAUSE.** Obtain a code review from Techtonica staff.

**Third step**  
Etiam eleifend est ac auctor pretium. Pellentesque eu quam urna. Morbi mattis purus at iaculis ornare. Sed id felis felis. Etiam euismod ante vel augue dictum, sed finibus arcu iaculis. Suspendisse maximus congue pharetra. Phasellus at sem vel sapien tincidunt porttitor vitae sit amet quam. Praesent sodales nisl elit, id vehicula nulla faucibus vel.

[Add screenshots or images whenever possible](https://stackoverflow.com/questions/10189356/how-to-add-screenshot-to-readmes-in-github-repository) to clarify what you mean, and so students can verify they've done the task correctly.

> **PAUSE.** Obtain a code review from Techtonica staff.

-----

### Questions to Consider
- Discuss with your pair partner what you did in this lab exercise. What surprised you? What was challenging? What was fun about it?
- Ask questions here that connect what is being done in the lab exercise to what was covered in the associated lecture.
- Also ask questions that connect this lab exercise to prior lessons.
- Also ask questions that require the student to put together multiple pieces of knowledge to arrive at an answer or opinion.

### Extensions
- What deliverables can students work on once they have fulfilled the basic requirements for this lab exercise? 
- What do these deliverables add to their understanding of the topic?
- Extensions are designed for students who are moving through the material faster than their classmates. They should reinforce or build on the concepts from this lab exercise. Students should not work ahead in the curriculum by starting on the next lab exercise.
