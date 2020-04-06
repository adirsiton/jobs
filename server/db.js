
require('dotenv').config();
const { Pool } = require('pg')

const user = process.env.PG_USERNAME || "postgres";
const password = process.env.PG_PASSWORD || "postgres";
const host = process.env.PG_HOST || "localhost";
const database = process.env.PG_DB || "jobs";
const port = process.env.PG_PORT || 5432;

const pool = new Pool({ user, host, database, password, port });

// Test connection
pool.connect((err, client, release) => {
  if (err) {
    console.log('Error on db connection', err);
  } else {
    console.log('Connected to db ' + host);
    release();
  }
});

module.exports = {
  query: (text, params) => pool.query(text, params),
}