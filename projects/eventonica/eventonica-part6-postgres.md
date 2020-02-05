# Eventonica - Part 6 - Postgres Database

### Overview
Previously, your data was stored in memory in Express, so your data would disappear if the application restarted. For production applications, data must be stored in a more permanent way. In this lesson, you will move your EventRecommender data to a Postgres database and connect to that database in your Express APIs.

### Instructions

1. Ensure that you have Postgres installed on your machine and that you can use either `PGAdmin` or `psql` - see instructions [here](../../databases/installing-postgresql.md).

1. Create a new database named `eventonica`.

1. In your `eventonica` database, create a table named `users` that contains the same fields as your `User` class in `eventRecommender.js`.
    * Use the datatype [serial](https://www.postgresql.org/docs/12/datatype-numeric.html#DATATYPE-SERIAL) for `id` to create an auto-incrementing integer id.
    * Make the `id` column a [primary key](https://www.postgresql.org/docs/12/ddl-constraints.html#DDL-CONSTRAINTS-PRIMARY-KEYS) so that every user has a unique id.
    * Try running the following SQL insert multiple times to see how the `serial` type works: `INSERT INTO users (name) values ('jane');`. Your table should have automatically filled the `id` field for you!

1. Create a table named `events` that contains the same fields as your `Event` class in `eventRecommender.js`. Create the `id` column like you did for the `users` table.

1. Install [pg-promise](https://expressjs.com/en/guide/database-integration.html#postgresql) in your project folder - this module connects your Express application to a Postgres database.

1. Copy the setup instructions for `pg-promise` in your `index.js` file. Your connection string is probably something like `postgres://{YOURNAME}@localhost:5432/eventonica`. If you used a password to protect your database, use `postgres://{YOURNAME}:{PASSWORD}@localhost:5432/eventonica`.

1. Update your APIs to use SQL commands instead of the EventRecommender class.
    * Use `psql` or `PGAdmin` to test your SQL commands.
    * Incorprate the SQL commands in your API endpoints using `pg-promise` - you can find example queries [here](https://github.com/vitaly-t/pg-promise/wiki/Learn-by-Example).
    * Note that `pg-promise` requires you to specify how many rows, if any, a query should return. For example, `db.any` indicates that the query can return any number of rows, `db.one` indicates that the query should return a single row, and `db.none` indicates that the query must return nothing.

    Ex: Adding a user

    ```
    # using db.one because the INSERT will return a single new user
    db.one('INSERT INTO users (name) values ($1) RETURNING id, name', [req.body.name])
    .then(data => {
        # on success, return the user data
        res.send(data)
    })
    .catch(function(error) {
        # on failure, send a generic 500 status
        res.sendStatus(500)
    });
    ```

1. Remove the EventRecommender import and instance from your `index.js` file.

1. Test that your new APIs work using Postman and your webpage. Using `PGAdmin` or `psql`, check that the database contains the information you would expect.

1. Restart your Express application - your data from previous sessions should still be there! Your database is independent of your application and continues to store the data even when the application is not running.

### Challenge

1. Add [not-null constraints](https://www.postgresqltutorial.com/postgresql-not-null-constraint/) to all fields in `users` and `events` that must have a value. Test what happens when you try to insert a null value into those fields.

1. Create a [unique constraint](https://www.postgresql.org/docs/12/ddl-constraints.html#DDL-CONSTRAINTS-UNIQUE-CONSTRAINTS) on your `events` table using event name, category, and date fields. This will prevent users from adding the same event multiple times. Test what happens when you try to insert the same event twice.

1. Create a `user_events` table in your database with two columns: `user_id` and `event_id`. Use this table to store which events have been saved for each user, replacing whichever method you used before. When creating the table,
   * Add [foreign keys](https://www.postgresql.org/docs/12/ddl-constraints.html#DDL-CONSTRAINTS-FK) to link `user_id` to the `users` table and `event_id` to the `events` table. Specifying `ON DELETE CASCADE` for each column means that deleting a user/event will also delete all linked entries in this table. This ensures that you won't have deleted events saved for users, or events saved for deleted users. Test that your constraints work by saving events for users and deleting the user or event.
   * These columns should be unique together (i.e., you do not want to save an event for a user more than once), see [unique constraints](https://www.postgresql.org/docs/12/ddl-constraints.html#DDL-CONSTRAINTS-UNIQUE-CONSTRAINTS). Test what happens when you try to save the same event for a user twice.

1. (Only if you created the `user_events` table): Now, when displaying users and their events on the webpage, can you use SQL joins to get a list of event names that each user has saved?
