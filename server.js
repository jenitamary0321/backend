// Require

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/User";

require("dotenv").config();

const app = express();
const port = process.env.PORT || 6000;

app.use(cors());
app.use(express.json());

// Setup DB Connection

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created! ");
  db.close();
});

// Setup Routes
const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

// Setup Listener

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
