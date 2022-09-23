const { Pool } = require('pg');

const pool = new Pool({
  user: 'N-Zubko',
  host: 'db.bit.io',
  database: 'N-Zubko/AIresponses',
  password: 'v2_3uFZk_WZKFUW4NaejXcw7K9FUYKUX',
  port: 5432,
  ssl: true,
});

async function queryAll() {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const queryText = `SELECT * FROM airesponses`;
    const res = await client.query(queryText);
    await client.query('COMMIT');
  } catch (e) {
    await client.query('ROLLBACK');
    throw e;
  } finally {
    client.release();
  }
}

// function insertQuestionResponse(question, aiResponse) {
function insertQuestionResponse_1(question, aiResponse) {
  pool.connect((err, client, done) => {
    const shouldAbort = (err) => {
      if (err) {
        console.error('Error in transaction', err.stack);
        client.query('ROLLBACK', (err) => {
          if (err) {
            console.error('Error rolling back client', err.stack);
          }
          // release the client back to the pool
          done();
        });
      }
      return !!err;
    };

    client.query('BEGIN', (err) => {
      if (shouldAbort(err)) return;
      const queryText = `INSERT INTO airesponses(question, response) VALUES ('test-question', 'test-response')`;
      client.query(queryText, (err, res) => {
        if (shouldAbort(err)) console.log('abort message');
        else {
          console.log(res.rows);
        }
      });
    });
  });
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
