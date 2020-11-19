/*
You are given a non-empty array of integers. Each element represents the max number of steps you can take forward. For example, if the element at index 1 is 3, you can go from index 1 to index 2, 3, or 4. Write a function that returns the min number of jumps needed to reach the final index.

Note that jumping from index i to index i + x always constitutes 1 jump, no matter how large x is.


examples:
input: [3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3]
output: 4

input: [2, 1]
output: 1

(3 => 2 => 2 => 7 => 3)
*/

function minJumps(array, jumps = 0) {
  // base case
  if (array.length === 1) return jumps;

  let length = array.shift();
  let result = Infinity;
  // loop starts here
  for (let i = 0; i < length; i++) {
    let nextJump = array.slice(i);
    let current = minJumps(nextJump, jumps + 1);
    result = Math.min(current, result);
  }

  return result;
}

console.log(minJumps([9, 3, 1, 5, 3, 1, 1, 1]));
console.log(minJumps([1, 2, 1, 7]));
console.log(minJumps([8, 3, 1, 5, 2, 8]));
console.log(minJumps([9, 4, 1, 0, 4]));
console.log(minJumps([1, 0, 0, 0, 0]));
