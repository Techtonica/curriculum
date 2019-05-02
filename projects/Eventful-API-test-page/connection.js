//require packages
const pg = require("pg");
const pgKey = require('./keys').pg;

 //create PostgreSQL connection
const connection = pg.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: pgKey,
  database: "eventonica"
});

 module.exports = connection;