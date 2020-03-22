# A quick introduction to the Vim text editor

### Projected Time

1 hour

### Prerequisites

Here are links to lessons that should be completed before this lesson:

- [Command Line Interface](./command-line-interface.md)

### Motivation

The goal of this topic is to provide a basic introduction to a powerful and ubiquitous text editor called Vim. With a foundation in using Vim, you will be able to edit text files (e.g. code, configuration files, etc.) on just about any UNIX- or Linux-based computer. (And you can use Vim on Windows machines, too, if they want!)

Some situations you might use Vim include:

- Editing Git commit messages (useful when you learn about Git a few lessons from now)
- Editing your bash profile (which you'll learn about today)
- Accidentally opening Vim from the command line and needing to know how to exit it :-)

### Objectives

**Participants will be able to:**

- Open up a file in the Vim editor
- Navigate around within a file
- Make basic changes
- Save changes made to a file
- Exit the editor (with or without saving changes)
- Understand the difference between insert and command mode, and how to switch between them.
- Understand some of the basic structure of how editing commands work
- Use the help feature to learn more

### Specific Things to Learn

- Invoking Vim
- Exiting vim
  - Without saving
  - With saving
- Moving around
  - Basic movement: `h`, `j`, `k`, `l`
- Inserting text with `i`

#### Advanced topics to learn if there's time

- Moving around
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

- [An interactive Vim tutorial](https://www.openvim.com/)
- [Vim tutorial video](https://www.youtube.com/watch?v=g-XsXEsd6xA)
- [Official Vim website](https://www.vim.org/)

### Lesson

Vim is a program you can use on the command line (Terminal) to edit text files. When using the command line, sometimes you'll need to use Vim to edit a file, so it's good to know the basics of how to use Vim.

Vim does not have a official documentation.
The interactive Vim tutorial is quite enough to cover all of the vim.

If you want to get good idea about vim many of the different commands you can use in less time , you can watch this video : [How to Use Vim - Tutorial](https://www.youtube.com/watch?v=g-XsXEsd6xA)

### Independent Practice

#### Exercise 1

To get started with Vim, try doing these things on the command line:

1. Open a new file in Vim called favorites.txt by typing `vim favorites.txt`
2. Now you're in Vim! Type the letter `i`. Typing `i` puts you in "insert mode", which lets you insert text into the file.
3. Type some text! For example, type your three favorite foods.
4. Press the escape key. This takes you out of insert mode (now you're in the other mode, called "command mode"). In "command mode" you can no longer type text. You can try typing some letters to see that. (But note: `i`, `a`, and `o` will put you back in insert mode!)
5. Once you've pressed escape to leave insert mode, save your work by typing `:w` and then press enter.
6. Now you can quit Vim by typing `:q` and pressing enter.
7. Nice, you created and edited a file using Vim! You can open your file again by typing `vim favorites.txt` again. You can use `i` to edit your file again, and escape to leave insert mode when you're done.
8. A good shortcut to know is you can type `:wq` to save and then quit together.

Now you've learned enough to handle 90% of Vim situations :-). But there are tons of additional Vim commands you can learn, including commands to move through the file, edit text, copy and paste, and much more.

#### Exercise 2

Try using `vimtutor` to learn more about Vim! `vimtutor` is a Vim tutorial that comes on your computer. `vimtutor` will actually open the tutorial file on your computer using Vim, and as you go through the tutorial you'll use Vim commands to navigate and edit the file.

To get started:

1. On the Terminal, type `vimtutor`. Read the text on the screen.
2. The letter `j` is like a down arrow in Vim. Use the `j` key to scroll down through the tutorial.
3. Follow the tutorial! Be sure to do all the exercises. Go through the end of lesson 1.
4. If you have more time, do lesson 2.

### Challenge

Do the rest of `vimtutor` to learn a lot more about Vim! There are 7 lessons total. Go through as much as you have time to do (we recommend spending about 1 hour total on this lesson).

### Check for Understanding

See if you can do these things in Vim without looking at any reference material:

- Open a new file in Vim
- Write some text, including multiple lines (such as a bulleted list of your favorite foods)
- Save and quit the file
- Open the file again
- Use the "hjkl" keys to go to the end of the third line
- Edit that line to contain different text
- Save and quit

More advanced:

- Delete a word without going into insert mode
- Move around in the file without pressing `h`, `j`, `k`, and `l` a bunch of times. Which commands did you use instead?
- Search for a certain word in the file

### Supplemental Resources

- [An interactive Vim Adventure Game (3 free levels, then
  paid)](https://vim-adventures.com/)
- [How to edit a Git commit message using Vim](https://code.likeagirl.io/help-i-was-using-git-to-commit-some-code-and-now-the-window-has-changed-and-i-dont-know-what-s-9348a27e145b)
- [Vim Cheatsheet](https://devhints.io/vim)
