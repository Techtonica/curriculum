# Zsh Profile

### Projected Time

About 1 hour

### Prerequisites

Here are links to lessons that should be completed before this lesson:

- [Command Line Interface](/dev-tools/command-line-interface.md)
- [Command Line Advanced](/dev-tools/command-line-advanced.md)

### Motivation

With knowledge about dot profile, you can customize your computer’s environment.

The *.zshrc*`* file is a personal initialization file for configuring the user environment [(Sample .zshrc file/template)](http://zsh.sourceforge.net/Contrib/startup/std/zshrc).
Below are a few things that make configuring *.zshrc* easier and faster:

- You can create your own shortcuts and use them.
- It gives you more control to change your environment.
- You don't need to remember custom commands, instead you can create shortcuts in your own language and use them instead of actual commands.

### Objectives

**Participants will be able to:**.

- Export environmental variables to make them always available when they open a terminal shell.
- Add a file to the `$PATH` environmental variable.
- Change the terminal prompt
- Create an alias

### Materials
- [Moving to zsh](https://scriptingosx.com/zsh/): online zsh guide and eBook specifically for MacOS.
**Note**: If you did not complete the optional Oh My ZSH challenge from the *Command Line Interface*(/command-line/command-line-interface.md) lesson and plan to make your own customizations, please install Oh My ZSH(https://ohmyz.sh/) first. Oh My ZSH will automatically write its default configurations in *.zshrc* and will possibly overwrite any similar customizations if manual configurations were done first.
You can also refer to the [Moving to zsh](https://scriptingosx.com/2019/06/moving-to-zsh-part-2-configuration-files/) online guide/eBook for more information about the above video tutorials and how to add them to your *.zshrc* file.

**Video tutorials**
The following video tutorials below are the same with zsh, but create these settings by editing the *.zshrc* file.
- [Learn Zsh in 80 Minutes - Oh My Zsh - Command Line Power User](https://www.youtube.com/watch?v=MSPu-lYF-A8)
- [Zsh: Syntax Highlighting, vi-mode, Autocomplete, more](https://youtu.be/eLEo4OQ-cuQ)
- [Command Line Power User](https://commandlinepoweruser.com/): Free online video tutorial course using Zsh.

### Lesson

Apart from having a home directory to create and store files, users need an environment that gives them access to the tools and resources. When a user logs in to a system, the user’s work environment is determined by the initialization files. These initialization files are defined by the user’s startup shell, which can vary depending on the release. The default initialization files in your home directory enable you to customize your working environment.

#### Environmental Variables

Environmental variables are available whenever you open up a terminal shell. Your system
already includes many useful ones. For example `$HOME`.
You can see that it is the path to your user's home directory if you "echo" it. Type

```
echo "$HOME"
```

and you'll see something like `/Users/david`. You can combine the variable with other commands like

```
cd $HOME
```

to change to your home directory. You can add your own environmental variables. Make a directory called scripts in our home directory.

```
mkdir $HOME/scripts
```

. Open `~/.zshrc` and add the following: `export SCRIPTS="$HOME/scripts"`. 
The export command is saying that you want to make `SCRIPTS` available anytime time *.zshrc* file is loaded. Since
*.zshrc* is loaded each time you open up new terminal shell its always available.
Close the shell and open a new terminal shell. 
To use an environmental variable you need to prepend it with the dollar sign. 
Change your directory to scripts using your environmental variable: 

```
cd $SCRIPTS
```

#### The \$PATH Environmental Variable

The PATH environmental variable is a collection of files that are always available without needing to `source`
them directly. Type the follow command and hit enter:

```
echo $PATH
```

You will see a list of paths separated by a colon (you may have different results):`/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin`.
A useful thing to do is add files to your PATH environmental variable so they are available at anytime.

- First let's make simple script inside of `~/scripts` called `hello_world`
- Copy the following:

```
echo "HELLO WORLD"
```

- Next make the file executable:

```
chmod a+x ~/scripts/hello_world
```

- Let's add line to our `.zshrc` file: `export PATH=$PATH:$HOME/scripts`. What this says is that everytime we open
a terminal shell all of the files that are inside of `$HOME/scripts` which is the same as `~/scripts` can be called
from anywhere. 

- Save & open a new Terminal window or `source ~/.zshrc` and type the following to demonstrate:

```
hello_world
```

and you will see HELLO WORLD. It doesn't matter where you are at in
the file system because you've added the file's directory, `scripts` to your path so its always available to you. Lots
of helpful libraries are written using scripts in this way.

#### Aliases

Please refer to (Moving to zsh: Alias and Functions)[https://scriptingosx.com/2019/07/moving-to-zsh-part-4-aliases-and-functions/] for more information.

It's often helpful to make commands for yourself that are short cuts. Zsh aliases allows you to set a shortcut command for a longer command. For example what if you want to change to your directory but you don't want to type `cd ~/scripts`. What if you could just type `cdscr` instead? Aliases can be defined in your *.zshrc* file. 

An alias has the following structure:

`alias [alias_name]="[command_to_alias]"`

A new alias always starts on a new line with the **alias** keyword. You define the shortcut command you want to use with the alias name, followed by an equal sign. In quote you type the full command you want to run. This is illustrated below with the `cd` command being customised to `cdscr`.

Let's make a file called `aliases` in our scripts folder, type the following:

```
alias cdscr='cd "$HOME/scripts"'
```

Next let's add the following to our `~/.zshrc`: 

```
source "$HOME/scripts/aliases"
```

When we type source and a file after it, it's saying, import all of the aliases in our file so we can call them
by name no matter where we are in our file system. That's why we do the same when we make changes to our `.zshrc`. 

When we open a new terminal window after changing our `.zshrc` the system essentiall calls `source .zshrc` before
we do anything. 

Let's test our alias.
- Save & open a new Terminal window or `source ~/.zshrc` 
- type ```cdsrc``` and hit enter. You should now be in `~/scripts`

#### Nano Tool

Nano is a Linux command line text editor. It is relatively easy to learn and use. However, it is entirely operated from the keyboard so you will have to learn some keyboard commands. The good news is that the keyboard commands are pretty quick and easy to learn.
**Things to to take note of when working with nano tool commands:**

- Any command prefixed with the caret symbol(^) means to use the "ctrl" key. For example, **^G** means to press **ctrl+G** keys at he same time.
- Any command prefixed with letter M means to press the Alt key. For example, **M-R** means to press **Alt+r** keys together at the same time.

(Optional) For more detailed info on how to use the nano tool, visit these sites below:

- [Introduction to the nano text editor](https://staffwww.fullcoll.edu/sedwards/Nano/IntroToNano.html)
- [A beginners guide to the nano editor](https://www.lifewire.com/beginners-guide-to-nano-editor-3859002)

#### Change the terminal prompt

You can change the value of your system's environmental files to change how your termimal prompt appears.

The $PS1 variable sets what you see. 
Add the following to your `.zshrc` change what your prompt displays: `export PS1="\u@\h "`

Save & open a new Terminal window or `source ~/.zshrc` to reload this. Notice how the prompt now displays something simliar to `david@Davids-MacBook-Pro` now.

(Optional:) More info on - (Moving to zsh: Customizing the zsh Prompt)[https://scriptingosx.com/2019/07/moving-to-zsh-06-customizing-the-zsh-prompt/].

### Common Mistakes & Misconceptions
Sometimes people think they need to have a different set of files to configure and customize like Bash and other shells. Zsh only requires one file, *.zshrc*, to have all these configurations.

### Independent Practice
[Moving to Zsh](https://scriptingosx.com/2019/06/moving-to-zsh/): A comprehensive guide to Zsh specifically for Mac users from the basics, configuration, to advanced scripting.

### Check for understanding

- How do you export environment variables to make them always available when you open a terminal shell?
- How do you add a file to the `$PATH` environment variable?
- How do you change the terminal prompt?
- How do you create an alias?