#Intro to Command Line Interface Tools

### Project Time

	2 Hours

### Prerequisites


### Motivation

	To familiarize student with command lines tool operations so they can begin setting up and pushing applications to Github from the terminal.

### Objective

	Student will have created an application folder, added a file, changed the name of a file, copied a file to a directory, added a file to repository, added a commit message, and pushed a repository to Github

### Materials

	Sublime Text, Terminal

### Mini Lesson

	Hold down COMMAND and hit the spacebar.
	When the search bar appears type: terminal
	The terminal is the black box that appears on the screen
	In the dock, you can control-click and keep inside of dock

List of basic commands

	pwd - print working directory
	hostname - my computer’s network name
	mkdir - make directory
	cd - change directory
	ls - list directory
	rmdir -remove directory
	pushd - push directory
	popd - pop directory
	cp - copy a file or directory
	mv - move directory
	less - page through
	cat - print the whole file
	xargs - execute arguments
	find - find files
	grep - find things inside files
	man - read a manual page
	apropos - find what man page is appropriate
	env - look at your environment
	echo - print some arguments
	export - export/set a new environment variable
	exit - exit the shell
	sudo - become a super user root (DANGER - only use when necessary
	chmod - change permission modifiers
	chown change ownership

Mini-Lessons

	Try a simple command. Type “pwd”
	You should see your working directory: Users/username

### Guided Practice

Set up directory with files and push to git

	1. Create a directory
		mkdir mywebsite
	Add a file
		touch index.html
	Git add .
	Git commit -m “Message goes here”
	git push origin master

### Common Mistakes / Misconceptions

	Wrong directory
	Hidden files
	Ownership of directory

### What did you learn:

	The terminal has a prompt where you can type commands
	It printed something.

### Independent Practice

	Now practice this with other commands

	Examples:

	ls
	ls -la


### Challenge

	Set up directory with files and push to git

	1. Create a directory
		mkdir mywebsite
	Add a file
		touch index.html
	Add html, body, head, and h3 tag thay says "Hello World"
	Git add .
	Git commit -m “Message goes here”
	git push origin master
