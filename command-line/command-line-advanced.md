# Advanced Command Line

### Projected Time
30-45 minutes

### Prerequisites
Basic command line class.

### Motivation
Teach people some handier tools for advanced file searching and processing

### Objective
**Students will be able to**:
- Find files.
- Parse file contents with sed and awk.
- Set aliases for common commands.
- Modify the command prompt info.
- Redirect input and output streams

### Specific Things To Teach
- Things about the things
	- This is a sub-thing about the things
- Even more things about the things

List of basic commands

	find - find files
	grep - find things inside files
	cut - remove sections from each line of files
	awk - pattern-directed scanning and processing language
	sed - stream editor for filtering and transforming text
	tr - translate, squeeze, and/or delete characters from standard input, writing to standard output
	alias - allow a string to be substituted for a word when it is used as the first word of a simple command
	export - export/set a new environment variable
	xargs - execute arguments
	
### Materials

- [BashGuide](http://mywiki.wooledge.org/BashGuide)
- [Filenames and Pathnames in Shell: How to do it Correctly](https://www.dwheeler.com/essays/filenames-in-shell.html)
- [An Awk Primer/Awk Command-Line Examples](https://en.wikibooks.org/wiki/An_Awk_Primer/Awk_Command-Line_Examples)
- [I/O Redirection](http://wiki.bash-hackers.org/syntax/redirection)

### Mini Lesson

Let's say we remember part of the path of a file but nothing else. We can use find like so (remember to man find):
	find / -path "*part/you/recall*"


### Common Mistakes / Misconceptions

Greg's Wiki is full of common mistakes (e.g. [why you shouldn't parse ls](http://mywiki.wooledge.org/ParsingLs)).


### Guided Practice

Is it relevant to them how 

### Independent Practice

Modify PS1 and set it in [bashrc](http://bashrcgenerator.com/).
Set a favorite alias in bashrc (e.g. fuck='sudo !!').

### Challenge

Students can try to do this other thing.


### Check for Understanding

Have students summarize to each other, make a cheat sheet, take a quiz, do an assignment, or something else that helps assess their understanding.
