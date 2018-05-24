
-- Run via command line: psql -U username --file=create_db_sample.sql

-- Set variables
DECLARE database_name varchar(50)
SET database_name = 'test_database';
DECLARE table_name varchar(50)
SET table_name = 'account';

-- Create database
CREATE DATABASE database_name;

-- Create table
CREATE TABLE table_name(
 user_id serial PRIMARY KEY,
 username VARCHAR (50) UNIQUE NOT NULL,
 password VARCHAR (50) NOT NULL,
 email VARCHAR (355) UNIQUE NOT NULL
);

-- Insert table
INSERT INTO table_name (username, password, email) VALUES ('Sally Ride', 'letmein', 'sallyride@gmail.com');


SELECT * FROM table_name;