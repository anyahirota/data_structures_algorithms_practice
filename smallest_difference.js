//O(nlog(n) + mlog(m)) time
//O(1) space

function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let arrIdx = 0;
  let arrIdx2 = 0;
  let lowestSum = null;
  let currSum = null;
  let resultArr = [];
  while (arrIdx < arrayOne.length && arrIdx2 < arrayTwo.length) {
    let firstNum = arrayOne[arrIdx];
    let secondNum = arrayTwo[arrIdx2];
    if (firstNum < secondNum) {
      currSum = secondNum - firstNum;
      arrIdx++;
    } else if (secondNum < firstNum) {
      currSum = firstNum - secondNum;
      arrIdx2++;
    } else {
        // if equal to each other, sum === 0
      return [firstNum, secondNum];
    }

    if (currSum < lowestSum || lowestSum === null) {
      lowestSum = currSum;
      resultArr = [firstNum, secondNum];
    }
  }

  return resultArr;
}

// Do not edit the line below.
exports.smallestDifference = smallestDifference;

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
