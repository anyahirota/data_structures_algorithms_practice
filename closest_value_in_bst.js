// too verbose but optimal ST O(log(n)) T O(1) space avg
// worst O(n)

function findClosestValueInBst(tree, target) {
  let closestNodeSoFar = tree.value;
  let currentNode = tree;

  while (currentNode.left !== null || currentNode.right !== null) {
    let currDiff = Math.abs(closestNodeSoFar - target);
    if (currentNode.left !== null && currentNode.right !== null) {
      if (target < currentNode.value) {
        currentNode = currentNode.left;
        let leftDiff = Math.abs(currentNode.value - target);
        if (leftDiff < currDiff) {
          closestNodeSoFar = currentNode.value;
        }
      } else if (target > currentNode.value) {
        currentNode = currentNode.right;
        let rightDiff = Math.abs(currentNode.value - target);
        if (rightDiff < currDiff) {
          closestNodeSoFar = currentNode.value;
        }
      } else {
        return target;
      }
    } else if (currentNode.left !== null) {
      currentNode = currentNode.left;
      let ld = Math.abs(currentNode.value - target);
      if (ld < currDiff) {
        closestNodeSoFar = currentNode.value;
      }
    } else if (currentNode.right !== null) {
      currentNode = currentNode.right;
      let rd = Math.abs(currentNode.value - target);
      if (rd < currDiff) {
        closestNodeSoFar = currentNode.value;
      }
    }
  }
  return closestNodeSoFar;
  // Write your code here.
  // keep track of closestNodeSoFar - first by saving the value of root
  // also track currentNode - root
  // start traversal by creating a loop normally
  // reset closest node so far if difference between node and target is less than difference between closest so far and target
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;


// better written - more space required because it recursive
// O(log(n)) T
// O(log(n)) S


function findClosestValueInBst(tree, target) {
  // Write your code here.
  return findClosestValueInBstHelper(tree, target, tree.value);
}

function findClosestValueInBstHelper(tree, target, closest) {
  if (tree === null) return closest;
  if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
    closest = tree.value;
  }

  if (target < tree.value) {
    return findClosestValueInBstHelper(tree.left, target, closest);
  } else if (target > tree.value) {
    return findClosestValueInBstHelper(tree.right, target, closest);
  } else {
    return closest;
  }
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;
