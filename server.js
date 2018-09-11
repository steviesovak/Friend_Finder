var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

//  Routes
var apiRoutes = require("./app/routing/apiRoutes.js")(app)
var htmlRoutes = require("./app/routing/htmlRoutes.js")(app)

// Start server to begin listening on port
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});