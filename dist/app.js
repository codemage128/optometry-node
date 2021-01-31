"use strict";

var express = require('express');

var cors = require('cors');

var dotenv = require('dotenv');

var mongoose = require('mongoose');

var logger = require('morgan');

var path = require('path');

require('dotenv').config();

var app = express();
var port = process.env.PORT;
app.use(cors());
var options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
};
mongoose.connect(process.env.DATABASE, options).then(function (connected) {
  return console.log("Database connection established !");
})["catch"](function (err) {
  return console.error("There was an error connecting to database, the err is ".concat(err));
});
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express["static"](path.join(__dirname, "public")));
app.use(logger("dev"));

var index = require('./routes/index');

var auth = require('./routes/auth');

var admin = require('./routes/admin');

app.use(index);
app.use(auth);
app.use(admin);
app.listen(port, function () {
  console.log("Example app listening at http://localhost:".concat(port));
});