# Debugging

### Week 1 Keywords and Questions

- What is debugging?
- What are good and bad strategies to implement while you are debugging your code?
- What is a breakpoint and what is it used for?
- Why should you tell a rubber duck about your programming problem?

### Prerequisites

- Techtonica's HTML/CSS & JS workshops
- [Asking Good Questions lesson](/onboarding/asking-good-questions.md)
- [Chrome Developer Tools lesson](/chrome-developer-tools/chrome-developer-tools.md)
- Watch this video of [Recursion & Browser Debugging Tools with Alex Jeng](https://www.dropbox.com/scl/fi/ug8qr5nso3crbgdosn5s9/video1897378278.mp4?rlkey=otqfbbak709dkj08wyxwgae21&dl=0)

### Motivation

- Debugging is the art of finding errors/bugs in programs and determining how to correct them. Things will go wrong during programming, even for experienced software engineers.
- It is ideally part of the testing process but in reality, it is done at every step of programming. Coders should debug the smallest of their modules before moving on. This decreases the number of errors thrown up during the testing phase and reduces testing time and effort significantly ([reference from tutorialspoint](https://www.tutorialspoint.com/programming_methodologies/programming_methodologies_debugging.htm)).

**Which companies use debugging?** Everyone, because all companies want their product to be bug/error-free.

### Objectives

**Participants will be able to:**

- Understand the various kinds of errors that may arise
- Use `console.log()` statements to verify logic and output at different points in the code
- Use the rubber duck technique to talk through the troublesome code
- Debug their JS code using Chrome Developer Tools

### Specific Things to Learn

- Types of errors
- Good debugging strategies
- Bad debugging strategies

### Materials

- [Get Started with Debugging JavaScript with Chrome Dev Tools (tutorial)](https://developers.google.com/web/tools/chrome-devtools/javascript)
- [Debugging Tips and Tricks by Sarah Drasner](https://css-tricks.com/debugging-tips-tricks/)
- [How to Improve Your Debugging Skills by Nick Karnik](https://www.freecodecamp.org/news/how-to-improve-your-debugging-skills-abb5b363bdb8/)

### Lesson

- Video walkthrough of slides [Debugging (12 mins watch)](https://drive.google.com/file/d/1VMyGDG5CnNMkjCyaNx1LAjxTMKxC0QQ4/view?usp=sharing)
- Read through lesson slides [Debugging](https://docs.google.com/presentation/d/1Ol1as_RuxBpXMd4VxCUyvFVkjpcqAxg6B-c0Sl9KDLc/edit?usp=sharing)

##### General Tips for Debugging (with VS Code)

- When VS Code shows you a red squiggly underline it's trying to help you. so pay attention to the message.
- If the red squiggly underline is under something that's clearly correct, like `color: red;` in a CSS file, then double-check it.
- Pattern matching — It is a mechanism for checking a value against a pattern. In debugging you use pattern matching (built into VS Code) to match the syntax you write with the correct syntax, which helps you to figure out errors in your code. For example, suppose you want to change the color of a text in CSS and you write `colour: blue;` then VS Code uses its pattern matching mechanism to match it against correct syntax and gives you an error "check property spelling" as the correct form is `color: blue;`.
- When you make a change on a file, and then visually when you refresh your page you don't see any changes, go through the following points:
  - Check whether you saved the file.
    - If you forget often then add autosave in VS Code to save changes automatically.
    - ([How to add autosave in VS Code](https://code.visualstudio.com/docs/editor/codebasics#_save-auto-save))
  - Make a temporary, very obvious change on your HTML page.
    - Such as writing some text in the top of the `body` or a prominent heading then saving the file and reloading the browser.
    - Check whether you can see the text.
    - If you can't see the new text, maybe you have the wrong file open, or the file didn't save, or something else very strange is happening.
  - Make a temporary, very obvious change to your CSS file.
    - Such as adding `color: red;` to something extremely obvious like `body` or `h1` then saving and reloading the browser.
    - Check whether the thing you expected to turn red actually turns red.
    - If it doesn't, maybe the CSS file isn't getting loaded properly, or there may be syntax errors earlier in your CSS file that may render the rest of your CSS file inoperable.
    - Such as:
      - Are you missing a semicolon?
      - Did you use `=` instead of `:` accidentally?
      - Are you missing a quotation mark in a font declaration, so your CSS file thinks there's a really long string somewhere?
      - Are your curly braces correctly matched and closed?

### Common Mistakes / Misconceptions

- **"Dang it, I got a bug. Let me ask for help right away."** At Techtonica, you should spend at least 20 minutes debugging on your own before asking someone else for help. This is to give yourself the learning opportunity that happens when you struggle, and also to protect other people's time. Once you're in a work setting, ask your manager or teammates how long they expect you to puzzle through something on your own before asking for help.

- **"I don't want anyone to know that I'm struggling with this, even if I have to waste several hours figuring this out on my own."** Most managers and colleagues expect that Junior Software Engineers will still need a lot of training and do not expect you to know everything. Learning how to ask strong questions makes you come across as competent and curious, even when you aren't sure about how to do something.

- **"Getting a bug is a personal failure."** Nothing is personal with how computers execute your code. Even experienced software engineers get bugs. No one is perfect!

### Independent Practice (if time permits)

1. Work through the [Get Started with Debugging JavaScript with Chrome Dev Tools (tutorial)](https://developers.google.com/web/tools/chrome-devtools/javascript/).

2. Write a program of your choosing using [REPL.it](http://www.repl.it) and place at least 1 bug in it.

### Supplemental Resources

- [Debugging Tips and Tricks by Sarah Drasner](https://css-tricks.com/debugging-tips-tricks/)
