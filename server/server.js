const express = require('express')
const path = require('path');
const app = express()

app.get("/", (req, res) => {
  // TODO - random user_id string for testing
  const random_id = Math.random().toString(36).substring(2);
  res.redirect(`/q/${random_id}`);
})

app.get("/q/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', "index.html"))
})

app.listen(3000)
