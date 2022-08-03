import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import CardItem from "./CardItem";

function Results() {
  const [responses, setResponses] = useState([]);

  const getData = async () => {
    const { data } = await axios.get("/responses");
    setResponses(data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="mt-3 pt-3 pb-3">
      {responses.length > 0 ? (
        responses.map((item) => <CardItem item={item} />)
      ) : (
        <p>This list is empty. Be the first to ask Open AI a question.</p>
      )}
    </div>
  );
}

export default Results;
