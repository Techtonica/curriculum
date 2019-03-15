# VS Code - Setup and Local Development

### Projected Time
About 1 hour
- 7 minutes for video
- 20 minutes for video walkthrough of slides
- 15 minutes for Independent Practice
- 10 minutes for Check for Understanding

### Prerequisites
- "Command Line Interface" lesson

### Motivation

Most software is written using text editors. Visual Studio Code (VS Code) is a very popular open-source text editor developed and maintained by Microsoft. Having a good understanding of how to use VS Code will enable you to code and use other text editors with ease.

### Objectives
**Participants will be able to:**
- Download and install VS Code
- Create a Terminal shortcut to open files in VS Code
- Change the UI theme of their VS Code application
- Use several keyboard shortcuts for more efficient coding while using VS Code
- Open and execute commands on the VS Code Integrated Terminal
- Open a file quickly using VS Code
- Run a global or local search
- Add a VS Code Extension


### Specific Things To Teach
- VS Code-specific keyboard shortcuts
[Personal Key Bindings](https://code.visualstudio.com/docs/getstarted/keybindings)
- VS Code Extension Marketplace
[Extension Manual](https://code.visualstudio.com/docs/editor/extension-gallery)

### Supplemental Materials

- [Downloading VS Code](https://code.visualstudio.com/download)
- [VS Code's "Getting Started" manual](https://code.visualstudio.com/docs)
- [VS Code's Settings & Preferences](https://code.visualstudio.com/docs/getstarted/settings)
- [VS Code Keyboard Shortcuts Cheat Sheet](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)
- [VS Code's Debugger](https://code.visualstudio.com/docs/editor/debugging)
- [Using VS Code Integrated Terminal](https://code.visualstudio.com/docs/editor/integrated-terminal)
- [Version Control through VS Code](https://code.visualstudio.com/docs/editor/versioncontrol)


### Lesson
[Video: How to install VS Code and get started](https://www.youtube.com/watch?v=THDTDTkyB1I)

[Slides: Local Development with VS Code](https://docs.google.com/presentation/d/1QAMxrS1ZOvtSn7MuYxTmeanrMQi_O8Z5UVq-4LzLqso/edit?usp=sharing)

### Common Mistakes / Misconceptions

- **"I'll just use MS Word or Google Docs to write my code."** The only industry-acceptable programs for writing code are text editors that were created specifically for this purpose. MS Word and Google Docs are for creating personal and business documents, not for writing code.

- **"VS Code has a lot of bells and whistles, how will I ever pick them all up?"** VS Code gives you, the developer, a lot of control over your space. Some keyboard shortcuts will become second nature, while some things like setting your themes will only happen once in while -- with practice (and reference materials) everything will become second nature.

### Demonstration

Instructor demonstrates in the slide walkthrough how to change the color theme and use various keyboard shortcuts.


### Independent Practice

Techtonica staff will assign pairs.

1. Follow the instructions in the slides for downloading and installing VS Code if it is not already downloaded to your machine.

2. Using [VS Code's Getting Started manual](https://code.visualstudio.com/docs) or other online resources, discover how to:
- Find and replace multiple occurrences of one word in the same file
- Click on multiple characters in one file at the same time
- Comment and uncomment text
- Indent and dedent lines of text
- Move one line up or down
- Open a side by side of a file
- Add a javascript extension to VS Code

### Challenge

Add a personalized keyboard shortcut using VS Code's  [Key Bindings manual](https://code.visualstudio.com/docs/getstarted/keybindings).

-or-

Make a commit through VS Code's version control tool [Version Control through VS Code](https://code.visualstudio.com/docs/editor/versioncontrol)

Briefly summarize your findings so you can share with the class.


### Check for Understanding

Apprentices make a cheat sheet (could be on paper or in a note on their Desktop) that reminds them how to **use shortcuts** to:

- Open VS Code
- Open a specific folder in VS Code
- Open a specific file in VS Code
- Find and replace multiple occurrences of one word in the same file
- Click on multiple characters in one file at the same time
- Comment and uncomment text
- Indent and dedent lines of text
- Move one line up or down
- Open a file side by side
- Open integrated terminal

### TABS vs SPACES
The age-old tabs vs spaces argument is a very heated and hilarious one. Some developers argue that tabs are better for code indentation while others argue that spaces are better. Both arguments are valid with the following points:
- Why would you want to press the SPACE BAR key X times when you can press the TAB key once? The tab key saves you more time in indentation thereby making you more efficient and it takes less space on the disk.
- Different machines and environments display the TAB character differently which means your code will look different to different people. The SPACE character does not have this problem, it will look the same for every single machine but will take up more memory for the source code. Developers indent pretty often when developing so the memory difference can easily add up.
Both sides have a logical reason. The most important thing is that you pick a side and you and your team use it consistently across the project. Check out these resources below to understand my points better:
- [Stack Overflow Developer Survey Analysis](https://stackoverflow.blog/2017/06/15/developers-use-spaces-make-money-use-tabs/)
- [A scene from Silicon Valley](https://www.youtube.com/watch?v=SsoOG6ZeyUI)

By default, VS Code attempts to guess your indentation options depending on the file you open. Indentation guessing can be turned off via: `"editor.detectIndentation": false`. 

**Instructions to set up VS Code to use "spaces for tabs, 2 spaces per tabs" as your default for new files:**

***For Windows Users***
- Go to *File - Preferences - User settings*
- Then set the number of spaces a tab is equal to via: `"editor.tabSize": 2`. This setting is overriden based on file content when `"editor.detectIndentation": true`.
- Enable spaces to be inserted when pressing tab via: `"editor.insertSpaces": true`. This setting is overriden based on file content when `"editor.detectIndentation": true`.

***For Mac Users***
- Go to *Code - Preferences - Settings*
- Then set the number of spaces a tab is equal to via: `"editor.tabSize": 2`. This setting is overriden based on file content when `"editor.detectIndentation": true`.
- Enable spaces to be inserted when pressing tab via: `"editor.insertSpaces": true`. This setting is overriden based on file content when `"editor.detectIndentation": true`.

Visual Studio Code now includes an auto-indentation feature — which, as the name suggests, will automatically indent your code on the editor.The auto-indentation feature will automatically indent your code whenever you move a line around or a set of lines around. It will also automatically indent your code when you copy-paste something which will be really useful especially for those who use StackOverflow quite a lot. Auto-indentation on Visual Studio Code is currently disabled by default, and users can add the `editor.autoIndent` setting to the editor in order to enable it.
