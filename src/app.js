const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const logger = require('morgan')
const path = require('path')

require('dotenv').config();
const app = express()
const port = process.env.PORT
app.use(cors());

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
};
mongoose
  .connect(process.env.DATABASE, options)
  .then(connected => console.log(`Database connection established !`))
  .catch(err =>
    console.error(
      `There was an error connecting to database, the err is ${err}`
    )
  );

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use(logger("dev"))

const index = require('./routes/index');
app.use(index);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


