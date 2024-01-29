# Git Version Control

### Prerequisites

- [Command Line Interface lesson](/dev-tools/command-line-interface.md)
- [Command Line Advanced lesson](/dev-tools/command-line-advanced.md)
- [Shell Commands lesson](https://docs.google.com/presentation/d/1LuOLcpSAtNQlbULx9nWgXJNhgWQlfQ4nzLWQ0DuuPQk/edit?usp=sharing)

📽️ Watch these videos
- [Git with Jair Trejo](https://www.dropbox.com/s/x64ux3q5kqj8v6l/video1604871754.mp4?dl=0)
- [Command Line, Git, & GitHub with Ruthie Irvin](https://www.dropbox.com/scl/fi/io1na2p89la6toe259d12/GMT20231016-220446_Recording_gallery_3840x2160.mp4?rlkey=wnm4yxx6legnov02vnzv5lhrv&dl=0)
- [Git GUI with Adoara](https://www.dropbox.com/s/kemg5ek25sghs38/video1134494314.mp4?dl=0)

### Learning styles represented

- See (videos and demonstration)
- Hear (videos and demonstration)
- Do (Independent & Group Practice)

### Motivation

_Imagine you are coloring in a flower coloring book. You colored all the leaves green and now it's time for the best part, the petals. You know you enjoy red the best but it looked horrible after you finished it. With Git, you can revert your choice of red in a heartbeat and you are free to reapply the red if you change your mind. A work doesn't have to be permanent; every action is recorded and reversible_. (Source: https://dev.to/maestromac/comment/him)

- Git is a tool that allows software engineers to keep track of changes they make to code files. They can see the changes they've made, changes other people on their team have made to the same file, and even look at line-by-line differences between two files. It's an integral part of almost every software engineer's workflow.
- Git enables software developers to have access to different versions of their code even when offline.
- If you accidentally change your code and break something, Git can revert it.
- Git lets you back up your code easily to a remote server such as GitHub, just in case something happens to your computer.

#### Which companies use Git?

- Mostly large enterprise companies like Google, Amazon, Mozilla, and Facebook.
- [Here is the GitHub page of a Mozilla project](https://github.com/mozilla/inclusion). **Note how:**
  - It shows different versions of the code at different times (2 years ago, 4 months ago, etc).
  - It shows the project contributors (24 contributors).
  - It also shows who contributed last ("Latest Commit").

### Objectives

**Participants will be able to:**

- Explain what Git is and why it's useful
- Define basic vocabulary used when talking about Git
- Show how to add a file to Git's tracking system and commit changes made to that file
- Show how to work with an online repository

### Specific Things to Learn

- What Git is
- Basic Git vocabulary
- How a file works its way through Git's inner system
- Workflow for adding and committing a file in Git

### Materials

- [Git and Version Control video walkthrough of slides](https://drive.google.com/file/d/1aGTDeTi46DRoj88VSaDtGEoIue0PtuB3/view?usp=sharing)
- [Git and Version Control (slides)](https://docs.google.com/presentation/d/1znMOomkIkAkFKIz2e6t5tLpyzObKqOwfd90fsixSiec/edit?usp=sharing)
- [githug: a command line game](https://github.com/Gazler/githug)
- [Git Immersion: A (1-2 h total) guided tour that walks through the fundamentals of Git. You can also pick and choose what you want to practice from the menu.](http://gitimmersion.com/lab_01.html)

### Video Tutorial on Setup and Basic Terminal Workflow

- [GitHub basics](https://youtu.be/0fKg7e37bQE)

### Video Tutorial on Forking and Pull Requests

- [Git tutorial for git fork/pull request](https://www.youtube.com/watch?v=nT8KGYVurIU)

### Lesson

[Git and Version Control (slides)](https://docs.google.com/presentation/d/1znMOomkIkAkFKIz2e6t5tLpyzObKqOwfd90fsixSiec/edit?usp=sharing)

- You can try the commands in the slides to get an idea of how Git works

### Common Mistakes / Misconceptions

- **"Typing commands into the Terminal is scary so I'll just skip this Git stuff."** There's really no getting around needing to use Git. It's OK if typing into the Terminal feels scary at the beginning. As you grow in your skills, using the Terminal will actually become faster than using your mouse and the Finder window!

- **"I don't think I'll ever use this, so I'll just skip this Git stuff."** You may not be able to see a use for Git now, but once you start working on multi-file projects you'll hopefully understand why it's an integral part of almost every software engineering workflow.

### Independent Practice

Spend just 30 minutes working through [Git Immersion: A guided tour that walks through the fundamentals of Git](http://gitimmersion.com/lab_01.html), then stop wherever you are. If the first page takes more than a minute to figure out, you can skip it for now.

### Challenge: Optional

1. Using only the command line:

- Create a new directory and initialize a Git repo
- Create a few files in the directory, and add some dummy text
- Add the new files to the stage
- Commit with a message, then check the `git log` to verify that it worked
- Change one of the files, then check on the changes with `git status` and `git diff`
- Add and commit those changes.

2. Play through [githug](https://github.com/Gazler/githug), a command-line game for learning Git. After installing it, type `githug` in your command-line prompt to play. When you think you've solved a level, type `githug` again to check your work. You'll get feedback and hints. Please complete at least up to `#32: checkout` and return to the game throughout the program to practice things like `merge` and `rebase`.

### Extensions

If you have time, continue the [Git Immersion](http://gitimmersion.com/lab_01.html) and [githug](https://github.com/Gazler/githug) tutorials if you aren't finished. Also, try looking through the supplemental materials below.

### Supplemental Materials

- [Interactive Git course](https://try.github.io)
- [Single page cheatsheet](http://rogerdudler.github.io/git-guide/)
- [Introduction to Git Concepts (FreeCodeCamp)](https://www.freecodecamp.org/news/what-is-git-and-how-to-use-it-c341b049ae61/)
- [Atlassian](https://www.atlassian.com/git/tutorials)
- [Git's own site](https://git-scm.com/)
- [Understanding Git Conceptually](https://www.sbf5.com/~cduan/technical/git/)
- [gitexplorer.com: Find the right commands you need without digging through the web.](https://gitexplorer.com/)
