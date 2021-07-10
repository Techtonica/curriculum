# GitHub for Code Storage

### Projected Time

About 1.5 hour

- 45 minutes for the Lesson
- 30 minutes for Independent Practice
- 15 minutes for Group Practice

### Prerequisites

- [Command Line Interface lesson](/command-line/command-line-interface.md)
- [Git & Version Control lesson](./git-version-control.md)

### Motivation

GitHub is a widely-used code storage and code collaboration tool. In this lesson we cover the storage aspects of GitHub. In another lesson, we'll cover the collaboration aspects of GitHub.

### Objectives

**Participants will be able to**

- Explain the difference between Git and GitHub
- Create their own GitHub account
- Push code from their local machine to GitHub
- Identify what should be included in a README

### Specific Things to Learn

- Create a new GitHub repository
- Link a GitHub repo to a Git repo on your local machine
- Push a project from your local machine to its respective GitHub repo
- What makes an effective README

### Lesson

0. [Setup and prep: Configure Git and Github (10~15 mins)](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/setting-up-git#step-2-configure-git-and-github)

   - This step configures Git with your name and email, creates an SSH Key, and links your SSH key with GitHub.

1. [GitHub for Code Storage (video walkthrough of slides)](https://drive.google.com/file/d/1GRBWkRUmB2IAtHrs9wXid3HEdAtGsUZo/view?usp=sharing)

   - Please watch the video the first time without working along with the demonstration. Just absorb the concepts. Then, you can watch the demonstration a second time and code with the instructor if you like.

1. [GitHub for Code Storage (slides)](https://docs.google.com/presentation/d/1wlhPFx4oq3xWWdPqwf8CP6cmcuo7gaQ0UeOcKocSjp8/edit?usp=sharing)

1. [Learn how to create a 'gist' here](https://help.github.com/en/articles/creating-gists). You will soon be required to turn many things in with a gist. (Note: It's super easy.)

1. [Art of README (30 minute read)](https://github.com/noffle/art-of-readme)

1. [Use this README.md template to get started.](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2) (Sometimes it takes few reloads to get the page to load)
   - At this point, if you don't have something for a topic like "Tests", just leave it out.
   - Make sure to add a screenshot right after your project description if you have something visual coded up.
   - If you're not sure how to add a photo to a markdown file, check out this [markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

### Common Mistakes / Misconceptions

- **"The Git repo on my laptop is the same thing as the GitHub repo."** The Git repo you may have for a particular project on your laptop _gets attached to_ the GitHub repo you set up to store all it's code in. The changes you make in your Git repo on your laptop won't transfer over to your GitHub repo until you run the `git push -u origin main` command.

- **"I can only push perfect and polished code to GitHub."** Lots of people use GitHub to showcase finished projects, but lots of people also use GitHub to store their projects-in-progress. Your code does not need to be perfect, especially as a junior software engineer. If you are really worried about people seeing your code before you deem it "ready", consider upgrading from a free account to the lowest-tier paid plan (currently \$7/mo), which allows you to have an unlimited number of private repos. All Techtonica assignments must be pushed to public repos, however.

- **"I just cloned this repo from my own account! Why won't it let me git push?"**

  When you `git clone github.com/some-name/some-repository`, a folder with the name of `some-repository` will be downloaded to the current directory, and it will already have the remote origin set up as that url. But you are still in the parent folder; now enter `cd some-repository` to start working with your cloned project.

  If you are having a problem pushing up to the remote and getting weird errors like “there is no remote called ‘origin’“, odds are that you are not in your new `some-repository` folder where the git data is. Make sure that when you enter `pwd` (present working directory), it prints that you are definitely in `some-folder` before ruling out this problem. I still make this mistake sometimes!

### Demonstration

In the video walkthrough, the instructor demonstrates the proper GitHub workflow for creating and pushing to repos.

### Independent Practice

Techtonica staff will assign pairs. With your pair, go through the demonstration in the video walkthrough with a new project (not the one you started in the "Git & Version Control" lesson).

### Group Practice

The group will tell the instructor, or a fellow classmate, how to get through the GitHub workflow presented in this lesson. This should be done from memory, and the instructor or classmate will work on a computer attached to the projector.

### Supplemental Materials

- [GitHub "Hello, World!"](https://guides.github.com/activities/hello-world/)
- [GitHub Guides](https://guides.github.com/)

### Challenge

Work through [this Git and GitHub tutorial for Beginners](http://product.hubspot.com/blog/git-and-github-tutorial-for-beginners), which reinforces all of the concepts we covered in this lesson, plus some more advanced topics such as branching, merging and pull requests. Fun!

### Check for Understanding

Form small groups and discuss:

- What is Git and what is GitHub?
- What is the importance of the README file ?
- What is a remote origin ?
- What does a good commit message look like?
