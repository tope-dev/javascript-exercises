const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  let sum = array.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
  }, 0);
  return sum;
};

const multiply = function (array) {
  let multiply = array.reduce(function (previousValue, currentValue) {
    return previousValue * currentValue;
  });
  return multiply;
};

const power = function (a, b) {
  // let power = a;
  // for (let i = 1; i < b; i++) {
  //   power *= a;
  // };
  // return power;

  return Math.pow(a, b);
};

const factorial = function (a) {
  if (a === 0) return 1;
  number = 1;
  for (let i = 1; i <= a; i++) {
    number *= i;
  }
  return number;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
