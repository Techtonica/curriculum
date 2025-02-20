# .env & config files

## Prequirements
- Working NodeJS/Express app
- [Command Line Interface Lesson](/dev-tools/command-line-interface.md)
- [.bash_profile topic outline Lesson](/dev-tools/dot-profile.md)
- [.gitignore Lesson](/git/gitignore.md)
- [NodeJS Lesson](/node-js)

### Projected Time

About 20-30 minutes

### Objectives

- create, store, and access environment variables in a `.env` file and the terminal

### Motivation

Environment variables might contain sensitive or private data, like API keys. These are things that we don’t want to commit to GitHub. Instead of hardcoding their values into the codebase, we can store all of this sensitive information in a `.env` file that is gitignored. For example, at the root of our application, we have a file named `.env` that contains a super secret API key:

```.env
SECRET_API_KEY=a1b2c3d4e5f6
```

We make sure to include this file in our `.gitignore` so that it never gets committed to GitHub. Then, elsewhere in our codebase, where we want to access this environment variable, we can use a package like [dotenv](https://www.npmjs.com/package/dotenv) to parse this file and give us the results:

```js
require('dotenv').config();

console.log('SECRET_API_KEY: ', process.env.SECRET_API_KEY);
```

### Materials

- [Using Environment Variables - Free Code Camp](https://medium.freecodecamp.org/heres-how-you-can-actually-use-node-environment-variables-8fdf98f53a0a)
- [Slideshow: .env & config (contains example images for lesson) ](https://docs.google.com/presentation/d/1SZAzZBRiwmQyVnxGR8d1pfEaG265Z9mU2EFqUizqHUQ/edit#slide=id.p)

### Lesson

#### .env files are for project _environment variables_.

These files often include sensitive data like:

- API keys, which are private permission keys that allow you make a limited number of requests for data from sites like Twilio or GoogleMaps
- Database URLs
- All user authorization IDs and URLs, which you would need to set up OAuth, Okta, Auth0, etc.
- If you add `.env` to your `.gitignore` right away, it will never get added or commited, and your secrets stay local

#### But if it’s never tracked in git, how do I share .env variables?

- Create a file called `.env.example`
- Fill in exact variable names
- Fill in values with fake examples that help your coworkers fill in the blanks on their end, but without giving anything important away to the public. Leaving mlab or auth0 like the image may still be too risky.
- Share real values in a more secure way, like a password manager.

Your `.env.example` may look like this:
```.env
GOOGLE_API_KEY=<available_in_password_manager>
```

#### What is a config file?

- A `config.js` file makes variables available to the server side of your project
- A config file will be saved to git and be visible if a user inspects your webpage.
- A config can contain public info like your development port, public URL, or environment variable names.

### Common Mistakes / Misconceptions

**_I'll just remember to remove my sensitive data before every commit._**

- It only takes one stray commit to expose your database or authorization ids to the public!
- It's much easier to create this file and add it to `.gitignore` than to come up with a new database or API key.

## Guided Practice

1. Open a working node/express.js project
1. Open your command line and navigate to the project you chose above
2. In your terminal, run `$ export I_LOVE=lamp`
3. print the environment variable to the terminal with `$ echo $I_LOVE`
4. run `$ env` to see the list of your saved environment variables. You should see I_LOVE has been added.
1. Quit your terminal
2. re-open your terminal,
3. Navigate to the same directory
4. try to print the environment varibale to the terminal again with `$ echo $I_LOVE`
5. It’s gone! Your terminal session ended. Check your environment variables list again with `$ env`
   6. The env command lists any environment variables saved in your .bash-profile. But saving every secret variable for every project in there would be hard to keep track of and hard to share.
1. create `.env` and `.env.example` files in your project root
2. In your .env, add this line (case and spaces matter!):

```.env
I_LOVE=lamp
```
13. In your .env.example, add this line:

```.env
I_LOVE=example
```

14. Add `.env` to your `.gitignore` right away!

   - Should you add your .env.example, too? Nope! You will commit it as a reference for your coworkers / future self.

15. create a config.js if you don’t already have one.

- Use process.env to bring in your env variable. Add this line to your config (case matters):

```
export const I_LOVE = process.env.I_LOVE;
```

1. require your config variable in a server-side file. Put it in your server.js or app.js like this:

```
const I_LOVE = require('./config');
```

Then print your variable by adding this line to the file:

```
console.log("I love ", I_LOVE);
```

1. Run your project and see if your line prints in the terminal.

- It’s not defined, is it? You still need to source it in the terminal!

1. Type in the terminal, `source .env`, and then press enter. Now run your project. “lamp” should print in the console!

1. Destructuring: object assignment
   - Did you notice that the whole config printed out, not just I_LOVE? We can destructure the config object to pinpoint just the variable that we want.
   - Add brackets to your declaration in server.js or app.js so it looks like this:

```
const { I_LOVE } = require('./config');
```

    - Declaring I_LOVE gives that variable name to everything that config.js exported. Destructuring assignment unpacks the config object, picking out specific variables. Essentially, adding brackets is the same as saying:
    ```
    const I_LOVE = require('./config').I_LOVE;
    ```

1. In your terminal, press ctrl + c to stop your process. Start it again. You should see the variable you extracted!:

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
