## Tasks - Open the terminal "shell", this is where you will type the CLI commands that you've used

1. Type "hello world" into your shell. Does anything print? What do you see and why?\
   `$ "hello world" bash: hello world: command not found`
   
3. Type `clear` to remove the previous commands and outputs from your shell screen
4. Create a new directory named "CLI_Practice" using the `mkdir` command.\
  `$ mkdir "CLI_Practice"`

5. Enter the "CLI_Practice" directory using the `cd` command.\
  `$ cd "CLI_Practice"`

6. Use the `pwd` command to marvel at the new path to your directory.\
  `$ pwd /home/runner/Week-2-PP-Command-Line-Interface-Practice/CLI_Practice`

7. Use the `ls` command to print the contents of your new directory. What do you see?\
  `nothing outputs`

8. Create a new text file named "notes.txt" using the `touch` command.\
  `$ touch "notes.txt"`

9. Write a simple note inside "notes.txt" using the command line.\
  ```
  $ vim "notes.txt"
  > select vim.out "hello world" :wq
  ```

10. Inside "CLI_Practice," create three subdirectories: "Folder_A," "Folder_B," and "Folder_C".\
  `$ mkdir "Folder_A" "Folder_B" "Folder_C"`

11. Navigate into "Folder_A".\
  `$ cd Folder_A`

12. Create a new text file named "file_a.txt".\
  `$ touch file_a.txt`

13. Copy "file_a.txt" to "Folder_B" using the `cp` command.\
  `$ cp file_a.txt ../Folder_B`

14. Move "file_a.txt" to "Folder_C" using the `mv` command.\
  `$ mv file_a.txt ../Folder_C`

15. Delete "Folder_A" and its contents using the `rm -rf` command.\
  `$ cd .. $ rm -rf Folder_A`

16. Print the contents of the folder to show that "Folder_A" has been removed.\
  ```
  $ ls
  Folder_B Folder_C notes.txt
  ```
