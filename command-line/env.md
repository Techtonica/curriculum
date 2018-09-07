# About .env files

### Projected Time

About 20-30 minutes

### Prerequisites

Here are links to lessons that should be completed before this lesson:

- [Command Line Interface](https://github.com/Techtonica/curriculum/blob/master/command-line/command-line-interface.md)
- [.gitignore lesson](https://github.com/Techtonica/curriculum/blob/master/git-version-control/gitignore.md)

### Motivation

![An example of a stolen API key](./images/stolen-api-key.png)

Don't be this guy!  It would have been much worse if he had exposed authorization or login credentials. Using a .env (pronounced "env", "dot-env", or "dot-E-N-V") can help you keep this info secure. If you add it to your .gitignore right away, it will never get added or commited to github, and your secrets stay local.

### Objectives

**Participants will be able to:**

- make a .env file
- add it to gitignore
- export variables to a config
- reference the config anywhere while you develop locally
- add env variables to heroku or netlify for deployment

### Specific Things To Teach

- Things about the things
- More things about the things
	- This is a sub-thing about the things
- Even more things about the things
- Even more things about the things

### Materials

- [Using Environment Variables - Free Code Camp](https://medium.freecodecamp.org/heres-how-you-can-actually-use-node-environment-variables-8fdf98f53a0a)

### Lesson

![A basic .env file Example](./images/env-sample.png)

.env files are for project *environment variables*. These files often include sensitive data like:
	- API keys, which are private permission keys that allow you make a limited number of requests for data from sites like AllRecipes or GoogleMaps
	- Database URLs
	- All user authorization IDs and URLs, which you would need to set up OAuth, Okta, Auth0, etc.
  
![An example of a config file referencing .env variables](./images/env-to-config-sample.png)
![An example of a project file referencing config variables](./images/config-to-file-sample.png)


Build on the first information. Have apprentices guess things, do an activity, etc.

Make sure to mention these things:

- Things
	- This is a sub-thing
- More things
- Even more things
- Even more things


### Common Mistakes / Misconceptions

![An example of a stolen API key](./images/stolen-api-key.png)
^ Don't be this guy!  It would have been much worse if he had exposed authorization or login credentials.

### Guided Practice

Have the apprentices work with you as you do something.


### Independent Practice

Class does this thing themselves with specific additional items.


### Challenge

Apprentices can try to do this other thing.


### Check for Understanding

Some ideas: have apprentices summarize to each other, make a cheat sheet, take a quiz, do an assignment, or something else that helps assess their understanding.
