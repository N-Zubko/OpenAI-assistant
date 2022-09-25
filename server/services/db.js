const { Pool } = require('pg');
const config = require(`${__dirname}/../config`);

const pool = new Pool({
  user: config.db_user,
  host: 'db.bit.io',
  database: config.pg_db,
  password: config.pg_db_password,
  port: 5432,
  ssl: true,
});

async function queryAll() {
  const client = await pool.connect();
  let response;
  try {
    await client.query('BEGIN');
    const queryText = `SELECT * FROM airesponses`;
    response = await client.query(queryText);
    await client.query('COMMIT');
  } catch (e) {
    await client.query('ROLLBACK');
    throw e;
  } finally {
    client.release();
  }
  const queryResult = response.rows;
  return queryResult;
}

async function insertQuestionResponse(question, aiResponse) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const queryText = `INSERT INTO airesponses (question, response) VALUES ('${question}', '${aiResponse}') RETURNING id`;
    const res = await client.query(queryText);
    await client.query('COMMIT');
  } catch (e) {
    await client.query('ROLLBACK');
    throw e;
  } finally {
    client.release();
  }
}

module.exports = {
  queryAll,
  insertQuestionResponse,
};
