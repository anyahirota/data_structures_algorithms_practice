//  https://github.com/samisherif95/HackerRankChallengeCodingProblems
// edit problems on monday
// every monday new hackerrank review - do hacker rank challenge Thursday?

function maximumSum(arr) {
  // Write your code here
  let maxSum = arr[0];
  let currentSum = 0;
  for (let i = 0; i < arr.length; i++) {

    //compare using maxSum = math.max; currentSum = math.max

    let num = arr[i];
    console.log(`curr: ${currentSum}`);
    if (currentSum > maxSum) {
      maxSum = currentSum;
      console.log(`max: ${maxSum}`);
    } else if (currentSum < maxSum) {
      currentSum = 0;
    }
  }
  return maxSum;

}

function countPairs(numbers, k) {
  // Write your code here
  const aValues = new Set(); 
  for (let i = 0; i < numbers.length; i++) {
      let a = numbers[i] - k 
      if (aValues.has(a)) {
          continue
      } else {
          aValues.add(a); 
      }
  }

  let count = 0; 
  for (let i = 0; i < numbers.length; i++) {

  }
}

function getMinimumDifference(a, b) {
  // Write your code here
  let output = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i].length == !b[i].length) {
      output.push(-1);
    } else {
        //create hash
        //a increment for each character
        //b decrement for each character
        //if value is negative than turn to positive
        //some all values 
      let chars = a[i];
      let count = 0;
      for (let j = 0; j < chars.length; j++) {
        if (!b[i].includes(chars[j])) {
          count += 1;
          //delete that character

        }
      }
      output.push(count);
    }
  }
  return output;
}

function findLowestPrice(products, discounts) {
  // Write your code here
}