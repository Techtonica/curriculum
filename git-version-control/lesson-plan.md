# Git & Version Control

### Projected Time
About 1 hour
- 20 minutes for video walkthrough of slides
- 20 minutes for Independent Practice
- 15 minutes for Check for Understanding

### Prerequisites
- "Command Line Interface" lesson
- "Shell Commands" lesson

### Learning styles represented
- See (videos and demonstration)
- Hear (videos and demonstration)
- Do (Independent & Group Practice)

### Motivation
Git is a tool that allows software engineers to keep track of changes they make to code files. They can see the changes they've made, changes other people on their team have made to the same file, and even look at line-by-line differences between two files. It's an integral part of almost every software engineer's workflow.

### Objective
**Students will understand**:
- What Git is and why it's useful
- Basic vocabularly that's used when talking about Git
- How to add a file to Git's tracking system and commit changes you made to that file

### Specific Things To Teach
- What Git is
- Basic Git vocabulary
- How a file works it way through Git's inner system
- Workflow for adding and committing a file in Git

### Supplemental Materials

- [Codecademy's Git course](https://www.codecademy.com/learn/learn-git)
- [Interactive Git course](https://try.github.io)
- [Single page cheatsheet](http://rogerdudler.github.io/git-guide/)
- [Atlassian](https://www.atlassian.com/git/tutorials)
- [Git's own site](https://git-scm.com/)

### Mini Lesson

[Git and Version Control (video walkthrough of slides)](https://drive.google.com/open?id=1t24FjEpcyL5KjUbYBQDt8dOSxwcctMWF)
* Please watch the video the first time without working along with the demonstration. Just absorb the concepts. Then, you can watch the demonstration a second time and code with the instructor if you like.

[Git and Version Control (slides)](https://docs.google.com/presentation/d/1znMOomkIkAkFKIz2e6t5tLpyzObKqOwfd90fsixSiec/edit?usp=sharing)


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

### Independent Practice

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


### Group Practice

With computers closed, participants as a group will guide the instructor through creating, adding and committing file changes using Git. 

### Challenge

Start working through [Codecademy's Git course](https://www.codecademy.com/learn/learn-git).

### Check for Understanding

