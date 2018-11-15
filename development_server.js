const express = require("express")
const path = require("path");
const samplequestionnaire = require("./development/sample_questionnaire.json")
const morgan = require("morgan");

const app = express();

// routes
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

// middleware
app.use(morgan('dev'));
app.use(express.static('public'));

app.listen(3000)
