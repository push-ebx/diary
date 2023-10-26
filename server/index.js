const express = require('express');
const app = express();
const cors = require('cors');
const router = require("./router")
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

app
  .use(cors())
  .use(express.json())
  .use('/api', router)

app.get('/', (req, res) => {
  res.send("hello!")
})

mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true});
app.listen(PORT, 'localhost',() => {
  console.log(`Server started on ${PORT}`);
});