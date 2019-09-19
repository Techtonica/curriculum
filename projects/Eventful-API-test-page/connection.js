//require packages
const pg = require("pg");
const pgKey = require('./keys').dbPassword;

const pool = new pg.Pool({
  host: "localhost",
  port: 5432,
  user: "eventonica",
  password: pgKey,
  database: "eventonica"
});

module.exports = pool;