const fibonacci = function(index) {
  let array = [1,1];
  let number = 0;
  index = parseInt(index);
  if (index <= 0) return "OOPS";
  for (i=1; i <= index; i++) {
    number = array[i-1] + array[i];
    array.push(number);
  }
  return array[index - 1];
};

// Do not edit below this line
module.exports = fibonacci;
