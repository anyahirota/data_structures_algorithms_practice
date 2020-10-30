class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// function validateBst(tree) {
//   // Write your code here.
// 	if(tree === null) return true;
// 	if (tree.left !== null && tree.left.value >= tree.value) return false;
// 	if (tree.right !== null && tree.right.value < tree.value) return false;
// 	return validateBst(tree.right) && validateBst(tree.left);
// }

function validateBst(tree) {
  // Write your code here.
  return validateBstHelper(tree, -Infinity, Infinity);
}

//node value has to be between min and max value to be valid
function validateBstHelper(tree, minValue, maxValue) {
  if (tree === null) return true;
  if (tree.value >= maxValue || tree.value < minValue) return false;
  return (
    validateBstHelper(tree.right, tree.value, maxValue) &&
    validateBstHelper(tree.left, minValue, tree.value)
  );
}
