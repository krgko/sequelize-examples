const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(require("morgan")("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require("./server/routes")(app);

module.exports = app;
