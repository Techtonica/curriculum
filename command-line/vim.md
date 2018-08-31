# A quick introduction to the Vim text editor

### Projected Time

Example: 30-45 minutes

### Prerequisites

Here are links to lessons that should be completed before this lesson:

- [Command Line Interface](version-control/git-version-control/git-version-control.md)

### Motivation

The hope of this topic is to provide a basic introduction to a
powerful and ubiquitous text editor called Vim.  With a foundation in
using Vim, students will be able to edit text files (e.g. code,
configuration files, etc.) on just about any UNIX- or Linux-based
computer.  (And they can use Vim Windows machines, too, if they want!)

### Objectives

**Participants will be able to:**

- Open up a file in the Vim editor
- Navigate around within a file
- Make basic changes
- Save changes made to a file
- Exit the editor (with or without saving changes)
- Understand the difference between insert and command mode, and how
  to switch between them.
- Understand some of the basic structure of how editing commands work
- Use the help feature to learn more

### Specific Things To Teach

- Invoking Vim
- Exiting vim
    - Without saving
    - With saving
    - Saving only if it needs it
- Moving around
    - Basic movement: `h`, `j`, `k`, `l`
    - Word-based movement: `w`, `e`, `b`, and their capital-letter
      equivalents
    - Fast movement
        - Moving to the beginning (`gg`) or end (`G`) of the file
        - Moving to a specific line number (`<n>G` and `:<n>`)
        - Moving by "paragraphs" (`{` and `}`)
        - Matching parens/braces/etc (`%`)
        - Matching word-at-cursor (`*` and `#`)
        - movement with command modifiers (see below)
        - Finding a letter (`f` and `F`)
    - Searching (`/` and `?`, `n` and `N`)
- Inserting text (`i`, `I`, `a`, `A`, `o`, `O`)
- Changing lines
- Deleting lines (`d`/`dd` command)
- Command modifiers (inserting or prepending a number)
    - modified basic movement
    - modified delete
    - modified insert
- Combining commands with movement (e.g. `d3w`)
- Undo (`u`) and redo (`ctrl-R`)
- "ex mode" (`:`)

### Materials

- [Official Vim website](https://www.vim.org/)
- [An interactive Vim tutorial](https://www.openvim.com/)
- [An interactive Vim Adventure Game (3 free levels, then
  paid)](https://vim-adventures.com/)

--- more work to do on this ---

### Lesson

Here's text about introducing something and how it works.

Build on the first information. Have apprentices guess things, do an activity, etc.

Make sure to mention these things:

- Things
	- This is a sub-thing
- More things
- Even more things
- Even more things


### Common Mistakes / Misconceptions

List things that apprentices might not realize, might assume at first, or should avoid.

- Example
- Example


### Guided Practice

Have the apprentices work with you as you do something.


### Independent Practice

Class does this thing themselves with specific additional items.


### Challenge

Apprentices can try to do this other thing.


### Check for Understanding

Some ideas: have apprentices summarize to each other, make a cheat sheet, take a quiz, do an assignment, or something else that helps assess their understanding.
