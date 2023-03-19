const { Pool } = require('pg');
const db = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: (process.env.DATABASE_SSL != "false") && {
    rejectUnauthorized: false
  }
});

module.exports = db;