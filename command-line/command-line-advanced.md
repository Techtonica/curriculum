# Advanced Command Line

### Projected Time
30-45 minutes

### Prerequisites


### Motivation


### Objective
**Students will be able to** do something that we'll list here:
- Things
- More things
- Even more things
- Even more things

### Specific Things To Teach

- History
`history` command

    history|grep cat

Shortcut to search backwards through history
Ctrl+R (on a mac) then type string like "cat"

- Customizing your environment
Edit ~/.profile file to change your prompt:
export PS1="\u@\h:\W$ "

Save & open a new Terminal window or `source ~/.profile` to reload this.

More info: http://osxdaily.com/2006/12/11/how-to-customize-your-terminal-prompt/

- Setting environmental variables

Can be scoped to only the current session by typing at prompt:
export MYNAME=morin

Can be scoped to apply to all shells, by putting in ~.profile (or .bashrc...)


- Aliases
--  Do this as a before comparison

    cd ~
    ls

-- Add color to your `ls `command
Add this to your ~/.profile file

    # color ls
    export CLICOLOR=1
    export LSCOLORS=ExFxCxDxBxegedabagacad


- Tabs - contents and relation to each other
Just like a browser, Mac Terminal supports multiple tabs to do multiple things at once.

Cmd + T to open a new tab

- Piping commands together

You can chain commands.

cat *.txt |grep error | wc -l

Print all text files, searching for only lines containing "error", and print a count.


- Output
Write to a file with >   # this overwrites
Append it to a file  with >>  #this appends to the end

- Permissions
user / group / other bit masks


- Command line Options
Programs can use long and/or short options.

# show files containing the word important in this directory
grep -l important *
grep --files-with-matches important *

- Which command
See what version of a program is in use.
`which npm`
`which python`

- Special characters
Some special characters must be treated differently to use literally.
& is a special character - should be quoted to use in a string

- Quotes within quotes require backslash
echo "My name is \"Lin\""


### Materials

- [This website](example.com)
- [This other website](otherexample.com)

### Mini Lesson

Here's text about introducing something and how it works.

Build on the first information. Have students guess things, do an activity, etc.

Make sure to mention these things:
- Things
	- This is a sub-thing
- More things
- Even more things
- Even more things

List of advanced commands

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


### Mini Lesson

This lesson helps you create an executable script. 
 
Open Terminal.

Set an environment variable, customizing as you like. 

	export FAVEFOOD=fishsticks

Create a small file called 'lunch.sh' containing
	
	#!/bin/bash
	
	lunch=$1  # read in user input
	echo $lunch is for lunch, along with $FAVEFOOD.

Make it executable.
	
	chmod a+x lunch.sh

Run it.

	./lunch.sh
	./lunch.sh Soda

Now create a file containing some foods.
	
	echo "mac & cheese" > foods.txt
	echo dim sum >> foods.txt
	echo an apple >> foods.txt
	
Edit lunch.sh to use this file
	
	#!/bin/bash
	
	lunch=$1  # read in user input
	echo $lunch is for lunch, along with $FAVEFOOD.
	echo We also offer:
	cat foods.txt

### Mini Lesson

	Hold down COMMAND and hit the spacebar.
	When the search bar appears type: terminal
	The terminal is the black box that appears on the screen
	In the dock, you can control-click and keep inside of dock



### Common Mistakes / Misconceptions

This is something that students might not realize or might assume at first.

Make sure they avoid this: thing


### Guided Practice

Have the students work with you as you do something.


### Independent Practice

Class does this thing themselves with specific additional items.


### Challenge

Students can try to do this other thing.


### Check for Understanding

Have students summarize to each other, make a cheat sheet, take a quiz, do an assignment, or something else that helps assess their understanding.


