# Command Line Interface

### Project Time

About 1 hour
- 25 minutes for video walkthrough of slides
- 20 minutes for Independent Practice
- 15 minutes for Check for Understanding

### Prerequisites
none

### Motivation

- It is a more efficient way of accessing the computer's capabilities.
- Many software libraries and tools can only be downloaded via the Command Line (such as [Node Package Manager (npm)](https://www.npmjs.com/)).
- Error messages will often print out to the Command Line. 

**Which companies use the Command Line?** Every company will expect you to be able to navigate the Command Line.

#### Looking at an example website
- Sometimes you will see instructions on a website, and there will be a dollar sign followed by text, like so:
``` 
$ cd Downloads/
```
- Go to www.npmjs.com/package/express, which is the Node Package Manager page for Express.js.
- Everything in the block after the "$" is the command that you would type into the Command Line in order to install Express.js.


### Objectives

**Participants will be able to:**
- Create a directory and files
- Navigate to a directory
- Change the name of the file
- Copy a file to a directory

### Supplemental Materials

- [Codecademy's CLI course](https://www.codecademy.com/learn/learn-the-command-line)
- [Lifehacker's intro command line article](http://lifehacker.com/5633909/who-needs-a-mouse-learn-to-use-the-command-line-for-almost-anything)
- [Bash commands reference](https://ss64.com/bash/)
- [BashGuide](http://mywiki.wooledge.org/BashGuide)
- [Filenames and Pathnames in Shell: How to do it Correctly](https://www.dwheeler.com/essays/filenames-in-shell.html)
- [TLDR: Crowd sourced and simplified man pages](https://tldr.ostera.io/)

### Lesson

[Command Line Interface (video walkthrough of slides)](https://drive.google.com/open?id=1ELQmWotq5CefBojysrHnqcDNV0xXutDx)
- Please watch the video the first time without working along with the demonstration. Just absorb the concepts. Then, you can watch the demonstration a second time and code with the instructor if you like.

[Command Line Interface (slides)](https://docs.google.com/presentation/d/1INKaWqRQy79seTNmRUT444e0jSDbog8NB0maeCQoGm4/edit?usp=sharing)

### Accessing the Command Line ("Terminal")
1. Hold down the `COMMAND` key and press the spacebar once. This opens the OSX launcher, Spotlight.
2. When the search bar appears type "terminal" and press `ENTER` to launch the Terminal app.
3. The Terminal appears as a new window on the desktop and an icon in the dock.

### List of basic Terminal commands

	man - read a manual page
	apropos - find what man page is appropriate
	pwd - print working directory
	cd - change directory
	echo - print some arguments
	ls - list directory
	- find - find files
	mkdir - make directory
	cd - change directory
	rmdir -remove directory
	pushd - push directory
	popd - pop directory
	cp - copy a file or directory
	mv - move or rename a file or directory
	hostname - my computer’s network name
	less - page through
	more - page through (alternate)
	history - see previous commands from this shell
	head - print the start
	tail - print the end
	mkdir - make directory
	rmdir - remove directory
	grep - find things inside files
	cat - print the whole file
	man - read a manual page for a program
	env - look at your environment
	export - export/set a new environment variable
	which - see path to a program
	exit - exit the shell
	sudo - become the super user, root (DANGER - only use when necessary)
	chmod - change permission modifiers
	chown -  change ownership

### Demonstration

Instructor demonstrates how to use many of the above commands in the video walkthrough of the lesson slides.

### Common Mistakes / Misconceptions

- **"I have always just downloaded everything I need with my mouse. I don't need to use the CLI."** As you continue programming, you will learn new languages and tools. There are some important tools out there that can only be accessed via CLI. One example is NPM (node package manager), which we'll use in a few weeks.

- **"I am afraid of getting into the wrong directory. Isn't it easier to just click and type? "** There are simple commands you can run in the CLI to check which directory you're in. Once you get into the habit of using the CLI, you can quickly navigate through files and directories without leaving the keyboard, greatly increasing speed and efficiency.

- **"What if I accidentally delete important directories or files that affect my computer's operations? "** Most files and directories for computer operation are protected in some way. They could be hidden or have higher permission settings. Hidden files, for example, have a dot in front of their file name, and you can't see them without certain commands or special settings. If you are editing such files and you don't know why, please check with the instructor.


### Independent Practice

1. Navigate to your Desktop. Create a directory named "foo". Use `cd foo` to navigate into "foo" and create another directory named "bar".

2. Run `cd bar`. What directory are you in now? Check by running `pwd`.

3. Run `cd ../`. What directory do you think you are in now? Check by running `pwd`.

4. Navigate back to the "bar" directory and run `touch first.txt` and `touch ../second.txt`. You have not `cd`'d into the "foo" directory, but your second command contained `../`. Can you guess where `second.txt` is located?

5. Check your answer by running `ls` inside both the "foo" and the "bar" directory. The `second.txt` file should be inside the "foo" directory.

6. Navigate into the "bar" directory. Run `cp first.txt ../`. Use `ls` and make sure both directories have a `first.txt` file.

7. Navigate back into the "foo" directory. Run `mv second.txt foofile.txt`, then run `ls`. What happened to "second.txt"?


### Challenge

Run the `ls -l` command in the "foo" directory and compare it to the outcome of just running the `ls` command. The output from `ls -l` is different -- how?

Next, run `man ls`. Scroll to the bolded title "The Long Format". The first few paragraphs talk about what `-l` displays. Look for the one that starts with "The file mode...". Read it and see if your guess is correct.

Scroll through the manual and see if you can get an idea of what the format of a manual is typically like. Feel free to check out the manual for some of the command above. Whenever you are done, type `q` to exit.

[Click here to learn more advanced commands](https://github.com/Techtonica/curriculum/blob/master/command-line/command-line-advanced.md).

### Check for Understanding
