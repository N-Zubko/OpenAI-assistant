# ASK OPEN AI app

<img width="656" alt="Home Page of ASK OPEN AI app" src="https://user-images.githubusercontent.com/63440229/182685468-e2b8fba9-9371-4e79-ad58-ed0e5df123af.png">


This full-stack interactive and responsive web application is designed to provide answers related to JavaScript to questions sumbitted by users. The answers are short and concise, when required they contain a code template.
Technology used: 💡 React.js, 💡 Node.js and 💡 ExpressJS for the backend. 💡 OpenAI API to obtain answers to your questions. 💡 SQLite as a database. 💡 React Bootstrap and vanilla CSS for styling.

## To run the app:

1. clone the repository, install dependencies in the client and server directories. My plan is to improve this part later, as well as launch the application on a hosting platform.

2. In the command line while in the server directory enter the following `npm run build-client && node server.js`. This is launch the application and open it in your browser at the port `localhost:3002`

## For security:

1. the application has basic authentication form asking the user for a login and password at the start of the application.
The login is `test` and the password is `pass`. No additional registration is required.

2. The API Key is hidden.

## To see the database contents:

Go to `http://localhost:3002/responses`

## Design:

Inspired by the 80-ies aesthetics, hence glowing colours and lots of square patterns.

## How to use:

1. If you want to read all responses stored in the database, go to `/allResponses` or click `Responses` in the navigation bar. If the database is not empty, you will see numbered cards with previously asked questions and answeres.

<img width="699" alt="Responses Page where cards with all previously asked questions and answers given are displayed" src="https://user-images.githubusercontent.com/63440229/182687222-9e505344-6f5f-4e2a-8b6d-c129bba177f7.png">

2. If you want to ask a new question, go to `/question` or select `Question` tab in the navigation bar, type it in the input box and click on the `Get Your Answer` button. The answer will appear in a new box below and will be added to the page with all responses.

<img width="708" alt="Question Page where user can ask OPEN AI anything about JavaScript" src="https://user-images.githubusercontent.com/63440229/182686271-f5abcc0b-694f-442a-86e5-925eacd31a0d.png">

## Demo:

![ezgif com-gif-maker](https://user-images.githubusercontent.com/63440229/182688935-228b3ab9-be7d-41cd-a85a-95f0e19d2312.gif)
