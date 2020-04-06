
require('dotenv').config();
const { Pool } = require('pg')

const connectionString = process.env.PG_CONNECTION_STRING || `postgres://postgres:Aa123456@localhost:5432/jobs`;

const pool = new Pool({connectionString});

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