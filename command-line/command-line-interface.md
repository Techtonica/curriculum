#Intro to Command Line Interface Tools

### Project Time

	2 Hours

### Prerequisites


### Motivation

	To familiarize student with command lines tool operations so they can begin setting up and pushing applications to Github from the terminal.

### Objective

	Student will have created an application folder, added a file, changed the name of a file, copied a file to a directory, added a file to repository, added a commit message, and pushed a repository to Github.

### Materials

	[BashGuide](http://mywiki.wooledge.org/BashGuide)
	[Filenames and Pathnames in Shell: How to do it Correctly](https://www.dwheeler.com/essays/filenames-in-shell.html)

### Mini Lesson

	Hold down COMMAND and hit the spacebar to open the OSX launcher, Spotlight.
	When the search bar appears type "terminal" and hit enter to launch the Terminal app.
	The terminal appears as a new window on the desktop and an icon in the dock.
	In the dock, you can control-click and keep inside of dock after it closes to launch it by click next time.

List of basic commands

	man - read a manual page
	apropos - find what man page is appropriate
	pwd - print working directory
	cd - change directory
	echo - print some arguments
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

Mini-Lessons

	Try a simple command. Type “pwd”
	You should see your working directory: `Users/username`
	Start typing a command, then tap Tab to see autocomplete options.
	The file processing commands would be more fun with sample data, particularly structured e.g. CSV, PSV.

### Guided Practice

Set up directory with files and push to git

	1. Create a directory
		`mkdir mywebsite`
	2. Enter the directory
	    `cd mywebsite`
	Add a file
		`touch index.html`
	Git add .
	Git commit -m “Message goes here”
	git push origin master

### Common Mistakes / Misconceptions

	Wrong directory

	Hidden files
	Ownership of directory/file permissions
	Git status

### What did you learn:

	The terminal has a prompt where you can type commands.
	How to learn more information about programs that can be run from the command line.

### Independent Practice

	Now practice this with other commands, e.g:

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
