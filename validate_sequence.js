//brute force
function isValidSubsequence(array, sequence) {
  // Write your code here.
  let arraySegment = array;
  for (let i = 0; i < sequence.length; i++) {
    if (arraySegment.includes(sequence[i])) {
      arraySegment = arraySegment.slice(arraySegment.indexOf(sequence[i]) + 1);
    } else {
      return false;
    }
  }
  return true;
}

//O(n) time
//O(1) space
function isValidSubsequence(array, sequence) {
  // Write your code here.
  let arrIdx = 0;
  let seqIdx = 0;

  while (arrIdx < array.length && seqIdx < sequence.length) {
    if (array[arrIdx] === sequence[seqIdx]) {
      seqIdx += 1;
    }
    arrIdx += 1;
  }

  return seqIdx === sequence.length;
}



