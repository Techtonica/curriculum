# Week 6 — Pair Programming

This folder covers two topics: querying a relational database with SQL, and building a Node server that routes requests and calls an external API.

## Prerequisites

1. Comfortable with functions, arrays, and objects in JavaScript (Weeks 1-3).
2. Can run a JavaScript file with `node file.js` and install packages with `npm install`.
3. Have worked through the Week 6 lessons on [async/callbacks/promises](../../javascript/javascript-9-async.md) and [`.env` & config files](../../command-line/env.md) before starting the weather app.
4. Have `sqlite3` available on the command line — macOS ships with it, so `sqlite3 --version` should already print a number.

## Motivation

Until this week, every value your program used was either typed into the file or entered by the user. Week 6 is about data that lives somewhere else: in a database you query, or behind an HTTP request you have to wait for. The vital concept is that your server is the layer in between — it asks the database or the API for data, waits, and hands the result to the browser.

SQL is the language you ask a database for data in, and it barely changes between jobs. Express is the routing layer underneath most Node web services, including the REST API project at the end of this week.

## PostgreSQL and SQLite

You will meet two database tools this week, and it helps to know why.

**PostgreSQL** is the database the Week 6 lessons install and teach. It runs as a separate server on your machine that you connect to, it holds your data permanently, and it is what Techtonica projects and most production web apps actually use. You talk to it with the `psql` command.

**SQLite** is a much smaller database that needs no server and no setup — macOS already has it, as the `sqlite3` command. A SQLite database is just a single file, or, as in these exercises, nothing at all: run `sqlite3` with no filename and the database lives in memory and disappears when the command ends. That is exactly what you want for practicing queries.

The `main.sql` file in each of the two SQL folders is written for SQLite, not PostgreSQL. Lines like `.read`, `.headers on`, and `.mode column` are `sqlite3` dot-commands — they are instructions to that program, not SQL — so `psql -f main.sql` errors on every one of them. Run these exercises with `sqlite3 < main.sql`.

The `SELECT`, `INSERT`, `WHERE`, `ORDER BY`, and `JOIN` you write in the query files are standard SQL and work the same in both. Only the setup commands differ, so practicing in SQLite still teaches you the PostgreSQL you need.

## Learning Objectives

After finishing these exercises, you will be able to:

1. Insert rows into a table and read them back with `SELECT`.
2. Filter and order results with `WHERE`, `LIKE`, and `ORDER BY`.
3. Query across two tables with a `JOIN` on a shared key.
4. Serve different files from different URLs using Express routes and `res.sendFile()`.
5. Read a query string parameter from a request, call a third-party API with it, and render the response in a template.
6. Keep an API key out of your source code with a `.env` file.

## Sequence and Relation

1. **SQL Single Table** (`SQL_Single_Table/`)
   - Five query files against one `Employees` table. `employees.sql` creates the table but inserts nothing, so `query1.sql` is where you write the `INSERT` — and every later query reads the rows you put there. Run the whole set with `sqlite3 < main.sql` from inside the folder.
2. **SQL Multiple Table** (`SQL_Multiple_Table/`)
   - The same shape of exercise across two tables, `employee` and `department`, linked by `DEPT_ID`. Four query files, all built on `JOIN`. Do this after Single Table; it assumes you can already write a `SELECT` with a `WHERE`.
3. **Express.js Router** (`expressjs-router/`)
   - The smallest useful Express server: `index.js` maps `/` to `index.html` and `/about` to `about.html`. It is the quickest exercise here — the point is the route-to-file mapping, not the pages, so do not spend time on the HTML.
4. **Node.js Weather App** (`nodejs-weather-app/`)
   - The longest and most complete exercise here, and the one worth the most time. `server.mjs` takes a city name from the form's query string, `await`s a fetch to the OpenWeatherMap API, and renders `index.ejs` with the result. You need a free [OpenWeatherMap account](https://home.openweathermap.org/users/sign_up) — sign up at the start of the session, because a new key is not active immediately. Save the key; later weeks reuse it.

## Relevant Materials

1. [SQL 1 — Single tables](../../databases/sql-1.md) and [SQL 2 — Multiple tables](../../databases/sql-2.md)
2. [SQLite: Command Line Shell](https://sqlite.org/cli.html)
3. [Express: Basic routing](https://expressjs.com/en/starter/basic-routing.html)
4. [MDN: Using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
5. [OpenWeatherMap: Current weather data](https://openweathermap.org/current)
6. [.env & config files](../../command-line/env.md)

## Common Mistakes and Misconceptions

1. Run `sqlite3 < main.sql` from inside the exercise folder, not from the repo root. `.read employees.sql` is resolved relative to your current directory, not to the script's location, so from anywhere else you get a "cannot open" error.
2. In `SQL_Single_Table`, blank output for queries 2 through 5 is the expected first result, not a broken setup. The table starts empty; those queries stay empty until you write the `INSERT` in `query1.sql`.
3. In `SQL_Multiple_Table`, `Sales` and `Marketing` each have two rows in the `department` table with the same `DEPT_ID`. A `JOIN` therefore returns employees in those departments twice, once per matching department row. That is how `JOIN` works — it pairs every matching row on both sides — not a mistake in your query.
4. Both Node exercises ship with a `package.json`, so run `npm install` before `npm start`. Skipping the install gives you `Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'express'`, which reads like a broken exercise but only means the dependencies are not downloaded yet.
5. The weather app runs on `http://localhost:5173`, not port 5000. On macOS, port 5000 belongs to the AirPlay Receiver in Control Center, so a server started there either fails with `EADDRINUSE` or, worse, appears to start while AirPlay answers your browser with a `403`. 5173 is the port Vite used in Week 5, so it should look familiar — but for that same reason, stop any Vite project still running before you start this one. If 5173 is busy, use `PORT=4000 npm start`.
6. A brand-new OpenWeatherMap key takes a while to activate, and an inactive key returns a `401` JSON body rather than a network failure. `fetch` does not throw on `401`, so the `catch` block never runs and the page renders with no temperature instead of an error. Log `weather` to see what actually came back.
7. Take turns typing. The person not typing reads the error message out loud — in this week's exercises the error text usually names the exact file and line.
