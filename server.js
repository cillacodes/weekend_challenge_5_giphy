var express = require('express');
var index = require('./routes/index');
var path = require('path');
var bodyParser = require('body-parser');
var favorites = require("./routes/gif");

var app = express();

app.use(bodyParser.json());

app.use(express.static('public'));
app.use('/gif', favorites); //gif.js

app.use('/', index);
app.use('/*', index);

// app.get('/*', function (req, res) {
// res.sendFile(path.join(__dirname, 'public', 'views', 'index.html'));
// });

var port = process.env.PORT || 3000;
var server = app.listen(port, function() {
  console.log('Server listening on port', server.address().port);
});
