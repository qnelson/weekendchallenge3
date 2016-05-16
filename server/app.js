var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var add = require('./routes/add');
var subtract = require('./routes/subtract');
var multiply = require('./routes/multiply');
var divide = require('./routes/divide');

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.urlencoded({extended: true}));

app.listen(app.get('port'), function() {
  console.log('Server is ready on port:' + app.get('port'));
});

//Route for add operation
app.use('/add', add);

//Route for subtract operation
app.use('/subtract', subtract);

//Route for multiply operation
app.use('/multiply', multiply);

////Route for divide operation
app.use('/divide', divide);

//Route catch-all
app.get('/*', function(req, res) {
  var file = req.params[0] || 'views/index.html';
  res.sendFile(path.join(__dirname, './public', file));
});
