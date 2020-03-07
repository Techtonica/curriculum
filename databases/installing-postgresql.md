# PostgreSQL Installation

## Projected Time

15 minutes

## Objectives

**Participants will be able to:**

- Use PostgreSQL from the command line (`psql`) and, optionally, a GUI admin app



### Install PostgreSQL and pgadmin on MacOSX:

- Follow the [Postgres Homebrew Instructins](https://wiki.postgresql.org/wiki/Homebrew)
- This creates a superuser named postgres
- If you run `psql` with no args, it assumes you want to connect as your current user (`whoami` command output)
- Run `psql postgres` to connect as the superuser
- `create database <YOUR_USERNAME>`
- `\q` to quit
- Now you can connect with just `psql`


## Problems

**Common issues users get while installing:**
* **Using non english characters in password** - Avoid using it.

## Supplemental Materials
- [Commands](https://gist.github.com/Kartones/dd3ff5ec5ea238d4c546) - A list of PostgreSQL commands on a GitHub gist.
