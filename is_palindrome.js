//O(n) time
//O(1) space

function isPalindrome(string) {
  // Write your code here.
  let idx = string.length - 1;

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[idx]) {
      return false;
    }
    idx -= 1;
  }
  return true;
}

// Do not edit the line below.
exports.isPalindrome = isPalindrome;
