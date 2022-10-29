# Intro to backend (60 min)

### Projected time (60-70 min)

- Lesson materials: 20 min
- Guided practice: 30 min
- Challenge: 10-20 min

### Brief intro

Backend development is the unsung hero of the web world. Almost every piece of data on every website or service -- your facebook profile picture, the weather report on weather.com, and google's search results -- is served from a computer running backend code.

### Motivation

Backend development -- essentially, the creation of APIs -- involves a number of technologies working together to show some data. This lesson will briefly introduce you to those technologies, each of which you will learn about in the following weeks. By understanding your roadmap, you will have a better sense of what to learn in order to build your first API. Additionally, understanding the basics of backend development will allow you to...

- Fill in your own knowledge gaps: By learning the generalities of backend development, you will be able to ask yourself questions about the technologies you use every day. (or the technologies used by a company you're applying to!)
- Debug frontend code: while working on the frontend, the backend can sometimes seem a complete mystery. In this lesson we will show that the backend is much more simple than it is generally assumed to be, and this will allow you to work with backends you didn't write. (trust me, you will be doing this no matter what kind of position you get)

### Objectives

At the end of this lesson, you will know the pieces that make up backend development. You won't know how they work yet, (the details are exciting, and we'll get to them later!) but you will be able to describe the functions of backend development and how it relates to API work. (Hint: they're basically the same thing) Specifically at the end of this lesson, you will be able to:

- Answer the age-old question: what is an API?
- Describe, step-by-step, how data flows from a database through a backend server and to the user.
  - Additionally, you should know of one technology involved in each step.
- Create a checklist of the technologies you need to learn in order to create a simple API

### Specific things to learn

- What an API does
- What an API framework is
- The predominant languages for backend development
- What a web server does
- What a database does

### Lesson materials

- [Intro to backend (10m video)|https://www.youtube.com/watch?v=0Kv_k4ypj6o]
- [Creating your own API in express|https://expressjs.com/en/starter/hello-world.html] (see the "Running Locally" section)

### Common mistakes/misconceptions

- Some people think backend development is "harder" or "more technical" than frontend. This is silly: backend and frontend just require different skillsets. While you are learning, try thinking about whether backend or frontend better matches your preferences and established skills.
- Some people believe some backend technologies and frameworks are superior to others. This is also false. (there's a theme developing here) Some frameworks are built for simplicity, meaning you can get started with them easily. Others are built for robustness, meaning they will have pre-baked solutions to many common problems backend developers face. All of them have interesting pieces, and all of them are worth experimenting with if you're interested.
  - Simple API frameworks: Flask (Python), expressjs (Javascript)
  - More complex, pre-baked frameworks: Django (Python), Ruby on Rails (Ruby), .NET MVC (C#)

### Guided practice

One of the scariest parts of getting into backend development (and engineering in general) is all of the jargon that gets thrown around. And as with most disciplines, this jargon masks the simplicity of the pieces of backend development. Spend some time memorizing these keywords and their meanings using flash cards. Familiarize yourself with them until they aren't confusing, and remember to Google simple explanations of each term if you don't understand mine.

- Server: A server is just another word for computer. When backend people use the term server, they are usually referring to a computer that is running some _web server software_. (see below)
- Request: A request is some text that is sent to a server every time you hit a URL. This text is sent to a specific server, and it tells the server which data you would like to see.
- Web server: This is a program that runs on a computer, waits for requests, and _serves_ responses. Web servers don't do any computation on their own, that is the job of the API.
- API: When a web server receives a request, it often sends that request to an API. The API's job is to figure out what data the request is asking for and to generate a _response_, which the web server will then send back to the user.
- Response: A response is simply the data that is sent back to a user who requests some data. Responses can be anything from images and videos to a bundle of HTML, but it is basically just a file.
- Web framework: A library of functions and classes designed to help a developer create APIs.
- Database engine: A large and complex program that stores and organizes large amounts of structured data (look this term up) on a computer and allows a developer to access this data quickly and flexibly.
- SQL: The language for accessing data in a database.

### Challenge

- I'm starting a new API company, and I need you to come up with a tech stack for me! Present each piece of the backend tech stack, and explain why you think I should use each technology! Remember: I'm running the company, but I don't know how any of this stuff works.
- Go through each line of code in the example API you wrote, and write a comment above it saying what you think it's doing. If you don't know, take a guess, then try to look it up.
- Use the terms in the "Guided practice" section to describe as best as you can what happens when you hit this url: https://www.google.com/search?q=is+this+a+request

### Check for understanding

- What does an API do?
- What is an API framework? Are API frameworks language-specific or language agnostic?
- What are some popular backend languages?
- What does a web server do? Can you name a few?
- What does a database do? Can you name the two different types of databases?
- Why would someone choose one programming language over another for writing backend code?
- Why would there be so many frameworks for writing APIs?
