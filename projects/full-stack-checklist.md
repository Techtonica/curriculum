# PERN App Creation Checklist

### Introduction

This checklist covers how to create a full-stack app with a React frontend, Node/Express backend, and Postgres database (PERN) from scratch.

### Prerequisites

- Node
- [Docker Desktop](https://docs.docker.com/get-docker/), if you want to use Docker for your Postgres database. If you are planning to deploy this application or collaborate on the code with other users, a Docker-ized database will be easier to maintain.
- [Postgres](../databases/installing-postgresql.md)

### Postgres Setup

1. Create a `.env` file in the root directory of your project. In the file, add the following variables:

    ```
    POSTGRES_DB=name_of_your_database
    POSTGRES_PASSWORD=example_password
    ```

1. Create a folder named `db` and put a file named `seed_data.sql` file in the folder. In this file, you can define your database tables and insert any initial data. 

    ```
    # example seed

    # this will reset the table if you want to re-seed the database
    DROP TABLE IF EXISTS users;

    # create table - be sure to include any non-null constraints and primary/foreign keys

    CREATE TABLE users (
        id serial primary key,
        first_name text not null
    );

    # optional initial data load
    INSERT INTO users (id, first_name) VALUES 
        (1, 'Hermoine'),
        (2, 'Harry'),
        (3, 'Ron')
    ;

    ```

1. (If using Docker) Create a `docker-compose.yaml` file in the root directory of your project and specify the Postgres service.  Then run `docker-compose up -d`.
    ```
    version: '3.8'
    
    services:
      postgres:
        image: postgres
        restart: always
        env_file:
          - .env
        ports:
          - 5432:5432
        volumes:
          - ./data/seed_data.sql:/docker-entrypoint-initdb.d/seed_data.sql

    ```
    This creates a Postgres database in a container with the database name and password from your `.env` file. It runs the seed script on start up. You can see a full explanation of configurations [here](https://hub.docker.com/_/postgres). If you already have a Postgres database running on port 5432, replace the `ports` value with `- {OTHER_PORT}:5432` and be sure to use the new port value in the steps below.

1. (If using Postgres locally) Using PGAdmin or `psql`, create a new database for your project with the name and password specified in your `.env` file.

1. (If using Postgres locally) Seed your database by running `psql -h localhost -p 5432 -U postgres -d {POSTGRES_DB} -f ./data/seed_data.sql`

1. Connect to the database using `psql -h localhost -p 5432 -d {POSTGRES_DB} -U postgres`. You can also connect using `PGAdmin`. Confirm that your data looks correct.

### Node/Express Setup

1. Create a folder named `server` in the root directory of your project and run `cd server`.

1. Follow [instructions](https://expressjs.com/en/starter/installing.html) for installing Express.

1. Follow the Hello World [example](https://expressjs.com/en/starter/hello-world.html) to set up your first route. Note: Your React app will also want to use port 3000, so use port 4000 for your Express server.

1. Install [pg-promise](https://vitaly-t.github.io/pg-promise/index.html) in your project folder - this module connects your Express application to a Postgres database.

1. Use the following code to set up your database connection. It can go in the `index.js` file.

    ```
    const dotenv = require("dotenv");
    const pgp = require("pg-promise");

    const connection = {
      user: "postgres",
      database: process.env.POSTGRES_DB,
      password: process.env.POSTGRES_PASSWORD,
      port: 5432,
      host: "localhost",
    };
    const db = pgp(connection)()
    ```

1. Update your existing route or create a new one that returns rows from your database. You can find example queries [here](https://github.com/vitaly-t/pg-promise/wiki/Learn-by-Example).


### React Setup

1. In the root directory of your project, run `npx create-react-app app`. This will create an `app` folder with initial React files.

2. Run `cd app` and then `npm start` to run your app.

3. Call one or more of your Express API routes to view and edit your data in the app.

### Testing

1. Use Postman to test the endpoints specified in your `server/index.js` file.

1. Have your React app fetch data from one or more of your Express endpoints, and confirm the data is complete.
