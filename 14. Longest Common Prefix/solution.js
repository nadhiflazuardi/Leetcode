/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let output = "";
  let iter = 0;

  // if list is empty, return output
  if (strs.length == 0) {
    return output;
  }

  // loop nonstop until mismatch is found
  while (true) {
    let letter = "";

    // loop through each element of the list
    for (i = 0; i < strs.length; i++) {
      // return output if element length = iter,
      // because there will be no more letter to append
      if (strs[i].length == iter) {
        return output;
      }

      // if letter is empty,
      // strs[i] is the first element of strs
      // store the letter to the variable
      if (!letter) {
        letter = strs[i][iter];
      }

      // if mismatch happens, return output
      if (strs[i][iter] !== letter) {
        return output;
      }
    }
    // if no mismatch throughout the elements, append letter to output
    output += letter;
    // add 1 to the iteration counter
    iter += 1;
  }
};
