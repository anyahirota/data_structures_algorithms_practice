function selectionSort(array) {
  // Write your code here.
  let idx = 0;
  while (idx < array.length) {
    let min = idx;
    for (let i = idx + 1; i < array.length; i++) {
      if (array[min] > array[i]) {
        min = i;
      }
    }
    let temp = array[min];
    array[min] = array[idx];
    array[idx] = temp;
    idx++;
  }
  return array;
}

// Do not edit the line below.
exports.selectionSort = selectionSort;
