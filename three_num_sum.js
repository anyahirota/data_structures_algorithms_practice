function threeNumberSum(array, targetSum) {
  // Write your code here.
  let output = [];

  array.sort((a, b) => a - b);

  for (let i = 0; i < array.length; i++) {
    let left = i + 1;
    let right = array.length - 1;

    while (left < right) {
      let sum = array[i] + array[left] + array[right];
      if (sum === targetSum) {
        output.push([array[i], array[left], array[right]]);
        left++;
        right--;
      } else if (sum < targetSum) {
        left++;
      } else {
        right--;
      }
    }
  }

  return output;
}

// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;
