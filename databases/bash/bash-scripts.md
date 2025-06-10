# Bash Scripts

### Prerequisites

- Previous usage of command line on Terminal

### Motivation

A bash script is a file that contains a series of commands, which can be commands that one could normally type in the command line or terminal. Bash scripts are a great way to automate a series of tasks.

### Try it out!

Run the `sample_bash_script.sh`! You may get a "Permission denied" and need to grant permission via a `chmod` command.

```sh
# from the directory where the script is:
user@bash: ./sample_bash_script.sh
-bash: ./sample_bash_script.sh: Permission denied
user@bash: chmod +rwx ./sample_bash_script.sh
user@bash: ./sample_bash_script.sh
```

### Resources:

- [Bash Scripting Tutorial](https://ryanstutorials.net/bash-scripting-tutorial/)

### Objectives

**Write a setup and teardown script for your project's database.**
During development of a project or app, it's common to need to rebuild or wipe your database - whether you need to change the schema, reload the data, or just start with a fresh database, scripts can be great developer tools to quickly automate this process.

If you have postgres with command line interface installed (try typing `psql --help` in your terminal to check) ry out the sample scripts if you have postgres on your computer - you may need to change postgres username:

```sh
# from the directory where the scripts are:
user@bash: ./create_db_sample.sh
user@bash: chmod +rwx ./create_db_sample.sh  # if 'Permission denied'
user@bash: ./teardown_db_sample.sh
```

One can also create `.sql` files and run them via command line or within an application. Try out the `create_db_sample.sql` file that does the same as the `create_db_sample.sh`, but can be used with many SQL implementations.

Postgres: `psql -U postgres --file=create_db_sample.sql`
MySQL: `mysql -u username -p password database_name < create_db_sample.sql`
