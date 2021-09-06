# Eventonica - Part 6 - Postgres Database

### Overview

Previously, your data was stored in memory in Express, so your data would disappear if the application restarted. For production applications, data must be stored in a more permanent way. In this lesson, you will move your data to a Postgres database and connect to that database in your Express APIs.

### How to Submit

In addition to the usual steps:

- Add a clear README for how volunteers can run your app, including DB setup
  - One good way to do this is to add a database dump to the project that includes your table structure and any test data you're using so that volunteer reviewers can run your app and begin using it immediately
- Include any unit or API tests and how to run them in the README

### Instructions

1. Ensure that you have Postgres installed on your machine and that you can use either `PGAdmin` or `psql` - see instructions [here](../../databases/installing-postgresql.md).

1. Create a new database named `eventonica`.

1. In your `eventonica` database, create a table named `users` that contains the same fields as a `User` object in your example array.

   - Use the datatype [serial](https://www.postgresql.org/docs/12/datatype-numeric.html#DATATYPE-SERIAL) for `id` to create an auto-incrementing integer id.
   - Make the `id` column a [primary key](https://www.postgresql.org/docs/12/ddl-constraints.html#DDL-CONSTRAINTS-PRIMARY-KEYS) so that every user has a unique id.
   - Try running the following SQL insert multiple times to see how the `serial` type works: `INSERT INTO users (name) values ('jane');`. Your table should have automatically filled the `id` field for you!

1. Create a table named `events` that contains the same fields as your `Event` class. Create the `id` column like you did for the `users` table.

1. Install [pg-promise](https://expressjs.com/en/guide/database-integration.html#postgresql) in your project folder - this module connects your Express application to a Postgres database.

1. Copy the setup instructions for `pg-promise` in your `index.js` file. Your connection string is probably something like `postgres://localhost:5432/eventonica`. You should not need a username or password if you [setup posgres](../../databases/installing-postgresql.md) correctly.

1. Update your Eventonica methods (addUser(),etc) to use SQL commands.

   - Use `psql` or `PGAdmin` to test your SQL commands.
   - Add them to your JS using the package `pg-promise` - you can find example queries [here](https://github.com/vitaly-t/pg-promise/wiki/Learn-by-Example).
   - Note that `pg-promise` requires you to specify how many rows, if any, a query should return. For example, `db.any` indicates that the query can return any number of rows, `db.one` indicates that the query should return a single row, and `db.none` indicates that the query must return nothing.

   Ex: Adding a user

   ```js
   // in Express, e.g. index.js
   app.post('/users', (req, res) => {
     eventonica.addUser(req.body).then(() => res.sendStatus(204));
   });
   ```

```js
// in models.js

addUser(data) {
  // note: this returns a Promise
  return db.one('INSERT INTO users (name) values (\$1) RETURNING id, name', [data.name]);
}

```

1. Test that your new APIs work using Postman and your webpage. Using your preferred Postgres client such as Postico or `psql`, check that the database contains the information you would expect.

1. Restart your Express application - your data from previous sessions should still be there! Your database is independent of your application and continues to store the data even when the application is not running.

### Additional Requirements After the Basics are Working

1. Create a `user_events` table in your database with two columns: `user_id` and `event_id`. Use this table to store which events have been saved for each user, replacing whichever method you used before. When creating the table,

- Add [foreign keys](https://www.postgresql.org/docs/12/ddl-constraints.html#DDL-CONSTRAINTS-FK) to link `user_id` to the `users` table and `event_id` to the `events` table. Specifying `ON DELETE CASCADE` for each column means that deleting a user/event will also delete all linked entries in this table. This ensures that you won't have deleted events saved for users, or events saved for deleted users. Test that your constraints work by saving events for users and deleting the user or event.
- These columns should be unique together (i.e., you do not want to save an event for a user more than once), see [unique constraints](https://www.postgresql.org/docs/12/ddl-constraints.html#DDL-CONSTRAINTS-UNIQUE-CONSTRAINTS). Test what happens when you try to save the same event for a user twice.

1. (Only if you created the `user_events` table): Now, when displaying users and their events on the webpage, can you use SQL joins to get a list of event names that each user has saved?

### Troubleshooting

If you are getting HTTP 304 back from your GET requests, it means that the contents of the JSON is identical to when the browser fetched it before. If you're seeing this and you believe the data _should_ be different, i.e. you've added or deleted data in the database, it may be a timing issue. Make sure you are waiting for the database calls to **resolve their promises** before sending back your Express response.

### Challenge

- Create a [unique constraint](https://www.postgresql.org/docs/12/ddl-constraints.html#DDL-CONSTRAINTS-UNIQUE-CONSTRAINTS) on your `events` table using event name, category, and date fields. This will prevent users from adding the same event multiple times. Test what happens when you try to insert the same event twice.
- For either of the above constraints, decide how best to show this error to the user? How will you tell the browser code that something went wrong? Remember, HTTP Status Codes are your friend.

## Reviewing Instructions

TL;DR - they are taking their in-memory backend data objects from their Express code and using Postgres to store them!

- Main criteria is being able to perform all supported actions above
- Review assignment details above

### Common Issues

- README should contain instructions on how to load the testing database schema (likely with data)
- A big part of reviewing this is checking it out and making sure it works
- README should also mention how to run any tests
- SQL commands should be in the model objects, not in the Express app route handlers
  - If the code is all stuffed into the handlers, send your preferred explanatory link about the concept of system layers. Our curriculum doesn't currently have a lesson for it.

## Optional Extensions
- Add API test coverage for your endpoints using Jest
- example test, use POST/PUT to create a new user and then GET the users to confirm that user was added and saved
- Add [not-null constraints](https://www.postgresqltutorial.com/postgresql-not-null-constraint/) to all fields in `users` and `events` that must have a value. Test what happens when you try to insert a null value into those fields.
