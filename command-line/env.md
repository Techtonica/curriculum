# .env & config files

### Projected Time

About 20-30 minutes

### Prerequisites

- a working node/express.js project with type: "module"

Here are links to lessons that should be completed before this lesson:

- [Command Line Interface](/dev-tools/command-line-interface.md)
- [.bash_profile topic outline](/dev-tools/dot-profile.md)
- [.gitignore ](/git/gitignore.md)
- [NodeJS ](/node-js)

### Motivation

Using a .env (pronounced "env", "dot-env", or "dot-E-N-V") can help you avoid exposed authorization or login credentials by securing these as secret variables. If you add the .env containing your variables to your .gitignore right away, it will never get added or committed to GitHub, and your secrets stay local.

### Objectives

**Participants will be able to:**

- make a .env file
- add it to gitignore
- export variables to a config
- reference the config anywhere while you develop locally
- add env variables to Netlify for deployment

### Specific Things to Learn

- What is a .env? - How to write a .env file - How to share a .env file
- What is a config file? - How to write a config.js file
- How to set environment variables in the terminal
- How to use environment variables in your project using .env, config.js, and destructuring the config variables
- Using source .env

### Materials

- [Using Environment Variables - Free Code Camp](https://medium.freecodecamp.org/heres-how-you-can-actually-use-node-environment-variables-8fdf98f53a0a)
- [Slideshow: .env & config (contains example images for lesson) ](https://docs.google.com/presentation/d/1SZAzZBRiwmQyVnxGR8d1pfEaG265Z9mU2EFqUizqHUQ/edit#slide=id.p)

### Lesson

#### .env files are for project _environment variables_.

These files often include sensitive data like:

- API keys, which are private permission keys that allow you make a limited number of requests for data from sites like Twilio or GoogleMaps
- Database URLs
- All user authorization IDs and URLs, which you would need to set up OAuth, Okta, Auth0, etc.
- If you **add it to your .gitignore right away**, it will never get added or committed to GitHub, and your secrets stay local

#### But if it’s never on GitHub, how do I share .env variables?

- Create a duplicate file called **.env.example**
- Fill in exact variable names
- Fill in values with fake examples that help your coworkers fill in the blanks on their end, but without giving anything important away to the public. Leaving mlab or auth0 like the image may still be too risky.
- Share real values in a more secure way, like a private message or email.

#### What is a config file?

- A config.js file makes variables available to the server side of your project
- A config file will be saved to GitHub and be visible if a user inspects your webpage.
- A config can contain public info like your development port or public URL as well as the abstracted variables of those .env secrets of yours.

### Common Mistakes / Misconceptions

**_I'll just remember to remove my sensitive data before every a commit._**

- It only takes one stray commit to expose your database or authorization id's to the public!
- It's much easier to create this list file and add it to .gitignore than it is to come up with a new database or API key.

## Guided Practice

1. Open your command line and navigate to a working node/express.js project
1. Create an environment variable in your terminal

   - run:

   ```
   export I_LOVE=lamp
   echo $I_LOVE
   ```

   You should get your value back:

   ```
   echo $I_LOVE
   lamp
   ```

   Enter `env` to see the list of your saved environment variables. You should see I_LOVE has been added.

1. Close your terminal, open it, and try echoing it again in that same directory.

   ```
   echo $I_LOVE
   ```

   It’s gone! Your terminal session ended. Check your list again:

   ```
   env
   ```

   - The env command lists any environment variables saved in your .bash-profile. But saving every secret variable for every project in there would be hard to keep track of and hard to share.

1. create a .env and a .env.example in your project root

- In your .env, add this line (case and spaces matter!):

```
export I_LOVE=lamp
```

- In your .env.example, add this line:

  ```
  export I_LOVE=example
  ```

5. Add .env to your .gitignore right away!

   - Should you add your .env.example, too? Nope! You will commit it as a reference for your coworkers / future self.

1. create a config.js if you don’t already have one.

- Use process.env to bring in your env variable. Add this line to your config (case matters):

```
export const I_LOVE = process.env.I_LOVE;
```

7. require your config variable in a server-side file. Put it in your server.js or app.js like this:

```
const {I_LOVE} = require('./config.js');
```

    Then print your variable by adding this line to the file:

```
console.log("I love ", I_LOVE);
```

8. Run your project and see if your line prints in the terminal.

- It’s not defined, is it? You still need to source it in the terminal!

9. Type in the terminal, `source .env`, and then press enter. Now run your project. “lamp” should print in the console!

10. Destructuring: object assignment

- Did you notice that the whole config printed out, not just I_LOVE? We can destructure the config object to pinpoint just the variable that we want.
- Add brackets to your declaration in server.js or app.js so it looks like this:

```
const { I_LOVE } = require('./config');
```

- Declaring I_LOVE gives that variable name to everything that config.js exported. Destructuring assignment unpacks the config object, picking out specific variables. Essentially, adding brackets is the same as saying:
  ```
  const I_LOVE = require('./config').I_LOVE;
  ```

11. In your terminal, press ctrl + c to stop your process. Start it again. You should see the variable you extracted!:

```
I love lamp
Your app is running on PORT 3000
```

### Independent Practice

- Type `git status` and make sure your .env does not appear as tracked by git.
- Commit your .env.example and config.js, along with the rest of your project.

### Check for Understanding

- Add one more variable to .env and see if you can print it to the console on your own.

- Explain the purpose of each of these files to a peer: - .env - .env.example - config.js - .gitignore
