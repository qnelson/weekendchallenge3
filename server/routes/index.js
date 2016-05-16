var express = require('express');
var router = express.Router();
var path = require('path');
var calc = require('../routes/calculations');

var x;
var y;
var answer;

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, "../public/views/index.html"));
});

router.post('/add', function(req, res) {
  x = Number(req.body.x);
  y = Number(req.body.y);
  answer = calc.add(x, y);
  res.status(200).send((answer).toString());
});

router.post('/subtract', function(req, res) {
  x = Number(req.body.x);
  y = Number(req.body.y);
  answer = calc.subtract(x, y);
  res.status(200).send((answer).toString());
});

router.post('/multiply', function(req, res) {
  x = Number(req.body.x);
  y = Number(req.body.y);
  answer = calc.multiply(x, y);
  res.status(200).send((answer).toString());
});

router.post('/divide', function(req, res) {
  x = Number(req.body.x);
  y = Number(req.body.y);
  answer = calc.divide(x, y);
  res.status(200).send((answer).toString());
});

router.get('/*', function(req, res) {
  var file = req.params[0] || '/views/index.html';
  res.sendFile(path.join(__dirname, '../public', file));
});

module.exports = router;