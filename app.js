const express = require("express");
const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

app.get("/add", (req, res) => {
  res.status(200).send("add url called");
});

app.listen(3000, () => {
  console.log("Server started successfully...Listening on port:", 3000);
});
