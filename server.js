
// DEPENDENCIES

var express = require('express');

var bodyParser = require('body-parser');

var path = require('path');

// EXPRESS CONFIGURATION


// Tells node that to create an "express" server
var app = express();

// Sets an initial port
var PORT = process.env.PORT || 8080;


// BodyParser makes it possible for server to interpret data sent to it.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// ROUTER

require(path.join(__dirname, './app/routing/api-routes.js'))(app);
require(path.join(__dirname, './app/routing/html-routes.js'))(app);


// LISTENER

app.listen(PORT, function() {
  console.log('Friend Finder app is listening on PORT: ' + PORT);
});