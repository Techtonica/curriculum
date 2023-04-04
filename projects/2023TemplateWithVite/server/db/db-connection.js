const { Pool } = require('pg');
const db = new Pool({
    connectionString: process.env.DATABASE_URI
  });

  module.exports = db;