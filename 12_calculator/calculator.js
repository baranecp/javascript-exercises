const add = function(a ,b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
 return arr.reduce((acc, cur) => acc + cur, 0)
};

const multiply = function(arr) {
  return arr.reduce((acc, cur) => acc * cur)
};

const power = function(a, b) {
	return Math.pow(a, b)
};

const factorial = function(n) {
	let num = 1;
  for (let i = n; i > 0; i--) {
    num *= i;
  }
  return num;
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
