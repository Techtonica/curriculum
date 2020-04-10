## Getting started with Node.js, Part 1

### Languages

- JavaScript

### Frameworks

- Node.js

### Topics

1. Installing Node.js
2. Using the Node.js REPL

### Overview

In this lab exercise, you will install Node.js and practice executing JavaScript commands in the Terminal, where the Node.js REPL runs.

### Context

- We've learned how to create a website that we can develop locally and open in the Chrome browser. We've learned how the Internet works, and that we need to host our website's code on a server in order to get it off our local machines and onto the "real" Internet.
- This lab exercise will introduce you to Node.js, a powerful JavaScript library you can use to serve your website's files. This is the missing link between local development and deploying your website so others can access it on the Internet.
- As a professional full-stack or back-end web developer, you must know how to write code that serves a website. Learning how to use Node.js will give you credibility in the job market.

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

---

#### Part 1 - Install Node.js using nvm

nvm, or Node Version Manager, allows you to have multiple versions of node on your machine at once. It also installs node into your home directory, where you definitely have read and write permissions (this gets rid of problems when trying to use `npm install -g` for packages later.

Visit the [nvm repository on GitHub](https://github.com/creationix/nvm) to get started.

Follow the installation steps in nvm's readme. Most importantly, these steps:

1. Install nvm via Homebrew: `brew install nvm`
2. Create a system directory for nvm: `mkdir ~/.nvm`
3. Open your `.zshrc` file and append the following lines:
```
# NVM
export NVM_DIR=~/.nvm
source $(brew --prefix nvm)/nvm.sh
```
   - This will update your path, so remember to reset your Terminal after this step.
4. [Verify your nvm installation](https://github.com/creationix/nvm#verify-installation) by typing `command -v nvm` in your terminal. You should just see the output `nvm` in your terminal. (See their readme to read about why `which nvm` does not work. Do not be alarmed that `which nvm` returns nothing!)
   - If `command -v nvm` did not work, there's a note that may help you in the Install section of nvm's readme. It starts with the text "Note: On OS X, if you get nvm: command not found after running the install script, one of the following might be the reason:" -- try those. Usually it has to do with where the nvm install script put the script that sources nvm for you every time you start your terminal.
5. [Download the latest version of node](https://github.com/creationix/nvm#usage) using the command `nvm install node` (see their readme for more information about how to download specific versions of node).
6. Type `nvm use node` in your terminal. This makes you use this version of node you just downloaded!
   - If you had previously installed node on your system, don't worry: it's still on your machine and accessible via `nvm use system`.
7. When you type `which node`, you should see a long path including a new `.nvm` hidden directory inside your home directory.

---

#### Part 2 - Run JavaScript commands in the Node.js REPL

**4. Open the Node.js REPL**  
Now that you have downloaded Node.js, we can explore Node’s REPL (Read-Evaluate-Print Loop). Open the REPL by running the command `node` in your Terminal. You should see a new carat ( `>` ) appear on the next line, which indicates that you are no longer communicating with your Terminal. Instead, the REPL is awaiting your next command.

![Open the Node REPL](/node-js/images/node.jpg?raw=true)

**5. Close the Node.js REPL**  
If you ever get stuck in the REPL, you can exit it and get back to the Terminal by running the `<Control> + C` command **twice**. Try this now. You should see in your Terminal something similar to what is shown below. (The Terminal uses `^C` to mean `<Control> + C`.) Each person in your pair should practice opening and closing the Node REPL 2 times.

![Close the Node REPL](/node-js/images/control-c.jpg?raw=true)

**6. Execute JavaScript code in the Node.js REPL**  
Once each person in your pair has practiced opening and closing the Node REPL, open the REPL again by running the command `node` in your Terminal. This time, each person should play around with running different JavaScript commands, like these:

- 1 + 3
- 5 \* 8
- 100 / 10
- let name = ‘yourName’
- name
- function hello() { console.log(‘Hello!’) }
- hello()

_Note that you can leave off the semicolons in REPL._

Congratulations! You just ran server-side JavaScript for the first time!

![Execute JS in the Node REPL](/node-js/images/node-repl.jpg?raw=true)

**7. Execute JavaScript code in Chrome's JavaScript console**
Open the Chrome JavaScript console by pressing the `<OPTION> <COMMAND> J` keys. Run all the JavaScript code from Step 6 in this console. This is something you should already be familiar with, as all JavaScript up to this point has been run in the browser.

![Running JS in the Browser](/node-js/images/js-in-browser.jpg?raw=true)

---

### Questions to Consider

- How did you feel using JavaScript in this new way (on the server side)? What if your only option to make a server was to use a language you hadn't learned yet, like Ruby or Python? Would that have changed how you felt about doing this lab exercise?
- How is running JavaScript commands in the Node REPL similar to running JavaScript commands in Chrome's JavaScript console? How is it different?
- Drawing on all you've learned so far about how the Internet works and what servers and browser are, can you hypothesize why it's a "big deal" to be able to run server-side JavaScript?

### Extensions

- Write a for-loop in the Node.js REPL that prints all the integers between 5 and 15, including 5 and 15.
- Write a for-loop in the Node.js REPL that prints "Even" if an integer is even and "Odd" if an integer is odd. Loop through integers 1 - 20, including 1 and 20.

Talk with your pair partner about the differences between writing a for-loop in a JavaScript file and writing a for-loop in the Node REPL.

- Create an object literal in the Node.js REPL called `seaCreatures`. Give it 3 properties: `fish`, `mammals` and `invertebrates`. Create an attribute for each property that is an array of sea creatures that belong to the type of group named in the property. For example, `'boats': ['sailboat', 'yacht', 'life raft']`.
- Using dot notation or bracket notation, access the attribute for each property in `seaCreatures`.
- Using dot notation of bracket notation, index into each property to print the first and last items in each property's array.

Talk with your pair partner about the differences between the REPL and a JavaScript file when creating an object literal and accessing its properties.
