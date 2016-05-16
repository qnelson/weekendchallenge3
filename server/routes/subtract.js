var express = require('express');
var router = express.Router();

var x;
var y;
var answer;

function subtract(x, y) {
  return (x - y).toFixed(2);
}

router.post('/', function(req, res) {
  x = Number(req.body.x);
  y = Number(req.body.y);
  answer = subtract(x, y);
  res.send({answer:answer.toString()});
});

module.exports = router;
