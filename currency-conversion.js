//----------
// SERVER ENVIRONMENT VARIABLES
//----------

var server = 'portfolio/tipjar/currency-conversion';
var port = '7010';

//----------
// CREATE SERVER
//----------

// MODULES
var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');

// DEFINE EXPRESS
var app = express();

// JSON FILE LOCATION
var jsonLocation = 'portfolio/tipjar/data/currencyData.json';

// CREATE STATIC SERVER
app.use(express.static(server));

// CREATE SERVER
app.listen(port, listening);
function listening() {
  console.log(server + 'server listening on port ' + port);
}

//CREATE BODY PARSER
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ROUTE TO 'ADD' - POST NEW DATA TO JSON FILE
app.post('/add', addData);
function addData(request, response) {
  var parsedBody = request.body.data;
  var newData = JSON.stringify(parsedBody, null, 2);
  fs.writeFile(jsonLocation, newData);
  response.send('Updated Currency Data');
}
