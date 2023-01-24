# Advanced Command Line
# Note: I do not expect you to remember or fully understand all of these commands right now. I just want you to get exposed to the power of the command line and see what is possible. Feel free to skim this material but don't worry about a deep dive right now.

### Week 2 Keywords and Questions

- How do I move into a directory? (aka Change Directory)
- How do I go up a directory level?
- How do I go to my root directory?
- How do I make a new directory?
- How do I make a new file?
- How do I check what version of a program I am using?
- What do the following do: grep, |, history, ls -a


### Prerequisites

[Basic command line](command-line-interface.md).

### Motivation

Teach people some handier tools for advanced file searching and processing. The Command Line makes work easier for developers.

Front-end development is web development, and the web has a strong bias towards Linux. The structure of URLs reflects this: they use the forward slash character because it corresponds to the Linux directory separator (as opposed to Windows’ backslash). Even if you develop completely in a stack like .NET or IBM Java, you’ll have to deal with that Linux bias once you start working with the frameworks and libraries that front-end now requires. Having CLI fluency within Windows through a tool like Git BASH or PowerShell makes a huge difference.[(Importance of command line interface by elias)](https://medium.com/@eliascarlston/the-importance-of-the-command-line-interface-36f8f520a656)

### Objectives

**Participants will be able to:**

- Find files.
- Find the commands they've used before.
- Parse file contents with sed and awk.
- Modify the command prompt info.
- Redirect input and output streams

### Specific Things to Learn

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

- [A User's Guide to the Z Shell](http://zsh.sourceforge.net/Guide/zshguide.html)
- [Filenames and Pathnames in Shell: How to do it Correctly](https://www.dwheeler.com/essays/filenames-in-shell.html)
- [An Awk Primer/Awk Command-Line Examples](https://en.wikibooks.org/wiki/An_Awk_Primer/Awk_Command-Line_Examples)
- [Input/Output Redirection in the Shell (Bash and zsh)](https://thoughtbot.com/blog/input-output-redirection-in-the-shell)

**Video Tutorials**

- [Learn Zsh in 80 Mins (Oh My ZSH)](https://www.youtube.com/watch?v=MSPu-lYF-A8)
- [Apropos command (3 min)](https://www.youtube.com/watch?v=jxQzuha8TbU)
- [Pushd & Popd command (2 min)](https://www.youtube.com/watch?v=CdWazJlfue8)
- [Xargs command (6 min)](https://www.youtube.com/watch?v=zcHGcIu_65k)
- [Filtering Output and Finding Things (8 min)](https://www.youtube.com/watch?v=nLa6jAbULe8): Covers command cut, &&, sort, uniq, wc, grep commands.
  - 0:59 && operator
  - 3:34 cut command
  - 4:28 sort command
  - 4:59 uniq command
  - 5:20 wc command
  - 5:40 grep command
- [Intermediate Commands (55 min)](https://www.youtube.com/watch?v=yCTnihfbPCo): Covers command grep, sed, awk, tar, less, gzip commands.
  - 1:25 grep command
  - 6:14 Piping output into commands
  - 9:36 sed and awk Commands
  - 17:42 awk Command
  - 30:21 less Command
  - 35:46 find / exec Command
  - 47:55 gzip, gunzip, tar Commands
- [Advanced Commands (22 min)](https://www.youtube.com/watch?v=NodKFuUocQY): Covers command aliases, whereis, service, passwd, df, du, wget, who,ping,shutdown commands
  - 1:46 aliases command
  - 7:32 whereis command
  - 8:45 about service
  - 10:38 service command
  - 12:55 df command
  - 13:40 du command
  - 15:03 passwd command
  - 16:15 wget command
  - 17:38 who command
  - 18:45 ping command
  - 20:05 shutdown command

### Lesson

- Tabs - contents, and relation to each other

  - Just like a browser, Mac Terminal supports multiple tabs to do multiple things at once. Each tab is running a separate zsh process.
  - Cmd + T to open a new tab.
  - Cmd + N to open a new window. You can have many tabs in many windows!

- Command line options

  - Programs can use long and/or short options.
  - Long options use two dashes, like `--verbose`.
  - Short options use one dash, like `-l`.

- Search with `grep`

  - Show files containing the word important in this directory

    ```sh
    grep -l important *
    grep --files-with-matches important *
    ```

- Piping commands together

  - You can chain commands using the pipe operator, `|`, located above your return key (to get to the pipe `|`, press shift and `\`). Commands connected by pipes are run in order from left to right. The output of the first command gets "piped" or fed into the next command, which is run, and then the output of that is piped into the next command, and so forth.
  - Example: the command on the third line below will print all text files (`cat *.txt`), searching for only lines containing "error" (`grep error`), and print a count of those lines(`wc -l`). Try these commands and watch how the output changes:

    ```sh
    cat *.txt
    cat *.txt | grep error
    cat *.txt | grep error | wc -l
    ```

    Hint: don't forget you can always use `man` to discover more about `wc` and other commands.

- Searching for a file with `find`

  - Let's say we remember part of the path of a file but nothing else. We can use find like so (remember to `man find` on your own if you want to learn more):
    ```sh
    find / -path "*part/you/recall*"
    ```

- History

  - The history of commands you've executed in your shell can be accessed using the `history` command. `history` will print out a long list. To narrow your search, use `grep` with history. Example:

    ```sh
    history|grep cat
    ```

  - There is a shortcut to search backward through history and place it on your current command prompt (so it's different from `history` because it doesn't output anything). To do this, type Ctrl+R (in your Mac Terminal), and you will see the command prompt change to `(reverse-i-search)`. Here, type a string like `cat`, and it will autocomplete and turn into a previous command that you typed that contained the letters `cat`. When you find the one you want to execute, press return and it'll execute the command as if you took the time to type out the whole command again.

- Writing the output of a command to a file

  - We can add text to a file from the command line without even opening up a text editor.
  - This is also useful for saving the long output of some useful command into a file so I can reference it later.
  - Write output to a file with `>`. `>` takes the output of whatever is before the `>` and writes it directly into the filename provided after the `>`. Caution: `>` will overwrite the entire previous contents of that file, if any. Some call this the "shovel operator," because it looks like a shovel, and you're shoveling text into a file.
  - `>>` is similar, except it appends text to the end of the file (instead of overwriting the entire file). Some call this the double shovel operator.

- Permissions

  - View permissions of all files in a directory by using `ls` with two short options, `a` and `l`, like so:
    ```sh
    ls -al
    ```
    The permissions will show up on the left of each file listing as a series of user/group/ other bit masks.

- The `which` command

  - See what version of a program is in use. You'll see the full path to the location of the program's executable.
    ```sh
    which ls
    which python
    which git
    ```

- Special characters
  - Some special characters must be treated differently to use literally.
  - `&` is a special character. It must be quoted if you're going to use it in a string.
  - Quotes within quotes (specifically, quotes that you're using as part of your text within quotes you're using to tell the command line that you're making a string) need to be marked as "not the set of quotes that will mark the end of the string." This process is called "escaping", as in "don't forget to escape these characters." On the command line, the escape character is `\`, and you use it by placing it immediately before the character you need to escape.
    ```sh
    echo "My name is \"Lin\""
    ```
    would produce the output `My name is "Lin"`.

#### List of basic commands

    - find - find files
    - grep - find things inside files
    - cut - remove sections from each line of files
    - tr - translate, squeeze, and/or delete characters from standard input, writing to standard output
    - alias - allow a string to be substituted for a word when it is used as the first word of a simple command
    - export - export/set a new environment variable
    - xargs - execute arguments

#### List of advanced commands

    - echo - print some arguments
    - pushd - push directory
    - popd - pop directory
    - env - look at your environment
    - export - export/set a new environment variable
    - find - find files
    - wc - wordcount (word & line count)
    - sort - sort data
    - cut - remove sections from each line of files
    - hostname - my computer’s network name
    - xargs - execute arguments
    - sudo - become a super user root (DANGER - only use when necessary)
    - chmod - change permission modifiers
    - chown -  change ownership
    - apropos - find what man page is appropriate
    - awk - pattern-directed scanning and processing language
    - sed - stream editor for filtering and transforming text

Go through the video tutorials mentioned in the Materials section.

### Guided Practice

This lesson helps you create an executable script. It will read information from the user in several ways: from an argument passed to the program, from a file, and from an environment variable.

1. Open Terminal.

2. Create a small file with the filename 'lunch' (not lunch.txt) by typing `touch lunch`.

3. Using a text editor of your choice, modify the contents of this brand-new `lunch` file so that it contains the following text:

   ```sh
   lunch=$1
   echo $lunch is for lunch
   ```

   `$1` refers to the first argument a user will pass into the lunch program.
   Save the file and, if you're using a command line text editor, exit it.

4. Return to the command line. Make sure you're in the directory that `lunch` is in. Make the file `lunch` into an executable file by running this command:

   ```sh
   chmod a+x lunch
   ```

5. Run your new tiny program on the command line by typing the filename preceded by `./`

   First, try running it with no arguments.

   ```sh
   ./lunch
   ```

   You will see nothing for lunch because we haven't specified any arguments yet. Try running your program again, but pass in the argument `Soda`, like so:

   ```sh
   ./lunch Soda
   ```

   You should see that Soda is for lunch!

6. Now create a file containing some foods. This time we're going to add text to it without using any text editors (either command line or graphical) by using the shovel operators we talked about above. The first command has double quotes because `&` is a special character. Enter these commands one at a time in your command line:

   ```sh
   echo "mac & cheese" > foods.txt
   echo dim sum >> foods.txt
   echo an apple >> foods.txt
   ```

   After this, type `cat foods.txt` into your command line to check the contents of your new `foods.txt` file.

7. Edit `lunch` by adding these two new lines to the bottom, so the file ends up looking like this:

   ```sh
   lunch=$1
   echo $lunch is for lunch
   echo We also offer:
   cat foods.txt
   ```

   Save and exit your text editor.

8. Back on the command line, try running your program again with the command `./lunch Soda`. You should see the new foods listed.

### Common Mistakes / Misconceptions

Greg's Wiki is full of common mistakes (e.g. [why you shouldn't parse ls](http://mywiki.wooledge.org/ParsingLs)).

### Installing Homebrew

Now you know how to move using your command line, let's get deep into [Homebrew](https://brew.sh/). It's a package manager for masOS or Linux which provides a simple way to install programs or tools, similar to an app store for CLI.

Before getting started, check that the following requirements are fullfilled:
|macOS |Linux |
|------------------|-------------|
|**64-bit Intel** CPU | **64-bit x86_64** CPU |
| Compatible shell (`.bash` or **zsh**)| **GCC** 4.7.0 or newer |
|**macOS** 10.13 or newer|**Linux** 2.6.32 or newer|
|Command Line Tools for [Xcode](https://apps.apple.com/us/app/xcode/id497799835)|**Glibc** 2.13 or newer|

Then, installation will take three steps:

1. Open a macOS Terminal or Linux shell prompt.
2. Run the install script :

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

3. Verify your installation checking its version: `brew --version`. If no errors appear, everything went perfectly.
   For further details, visit [Homebrew installation page](https://docs.brew.sh/Installation).
4. Finally, run `brew doctor` which will check your system for potential problems.

#### Applications

Now that it's installed, prompt can be used to manage the packages we need:

```sh
brew install package-name
```

And `package-name` can be any package from the [listing](https://formulae.brew.sh/formula/) that Homebrew provides. Let's see an example of how to install `wget`: `brew install wget`

After that, to check that it has been properly installed, we can verify that the version of the package installed matches with the one provided in the [listing](https://formulae.brew.sh/formula/).

```sh
wget --version
```

### Independent Practice

Spend 15 minutes checking out these materials:

- [A User's Guide to the Z-Shell](http://zsh.sourceforge.net/Guide/zshguide.html)
- [Filenames and Pathnames in Shell: How to do it Correctly](https://www.dwheeler.com/essays/filenames-in-shell.html)
- [Input/Output Redirection in the Shell (Bash and zsh)](https://thoughtbot.com/blog/input-output-redirection-in-the-shell)

### Challenge with Homebrew

Try to install other optional utility using Homebrew, for example `tree` .

### Challenge with `Awk` Command

Taken from this page: (Go to view answers)[An Awk Primer/Awk Command-Line Examples](https://en.wikibooks.org/wiki/An_Awk_Primer/Awk_Command-Line_Examples)

Copy the following text, which lists coins that have been minted, into a file, and names it coins.txt. Then save it onto your desktop. Then make sure you're in the directory that contains the folder (in this case, your desktop), by typing `cd ~/Desktop` into your terminal.

```sh
gold     1    1986  USA                 American Eagle
gold     1    1908  Austria-Hungary     Franz Josef 100 Korona
silver  10    1981  USA                 ingot
gold     1    1984  Switzerland         ingot
gold     1    1979  RSA                 Krugerrand
gold     0.5  1981  RSA                 Krugerrand
gold     0.1  1986  PRC                 Panda
silver   1    1986  USA                 Liberty dollar
gold     0.25 1986  USA                 Liberty 5-dollar piece
silver   0.5  1986  USA                 Liberty 50-cent piece
silver   1    1987  USA                 Constitution dollar
gold     0.25 1987  USA                 Constitution 5-dollar piece
gold     1    1988  Canada              Maple Leaf
```

The columns are:
metal,
weight in ounces,
date minted,
country of origin,
description,

- First, use `grep` to find all the lines that start with "gold".
- Now, use `awk` to do the same thing.
- Now, use `awk` to only print the country of origin for all of the "gold" metals listed (Hint: using `$` followed by a number, refers to the corresponding word on that line. e.g. `$1` references the first word of a line, and \$2 )
- Now, use `awk` to print all of the coins that have been minted before 1980.
- Continue to do the rest of the guided practice with this link, including the practice at the end: [An Awk Primer/Awk Command-Line Examples](https://en.wikibooks.org/wiki/An_Awk_Primer/Awk_Command-Line_Examples)

### Challenge with `sed`

Read through this `sed` introduction: [sed Introduction and Tutorial](http://www.grymoire.com/Unix/Sed.html#uh-10a).
Then try this hacker rank problem: [Sed challenge #1](https://www.hackerrank.com/challenges/text-processing-in-linux-the-sed-command-1/problem)

