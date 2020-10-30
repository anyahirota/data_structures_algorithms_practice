function moveElementToEnd(array, toMove) {
  // Write your code here.
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    while (left < right && array[right] === toMove) right--;
    if (array[left] === toMove) swap(array, left, right);
    left++;
  }
  return array;
}

function swap(array, left, right) {
  let temp = array[left];
  array[left] = array[right];
  array[right] = temp;
}


function moveElementToEnd(array, toMove) {
  // Write your code here.
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    if (array[left] === toMove && array[right] !== toMove) {
      array[left] = array[right];
      array[right] = toMove;
    } else if (array[left] !== toMove && array[right] === toMove) {
      left++;
      right--;
    } else if (array[left] === toMove && array[right] === toMove) {
      right--;
    } else {
      left++;
    }
  }
  return array;
}

