const express = require("express")
const path = require("path");
const app = express();
const samplequestionnaire = require("./development/sample_questionnaire.json")

app.get("/", (req, res) => {
  // TODO - random user_id string for testing
  const random_id = Math.random().toString(36).substring(2);
  res.redirect(`/q/${random_id}`);
})

app.get("/public/*", (req, res) => {
  res.sendFile(path.join(__dirname, req.originalUrl));
})

app.get("/q/*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"))
})

app.get("/user_questionnaires/:digestKey", (req, res) => {
  res.json(samplequestionnaire)
})

app.listen(3000)
