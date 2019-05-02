# Git & Version Control

### Projected Time
About 2 hours
- 20 minutes for video walkthrough of slides
- 20 minutes for Guided Practice
- 30 minutes for Independent Practice
- 30 min for Group Practice
- 15 minutes for Check for Understanding

### Prerequisites
- "Command Line Interface" lesson
- "Shell Commands" lesson

### Learning styles represented
- See (videos and demonstration)
- Hear (videos and demonstration)
- Do (Independent & Group Practice)

### Motivation
*Imagine you are coloring on a flower coloring book. You colored in green for all leaves and now it's time for the best part, the petal. You know you enjoy red the best but it looked horrible after you finished it. With Git, you can revert your choice of red in a heartbeat and you are free to reapply the red if you change your mind. A work doesn't have to be permanent; every action is recorded and reversible*. [Source](https://dev.to/maestromac/comment/him)

- Git is a tool that allows software engineers to keep track of changes they make to code files. They can see the changes they've made, changes other people on their team have made to the same file, and even look at line-by-line differences between two files. It's an integral part of almost every software engineer's workflow.
- Git enables software developers to have access to different versions of their code even when offline.
- If you accidentally change your code and break something, git can revert it.
- Git lets you backup your code easily to a remote server such as GitHub, just incase your computer gets bad.

**Which companies use Git?** 
Mostly large enterprise companies like Google, Amazon, Mozilla, and Facebook.
Here is the Github page for Mozilla: [GitHub link](https://github.com/mozilla/thimble.mozilla.org)
**When the page is viewed:**
- It shows different versions of the code at different times(2 years ago, 4 months ago, etc).
- It shows the project contributors(218 contributors).
- It also shows that the project is hosted on a remote server which is GitHub.

### Objectives
**Participants will be able to:**
- Explain what Git is and why it's useful
- Define basic vocabulary used when talking about Git
- Show how to add a file to Git's tracking system and commit changes made to that file
- Show how to work with online repository

### Specific Things To Teach
- What Git is
- Basic Git vocabulary
- How a file works it way through Git's inner system
- Workflow for adding and committing a file in Git

### Materials
- [Git and Version Control video walkthrough of slides](https://drive.google.com/file/d/1aGTDeTi46DRoj88VSaDtGEoIue0PtuB3/view?usp=sharing)
- [Git and Version Control (slides)](https://docs.google.com/presentation/d/1znMOomkIkAkFKIz2e6t5tLpyzObKqOwfd90fsixSiec/edit?usp=sharing)
- [Codecademy's Git course](https://www.codecademy.com/learn/learn-git)
- [githug: a command line game](https://github.com/Gazler/githug)

### Supplemental Materials
- [Interactive Git course](https://try.github.io)
- [Single page cheatsheet](http://rogerdudler.github.io/git-guide/)
- [Atlassian](https://www.atlassian.com/git/tutorials)
- [Git's own site](https://git-scm.com/)
- [Understanding Git Conceptually](https://www.sbf5.com/~cduan/technical/git/)

### Lesson

[Git and Version Control (video walkthrough of slides)](https://drive.google.com/open?id=1t24FjEpcyL5KjUbYBQDt8dOSxwcctMWF)
* Please watch the video the first time without working along with the demonstration. Just absorb the concepts. Then you can watch the demonstration a second time and code with the instructor if you like.

[Git and Version Control (slides)](https://docs.google.com/presentation/d/1znMOomkIkAkFKIz2e6t5tLpyzObKqOwfd90fsixSiec/edit?usp=sharing)
* You can try hands on commands followed in the slides and get an idea of how git works

### Common Mistakes / Misconceptions

- **"Typing commands into the Terminal is scary so I'll just skip this Git stuff."** There's really no getting around needing to use Git. It's OK if typing into the Terminal feels scary at the beginning. As you grow in your skills, using the Terminal will actually become faster than using your mouse and the Finder window!

- **"I don't think I'll ever use this, so I'll just skip this Git stuff."** You may not be able to see a use for Git now, but once you start working on multi-file projects you'll hopefully understand why it's an integral part of almost every software engineering workflow.

### Demonstration
**Instructor will demonstrate**:
- Initializing a Git repo
- Creating a new file to track with Git
- Checking the status of a repo
- Adding a file for Git to track
- Committing changes to a git repo

### Guided Practice

Techtonica staff will assign pairs. Go through the following steps on one pair partner's computer first, then go through all the steps again the other pair partner's computer. The repetition of doing this twice will help solidify the new concepts.

1. Launch your Terminal and run `git --version`. If a version number appears, you already have git installed. If a version number does not appear, run `git` and follow the prompts to install Git.

2. Using the Terminal, navigate to the Desktop.

3. Create a new folder called `git_example`. Navigate to this folder.

4. Run the `git status` command. What happens? Run the `git init` command to make `git_example` start keeping track of changes that happen within the folder.

5. Run `git status`. What do you see?

6. Create a new file in `git_example` called `my-favorite-animals.txt`.

7. Run `git status`. What do you see?

8. Add some text to `my-favorite-animals.txt`. Save the file.

9. Run `git status`. What do you see?

10. Run `git add my-favorite-animals.txt`.

11. Run `git status`. What do you see?

12. Run `git commit -m "Create new file.`.

13. Run `git status`. What do you see?

### Independent Practice
Spend 30 minutes working through [Codecademy's Git course](https://www.codecademy.com/learn/learn-git).

### Group Practice
With computers closed, participants as a group will guide the instructor through creating, adding and committing file changes using Git. 

### Challenge
Play through [githug](https://github.com/Gazler/githug), a command-line game for learning git. After installing it, type `githug` in your command-line prompt to play. When you think you've solved a level, type `githug` again to check your work. You'll get feedback and hints. Please complete at least up to `#32: checkout` and return to the game throughout the program to practice things like `merge` and `rebase`.

### Check for Understanding
Using only the command line:
- Create a new directory and initialize a git repo
- Create a few files in the directory, and add some dummy text
- Add the new files to the stage
- Commit with a message, then check the `git log` to verify that it worked
- Change one of the files, then check on the changes with `git status` and `git diff`
- Add and commit those changes.

### Extensions
If you have time, continue the [Codecademy](https://www.codecademy.com/learn/learn-git) and [githug](https://github.com/Gazler/githug) tutorials if you aren't finished.  Also try looking through the supplemental materials.
