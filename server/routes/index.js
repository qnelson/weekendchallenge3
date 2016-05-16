var express = require('express');
var router = express.Router();
var path = require('path');
var math = require('../routes/calculations');

var x;
var y;
var answer;

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, "../public/views/index.html"));
});

//Route for add operation
router.post('/add', function(req, res) {
  x = Number(req.body.x);
  y = Number(req.body.y);
  answer = math.add(x, y);
  res.send((answer).toString());
});

//Route for subtract operation
router.post('/subtract', function(req, res) {
  x = Number(req.body.x);
  y = Number(req.body.y);
  answer = math.subtract(x, y);
  res.send((answer).toString());
});

//Route for multiply operation
router.post('/multiply', function(req, res) {
  x = Number(req.body.x);
  y = Number(req.body.y);
  answer = math.multiply(x, y);
  res.send((answer).toString());
});

////Route for divide operation
router.post('/divide', function(req, res) {
  x = Number(req.body.x);
  y = Number(req.body.y);
  answer = math.divide(x, y);
  res.send((answer).toString());
});

//Route catch-all
router.get('/*', function(req, res) {
  var file = req.params[0] || '/views/index.html';
  res.sendFile(path.join(__dirname, '../public', file));
});

module.exports = router;
