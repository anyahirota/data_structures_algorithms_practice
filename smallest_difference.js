

// Unoptomized
// O(n^2) time
// O(1) space

function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
  let lowestSoFar = null;
  let lowestPair = null;

  for (let i = 0; i < arrayOne.length; i++) {
    let el = arrayOne[i];
    for (let j = 0; j < arrayTwo.length; j++) {
      let el2 = arrayTwo[j];
      let diff = Math.abs(el - el2);
      if (lowestSoFar === null || diff < lowestSoFar) {
        lowestSoFar = diff;
        lowestPair = [el, el2];
      }
    }
  }

  return lowestPair;
}

// Do not edit the line below.
exports.smallestDifference = smallestDifference;
