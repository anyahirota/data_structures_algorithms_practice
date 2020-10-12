//o(n) time o(h) space h = the height of the tree;

function nodeDepths(root) {
  // Write your code here.
  // recursive traverse through tree
  // keep track of the current depth
  // keep track of the sum
  return calculateDepths(root, 0);
  // if (root === null) return 0;
  // return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1);
}

function calculateDepths(node, depth) {
  if (node === null) return 0;
  return (
    depth +
    calculateDepths(node.left, depth + 1) +
    calculateDepths(node.right, depth + 1)
  );
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.nodeDepths = nodeDepths;
