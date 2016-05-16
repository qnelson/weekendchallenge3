function add(x, y) {
  return (x + y).toFixed(2);
}

function subtract(x, y) {
  return (x - y).toFixed(2);
}

function multiply(x, y) {
  return (x * y).toFixed(2);
}

function divide(x, y) {
  return (x / y).toFixed(2);
}

module.exports = {
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide,
};
