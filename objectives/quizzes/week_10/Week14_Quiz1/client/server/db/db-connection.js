const { Pool } = require('pg');
const db = new Pool({
    connectionString: process.env.DATABASE_URL
  });

  module.exports = db;