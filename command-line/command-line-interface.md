# Command Line Interface

### Project Time

About 1 hour
- 25 minutes for video walkthrough of slides
- 20 minutes for Independent Practice
- 15 minutes for Check for Understanding

### Prerequisites
- "How to Pair Program" lesson

### Motivation

For the layperson, who usually only opens and uses applications on their computer (MS Word, Internet, games, etc.) there isn't much need to use the Command Line. They can simply click on icons located on their Desktop or Dock. But for software engineers, who frequently interact with and send commands to the machinery inside their computers, the Command Line is a much more efficient way of using the computer's many capabilities. Even junior software engineers are expected to be proficient in using the Command Line for a variety of simple and intermediate tasks.

### Objective

**Students will be able to**
- Create a directory
- Navigate to a directory
- Add a file to this directory
- Change the name of the file
- Copy a file to a directory

### Supplemental Materials

- [BashGuide](http://mywiki.wooledge.org/BashGuide)
- [Filenames and Pathnames in Shell: How to do it Correctly](https://www.dwheeler.com/essays/filenames-in-shell.html)

### Mini Lesson

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

- **"I have always just download everything I need with my mouse. I don't need to use command line interface."** As you continue on your path to programming, you will learn new languages and tools. There are some tools out there that can only be access via CLI, and you may need to use it for your language or your work environment. One example is NPM, a tool that is use by almost every JavaScript developer.

- **"I am afriad of getting into the wrong directory. Isn't it easier to just click and type? "** In the coming practice, you will learn about common commands like `ls` and `pwd` that will allow you to check your directory. Once you get into the habit of using CLI, you can quickly navigate through files and directories without leaving the keyboard, greatly increasing your speed and efficiencies.

- **"But what if I accidentally got into important directories or files that can affect my computer's operations? "** Most files and directories related to computer operation are protected by sets of safe guard. They could be hidden or have higher permission settings. Hidden files, for example, have a dot in front of them (".ssh") and you can't see them unless you use certain commands or change your computer settings. Therefore, to edit such files and directories, you will have to take additional steps. If you are accessing hidden files or asked to override permissions, and you don't know why you are doing it, feel free to check with the instructor.


### Independent Practice

1. Create a directory named "foo". Use `cd foo` to navigate into "foo" and create another directory named "bar".

2. Run `cd bar`. What directory are you in now? Check by running `pwd`.

3. Run `cd ../`. What directory do you think you are in now? Check by running `pwd`.

4. Navigate back to bar directory and run `touch first.txt` and `touch ../second.txt`. You have not `cd` into foo directory, but your second command contained `../`. Could you guess where second.txt is located?

5. Check your answer by running `ls` inside both foo and bar directory. The second.txt should be inside foo directory.

6. Navigate into the bar directory. Run `cp first.txt ../`. Use `ls` and check both directory have a first.txt.

7. Navigate back into the foo directory. Run `mv second.txt foofile.txt`, then run `ls`. What happened to the second.txt?


### Challenge

Run `ls -l` command in the foo directory and compare it to the outcome of just `ls`. The output from `ls -l` shows a difference between directory and file - can you spot it?

Next, run `man ls`. Scroll to the bolded title "The Long Format". The first few paragraphs talks about what "-l" displays. Look for the one that starts with "The file mode...". Read it and see if your guess is correct.

Scroll through the manual and see if you can get an idea of what the format of a manual is typically like. Feel free to check out the manual for some of the command inside "List of basic Terminal commands" above. Whenever you are done, type `q` to exit.

### Check for Understanding
