const { Pool } = require('pg');
const db = new Pool({
    connectionString: process.env.DB_URI
  });

  module.exports = db;