# Operating Systems

### Projected Time

30-45 minutes

### Motivation

Whether you interact with it via the command line or through a GUI, the operating system is a crucial and powerful element of your machine. Understanding the fundamentals of what an OS is responsible for, and how, the user, can interact with it, will help you design more sophisticated and efficient applications.

### Objectives

**Participants will be able to:**

-   Describe the role of the operating system on a computer or other device
- 	List several function an operating system performs
- 	Execute commands like Delete and Move using both a GUI and a shell
-		Create an analogy to describe processes, threads, and context-switching

### Specific Things To Teach

-		The relationship between the hardware, the operating system, and (built-in or third party) software
-   The major responsibilities of an OS (program execution, file management, memory management)
- 	Comparisons of executing simple commands (moving a file, launching a program) on GUI vs. CLI

### Materials

-   [Linux Journey](https://linuxjourney.com/)
-   [Linux from Scratch](http://linuxfromscratch.org/lfs/read.html)
-   [Architecture of Windows NT - Wikipedia](https://en.wikipedia.org/wiki/Architecture_of_Windows_NT)
-   [User Mode and Kernel Mode - Technet](https://msdn.microsoft.com/en-us/windows/hardware/drivers/gettingstarted/user-mode-and-kernel-mode)
-   [The 10 Operating System Concepts Software Developers Need to Remember](https://medium.com/cracking-the-data-science-interview/the-10-operating-system-concepts-software-developers-need-to-remember-480d0734d710)
    - This is a peer-written piece. There are some typos and we have no guarantee all the info is correct. However, it provides an excellent overview of the different aspects of computing an os is responsible for.
### Lesson

[Operating Systems (slides)](https://docs.google.com/presentation/d/1lHxgrmb1M58f7ww51_xJT8ZeB0izVfMEeZnSLsH2YmU/edit?usp=sharing)

Complete the Users and Groups section of [Linux Journey](https://linuxjourney.com/)

### Common Mistakes / Misconceptions

- **"If I download a program online, I will be able to run it on my computer."** Not neccesarily. Different operating systems require different pieces of information from executable files in order to compile and run them. Although there are techniques to get around this limitation, in general, a Windows program will not run on a Mac or Linux machine, and vice versa.  


- **"An operating system can only run one process at a time."** This is false

- **"Something about permissions."** One network or machine can have many users. Different users can have different amounts of access.

### Guided Practice

Open Spotlight (`command + spacebar`) and search for Activity Monitor. Press enter when it appears.

One the CPU tab, notice the number of processes and threads currently running. How many do you recognize?

Next, do all of the following using only the terminal.

- Open 2 separate terminal windows
- In one, type `python`
  - This will open a python workspace
  - Enter the following;
    - `i = True`
    - `while i: print(True)`
  - What happens? How can you get it to stop?
    - One option is to interrupt the loop by holding down `control + C`
    - Another option is to terminate the process with the `kill` command

Navigate back to the Activity Monitor. What do you notice? It should be obvious which process is stuck in an infinite loop. Make note of the Process ID number (PID).

In the other terminal window, enter `kill 12345`, replacing 12345 with the Process ID.

If this works, both terminal windows should close. If you don't have permission to execute this command, type `sudo kill 12345` and enter your password.

(Use this moment to remember to always think before you `sudo`.)


- Create a new user.
- Create a new group called `example`.
- Add the new user to `example` group.
- Create a new file.
- Change the ownership of the file so that it belongs to the new user.



Create a user. Add it to some groups. Create a file. Change the ownership and try to do things with it.

### Independent Practice

Class does this thing themselves with specific additional items.

### Challenge

Participants can try to do this other thing.

### Check for Understanding

Have participants summarize to each other, make a cheat sheet, take a quiz, do an assignment, or something else that helps assess their understanding.
