const sumAll = function(min , max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
  if (min < 0 || max < 0) return "ERROR";
  if (min > max) {
    [min, max] = [max, min]
  }

    let sum = 0;
    for(let i = min; i <= max; i++) {
        sum += i
    }
    return sum
};


// Do not edit below this line
module.exports = sumAll;

// Write function that takes 2 numbers min and max
// If min or max is not a number return ERROR
// If min or max is negative number return ERROR
// If min > max then we swap values 
// Loop trough the given numbers
// Return sum of the given numbers