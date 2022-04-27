const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount( inStr, cStr) {
  var result = inStr.split('').filter(function(letter) {
    return (cStr.indexOf(letter) > -1);
  });
  return result;
}

// for (i = 0; i < (arr.length-1); i++) { /* перебираем циклом строки из массива */
//   var result = (i == 0) ? compare(arr[i], arr[i+1]) : compare(result.join(''), arr[i+1]);



module.exports = {
  getCommonCharacterCount
};
