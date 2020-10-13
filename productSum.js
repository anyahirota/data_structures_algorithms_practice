// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.


// O(n) time 
// O(d) space - d is the maximum depth of the special array

function productSum(array, depth = 1) {
  // Write your code here.
  // keep track of depth
  // keep track of sum
  let sum = 0;

  array.forEach((subarr) => {
    if (!Array.isArray(subarr)) {
      sum += subarr;
    } else {
      sum += productSum(subarr, depth + 1);
    }
  });

  return sum * depth;
}

// Do not edit the line below.
exports.productSum = productSum;
