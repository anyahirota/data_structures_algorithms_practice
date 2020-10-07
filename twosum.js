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


// O(nlog(n)) time; 
// O(1) space; 

function twoNumberSum(array, targetSum) {
    array.sort((a , b) => a-b); 
    let left = 0; 
    let right = array.length -1; 
    while (left < right) {
        const currentSum = array[left] + array[right]; 
        if (currentSum === targetSum) {
            return [array[left], array[right]]; 
        } else if (currentSum < targetSum) {
            left++;
        } else if (currentSum > targetSum) {
            right--;
        }
    }
    return []; 
}
