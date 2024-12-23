# Command Line Interface

### Week 2 Keywords and Questions

(see slides and basic terminal commands list)

- How do I move into a directory? (aka Change Directory)
- How do I go up a directory level?
- How do I go to my root directory?
- How do I make a new directory?
- How do I make a new file?
- How do I check what version of a program I am using?
- What do the following do: grep, |, history, ls -a

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

- Note: The dollar sign at the start of the line is not part of the command. It signifies to developers that what follows a command. Copying and pasting this whole line with the dollar sign into your Terminal and pressing Enter will not run the command.

### Installation and Setting Up zsh

If you recently purchased a Mac with the latest operating system, **Catalina**, _zsh_ is already installed by default. You can check your current default shell by entering the command below:

```
echo $SHELL
```

If the result turns out to be `/bin/zsh`, then you already have _zsh_ set as your default shell. If not, you can change your default shell using the `chsh` command:

```
chsh -s /bin/zsh
```

When prompted, enter your password. Log off your terminal and log back on for the changes to apply.

If you do not have _zsh_ installed yet, you can install it using Homebrew.

If you have [Homebrew](http://brew.sh/) installed, use this command:

```
brew install zsh
```

#### Installing Homebrew

Enter the following command in the terminal

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

The Homebrew installation script will ask you to enter your Mac user password. Press enter when you are done.
It takes a few minutes to install.

On Apple Silicon machines, there's one more step. Homebrew shows instructions at the end of the installation process:

```
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
    eval "$(/opt/homebrew/bin/brew shellenv)"
```

You can also check that Homebrew is installed by accessing their help section:

```
brew help
```

### Objectives

**Participants will be able to:**

- Create a directory and files
- Navigate to a directory
- Change the name of the file
- Copy a file to a directory

### Lesson

Video walkthrough of lesson slides: [Command Line Interface](https://drive.google.com/file/d/1R_H4_eENABgTmZHFT46eKA9NC8qx_ijP/view?usp=sharing)

- Please watch the video once without working along with the demonstration. Just absorb the concepts. Then, you can watch the demonstration a second time and code with the instructor if you like.

Read through lesson slides: [Command Line Interface](https://docs.google.com/presentation/d/1INKaWqRQy79seTNmRUT444e0jSDbog8NB0maeCQoGm4/edit?usp=sharing)

### Accessing the Command Line ("Terminal")

1. Hold down the `COMMAND` key and press the spacebar once. This opens the OSX launcher, Spotlight.
2. When the search bar appears, type "terminal" and press `ENTER` to launch the Terminal app.
3. The Terminal appears as a new window on the desktop and an icon in the dock.

### List of basic Terminal commands

    man - read a manual page
    apropos - find what man page is appropriate
    pwd - print working directory
    cd - change directory
    echo - print some arguments
    ls - list directory
    find - find files
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

### A note about naming files and folders

```
helloThisIsCamelCase becauseCamelsHaveHumps
this_is_snake_case there_are_snake_friends_between_words
this-is-kebab-case it-looks-like-the-words-are-stuck-on-kebabs
```

We use camelCase in JavaScript!
We tend to use snake_case.html for filenames on Unix & Linux systems.
We tend to use kebab-case for directory (folder) names and git repository names.

### Independent Practice

1. Navigate to your Desktop. Create a directory named "foo". Use `cd foo` to navigate into "foo" and create another directory named "bar".

2. Run `cd bar`. What directory are you in now? Check by running `pwd`.

3. Run `cd ../`. What directory do you think you are in now? Check by running `pwd`.

4. Navigate back to the "bar" directory and run `touch first.txt` and `touch ../second.txt`. You have not `cd`'d into the "foo" directory, but your second command contained `../`. Can you guess where `second.txt` is located?

5. Check your answer by running `ls` inside both the "foo" and the "bar" directory. The `second.txt` file should be inside the "foo" directory.

6. Navigate into the "bar" directory. Run `cp first.txt ../`. Use `ls` and make sure both directories have a `first.txt` file.

7. Navigate back into the "foo" directory. Run `mv second.txt foofile.txt`, then run `ls`. What happened to "second.txt"?

8. Use `TAB key` to autocomplete the names of directories and files while in the command line faster as it'll autocomplete the string as far as it can before you have to disambiguate.
   Hit the tab twice to see the list of **autocomplete possibilities** (if multiple matches).

9. The root directory is the directory that contains all other directories and files on the system and which is designated by a forward slash ( / ). Root is the very top directory of the directory tree diagram.
   The root directory of a GitHub project is the top-most directory of your Git project which contains all the files hosted on GitHub.

10. You can immediately open whatever folder or directory you are working within into the Finder of MacOS and Mac OS X by simply typing `open .` and executing it  
    `open` is not magically connected to Mac's Finder, it's just using whatever default program on your Mac opens a file with that extension, and in the case of directories, the default program is Finder.

11. Another Mac shortcut `cmd+ shift+ g` can be used anywhere you see a Finder window (even in other Mac programs such as SourceTree or VSCode when you're opening a file or directory). This brings up a little text box into which you can type or paste a path. Use `pwd` to get your current path, then copy it from the terminal and open up SourceTree, go to file > open, then use `cmd + shift + g` to paste in the path you want.

12. `ls` command is used to peek into other folders.
    The list of ls arguments are
    `ls -l` : shows file or directory, size, modified date and time, file or folder name and owner of the file and its permission.
    `ls -a` : lists all the files including hidden files.
    `ls -lh`: shows sizes in a human-readable format.

### cd commands

1. To navigate to your home directory, use "cd" or `cd ~`
2. To navigate up one directory level, use `cd ..`
3. To navigate to the previous directory (or back), use `cd -`
4. To navigate into the root directory, use `cd /`
5. To navigate through multiple levels of directory at once, specify the full directory path that you want to go to. For example, use `cd ~/OFGT-data/images` to go directly to the images subdirectory in the OFGT-data folder. As another example, `cd ~/Desktop` will move you to the Desktop subdirectory inside your home directory.

### Absolute Path vs Relative Path

#### **absolute path**

1. Start at the root directory ( / ) and work down.
2. Write a slash ( / ) after every directory name (last one is optional)
   For Example:
   `cat /home/kt/abc.sql`

#### **relative path**

1. Relative path is defined as the path related to the present working directly(pwd).
2. It starts at your current directory and never starts with a ( / ).
   Example:
   ```
   $pwd
      /home/kt
      $cd abc
   ```

### Challenge

Run the `ls -l` command in the "foo" directory and compare it to the outcome of just running the `ls` command. The output from `ls -l` is different -- how?

Next, run `man ls`. Scroll to the bolded title "The Long Format". The first few paragraphs talk about what `-l` displays. Look for the one that starts with "The file mode...". Read it and see if your guess is correct.

Scroll through the manual and see if you can get an idea of what the format of a manual is typically like. Feel free to check out the manual for some of the commands above. Whenever you are done, type `q` to exit.

[Click here to learn more advanced commands](./command-line-advanced.md).

#### Configure your Terminal with Oh My ZSH (Optional)

[Oh My ZSH](https://ohmyz.sh/) is a framework created specifically for configuring and customizing _zsh_. You can download a variety of plugins and themes to customize the look and efficiency of your Terminal. Please follow the guidelines [here](https://github.com/ohmyzsh/ohmyzsh) on how to set up and install Oh My ZSH.

You can also use the complete [Oh My ZSH Wiki](https://github.com/ohmyzsh/ohmyzsh/wiki) on how to customize and configure your Terminal further.

In some cases, you may see mentions and suggestions to download and use third-party CLIs such as `iTerm` (or `cygwin` for Windows PC users) instead of the default Terminal installed in your system. On the list of themes in Oh My ZSH, some of them will require these third-party CLIs in order to make these themes work. For the sake of this course, we will stick to the default Terminal. Please be sure to choose a theme on the list that is compatible with all CLIs.

### Check for Understanding

- Why is Command Line Interface used?
- Mention some Terminal Commands along with their use.
- Which key is used to autocomplete the names of directories and files?
- What is a root directory?
- Differentiate between Absolute and Relative path.

### Supplemental Materials

- [Install Homebrew on Mac](https://mac.install.guide/homebrew/3.html)
- [A Guide for Upgrading macOS Catalina and Migrating the Default Shell from Bash to zsh](https://dev.to/saltyshiomix/a-guide-for-upgrading-macos-to-catalina-and-migrating-the-default-shell-from-bash-to-zsh-4ep3)
- [Lifehacker's intro command line article](http://lifehacker.com/5633909/who-needs-a-mouse-learn-to-use-the-command-line-for-almost-anything)
- [Getting Started with zsh](https://opensource.com/article/19/9/getting-started-zsh)
- [10 Zsh Tips & Tricks: Configuration, Customization & Usage](https://www.sitepoint.com/zsh-tips-tricks/)
- [Jazz Up Your zsh Terminal In Seven Steps - A Visual Guide](https://www.freecodecamp.org/news/jazz-up-your-zsh-terminal-in-seven-steps-a-visual-guide-e81a8fd59a38/)
- [Learning ZSH](https://riptutorial.com/Download/zsh.pdf) - eBook which also includes _Oh My ZSH_ and other useful ZSH features.
- [Bash vs. zsh: A Comparison of two command line shells](https://sunlightmedia.org/bash-vs-zsh/) - General comparisons and differences between Bash and zsh.
- [Filenames and Pathnames in Shell: How to do it Correctly](https://www.dwheeler.com/essays/filenames-in-shell.html)
- [Command Line Power User](https://commandlinepoweruser.com) - A free command line course using _zsh_ and other _zsh_-related tools.
- Kiddle, Oliver, Peek, Jerry, and Stepheson, Peter. _From Bash to Z Shell: Conquering the Command Line_. Apress, 2005.
- Kissel, Joe. _Take Control of The Mac Command Line With Terminal_, Third Edition. alt concepts inc, 2020.
