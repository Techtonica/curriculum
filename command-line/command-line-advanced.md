# Advanced Command Line

### Projected Time

About 1 hour

### Prerequisites

[Basic command line class](command-line-interface.md).

### Motivation

Teach people some handier tools for advanced file searching and processing

### Objectives

**Participants will be able to:**

- Find files.
- Find commands they've used before.
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

- Tabs - contents and relation to each other
  - Just like a browser, Mac Terminal supports multiple tabs to do multiple things at once.
  - Cmd + T to open a new tab

- Piping commands together
  - You can chain commands using the pipe operator, `|`, located above your return key (to get to `|`, press shift and `\`). Commands connected by pipes are run in order from left to right. The output of a command gets "piped" into the next command.
  - Example: the following command will print all text files, searching for only lines containing "error", and print a count.

    ```bash
    cat *.txt | grep error | wc -l
    ```
    Hint: don't forget you can always use `man` to discover more about `wc` and other commands.

- History
  - The history of commands you've executed in your shell can be accessed using the `history` command. To narrow your search, use `grep` with history. Example:

    ```bash
    history|grep cat
    ```

  - Shortcut to search backwards through history
  - Ctrl+R (on a mac) then type a string like "cat"

- Output
  - Write text to a file with `>`. This overwrites the entire file.
  - Append text to a file with `>>`. This appends the text to the end.
  
- Command line options
  - Programs can use long and/or short options.
  - Long options use two dashes, like `--verbose`.
  - Short options use one dash, like `-l`.

- Permissions
  - View permissions of all files in a directory by using `ls` with two short options, `a` and `l`, like so:
    ```bash
    ls -al
    ```
    The permissions will show up on the left of each file listing as a series of user / group / other bit masks.

- Search with `grep`
  - Show files containing the word important in this directory
    ```bash
    grep -l important *
    grep --files-with-matches important *
    ```

- The `which` command
  - See what version of a program is in use. You'll see the full path to the location of the program's executable.
    ```bash
    which ls
    which python
    ```

- Special characters
  - Some special characters must be treated differently to use literally.
  - `&` is a special character. It must be quoted if you're going to use it in a string.
  - Quotes within quotes (specifically, quotes that you're using as part of your text within quotes you're using to tell the command line that you're making a string) need to be marked as "not the set of quotes that will mark the end of the string." This process is called "escaping", as in "don't forget to escape this characters." On the command line, the escape character is `\`, and you use it by placing it immediately before the character you need to escape.
    ```bash
    echo "My name is \"Lin\""
    ```
    would produce the output `My name is "Lin"`.

#### List of basic commands

	- find - find files
	- grep - find things inside files
	- cut - remove sections from each line of files
	- awk - pattern-directed scanning and processing language
	- sed - stream editor for filtering and transforming text
	 - tr - translate, squeeze, and/or delete characters from standard input, writing to standard output
	- alias - allow a string to be substituted for a word when it is used as the first word of a simple command
	- export - export/set a new environment variable
	- xargs - execute arguments

Let's say we remember part of the path of a file but nothing else. We can use find like so (remember to `man find` on your own if you want to learn more):
```bash
find / -path "*part/you/recall*"
```

#### List of advanced commands

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

This lesson helps you create an executable script. It will read information from the user in several ways: from an argument passed to the program, from a file, and from an environment variable.

1. Open Terminal.

2. Create a small file with the filename 'lunch' (not lunch.txt) by typing `touch lunch` .

3. Using a text editor of your choice, modify the contents of this brand-new `lunch` file so that it contains the following text:
    ```bash
    #!/bin/bash

    lunch=$1
    echo $lunch is for lunch, along with $FAVEFOOD.
    ```
    `$1` refers to the first argument a user will pass in to the lunch program.
    Save the file and, if you're using a command line text editor, exit it.

4. Return to the command line. Make sure you're in the directory that `lunch` is in. Make the file `lunch` into an executable file by running this command:
    ```bash
    chmod a+x lunch
    ```

5. Run your new tiny program on the command line by typing the filename preceded by `./`

    First try running it with no arguments.
    ```bash
    ./lunch
    ```
    You will see nothing for lunch, because we haven't specified any arguments yet. Try running your program again, but pass in the argument `Soda`, like so:
    ```bash
    ./lunch Soda
    ```
    You should see that Soda is for lunch!

6. Now create a file containing some foods. We can do this via the command line without even opening up a text editor. `>` overwrites whatever was in the file before. `>>` appends text to the end of the file. The first command has double quotes because `&` is a special character. Enter these commands one at a time in your command line:
    ```bash
    echo "mac & cheese" > foods.txt
    echo dim sum >> foods.txt
    echo an apple >> foods.txt
    ```

7. Edit `lunch` by adding these two new lines to the bottom, so the file ends up looking like this:

    ```bash
    #!/bin/bash

    lunch=$1
    echo $lunch is for lunch, along with $FAVEFOOD.

    echo We also offer:
    cat foods.txt
    ```
    Save and exit your text editor.

8. Back on the command line, try running your program again with the command `./lunch Soda`. You should see the new foods listed.

### Common Mistakes / Misconceptions

Greg's Wiki is full of common mistakes (e.g. [why you shouldn't parse ls](http://mywiki.wooledge.org/ParsingLs)).

### Independent Practice
Spend 15 minutes checking out these materials:
- [BashGuide](http://mywiki.wooledge.org/BashGuide)
- [Filenames and Pathnames in Shell: How to do it Correctly](https://www.dwheeler.com/essays/filenames-in-shell.html)
- [An Awk Primer/Awk Command-Line Examples](https://en.wikibooks.org/wiki/An_Awk_Primer/Awk_Command-Line_Examples)
- [I/O Redirection](http://wiki.bash-hackers.org/syntax/redirection)
