# How to Submit Work

These instructions only apply to in-person apprentices. Open source readers can skip this file.

## Prerequisites

- [Git Version Control](/git-version-control/git-version-control.md)
- [GitHub Collaboration](/github-collaboration/github-collaboration.md)

These instructions apply to anything that you need to submit to the SEAM for review. If unsure if you need to submit something, ask the SEAM.

## Push to Your Assignments Repository

- Commit your work locally using git
- Push these commits to your homework repository, usually something like: https://github.com/YOUR-NAME/techtonica-assignments
- The SEAM will send each of you a link to their *fork* of that repo, something like https://github.com/SEAM/techtonica-assignments-YOUR-NAME
  - If you forget you can always find it at the top right **Fork** button which lists all known forks of your repo
- When viewing that repo you should see an indicator of commits differing between the two

### Differences between forks

![](./pr-example-1.png)

These are your commits since last merged PR.

When you click "New Pull Request" you'll see this page.

![](./pr-example-2.png)

There will be a small hint about which "base" to use.

![](./pr-example-3.png)

Verify the changes are what you'd like to have reviewed. If it is too many changes you'll need to create a branch with _only_ the changes you want to be reviewed. When in doubt, smaller PR's are easier to review and merge.

### Naming

The default name of the PR is the last commit message. Instead, please make it the name of the assignment used, e.g. 

> HTML/JS Game Project - Boggle


### General Suggestions

- Read any PR comments and try to address the feedback promptly. It's harder to remember the code if more time has elapsed.
- If the feedback is confusing, ask for clarification or for your pair to read it and see if they understand
- Keep the SEAM's fork up to date so you're not opening a huge PR or multiple PR's in one week
- Volunteers may review the PR's and so they may not know as much context. Try to be understanding if they misinterpet what we're doing
