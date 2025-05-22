//Loop trough array and check if arr contains num and if does remove them from arr


const removeFromArray = function(arr, ...items) {
  const indexToDelete = arr.filter(item => !items.includes(item))
  return indexToDelete
};

// Do not edit below this line
module.exports = removeFromArray;
