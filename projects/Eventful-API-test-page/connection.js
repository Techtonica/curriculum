//require packages
const pg = require("pg");
const pgKey = require('./keys').pg;
const Pool = require('pg').Pool;

 //create PostgreSQL connection
 const connection = new Pool({
  
  host: "localhost",
  port: 5432,
  user: "XXXXXXX", // type your username here
  password: "XXXXXXX", // type your username here
  database: "XXXXXXX" // type your database name here
});

module.exports = connection;