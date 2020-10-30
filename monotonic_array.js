function isMonotonic(array) {
  // Write your code here

  let isIncreasing = true;
  let isDecreasing = true;

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < array[i + 1]) isDecreasing = false;
    if (array[i] > array[i + 1]) isIncreasing = false;
  }

  return isIncreasing || isDecreasing;
}

function isMonotonic(array) {
  // Write your code here.
  if (array.length <= 1) return true;

  let type = null;

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < array[i + 1] && type === null) type = "+";
    if (array[i] > array[i + 1] && type === null) type = "-";
    let currentType = findType(array, i);
    if (type !== currentType && currentType !== null) return false;
  }

  return true;
}

function findType(array, i) {
  if (array[i] < array[i + 1]) {
    return "+";
  } else if (array[i] > array[i + 1]) {
    return "-";
  } else {
    return null;
  }
}