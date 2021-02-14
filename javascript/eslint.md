# Linting with ESLint Manual

### Projected Time

60 minutes

- Lesson: 15-20 min
- Guided Practice: 5-10 min (Mock Project)
- Independent Practice: 30min
- Check for Understanding: 1 min

### Prerequisites

Here are topics you must be comfortable with to get the maximum benefit out of this topic:

- [Javascript 6-Object Literals](https://github.com/Techtonica/curriculum/blob/main/javascript/javascript-6-object-literals.md)
- [VSCode](https://github.com/Techtonica/curriculum/blob/main/dev-tools/vscode.md)

### Motivation

Linting is a process of using a tool to automatically check your code for potential problems. There are several benefits for doing so for your code:

- **Highlighting potential errors and bad patterns.** Linters can perform advanced checks to uncover possible errors such as duplicate variables, unreachable code or invalid regular expressions. A warning from the linter will allow you to fix the errors before they even try to run the code.
- **Keeping your code style consistent.** It allows you to check your code style for issues like spacing, indentation, and placement of braces. Once your team agrees on the coding style, the linter can be configured accordingly and checked automatically.
- **Enforcing quality.** Well run projects have clear consistent coding conventions, with automated enforcement. If a linting tool is wired into your build process, you may simply prevent the project from starting or being committed to your repository if there are unfixed errors.
- **Time saving** In the end it'll only save your time from searching silly bugs and waiting for your Pull Request to be merged due to lack of inconsistency in code style.

### Objectives

**Participants will be able to:**

- Use ESLint seamlessly in their project
- Integrate ESLint with VSCode
- Use the popular style guide suggested by Airbnb

### Specific Things To Learn

- Installation of ESLint
- Configuration process

### Materials

- [Improve Your Code With ESLint + VsCode + Airbnb Styleguide](https://www.youtube.com/watch?v=mfGkKlMDfwQ&t=253s) - Colt Steele
- [ESLint Quickstart - find errors automatically](https://www.youtube.com/watch?v=qhuFviJn-es) - freeCodeCamp.org
- [ESLint + Prettier + VS Code — The Perfect Setup](https://www.youtube.com/watch?v=lHAeK8t94as) - Web Bos

### Lesson

ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code. In many ways, it is similar to JSLint and JSHint with a few exceptions like ESLint is completely pluggable, every single rule is a plugin and you can add more at runtime.

Let's get started by installing ESLint in your project.

To install ESLint all you need to do is run the given command from the inside of your project folder. Installing ESLint globally is an option, but every project should have information about its dependencies to make sure that every developer working on the project is using the same tools.

- To install ESLint for a specific project:

```
$ npm install eslint --save-dev
```

- To install ESLint globally:

```
$ npm install eslint -g
```

Once ESLint is installed in the project, we need to configure it according to our needs. This can be done in two ways:

- Conveniently by running ESLint with the `--init` flag:

```
$ npx eslint --init
```

- This will make the process of ESLint setup a bit easier for you by asking a few questions which you can answer according to your team's requirement.

- It'll offer you three ways to configure ESLint for your project: - Choosing **Answer questions about your style** will require you to answer some questions about your project setup, such as which environment are you targeting, ECMAScript version, modules, usage of CommonJS or JSX and some styling preferences. This is a quick way to set up a project with a minimal set of recommended rules. - Choosing **Use a popular style guide** will allow you to base your configuration on one of the popular styles guides from Google, Airbnb, and others. This option works well of you already follow or plan to base yours on one of these style guides. - Choosing **Inspect your JavaScript file(s)** will try to derive the linting rules from your existing codebase. Works well that you already have an existing codebase which you wouldn’t want to change.

- If you have a highly opinionated style of code and want to configure ESLint according to yourself:
- Run the following command to create an ESLint config file:

```
$ eslint --init
```

- A new file `.eslintrc` will be created with some boiler-plate configuration.
- You can turn [rules](https://eslint.org/docs/rules/) in ESLint "off", "warn" or "error":

      	- "off" or 0 - turn the rule off
      	- "warn" or 1 - turn the rule on as a warning (doesn't affect exit code)
      	- "error" or 2 - turn the rule on as an error (exit code will be 1)

refer Official Documentation for more provided in Supplement Materials

After configuring ESLint for the project, try to run ESLint on your project files by running the command:

```
$ eslint *.js
```

To avoid repeatedly typing this into the terminal, save it as an npm script. Open `package.json` and add another script `"lint": "eslint *.js"` to it.

```
"scripts": {
	"lint": "eslint *.js"
},
```

Now you are good to go with an npm script for linting:

```
$ npm run lint
```

### Independent Practice

- Add linting to your current Eventonica project folder.
- Start from a clean slate. Make sure all changes are committed.
- Follow the instructions above
- You can run `eslint --fix` and it will auto-fix simple formatting and other issues for you
- Commit these auto-fixes and the linting config as a new commit
- Done!

### Integration

This can't be any easier regardless of which Text-Editor/ IDE you are using. Installing a single plug-in is all you need to do. ESLint is so widely accepted that most of the popular Text-Editor and IDE offers a dedicated plugin for it.

Here are few links to follow:

- [VS-Code](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Sublime Text 3](https://github.com/SublimeLinter/SublimeLinter-eslint)
- [Brackets](https://github.com/brackets-userland/brackets-eslint)
- [IntelliJ IDEA,bWebStorm, AppCode, AndroidStudio](https://plugins.jetbrains.com/plugin/7494-eslint)

For more information on integration refer the **Integrations** link provided in Supplemental Materials

### Supplemental Materials

- [Getting Started with ESLint](https://eslint.org/docs/user-guide/getting-started)
- [Configuring ESLint](https://eslint.org/docs/user-guide/configuring#top)
- [Integrations](https://eslint.org/docs/user-guide/integrations)
