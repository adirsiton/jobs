  
require('dotenv').config();
const { Pool } = require('pg')

const user = process.env.PG_USERNAME || "postgres";
const password = process.env.PG_PASSWORD || "postgres";
const host = process.env.PG_HOST || "localhost";
const dbName = process.env.PG_DB || "jobs"

const pool = new Pool({
  user: user,
  host: host,
  database: dbName,
  password: password,
  post: 5432
});

module.exports = {
    query: (text, params) => pool.query(text, params),
}