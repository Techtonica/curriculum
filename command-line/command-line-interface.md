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

	Hold down COMMAND and hit the spacebar to open the OSX launcher, Spotlight.
	When the search bar appears type "terminal" and hit enter to launch the Terminal app.
	The terminal appears as a new window on the desktop and an icon in the dock.
	In the dock, you can control-click and keep inside of dock after it closes to launch it by click next time.

List of basic commands

	man - read a manual page
	apropos - find what man page is appropriate
	pwd - print working directory
	ls - list directory
	mkdir - make directory
	cd - change directory
	rmdir -remove directory
	pushd - push directory
	popd - pop directory
	cp - copy a file or directory
	mv - move or rename a file or directory
	hostname - my computer’s network name
	less - page through
	cat - print the whole file
	xargs - execute arguments
	find - find files
	grep - find things inside files
	cut - remove sections from each line of files
	awk - pattern-directed scanning and processing language
	sed - stream editor for filtering and transforming text
	env - look at your environment
	echo - print some arguments
	export - export/set a new environment variable
	exit - exit the shell
	sudo - become the super user, root (DANGER - only use when necessary)
	chmod - change permission modifiers
	chown -  change ownership

Mini-Lessons

	Try a simple command. Type “pwd”
	You should see your working directory: Users/username
	Start typing a command, then double tap Tab to see autocomplete options.
	The file processing commands would be more fun with sample data, particularly structured e.g. CSV, PSV.

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
	
	Awk and sed are fairly advanced and shoudl probably have some sample files checked in to play with and a well-defined task.
	
	Modify PS1, set aliases, and more in [bashrc](http://bashrcgenerator.com/).
