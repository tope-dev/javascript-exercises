const removeFromArray = function () {
  let args = Array.from(arguments);
  let array = args[0];

  for (let i = 1; i < args.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] === args[i]) {
        array.splice(j, 1);
      }
    }
  }
  return array;
}
// Do not edit below this line
module.exports = removeFromArray;
