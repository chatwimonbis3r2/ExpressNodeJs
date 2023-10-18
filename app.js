const express = require("express");
var colors = require("colors");
const debug = require('debug')('app')
const morgan = require('morgan')
const path = require('path')

const app = express();
const port = 80;

app.use(morgan('combined'))
app.use(express.static(path.join(__dirname,"/public/")))

app.get("/", (req, res) => {
  res.send("Hello Express NodeJs");
});

app.listen(port, () => {
  debug(colors.brightGreen("Listening On Port: >>" + port));
});
