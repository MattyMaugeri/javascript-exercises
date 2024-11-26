const convertToCelsius = function(num) {
  let conversion = ((num - 32) * 5 / 9);
  let rounded = Math.round(conversion * 10) / 10;
  return rounded;
};

const convertToFahrenheit = function(num) {
  let conversion = ((num * (9/5)) + 32);
  let rounded = Math.round(conversion * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
