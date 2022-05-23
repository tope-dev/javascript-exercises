const leapYears = function (year) {
  if ((year % 4) === 0) {  // Check if divisible by 4 
    if ((year % 100 === 0) && (year % 400 !== 0)) { // years divisible by 100 are not leap years (such as 1800 and 1900) unless they are divisible by 400
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
