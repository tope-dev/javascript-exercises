const palindromes = function (text) {

  // MY APPROACH

  // let reverseText = "";
  // text = text.toLowerCase();
  // text = text.replace(/[^\w\s\']|_/g, "");
  // text = text.replace(/\s/g, "");
  // for (i=text.length - 1; i >= 0; i--) {
  //   reverseText += text[i];
  // }
  // const result = text === reverseText ? true : false;
  // return result;
  
  // SOLUTION APPROACH
  processedString = text.toLowerCase().replace(/[^a-z]/g, "");
    return (
      processedString
        .split("")
        .reverse()
        .join("") == processedString
    );
}



// Do not edit below this line
module.exports = palindromes;
