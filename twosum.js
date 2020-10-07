function twoNumberSum(array, targetSum) {
  // Write your code here.
  const sumEls = [];
  const remainders = {};
  for (let i = 0; i < array.length; i++) {
    let remainder = targetSum - array[i];
    if (remainders[array[i]]) {
      sumEls.push(array[i], remainder);
    } else {
      remainders[remainder] = true;
    }
  }
  return sumEls;
}

// O(n) space; 
// 0(n) time; 

function twoNumberSum(array, targetSum) {
  // Write your code here.
  const sumEls = [];
  const remainders = {};
  for (let i = 0; i < array.length; i++) {
    let remainder = targetSum - array[i];
    if (remainders[array[i]]) {
      sumEls.push(array[i], remainder);
    } else {
      remainders[remainder] = true;
    }
  }
  return sumEls;
}