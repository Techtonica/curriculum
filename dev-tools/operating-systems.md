# Operating Systems

### Week 2 Keywords and Questions

- What is an operating system? (see slides)
- What operating systems do you know (see slides)
- How does it differ from a “normal program” (such as Word) (see lesson section)
- What is Linux, why do people LOOOOVVVEE it? (see supplemental materials)

### Motivation

Whether you interact with it via the command line or through a GUI, the operating system is a crucial and powerful element of any machine. Understanding what an OS is responsible for and how you can interact with it will help you design more sophisticated and efficient applications.

### Objectives

**Participants will be able to:**

- Describe the role of the operating system on a computer or other device
- List some functions an operating system performs
- Execute commands like Delete and Move using both a GUI and a shell
- Create an analogy to describe processes, threads, and context-switching

### Specific Things to Learn

- The relationship between the hardware, the operating system, and (built-in or third party) software
- The major responsibilities of an OS (program execution, file management, memory management)
- Comparisons of executing simple commands (moving a file, launching a program) on GUI vs. CLI
- The meaning of "process" and "thread" in the context of OSes

### Lesson

- Read through lesson slides [Operating Systems](https://docs.google.com/presentation/d/1lHxgrmb1M58f7ww51_xJT8ZeB0izVfMEeZnSLsH2YmU/edit?usp=sharing)
- [From the Understanding Operating Systems resource in the slides](https://edu.gcfglobal.org/en/computerbasics/understanding-operating-systems/1/#) "Your computer's operating system (OS) manages all of the software and hardware on the computer. Most of the time, there are several different computer programs running at the same time, and they all need to access your computer's central processing unit (CPU), memory, and storage. The operating system coordinates all of this to make sure each program gets what it needs."

### Common Mistakes / Misconceptions

- **"If I download a program online, I will be able to run it on my computer."** Not necessarily. Different operating systems require different pieces of information from executable files in order to compile and run them. Although there are techniques to get around this limitation, in general, a Windows program will not run on a Mac or Linux machine, and vice versa.

- **"A program can only do one thing at a time."** The ability to "multitask" applies to both OSes (which can run multiple processes simultaneously), and the processes themselves, which can create multiple threads that execute different commands simultaneously (from the users' perspective, at least).

### Guided Practice

Open Spotlight (`command + spacebar`) and search for Activity Monitor. Press enter when it appears.

In the CPU tab, notice the number of processes and threads currently running. How many do you recognize?

Next, do all of the following using only the Terminal:

- Open 2 separate Terminal windows
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

### Independent Practice

Read all of the following instructions before starting:

First, save all your work, close all your programs, and restart your computer.

When your computer is back on, re-open the Activity Monitor. How are things different from how they were during the Guided Practice? Are you surprised by anything?

Open Chrome and create a split-screen with the browser and the Activity Monitor. Play around with the browser: look for some cat videos, search for something on eBay, check your email. As you do this, keep an eye on what changes in the Activity Monitor.

Arrange the processes in Activity Monitor alphabetically and navigate to the Google Chrome process.

In a new tab, open the clickbait website `twentytwowords.com`. Watch what happens in the Activity Monitor. Close the tab.

In a new tab, open the notably bare-bones community website `craigslist.org`. Watch what happens in the Activity Monitor. Close the tab.

Think about how the contrast between these two sites might inform the websites you design in the future.

### Challenge

Re-sort the processes in Activity Monitor to 'by CPU%'. You will probably notice processes like "Google Chrome Helper" or "Slack Helper". Pick one of these helper processes and research online to find out what its purpose is.

### Check for Understanding

Pair with another participant who researched a different helper process. Explain to each other what you learned about the process, and discuss how you think affects the efficiency of the overall application.

### Supplemental Materials

- [Linux from Scratch](http://linuxfromscratch.org/lfs/read.html)
- [Architecture of Windows NT - Wikipedia](https://en.wikipedia.org/wiki/Architecture_of_Windows_NT)
- [User Mode and Kernel Mode - Technet](https://msdn.microsoft.com/en-us/windows/hardware/drivers/gettingstarted/user-mode-and-kernel-mode)
- [The 10 Operating System Concepts Software Developers Need to Remember](https://medium.com/cracking-the-data-science-interview/the-10-operating-system-concepts-software-developers-need-to-remember-480d0734d710)
- [Difference Between Process and Thread](https://www.youtube.com/watch?v=O3EyzlZxx3g)
