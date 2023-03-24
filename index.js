import fetch from 'node-fetch';
import dotenv from 'dotenv';
import chalk from 'chalk';

dotenv.config();
const log = console.log;

// Set up the request data
const prompt = 'How do you plan to conquer the World?';
log(chalk.green(prompt));

// Load the API key from the environment variable
const apiKey = process.env.OPENAI_API_KEY;

const model = 'text-davinci-002';
const maxTokens = 50;

const requestData = {
  prompt: prompt,
  model: model,
  max_tokens: maxTokens
};

// Send the request to the OpenAI API
const apiUrl = 'https://api.openai.com/v1/completions';
fetch(apiUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`
  },
  body: JSON.stringify(requestData)
})
.then(response => response.json())
.then(data => {
  const generatedText = data.choices[0].text;
  log(chalk.red(generatedText));
})
.catch(error => console.error(error));
