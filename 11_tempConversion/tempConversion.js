const convertToCelsius = function(f) {
  const c = (f-32) * 5/9
  return Math.round(c *10) / 10
};

const convertToFahrenheit = function(c) {
  const f = (c * (9/5)) + 32;
  return Math.round(f *10) / 10
};

console.log(convertToFahrenheit(73.2))

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
