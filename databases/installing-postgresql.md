# PostgreSQL Installation

## Projected Time

15 minutes

## Objectives

**Participants will be able to:**

- Use PostgreSQL from the command line (`psql`) and, optionally, a GUI admin app

### **Install PostgreSQL on Mac with Homebrew**

#### Step 1: Install Homebrew

Previously we have installed [Homebrew](/dev-tools/command-line-interface.md#installing-homebrew), if not follow the [instruction on Homebrew site](https://brew.sh/)

Run the following two commands to make sure that Homebrew installation is healthy, and up to date:

```bash
 brew doctor
 brew update
```

#### Step 2: Install postgresql

```bash
brew install postgresql
```

Check the version of PostgreSQL using this command

```bash
psql --version
```

#### Step 3: Start the Postgres service

You can start PostgreSQL services with this command:

```bash
brew services start postgresql
```

To test that it works, we can create the default database:

```bash
createdb `whoami`
```

---

Note: If you get any error like this `createdb: error: connection to server on socket "/tmp/.s.PGSQL.5432" failed: No such file or directory` try this command

```bash
rm -rf /usr/local/var/postgres
initdb /usr/local/var/postgres -E utf8
```

---

**To stop PostgreSQL run**

```bash
brew services stop postgres
```

**To restart PostgreSQL**

```bash
brew services restart postgres
```

#### Step 4: Login to PostgreSQL database

```bash
 psql postgres
```

You will see the following output

```bash
$  psql postgres
psql (14.1)
Type "help" for help.

postgres=#
```

Congratulation now you have successfully login to the postgres. Try some of the commands

| Commands              | Description                                                     |
| --------------------- | --------------------------------------------------------------- |
| \du                   | to list all the users                                           |
| \l                    | to list all the databases                                       |
| CREATE DATABASE mydb; | to create a database. Here **mydb** is the name of the database |
| \c mydb;              | to connect to a database                                        |
| \d                    | to list all the tables inside a database                        |
| \q                    | to exit or quit from psql                                       |

### Configuration

Being a database, Postgres stores most of its settings in itself! So the config file isn't really useful for us.

## Postico GUI App

Note: Some participants had issues last cohort with the data not syncing properly while creating tables using Postico. Please do not use it to create or modify your tables, think of it as a visual to see the tables you have.

Install: https://eggerapps.at/postico/

If you created a DB of your user, it should work out of the box if you specify `localhost` to connect.

## PGAdmin GUI App

This is **not recommended** because it is too advanced and difficult to connect.

## Problems

**Passwords?** with the default setup you shouldn't need a password.

## Supplemental Materials

- [Commands](https://gist.github.com/Kartones/dd3ff5ec5ea238d4c546) - A list of PostgreSQL commands on a GitHub gist.
