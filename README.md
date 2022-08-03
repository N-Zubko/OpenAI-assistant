# ASK OPEN AI app

This full-stack interactive and responsive web application is designed to provide answers related to JavaScript to questions sumbitted by users.
Technology used: React.js, Node.js and ExpressJS for the backend. OpenAI API to obtain answers to your questions.

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