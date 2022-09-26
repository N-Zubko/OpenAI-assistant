const db = require('./db');
const { Configuration, OpenAIApi } = require('openai');
const config = require(`${__dirname}/../config`);

const configuration = new Configuration({
  apiKey: config.apiKey,
});
const openai = new OpenAIApi(configuration);

async function getMultiple() {
  const data = await db.queryAll();
  return data;
}

function validateCreate(response) {
  let messages = [];

  if (!response) {
    messages.push('No object is provided');
  }

  if (!response.question) {
    messages.push('Question is empty');
  }

  if (messages.length) {
    let error = new Error(messages.join());
    error.statusCode = 400;

    throw error;
  }
}

function getAllResponses(response) {
  let messages = [];

  if (!response) {
    messages.push('No object is provided');
  }

  if (!response.question) {
    messages.push('Question is empty');
  }

  if (messages.length) {
    let error = new Error(messages.join());
    error.statusCode = 400;

    throw error;
  }
}

async function create(aiResponseObj) {
  validateCreate(aiResponseObj);
  const question = aiResponseObj.question;
  let response;
  try {
    console.log('trying to send the question');
    response = await openai.createCompletion('text-davinci-002', {
      prompt: `How do I ${question} JavaScript?`,
      temperature: 0.8,
      max_tokens: 2000,
      top_p: 1.0,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
  } catch (error) {
    console.log(error);
  }

  const newAnswerFromAI = response.data.choices[0].text;
  const dbResult = db.insertQuestionResponse(question, newAnswerFromAI);
  let errorMessage = 'Error in creating question-response pair';
  if (dbResult) {
    let result = newAnswerFromAI;
    return result;
  }
  return { errorMessage };
}
module.exports = {
  getMultiple,
  create,
};
