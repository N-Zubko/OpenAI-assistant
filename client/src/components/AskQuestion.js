import React, { useState } from "react";

import { Container, Form, Button, Card } from "react-bootstrap";
import axios from "axios";
import LoadingSpinner from "./Spinner";
import flash from "../pictures/flash.png";
import "bootstrap/dist/css/bootstrap.css";

function AskQuestion() {
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let formDataObj = Object.fromEntries(formData.entries()).questionContent;

    axios
      .post("/responses", {
        question: formDataObj,
      })
      .then(setErrorMessage(""))
      .then(setIsLoading(true))
      .then((response) => {
        setResponse(`${response.data.result}`);
        setIsLoading(false);
        setErrorMessage("");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("Request Failed. Try Again");
      });
  };

  return (
    <div>
      {isLoading && !errorMessage && <LoadingSpinner />}

      <Container className="container mt-3 pb-5">
        <div className="mt-3" id="question">
          <Form onSubmit={(e) => onFormSubmit(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="title">How do I ...</Form.Label>
              <Form.Control
                type="text"
                name="questionContent"
                placeholder="Enter Your Question"
                size="lg"
                className="mt-2"
              />
            </Form.Group>
            <div className="fas fa-expand ms-2 mt-4">
              <Button
                className="btn btn-outline-light"
                size="lg"
                variant="primary"
                type="submit"
              >
                Get Your Answer
              </Button>
              <img src={flash} alt="flash" width="50px" />
            </div>
          </Form>
        </div>
        {errorMessage && <p className="error"> {errorMessage} </p>}

        {!isLoading && response && (
          <div className="mt-3">
            <Card>
              <Card.Body>
                <Card.Text className="answer-box">{response}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        )}
      </Container>
    </div>
  );
}

export default AskQuestion;
