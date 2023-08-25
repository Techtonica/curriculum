# Starting Locally with React using Vite

### Projected Time

Example: 60-75 minutes

- Lesson: 20 min
- Guided Practice: 20-25 min
- Independent Practice: 15 min
- Check for Understanding: 5-10 min

### Prerequisites

Participants should understand the following before this topic:

* Basic understanding of React components and JSX
* Familiarity with command line and npm (or yarn).

### Motivation

* Vite provides an extremely fast development environment by leveraging ES modules.
* Knowing how to use Vite can drastically reduce project setup and development time for React projects.
* Vite fits into the ecosystem as a more modern and lightweight alternative to tools like Create React App (deprecated), offering faster module replacement
* If a fellow engineer asked about Vite, a succinct answer might be: "Vite is a fast and lightweight build tool with native ES modules support, ideal for modern React projects."
* Since April 2023, the create-react-app ecosystem has been deprecated, and although the official documentation now recommends using Next.js, Vite is a beginner-friendly alternative.  

### Objectives

**Participants will be able to:**

- Set up a new React project using Vite.
- Understand the structure and configuration of a Vite project.
- Start a local development server and make changes to a React component.

### Specific Things To Learn

- What is Vite and its advantages.
- ES modules and why they matter.
- Steps to create a React project using Vite.
- Structure of a Vite + React project.

### Lesson
Introducing Vite and its role in the modern web development ecosystem.
- [Guide Video on How to Set Up Vite + React locally(2.5 min)](https://www.loom.com/share/60b4ef288ff04118b6b0f30a030b20ff?sid=3d5b2d5b-2097-4d44-baac-9d912d04671f) - In this video, I will guide you through the process of starting a React project locally using Vite. By following [the instructions in the official documentation](https://vitejs.dev/guide/), you can easily set up your project. I will walk you through the step-by-step instructions, including installing dependencies and running the project. 

1. Open your terminal and run the command
```js
npm create vite@latest <NAMEOFYOURPROJECT> 
```

2. Follow the prompt instructions selecting the option REACT as a working framework and JavaScript as language
```js
Need to install the following packages:
  create-vite@4.4.1
Ok to proceed? (y) y
✔ Select a framework: › React
✔ Select a variant: › JavaScript
```

3. Follow the instruction from the terminal to go to your directory and install the node package for the initial setup

```js
Done. Now run:

  cd reactexample2023
  npm install
  npm run dev
```

When you initialize a new ReactJS project using Vite, several important files and directories are created for you. Here's a breakdown of the important files and what they're used for:

1. index.html: This is the root HTML file of your application. Vite serves this file when you start the development server. It contains a div with the id "root", which is where your React application gets mounted. Please don't modify this file!. 

2. main.jsx: The entry point of your React application. This file typically imports the React and ReactDOM libraries and renders your main App component to the root div in index.html.

3. App.jsx: The main App component. This is where you'd start building out your React components and adding features to your application.

4. vite.config.js: This is the configuration file for Vite. While Vite works out of the box for many use-cases, you can customize its behavior by modifying this file. For example, you might add plugins or configure build paths.

5. package.json: This file contains metadata about your project like its name, version, and dependencies. All the dependencies (libraries and packages) your project relies on are listed here. It also contains scripts that help in starting the development server, building the project, etc.

6. .gitignore: This file lists all directories and files that should not be tracked by Git. By default, it will usually exclude node_modules/ and other files or directories that shouldn't be in version control.

### Common Mistakes & Misconceptions

- Assuming Vite is only for Vue projects since it's created by the same developer. (Vite supports React, Vue, and more.)
- Confusing Vite with a full-fledged framework. (It's a build tool.)

### Guided Practice

- Instruct participants to open their terminals or command prompts and setup a project called `firstreactproject` using Vite + React
- Explore the generated project structure and files.
- Start the local development server using npm run dev and discuss the output.
- Kill their local server using  `Ctrl C` command 