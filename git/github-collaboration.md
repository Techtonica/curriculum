# GitHub Collaboration

### Prerequisites

- Git Version Control lesson
- Git Code Storage lesson
- Terminal or Command Prompt

### Motivation

-In the industry, apps are created by teams of developers rather than individual people. Proper use of GitHub for collaboration minimizes code conflicts and helps teams work together.
- At the heart of collaboration are branches, which developers use when working on new features or patching a bug. This makes it easier to deal with multiple contexts while developing in a professional manner. To elaborate, every bug patch or new feature is a context because it is unique to itself and thus is considered something clearly separated from other things. Branches allow seamless and simultaneous development of these in a manner that allows full focus on each context in its own environment.
- Pull requests (PRs) are how developers add contributions to the intended repository. It lets you tell the repository owners or maintainers about your changes, after which it can be reviewed and included if satisfactory.

**Who uses GitHub:**
As of August 2019, more than 40 million people use GitHub. Some popular companies are [Meta](https://github.com/facebook), [Google](https://github.com/google) and [Microsoft](https://github.com/microsoft).

**Looking at an example repository**
If you have checked a repository before, you might have noticed it says `Branch: main` or `Branch: master` right under the tabs and metadata. That button can be used to switch and subsequently check various branches.

- For example, you can view various branches on Facebook's [React](https://github.com/facebook/react/branches) repository. Notice how the branches are adapted for various purposes.
- Similarly, you can also check pull requests on Facebook's [React](https://github.com/facebook/react/pulls). A good pull request will be named such that you understand the purpose of the changes made.

**A note about "master" branches**
In 2020, Techtonica/curriculum renamed its default branch from `master` to `main`. We chose to do this because we do not wish to draw on the legacy of master/slave language. For more details, see [Gnome archive](https://mail.gnome.org/archives/desktop-devel-list/2019-May/msg00066.html). Be aware of this while navigating new repos, and check the readme if you are unsure which is their default branch. Although the dev community seems to have agreed on "main", other alternative names include: "trunk", "release", "prod", "production", "live", "default", "head", "primary", and "top".

### Objectives

**Participants will be able to:**

- Create a branch within an existing GitHub repo on their laptop
- Push that branch to GitHub
- Create a pull request, merging that branch into `main`
- Review a peer's pull request
- Resolve simple conflicts when merging a pull request

### Specific Things to Learn

- Steps to create a new branch
- Things to check when creating a new pull request

### Supplemental Materials

- [GitHub Hello World](https://guides.github.com/activities/hello-world/)
- [GitHub Guides](https://guides.github.com/)

### Lesson

- [GitHub Collaboration Guide](https://medium.com/@jonathanmines/the-ultimate-github-collaboration-guide-df816e98fb67)
- [GitHub collaboration (video walkthrough of slides)](https://drive.google.com/open?id=1qTURZrzNXXhqLCQIe_lV8CAkWNpP62kY)
- [GitHub collaboration (slides)](https://docs.google.com/presentation/d/1dGsFDog3uUq0XwVMCbYRJucPuzBWTFCawdas2r6fBdA/edit#slide=id.p)

### Things to Remember

- If you mess up, you can usually undo what you just did. https://github.blog/2015-06-08-how-to-undo-almost-anything-with-git/
- When working on a team project, NEVER push to the GitHub `main` branch directly. It's best to never commit directly to `main` as well.
- The best GitHub practices allow us to minimize chances for merge conflicts (this happens when multiple people worked on the same file).
- When you do get a merge conflict, multiple people should sit down and resolve this either on GitHub or in VS Code.
- In general, someone else should approve your pull requests to the `main` branch to get an extra set of eyes.
- Always pull from the shared project before working to make sure you have the most up-to-date version.

### Guided Practice

PRO TIP: First, ask yourself, "Have I gotten through everything I need to know on a broad level in accordance with the day doc?" Save guided practice for when you have extra time, don't prioritize it over other tasks.

0. Send your GitHub username to your program manager or an admin, and ask them to give you "Triage" access to Techtonica/curriculum. (Not Read, not Write, Triage.)
1. Fork a GitHub repo
   - Navigate to https://github.com/Techtonica/curriculum/
   - Click the button on the top right of the screen that says "fork"
   - Click the button next to "clone this repo"
   - On your command line, navigate to the folder where you keep your projects, and type `git clone`
     and press _command+v_ to paste in the git repo you copied. It should look like this:
   ```
   git clone https://github.com/mygithubhandle/curriculum.git
   ```
   Press enter.
1. Contribute to the project
   - Enter `cd curriculum` to navigate into your newly cloned repo.
   - Enter `code .` . Your VS Code editor should open to show the curriculum repo.
   - Open practice/participants.md. Add your name on its own line in the file. Press _command+s_ to save.
1. Commit and push your changes.
   - On your command line, enter `git status`. Copy the text practice/participants.md using your keyboard shortcut _command+c_.
   - Enter `git diff practice/participants.md` by pasting the file name using _command+v_ again. This is a good habit to get into if you are trying to submit work in a shared project.
   - Try doing git diff again, but instead enter just `git diff practice` and press enter. You should get the same thing. If there were 2 files with changes in the practice folder, `git diff practice` would show the diffs of both files.
   - Enter `git add practice/participants.md` or `git add practice`. The second command works in this case because there's only one file in practice to worry about anyway.
   - Enter `git commit -m "add my name"` to commit with a message.
   - Enter `git push origin main`. You should see a message saying your remote fork, this repo's origin, was updated successfully.
1. Make a Pull Request to Techtonica/curriculum.
   - Go to your GitHub account, and find your 'curriculum' repo. Click the green button that says 'compare/pull request'.
   - Make sure you are making a request to merge mygithubhandle/curriculum into Techtonica/curriculum/. If this were a real team project, you could briefly explain what you changed, why, and if there's anything else your team should know about this PR. In this exercise, you can skip it and just make the title your name or "add my name", and press 'create pull request'.
   - Navigate to the Techtonica/curriculum repo's 'pull requests' tab to check your PR has been added. Refresh your page to see whether more have been made after yours.
1. Make a Pull Request to your partnersGitHubHandle/curriculum `main` branch.
1. Practice merging
   - Choose one pair of volunteers sitting next to each other. The first should go into their partner's PR in their own fork, click the "file changes" tab, click the 'review button', and approve the PR. Ask that person to narrate what they are doing.
   - Have the other partner go into their approved PR and click 'merge'. Once there is a message saying it was successful, click 'delete branch'.
   - Ask everyone to navigate to Techtonica/curriculum/practice/students.md. The participant's name should now be in the `main` branch!
   - Ask everyone else to pair up and do the same, then switch who is reviewing and who is making the PR & merging.
   - Surprise! Everyone after this should have a merge conflict. Click on the grey "resolve conflicts" button and adjust things to preserve all the names on the list so far. Click 'commit merge'. If you return to the conversation and there are no more merge conflicts, go ahead and click 'merge', then 'delete branch'.
   - Look at Techtonica/curriculum/practice/participants.md again. You all just collaborated on this file!
1. Practice pulling
   - Add Techtonica/curriculum as a remote:
     - Run `git remote -v`. You should see an output like this:  
      `origin	https://github.com/<username>/curriculum.git (fetch)     
     origin	https://github.com/<username>/curriculum.git (push)`
     - If you do not see the URL `https://github.com/techtonica/curriculum.git` with "techtonica" in the name, which is pretty likely, you'll need to add it as a remote repo so you can pull it to keep your clone up to date. If you do have it, you can skip the adding step and go straight to pulling.
     - To add it, run `git remote add techtonica https://github.com/techtonica/curriculum.git`.
     - You could have also named it `upstream` by running `git remote add upstream https://github.com/techtonica/curriculum.git`, but let's stick with "techtonica" to keep it clear. For more on what's going on here, see the next section about "Adding a new remote repo".
     - Check that it worked by running `git remote -v` again. You should now see: `
 origin	https://github.com/alodahl/curriculum.git (fetch)
origin	https://github.com/alodahl/curriculum.git (push)
 techtonica	https://github.com/techtonica/curriculum.git (fetch)
 techtonica	https://github.com/techtonica/curriculum.git (push)`.
   - Now you can pull Techtonica's version of the curriculum repo:
     - `git pull techtonica main` (or the name you have instead of "techtonica")
   - Your command line may print that the merge was successful, but it is more likely that you have merge conflicts. The message will tell you which files to fix conflicts in, but of course it will be in practice/participants.md this time.
   - Navigate to that file, click 'their changes', then save.
   - Back in your command line, enter:
   ```
   git status
   git add practice/participants.md
   git commit -m "resolve merge conflicts"
   git push origin main
   ```
   - Now your fork is up to date with the original Techtonica/curriculum repo. For the moment, at least.
1. Adding a new remote repo[(from atlassian.com)](https://www.atlassian.com/git/tutorials/syncing)
   - Create a new connection to a remote repository. After adding a remote, you’ll be able to use <name> as a convenient shortcut for <url> in other Git commands. `
     - `git remote add <name> <url>`
   - Remove the connection to the remote repository called <name>. - `git remote rm <name>`
     -Rename a remote connection. - `git remote rename <old-name> <new-name>`
   - The git remote command will list previously stored remote connections to other repositories.
     - `git remote`
   - Invoking git remote with the -v option will print the list of bookmarked repository names and additionally, the corresponding repository URL.
     - `git remote -v`.
   - This command fetches a copy of the `main` branch from the originating cloned repository and merges it with the current branch you have checked out. You can use this to keep your branch up to date with `main` as you work. - `git pull origin main` -`git pull` will pull from the origin remote branch that you have checked out then automatically merge it. For example, if you cloned your forked repo and are currently on the "test" branch, the command will pull from the test branch in your forked remote and merge it to your local "test" branch, in this example making it the same as _git pull origin test_.
   - If you want to keep the fork project updated with the main project you forked, the following steps need to be followed:
     - Clone the forked repository:
       - `git clone git@github.com:<YOUR-USERNAME>/<YOUR-FORKED-REPO>.git`
     - Add remote from the original repository to the forked repository
       - `cd into/cloned/fork-repo`
       - `git remote add upstream git://github.com/<ORIGINAL-DEV-USERNAME>/<REPO-YOU-FORKED-FROM>.git` (you can name it anything; _upstream_ is an example.)
     - Updating your fork from the main repo to keep up with their changes:
       - `git pull upstream main`

### Challenge

Make another PR by checking out a new branch

1. `git pull techtonica main` again. Fix any merge conflicts and commit.
1. Enter `git checkout -b middle-name` to create a new branch.
1. In practice/students.md, give yourself a cool nickname with quotes, ex: Margot "Danger" Tenenbaum
1. `git pull techtonica main` again before pushing your new changes, just in case someone else made a commit in the time it took to do your work. (In real life, you will likely be working on a change for hours or days.)
1. git status, add, commit, push, and make a PR for your middle-name branch to merge into the Techtonica/curriculum `main` branch.
1. Ask someone to review your PR. This time, they should request changes with some bogus message, submit your review, and let you see it before resolving it and approving the PR after all.
1. Fix any conflicts and merge the changes.
1. Congrats, your cool nickname should be in the Techtonica/curriculum `main` branch!

### Check for Understanding

- Why do you think forks and new branches would be good tools in a team project?
- How do you keep your fork up-to-date with the shared project?
- What is the first thing you should do before working on an issue/project?
- What is the git command to create a new branch?
- Why is a good commit message important?
- What things should you check when creating a new pull request?
- How would you resolve merge conflicts?
