const db = require("./db");
const config = require("../config");
const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

function getMultiple(page = 1) {
  const offset = (page - 1) * config.listPerPage;
  const data = db.query(`SELECT * FROM AIresponses LIMIT ?,?`, [
    offset,
    config.listPerPage,
  ]);
  const meta = { page };

  return {
    data,
    meta,
  };
}

function validateCreate(response) {
  let messages = [];

  console.log(response);

  if (!response) {
    messages.push("No object is provided");
  }

  if (!response.question) {
    messages.push("Question is empty");
  }

  if (messages.length) {
    let error = new Error(messages.join());
    error.statusCode = 400;

    throw error;
  }
}

function getAllResponses(response) {
  let messages = [];

  console.log(response);

  if (!response) {
    messages.push("No object is provided");
  }

  if (!response.question) {
    messages.push("Question is empty");
  }

  if (messages.length) {
    let error = new Error(messages.join());
    error.statusCode = 400;

    throw error;
  }
}

async function create(aiResponseObj) {
  validateCreate(aiResponseObj);
  const { question } = aiResponseObj;

  let response;
  try {
    console.log("trying to send the question");
    response = await openai.createCompletion("text-davinci-002", {
      prompt: `How do I ${question} JavaScript?`,
      temperature: 0.8,
      max_tokens: 3000,
      top_p: 1.0,
      frequency_penalty: 0.5,
      presence_penalty: 0.0,
      stop: ["You:"],
    });
  } catch (error) {
    console.log("something went wrong");
    console.error(error);
    return { errorMessage: error };
  }
  console.log("Received OpenAI response ", response);
  const firstSuggestion = response.data.choices[0].text;

  const dbResult = db.run(
    "INSERT INTO AIresponses (question, response) VALUES (@question, @response)",
    { question, response: firstSuggestion }
  );

  let errorMessage = "Error in creating question-response pair";
  if (dbResult.changes) {
    let result = firstSuggestion;
    return { result };
  }
  return { errorMessage };
}

module.exports = {
  getMultiple,
  create,
};
