#!/bin/bash
set -e  # Flag causes script to exit if there's an error

# Set variables
username='postgres'
database_name='test_database'
table_name='account'

echo Creating database $database_name...
psql -U $username -c "CREATE DATABASE $database_name"

echo Creating table $table_name...
psql -U $username -d $database_name -c "CREATE TABLE $table_name(
 user_id serial PRIMARY KEY,
 username VARCHAR (50) UNIQUE NOT NULL,
 password VARCHAR (50) NOT NULL,
 email VARCHAR (355) UNIQUE NOT NULL
);"


echo Inserting test data with command: "INSERT INTO $table_name (username, password, email) VALUES
('Sally Ride', 'letmein', 'sallyride@gmail.com');"
psql -U $username -d $database_name -c "INSERT INTO $table_name (username, password, email) VALUES
('Sally Ride', 'letmein', 'sallyride@gmail.com');"


psql -U postgres -d test_database -c "SELECT * FROM account"
