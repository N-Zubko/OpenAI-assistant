# ASK OPEN AI app 

Check out the [live app](https://openai-js-assistant.up.railway.app/). The login is `test` and the password is `pass`.

<img width="656" alt="Home Page of ASK OPEN AI app" src="https://user-images.githubusercontent.com/63440229/182685468-e2b8fba9-9371-4e79-ad58-ed0e5df123af.png">


This full-stack interactive and responsive web application is designed to help users find answers related to JavaScript. The answers are short and concise, when required they contain a code template. The user types the question in the input box and hits the button, the question is sent to OpenAI using its API and the answer received by the app will appear in the box below. All question-answer pairs are stored in the database and are displayed in the `/responses` page.

Technology used: 💡 React.js for the frontend, 💡 Node.js and 💡 ExpressJS for the backend, 💡 PostgreSQL on bit.io server as a database, 💡 React Bootstrap and vanilla CSS for styling, 💡 OpenAI API to obtain answers to your questions 💡 Uses GPT-3 Davinci model from OpenAI 💡 Live app is deployed on Railway

## Architecture:

![Structure of the application and relations](https://user-images.githubusercontent.com/63440229/185286128-32209a85-c8d6-4e88-82f1-c1e88c618b92.png)

* The initial plan was to have a SQLite database as part of the app, now the app connects to a PostgreSQL database hosted online. 

## Security:

1. the application has basic authentication form asking the user for a login and password at the start of the application.
The login is `test` and the password is `pass`. No additional registration is required.

2. The API Keys for the database connection and OpenAI are hidden.

## To see the database contents in the json format:

Go to `https://openai-js-assistant.up.railway.app/responses`

## Design:

Inspired by the 80-ies aesthetics, hence glowing colours and lots of square patterns.

## How to use:

1. If you want to read all responses stored in the database, go to `https://openai-js-assistant.up.railway.app/allResponses` or click `Responses` in the navigation bar. If the database is not empty, you will see numbered cards with previously asked questions and answeres.

<img width="699" alt="Responses Page where cards with all previously asked questions and answers given are displayed" src="https://user-images.githubusercontent.com/63440229/182687222-9e505344-6f5f-4e2a-8b6d-c129bba177f7.png">

2. If you want to ask a new question, go to `/question` or select `Question` tab in the navigation bar, type it in the input box and click on the `Get Your Answer` button. The answer will appear in a new box below and will be added to the page with all responses.

<img width="708" alt="Question Page where user can ask OPEN AI assistant anything about JavaScript" src="https://user-images.githubusercontent.com/63440229/182686271-f5abcc0b-694f-442a-86e5-925eacd31a0d.png">

## Demo GIF:

![gif demo of Open AI assistant application](https://user-images.githubusercontent.com/63440229/182688935-228b3ab9-be7d-41cd-a85a-95f0e19d2312.gif)

## Plans for ver.2:

1. I would like to improve accessibility of the application

2. Adding automated tests with the React Testing Library is also in my plans

3. Add animation and sounds with an option to turn them off
