require('dotenv').config({
  path: `${__dirname}/.env`,
});

const config = {
  apiKey: process.env.OPENAI_API_KEY,
};

module.exports = config;

// const config = {
//   listPerPage: env.LIST_PER_PAGE || 1000,
// };
