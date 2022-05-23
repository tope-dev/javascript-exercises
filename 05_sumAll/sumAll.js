const sumAll = function(num1, num2) {
  let sum = 0;
  let number1 = 0;
  let number2 =0;

  // Assign the num1 as lowest number
  if (num1 < num2) {
    number1 = num1;
    number2 = num2;
  } else {
    number1 = num2;
    number2 = num1;
  }

  // returns ERROR with the negative numbers
  if ((num1 < 0) || (num2 < 0)) return 'ERROR';

  // returns ERROR with non-number parameters
  if ((typeof num1 != 'number') || (typeof num2 != 'number')) return 'ERROR';


  for(i = number1; i <= number2; i++) {
    sum = sum + i;
  }
  return sum;
}

// Do not edit below this line
module.exports = sumAll;
