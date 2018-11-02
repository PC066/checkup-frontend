const express = require('express')
const path = require('path');
const app = express()

app.get("/", (req, res) => {
  // TODO - random user_id string for testing
  const random_id = Math.random().toString(36).substring(2);
  res.redirect(`/q/${random_id}`);
})

app.use(express.static('public'))

app.get("/q/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', "index.html"))
})

app.get("/user_questionnaires/:accessToken", (req, res) => {
  res.json([
    {
      question_type: "radio",
      title: "How do you feel today?",
      options: {}
    },
    {
      question_type: "yes_no",
      title: "Did you take insulin today?",
      options: {}
    },
    {
      question_type: "scale",
      title: "How many hours did you sleep last night?",
      options: {}
    },
  ])
})

app.listen(3000)
