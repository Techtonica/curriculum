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
- This is what you we already know, and we are building on top of it
- This is why you are doing this particular lab exercise 
- This is the value to your future self if you do this lab exercise

### Basic Requirements
1. Students will obtain a code review after verifying in the Terminal that they have successfully installed Node.js
2. Students will obtain a code review after practicing executing code in the Node.js REPL.

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

#### Part 1 - Install Node.js

**1. Download Node.js**  
Go to the Node.js download webpage: [https://nodejs.org/en/download/](https://nodejs.org/en/download/)  
Click on the Apple icon to download the Node.js installer for Mac.  

![Download Screen](/node/images/download-screen.jpg?raw=true)  

**2. Install Node.js**  
The downloaded file will appear in the lower left corner of your Browser window. Click on it. This dialog window will appear:  
![Install window](/node/images/install-window.jpg?raw=true)  

Follow the prompts in the Install Window until you have successfully installed Node.js.  

**3. Verify the installation**    
To verify that you’ve properly installed Node.js, open your Terminal and run this command from your home directory (~):  

`which node`  

You should see a file path similar to what is shown below.

![Terminal output for "which node" command](/node/images/which-node.jpg?raw=true)  

You can also verify which version of Node.js you have downloaded by running this command:  

`node -v`  

You should see a version number similar to what is shown below.  

![Terminal output for "node -v" command](/node/images/node-v.jpg?raw=true)  

> **PAUSE.** Obtain a code review from Techtonica staff.

-----

#### Part 2 - Run JavaScript commands in the Node.js REPL

**4. Open the Node.js REPL**  
Now that you have downloaded Node.js, we can explore Node’s REPL (Read-Evaluate-Print Loop). Open the REPL by running the command `node` in your Terminal. You should see a new carat ( `>` ) appear on the next line, which indicates that you are no longer communicating with your Terminal. Instead, the REPL is awaiting your next command.  

![Open the Node REPL](/node/images/node.jpg?raw=true)

**5. Close the Node.js REPL**  
If you ever get stuck in the REPL, you can exit it and get back to the Terminal by running the `<Control> + C` command **twice**. Try this now. You should see in your Terminal something similar to what is shown below. (The Terminal uses `^C` to mean `<Control> + C`.) Each person in your pair should practice opening and closing the Node REPL 2 times.  

![Close the Node REPL](/node/images/control-c.jpg?raw=true)

**6. Execute JavaScript code in the Node.js REPL**  
Once each person in your pair has practiced opening and closing the Node REPL, open the REPL again by running the command `node` in your Terminal. This time, each person should play around with running different JavaScript commands, like these:  

- 1 + 3
- 5 * 8
- 100 / 10
- var name = ‘yourName’
- name
- function hello() { console.log(‘Hello!’) }
- hello()

*Note that you can leave off the semicolons in REPL.*

![Execute JS in the Node REPL](/node/images/node-repl.jpg?raw=true)

> **PAUSE.** Obtain a code review from Techtonica staff.

-----

### Questions to Consider
- Ask questions here that connect what is being done in the lab exercise to what was covered in the associated lecture.
- Also ask questions that connect this lab exercise to prior lessons.
- Also ask questions that require the student to put together multiple pieces of knowledge to arrive at an answer or opinion.

### Extensions
- What deliverables can students work on once they have fulfilled the basic requirements for this lab exercise? 
- What do these deliverables add to their understanding of the topic?
- Extensions are designed for students who are moving through the material faster than their classmates. They should reinforce or build on the concepts from this lab exercise. Students should not work ahead in the curriculum by starting on the next lab exercise.
