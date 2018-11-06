const express = require("express")
const path = require("path");
const app = express();
const samplequestionnaire = require("./development/sample_questionnaire.json")

app.get("/", (req, res) => {
  const random_id = Math.random().toString(36).substring(2);
  res.redirect(`/q/${random_id}`);
})

app.get("/q/:digestKey", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"))
})

app.get("/questionnaire_submissions/:digestKey", (req, res) => {
  res.json(samplequestionnaire)
})

app.use(express.static('public'))

app.listen(3000)
