// This is the class of the input root.
// Do not edit it.

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//pass in running sum
//recursive
//time o(n);
//space o(n) //bounded by o(n) which is approximate number of leaf nodes

function branchSums(root) {
  // Write your code here.
  let sums = [];
  calculateBranchSums(root, 0, sums);
  return sums;
}

function calculateBranchSums(node, runningSum, sums) {
  if (node === null) return;
  let newRunningSum = runningSum + node.value;
  if (node.left === null && node.right === null) {
    sums.push(newRunningSum);
    return;
  }

  calculateBranchSums(node.left, newRunningSum, sums);
  calculateBranchSums(node.right, newRunningSum, sums);
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;
