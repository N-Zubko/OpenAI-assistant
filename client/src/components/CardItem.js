import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Card } from "react-bootstrap";

const CardItem = ({ item }) => {
  return (
    <div>
      <Card>
        <Card.Header>Question #{item.id}</Card.Header>
        <Card.Body>
          <Card.Title>How do I {item.question}?</Card.Title>
          <Card.Text>{item.response}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardItem;
