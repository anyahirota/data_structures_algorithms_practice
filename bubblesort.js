//Best: O(n) time | O(1) Space - if given a sorted array
//Average: O(n^2) time | O(1) Space
//Worst: O(n^2) time | O(1) Space

function bubbleSort(array) {
  // Write your code here.
  let sorted = false;
  let counter = 0;

  while (sorted === false) {
    sorted = true;
    for (let i = 0; i < array.length - 1 - counter; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        sorted = false;
      }
    }
    counter++;
  }
  return array;
}

// Do not edit the line below.
exports.bubbleSort = bubbleSort;
