//o(log(n)) T
//o(1) S

function binarySearch(array, target) {
  // Write your code here.
  return binarySearchHelper(array, target, 0, array.length - 1);
}

function binarySearchHelper(array, target, left, right) {
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const potentialMatch = array[middle];
    if (target === potentialMatch) {
      return middle;
    } else if (target < potentialMatch) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
}

// Do not edit the line below.
exports.binarySearch = binarySearch;

//O(nlog(n)) T
//O(log(n)) S

function binarySearch(array, target) {
  // Write your code here.
  if (array.length < 1) return -1;

  let midIdx = Math.floor(array.length / 2);
  if (array[midIdx] === target) {
    return midIdx;
  } else if (array[midIdx] > target) {
    return binarySearch(array.slice(0, midIdx), target);
  } else {
    let res = binarySearch(array.slice(midIdx + 1, array.length), target);
    if (res !== -1) {
      return res + 1 + midIdx;
    } else {
      return -1;
    }
  }
}

// Do not edit the line below.
exports.binarySearch = binarySearch;

