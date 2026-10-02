# Database Migrations

## Overview
Database migrations are a way to manage changes to the database schema over time, allowing teams to keep their databases in sync.

## Learning Objectives
- Understand why manual schema changes are dangerous in production.
- Use migration tools (e.g., Knex.js, Sequelize, or Flyway).
- Implement "Up" and "Down" migration scripts.

## Resources
- [Knex.js Migrations Guide](https://knexjs.org/guide/migrations.html)

## Exercise
1. Set up a project with Knex.js and PostgreSQL.
2. Create a migration to create a `users` table.
3. Create a second migration to add a `profile_picture` column to the `users` table.
4. Roll back the last migration and verify the column was removed.
