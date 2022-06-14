# Eventonica

Eventonica is a Event management app with a React frontend, Node/Express backend, and Postgres database.

## User Story :

**User Management**

- Add a new User
- Delete a User

**Event Management**

Event Management exercise is left to the participants.

### Technologies used

- React
- JavaScript / NodeJs
- Express
- Postgres

## Setup

First, clone the project and move inside the directory

next move into the server and install dependencies and start the server

```bash
cd server
npm install
npm start
```

Next import [seed.sql](./server/db/seed.sql) using the command `psql -U postgres -f seed.sql`. If you had configured your postgres without password your command should be: `psql -f seed.sql`.

Open another terminal then cd into the client, install dependencies and start the server

```bash
cd client
npm install
npm start
```

Note: Server runs on http://localhost:4001 and client on http://localhost:3000

## Room for Improvement

- write unit test using jest
