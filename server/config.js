require('dotenv').config({
  path: `${__dirname}/.env`,
});

const config = {
  apiKey: process.env.OPENAI_API_KEY,
  pg_db: process.env.PG_DB,
  pg_db_password: process.env.PG_DB_PASSWORD,
  db_user: process.env.PG_DB_USER,
  port: process.env.PORT,
};

module.exports = config;
