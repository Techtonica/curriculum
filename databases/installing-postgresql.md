# PostgreSQL Installation

## Projected Time

15 minutes

## Objectives

**Participants will be able to:**

- Use PostgreSQL from the command line (`psql`) and, optionally, a GUI admin app

### Install PostgreSQL on Mac

- Follow the [Postgres Homebrew Instructions](https://wiki.postgresql.org/wiki/Homebrew)
- This creates a superuser named postgres
- If you run `psql` with no args, it assumes you want to connect as your current user (`whoami` command output)
- Run `psql postgres` to connect as the superuser
- `create database <YOUR_USERNAME>;`
- `\q` to quit
- Now you can connect with just `psql`

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
