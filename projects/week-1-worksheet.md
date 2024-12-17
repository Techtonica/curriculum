# Project 0 - Week 1 Worksheet

### Prerequisites

Here are links to a lesson that should be completed before this lesson:

- [Zsh Profile](https://github.com/Techtonica/curriculum/blob/main/dev-tools/dot-profile.md)

### Overview

- Demonstrate your knowledge from week 1 by answering questions using vim on the command line.

### Languages

- zsh

### Tools

- vim

### Skills

- Zsh profile manipulation
- Professionalism
- Learning How to Learn
- Operating Systems
- Asking Good Questions
- Networking
- Interpersonal Conflict Resolution

## Project Instructions

### Part 0 - Suggested Reading

- [Environment Variables](https://linuxhint.com/set-environment-variable-zsh/): For help with part 1.
- [The Path Variable](https://janelbrandon.medium.com/understanding-the-path-variable-6eae0936e976): For help with part 1.
- [Creating Aliases](https://www.tecmint.com/create-alias-in-linux/): For help with part 1.
- [Customizing the ZSH prompt](https://linuxhint.com/change-zsh-prompt-name/): For help with part 1.
- [A basic intro to vim](https://linuxfoundation.org/blog/classic-sysadmin-vim-101-a-beginners-guide-to-vim/): For help with part 3.
- [Zsh vs Bash](https://www.educba.com/zsh-vs-bash/): For help with part 2.
- [Basic shell commands](https://www.geeksforgeeks.org/basic-shell-commands-in-linux/): For help with part 2.

### Part 1 - change your zsh profile

To help you get started, create an empty `.zshrc` file in your home directory like this:

    touch ~/.zshrc

You can add a definition for a single environment variable like this:

    echo "HELLO=WORLD" >> ~/.zshrc

And then apply the changes from your .zshrc with:

    source ~/.zshrc

Test the changes worked by checking the contents of the HELLO variable in your shell with:

    echo $HELLO
    WORLD

The value should be "WORLD". If you do not see the same output as above, retry
the steps and/or ask for help before trying the following steps below.

You should be using vim or another editor to edit your `.zshrc` file as you go.
If you want to use vim, see the references in Part 0 with an intro to vim
commands. If you do use vim, you can open `.zshrc` in vim from a terminal with
`vim ~/.zshrc` and proceed from there!

Make sure you have added at least one of each:

- [ ] a custom environment variable
- [ ] a new file to the \$PATH environmental variable
- [ ] a new terminal prompt
- [ ] a new alias

In your terminal, use the commands to prove your environment variable, \$PATH
file, and alias work. Make sure those lines and your custom prompt are in the
terminal window at the same time, and save a screen shot of it to show your
work.

### Part 2 - Set up a text file using only zsh and vim

- [ ] Use zsh to rename your screenshot 'name-zsh-profile.png', replacing 'name' with your first name.
- [ ] Use zsh to make a file called name-week-1-worksheet.txt, replacing 'name' with your name.
- [ ] Use only the vim editor to answer the following questions in your new file.

### Part 3 - Questions - Please answer each question in one or a few sentences.

1. How do you plan on exhibiting professionalism at Techtonica? What would be different in a full-time engineering job setting?
1. What would you do if you just found out you are going to be an hour late tomorrow morning?
1. What would you do if you realized that you only had time to finish most of your work by the due date of a group project?
1. Knowing yourself, what are the most effective ways for you to learn and retain new information?
1. What is growth mindset?
1. Which operating system are you using right now? Name two other popular operating systems.
1. Why do computers need operating systems?
1. Explain what you would do if you felt stuck on a coding problem.
1. Describe the ways you plan on meeting and staying connected with new people in tech this month.
1. Describe some examples of effective body language and what is communicated when they are used well.
1. Describe some examples of effective word choice and what is communicated when they are used well.
1. How can you build trust in a team?
1. How are the devices on the internet physically connected to each other?
1. How is information physically transmitted from device to device?
1. How does one device find another it’s trying to communicate with?
1. What methods do devices on the internet use to communicate?
1. How can we send data reliably even if the network is unreliable?

### Notes

- _zsh vs bash_: For a long time bash was the default shell on macs. As of
  MacOS Catalina, Apple [switched their default shell from Bash to
  Zsh](https://eshop.macsales.com/blog/56921-moving-from-bash-to-zsh-terminal-changes-in-macos-catalina/).
  This means you may see older resources which still refer to the shell in
  general as bash even though now on mac you will by default use Zsh. Most of the
  time this doesn't make a big difference but sometimes the distinction is
  important. For example if you want to set enviornment variables, an alias or a
  terminal prompt change for every time you start a new shell, you will need to
  do it in the `.zshrc` file not the `.bashrc` file because you are using zsh and
  not bash. See the suggested reading for more info.
