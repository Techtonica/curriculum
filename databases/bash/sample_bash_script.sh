#!/bin/bash
set -e # Flag causes script to exit if there's an error


# The `echo` statement is like print
echo Hello World!

# Shell scripts can perform multiple command line operations exactly as if they were typed in terminal
echo Print working directory:
pwd

# One can also use variables in shell scripts denoted by $, and read in variables
echo "Enter your name:"
read name
echo "Hello, $name"
