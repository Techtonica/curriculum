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
- You know how to create new code files in Sublime
- This lab exercise will teach you how to make a webserve using Node.js!
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
Open the `app.js` file again. Replace your print statement with a function that contains a print statement that prints something different to the console. Run the file again with `node app.js`. What happened?  

If nothing printed to the Terminal, you are missing something in your `app.js` file. Once `app.js` prints something to the Terminal, obtain a code review.

> **PAUSE.** Obtain a code review from Techtonica staff.

-----

#### Part 2 - Use npm to create a `package.json` file

**First step**  
Every node project needs to have a `package.json` file because this file holds meta data about the project, such as who created it, what version it is, and what the dependencies are. 

The node package manager (npm) gives us a quick way to create a `package.json` file. From your `getting-started-with-node` folder run this command:

`npm init`

You will see a succession of prompts appear in the Terminal. Type in your responses where appropriate, though for our purposes it's OK to just go with the defaults for now by pressing <ENTER> for each prompt that does not need to be customized. 



**Second step**  
Etiam eleifend est ac auctor pretium. Pellentesque eu quam urna. Morbi mattis purus at iaculis ornare. Sed id felis felis. Etiam euismod ante vel augue dictum, sed finibus arcu iaculis. Suspendisse maximus congue pharetra. Phasellus at sem vel sapien tincidunt porttitor vitae sit amet quam. Praesent sodales nisl elit, id vehicula nulla faucibus vel.

[Add screenshots or images whenever possible](https://stackoverflow.com/questions/10189356/how-to-add-screenshot-to-readmes-in-github-repository) to clarify what you mean, and so students can verify they've done the task correctly.

**Third step**  
Etiam eleifend est ac auctor pretium. Pellentesque eu quam urna. Morbi mattis purus at iaculis ornare. Sed id felis felis. Etiam euismod ante vel augue dictum, sed finibus arcu iaculis. Suspendisse maximus congue pharetra. Phasellus at sem vel sapien tincidunt porttitor vitae sit amet quam. Praesent sodales nisl elit, id vehicula nulla faucibus vel.

[Add screenshots or images whenever possible](https://stackoverflow.com/questions/10189356/how-to-add-screenshot-to-readmes-in-github-repository) to clarify what you mean, and so students can verify they've done the task correctly.

> **PAUSE.** Obtain a code review from Techtonica staff.

-----

#### Part 3 - Create a basic web server and run it with Node.js

**First step**  
Etiam eleifend est ac auctor pretium. Pellentesque eu quam urna. Morbi mattis purus at iaculis ornare. Sed id felis felis. Etiam euismod ante vel augue dictum, sed finibus arcu iaculis. Suspendisse maximus congue pharetra. Phasellus at sem vel sapien tincidunt porttitor vitae sit amet quam. Praesent sodales nisl elit, id vehicula nulla faucibus vel.

[Add screenshots or images whenever possible](https://stackoverflow.com/questions/10189356/how-to-add-screenshot-to-readmes-in-github-repository) to clarify what you mean, and so students can verify they've done the task correctly.

**Second step**  
Etiam eleifend est ac auctor pretium. Pellentesque eu quam urna. Morbi mattis purus at iaculis ornare. Sed id felis felis. Etiam euismod ante vel augue dictum, sed finibus arcu iaculis. Suspendisse maximus congue pharetra. Phasellus at sem vel sapien tincidunt porttitor vitae sit amet quam. Praesent sodales nisl elit, id vehicula nulla faucibus vel.

[Add screenshots or images whenever possible](https://stackoverflow.com/questions/10189356/how-to-add-screenshot-to-readmes-in-github-repository) to clarify what you mean, and so students can verify they've done the task correctly.

**Third step**  
Etiam eleifend est ac auctor pretium. Pellentesque eu quam urna. Morbi mattis purus at iaculis ornare. Sed id felis felis. Etiam euismod ante vel augue dictum, sed finibus arcu iaculis. Suspendisse maximus congue pharetra. Phasellus at sem vel sapien tincidunt porttitor vitae sit amet quam. Praesent sodales nisl elit, id vehicula nulla faucibus vel.

[Add screenshots or images whenever possible](https://stackoverflow.com/questions/10189356/how-to-add-screenshot-to-readmes-in-github-repository) to clarify what you mean, and so students can verify they've done the task correctly.

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
