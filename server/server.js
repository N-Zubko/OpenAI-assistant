const express = require("express");
const app = express();
const port = process.env.PORT || 3002;
const responseRouter = require("./routes/responses");
const path = require("path");
const basicAuth = require("express-basic-auth");

app.use(express.json());

app.use(
  basicAuth({
    users: {
      test: "pass",
    },
    challenge: true,
  })
);

app.use(express.static(path.join(__dirname, "../client/build")));

app.use("/responses", responseRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.listen(port, () => {
  console.log(`This app listening at http://localhost:${port}`);
});
