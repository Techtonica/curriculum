# Advanced Command Line

### Projected Time
About 1 hour

### Prerequisites
Basic command line class.

### Motivation
Teach people some handier tools for advanced file searching and processing

### Objectives
**Participants will be able to:**:
- Find files.
- Parse file contents with sed and awk.
- Modify the command prompt info.
- Redirect input and output streams

### Specific Things to Teach
- History
- Tabs
- Piping commands together
- Output
- Permissions
- Command line Options
- find files containing...
- Which command
- Special characters
- List of basic commands

### Materials

- [BashGuide](http://mywiki.wooledge.org/BashGuide)
- [Filenames and Pathnames in Shell: How to do it Correctly](https://www.dwheeler.com/essays/filenames-in-shell.html)
- [An Awk Primer/Awk Command-Line Examples](https://en.wikibooks.org/wiki/An_Awk_Primer/Awk_Command-Line_Examples)
- [I/O Redirection](http://wiki.bash-hackers.org/syntax/redirection)


### Lesson

- History
	`history` command

	 ```history|grep cat```

	Shortcut to search backwards through history
	Ctrl+R (on a mac) then type string like "cat"

- Tabs - contents and relation to each other
	Just like a browser, Mac Terminal supports multiple tabs to do multiple things at once.

	Cmd + T to open a new tab

- Piping commands together

	You can chain commands.

	```cat *.txt |grep error | wc -l```

	Print all text files, searching for only lines containing "error", and print a count.


- Output
	Write to a file with >   # this overwrites
	Append it to a file  with >>  #this appends to the end

- Permissions
	user / group / other bit masks

- Command line Options
	Programs can use long and/or short options.

- show files containing the word important in this directory
	```
	grep -l important *
	grep --files-with-matches important *
	```

- Which command
	See what version of a program is in use.
	```which npm```
	```which python```

- Special characters
	Some special characters must be treated differently to use literally.
	& is a special character - should be quoted to use in a string

	- Quotes within quotes require backslash
	echo "My name is \"Lin\""

**List of basic commands**

	- find - find files
	- grep - find things inside files
	- cut - remove sections from each line of files
	- awk - pattern-directed scanning and processing language
	- sed - stream editor for filtering and transforming text
	 - tr - translate, squeeze, and/or delete characters from standard input, writing to standard output
	- alias - allow a string to be substituted for a word when it is used as the first word of a simple command
	- export - export/set a new environment variable
	- xargs - execute arguments

Let's say we remember part of the path of a file but nothing else. We can use find like so (remember to man find):
		find / -path "*part/you/recall*"

**List of advanced commands**

	echo - print some arguments
	pushd - push directory
	popd - pop directory
	env - look at your environment
	export - export/set a new environment variable
	find - find files
	wc - wordcount (word & line count)
	sort -  sort data
	cut - remove sections from each line of files
	hostname - my computer’s network name
	xargs - execute arguments
	sudo - become a super user root (DANGER - only use when necessary)
	chmod - change permission modifiers
	chown -  change ownership
	apropos - find what man page is appropriate
	awk - pattern-directed scanning and processing language
	sed - stream editor for filtering and transforming text


### Guided Practice

This lesson helps you create an executable script. 
 
1. Open Terminal.

1. Create a small file with the filename 'lunch' by typing `touch lunch` .

1. Using a text editor of your choice, modify the contents of this brand-new `lunch` file so that it contains the following text:

	```bash
	#!/bin/bash
	lunch=$1  # read in user input
	echo $lunch is for lunch, along with $FAVEFOOD.
	```

Save the file and exit your text editor. 

1. Return to the command line. Make the file `lunch` into an executable file.
	
	```chmod a+x lunch```

1. Run your new tiny program by typing the filename preceded by `./`

First try running it with no arguments.
	```
	./lunch
	```
You will see nothing for lunch, because we haven't specified any arguments. Try running your program again, but pass in the argument `Soda`. 
	```
	./lunch Soda
	```
You should see that Soda is for lunch! 

1. Now create a file containing some foods.
	```
	echo "mac & cheese" > foods.txt
	echo dim sum >> foods.txt
	echo an apple >> foods.txt
	```
1. Edit lunch by entering these commands:

	```#!/bin/bash```
	
	```lunch=$1```  # read in user input
	```
	echo $lunch is for lunch, along with $FAVEFOOD.
	echo We also offer:
	cat foods.txt
	```

1. 	- Hold down COMMAND and hit the spacebar.
	- When the search bar appears type: terminal
	- The terminal is the black box that appears on the screen
	- In the dock, you can control-click and keep inside of dock



### Common Mistakes / Misconceptions

Greg's Wiki is full of common mistakes (e.g. [why you shouldn't parse ls](http://mywiki.wooledge.org/ParsingLs)).

### Independent Practice
Spend 15 minutes checking out these materials:
- [BashGuide](http://mywiki.wooledge.org/BashGuide)
- [Filenames and Pathnames in Shell: How to do it Correctly](https://www.dwheeler.com/essays/filenames-in-shell.html)
- [An Awk Primer/Awk Command-Line Examples](https://en.wikibooks.org/wiki/An_Awk_Primer/Awk_Command-Line_Examples)
- [I/O Redirection](http://wiki.bash-hackers.org/syntax/redirection)

### Challenge


### Check for Understanding

#Example:Summarize to each other, make a cheat sheet, take a quiz, do an assignment, or something else that helps assess understanding.


