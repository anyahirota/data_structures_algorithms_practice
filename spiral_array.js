/*
-like going around the perimeter

ex: array = [
	[1,   2,  3, 4], 
	[12, 13, 14, 5], 
	[11, 16, 15, 6], 
	[10,  9,  8, 7]
]

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
*/

function spiralTraverse(array) {
  // Write your code here.
  const result = [];
  let startRow = 0;
  let endRow = array.length - 1;
  let startCol = 0;
  let endCol = array[0].length - 1;

  while (startRow <= endRow && startCol <= endCol) {
    //first traverse the top border
    for (let col = startCol; col <= endCol; col++) {
      result.push(array[startRow][col]);
    }

    //traverse down right border
    for (let row = startRow + 1; row <= endRow; row++) {
      result.push(array[row][endCol]);
    }

    //traverse bottom border right to left
    for (let col = endCol - 1; col >= startCol; col--) {
      if (startRow === endRow) break; //edge case where only a single row in the middle of matrix
      result.push(array[endRow][col]);
    }

    //traverse up left border
    for (let row = endRow - 1; row > startRow; row--) {
      if (startCol === endCol) break; //edge case where only a single col in the middle of matrix
      result.push(array[row][startCol]);
    }

    startRow++;
    endRow--;
    startCol++;
    endCol--;
  }

  return result;
}
