import pg from "pg";
const { Pool } = pg;
const db = new Pool({
  connectionString: "postgres://localhost:5432/eventonica",
});

export default db;
