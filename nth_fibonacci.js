//O(2^n) time | O(n) space
function getNthFib(n) {
  // Write your code here
  if (n < 2) return 0;
  if (n === 2) return 1;
  return getNthFib(n - 1) + getNthFib(n - 2);
}

// Do not edit the line below.
exports.getNthFib = getNthFib;

//O(n) time | O(n) space
function getNthFib(n, memoize = { 1: 0, 2: 1 }) {
  // Write your code here.
  if (n in memoize) {
    return memoize[n];
  } else {
    memoize[n] = getNthFib(n - 1, memoize) + getNthFib(n - 2, memoize);
    return memoize[n];
  }
}

// Do not edit the line below.
exports.getNthFib = getNthFib;



//O(n) time | O(1) space

function getNthFib(n) {
  // Write your code here.
  const lastTwo = [0, 1];
  let counter = 3;
  while (counter <= n) {
    const nextFib = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = nextFib;
    counter++;
  }
  return n > 1 ? lastTwo[1] : lastTwo[0];
}

// Do not edit the line below.
exports.getNthFib = getNthFib;
