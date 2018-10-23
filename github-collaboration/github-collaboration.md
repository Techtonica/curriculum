# GitHub Collaboration

### Projected Time
About 1 hour
- 30 minutes for slides/Guided Practice
- 20 minutes for Independent Practice
- 10 minutes for small group discussion


### Prerequisite
- Git version control lesson
- Git code storage lesson
- Terminal or Command Prompt

### Motivation
In the industry, apps are created by teams of developers rather than individual people. Proper use of GitHub for collaboration minimizes code conflicts and helps teams work together.

### Objectives
**Participants will be able to:**
- Create a branch within an existing GitHub repo on their laptop
- Push that branch to GitHub
- Create a pull request, merging that branch into master
- Review a peer's pull request
- Resolve simple conflicts when merging a pull request

### Specific Things To Teach
- Steps to create a new branch
- Things to check when creating a new pull request

### Supplemental Materials
- [GitHub Hello World](https://guides.github.com/activities/hello-world/)
- [GitHub Guides](https://guides.github.com/)

### Lesson
[GitHub collaboration (video walkthrough of slides)](https://drive.google.com/open?id=1qTURZrzNXXhqLCQIe_lV8CAkWNpP62kY)
[GitHub collaboration (slides)](https://docs.google.com/presentation/d/1dGsFDog3uUq0XwVMCbYRJucPuzBWTFCawdas2r6fBdA/edit#slide=id.p)

### Things to Remember
- If you mess up, you can usually undo what you just did. https://github.com/blog/2019-how-to-undo-almost-anything-with-git
- When working on a team project, NEVER push to the GitHub master branch directly. It's best to never commit directly to master as well.
- The best GitHub practices allow us to minimizes chances for merge conflicts (this happens when multiple people worked on the same file)
- When you do get a merge conflict, multiple people should sit down and resolve this either on GitHub or in VS Code.
- In general, someone else should approve your pull requests to the master branch as to get an extra set of eyes.
- Always pull from the shared project before working to make sure you have the most up-to-date version.  

### Guided Practice  
1. Fork a GitHub repo
    - Navigate to https://github.com/Techtonica/curriculum/
    - Click the button on the top right of the screen that says "fork"
    - Click the button next to "clone this repo"
    - On your command line, navigate to the folder where you keep your projects, and type ```git clone```
    and press *command+v* to paste in the git repo you copied. It should look like this: 
    ```
    git clone https://github.com/mygithubhandle/curriculum.git
    ``` 
      Press enter.
1. Contribute to the project
    - Enter ```cd curriculum``` to navigate into your newly cloned repo.
    - Enter ```code .``` .  Your VS Code editor should open to show the curriculum repo.
    - Open practice/students.md.  Add your name on it own line in the file. Press *command+s* to save.
1. Commit and push your changes.
    - On your command line, enter ```git status```. Copy the text practice/students.md using your keyboard shortcut *command+c*.
    - Enter ```git diff practice/students.md``` by pasting the file name using *command+v* again.  This is a good habit to get into if you are trying to submit work in a shared project.
    - Try doing git diff again, but instead enter just ```git diff practice``` and press enter.  You should get the same thing.  If there were 2 files with changes in the practice folder, ```git diff practice``` would show the diffs of both files.
    - Enter ```git add practice/students.md``` or ```git add practice```.  The second command works in this case because there's only one file in practice/ to worry about anyway.
    - Enter ```git commit -m "add my name"``` to commit with a message.
    - Enter ```git push origin master```.  You should see a message saying your remote fork, this repo's origin, was updated successfully.
1. Make a Pull Request to Techtonica/curriculum.
    - Go to your github account, and find your 'curriculum' repo.  Click the green button that says 'compare/pull request'.
    - Make sure you are making a request to merge mygithubhandle/curriculum into Techtonica/curriculum/. If this were a real team project, you could briefly explain what you changed, why, and if there's anything else your team should know about this PR. In this exercise, you can skip it and just make the title your name or "add my name", and press 'create pull request'.
    - Navigate to the Techtonica/curriculum repo's 'pull requests' tab to see your PR has been added.  Refresh your page to see whether more have have been made after yours.
1. Practice merging
    - Choose one pair of volunteers sitting next to each other. The first should go into their partner's PR, click the "file changes" tab, and click the 'review button' and approve the PR.  Ask that person to narrate what they are doing.
    - Have the other partner go into their approved PR and click 'merge'. Once there is a message saying it was successful, click 'delete branch'.
    - Ask everyone to navigate to Techtonica/curriculum/practice/students.md.  The apprentice's name should now be in the master branch!
    - Ask everyone else to pair up and do the same, then switch who is reviewing and who is making the PR & merging.
    - Surprise!  Everyone after this should have a merge conflict.  Click on the grey "resolve conflicts" button and adjust things to preserve all the names on the list so far. Click 'commit merge'. If you return to the conversation and there are no more merge conflicts, go ahead and click 'merge', then 'delete branch'.
    - Look at Techtonica/curriculum/practice/students.md again. You all just collaborated on this file!
1. Practice pulling
    - Add Techtonica/curriculum as a remote
    - ```git pull techtonica master```
    - Your command line may print that the merge was successful, but it is more likely that you have merge conflicts.  The message will tell you which files to fix conflicts in, but of course it will be in practice/students.md this time.
    - Navigate to that file, click 'their changes', then save.
    - Back in your command line, enter:
    ```
    git status
    git add practice/students.md
    git commit -m "resolve merge conflicts"
    git push origin master
    ```
    - Now your fork is up to date with the original Techtonica/curriculum repo. For the moment, at least.

### Challenge
Make another PR by checking out a new branch
  1. ```git pull techtonica master``` again. Fix any merge conflicts and commit.
  1. Enter ```git checkout -b middle-name``` to create a new branch.
  1. In practice/students.md, give yourself a cool nickname with quotes, ex: Margot "Danger" Tenenbaum
  1. ```git pull techtonica master``` again before pushing your new changes, just in case someone else made a commit in the time it took to do your work. (In real life, you will likely be working on a change for hours or days.)
  1. git status, add, commit, push, and make a PR for your middle-name branch to merge into the Techtonica/curriculum master branch.
  1.  Ask someone to review your PR.  This time, they should request changes with some bogus message, submit your review, and let you see it before resolving it and approving the PR after all.
  1. Fix any conflicts and merge the changes.
  1. Congrats, your cool nickname should be in the Techtonica/curriculum master branch!

### Check for Understanding
- Gather into small groups and discuss:
  - Why do you think forks and new branches would be good tools in a team project?
  - How do you keep your fork up-to-date with the shared project?
