const palindromes = function (text) {
  let reverseText = "";
  text = text.toLowerCase();
  text = text.replace(/[^\w\s\']|_/g, "");
  text = text.replace(/\s/g, "");
  for (i=text.length - 1; i >= 0; i--) {
    reverseText += text[i];
  }
  const result = text === reverseText ? true : false;
  return result;
}

// Do not edit below this line
module.exports = palindromes;
