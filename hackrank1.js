//  https://github.com/samisherif95/HackerRankChallengeCodingProblems
// edit problems on monday
// every monday new hackerrank review - do hacker rank challenge Thursday?

// function maximumSum(arr) {
//   // Write your code here
//   let maxSum = arr[0];
//   let currentSum = 0;
//   for (let i = 0; i < arr.length; i++) {

//     //compare using maxSum = math.max; currentSum = math.max

//     let num = arr[i];
//     console.log(`curr: ${currentSum}`);
//     if (currentSum > maxSum) {
//       maxSum = currentSum;
//       console.log(`max: ${maxSum}`);
//     } else if (currentSum < maxSum) {
//       currentSum = 0;
//     }
//   }
//   return maxSum;

// }

function maximumSum(arr) {
  // Write your code here
  let maxHere = arr[0]; //3
  let maxSofar = arr[0]; //10
  for (let i = 1; i < arr.length; i++) {
    let num = arr[i];
    maxHere = Math.max(num, maxHere + num);
    maxSofar = Math.max(maxHere, maxSofar);
  }
  return maxSofar;
}

// function countPairs(numbers, k) {
//   // Write your code here
//   const aValues = new Set(); 
//   for (let i = 0; i < numbers.length; i++) {
//       let a = numbers[i] - k 
//       if (aValues.has(a)) {
//           continue
//       } else {
//           aValues.add(a); 
//       }
//   }

//   let count = 0; 
//   for (let i = 0; i < numbers.length; i++) {

//   }
// }

function countPairs(numbers, k) {
  // set to save the values of a where a = b - k
  const aValues = new Set(); //{0,1}
  for (let i = 0; i < numbers.length; i++) {
    let a = numbers[i] - k; //
    if (aValues.has(a)) {
      continue;
    } else {
      aValues.add(a);
    }
  }

  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (aValues.has(numbers[i])) {
      //{0}
      count++;
      aValues.delete(numbers[i]);
    }
  }
  return count;
}


// function getMinimumDifference(a, b) {
//   // Write your code here
//   let output = [];
//   for (let i = 0; i < a.length; i++) {
//     if (a[i].length == !b[i].length) {
//       output.push(-1);
//     } else {
//         //create hash
//         //a increment for each character
//         //b decrement for each character
//         //if value is negative than turn to positive
//         //some all values 
//       let chars = a[i];
//       let count = 0;
//       for (let j = 0; j < chars.length; j++) {
//         if (!b[i].includes(chars[j])) {
//           count += 1;
//           //delete that character

//         }
//       }
//       output.push(count);
//     }
//   }
//   return output;
// }

function getMinimumDifference(a, b) {
  // Write your code here
  let result = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i].length !== b[i].length) result.push(-1);
    else result.push(anagram(a[i], b[i]));
  }
  return result;
}
//tea

//{t:1,e:1,a:1}

//too

//{t:0,e:1,a:1,o:-1}

function anagram(word1, word2) {
  let hash = {};
  word1.split("").forEach((char) => {
    if (!hash[char]) hash[char] = 0;
    hash[char] += 1;
  });
  word2.split("").forEach((char) => {
    if (hash[char]) {
      hash[char] -= 1;
    } else if (!hash[char]) {
      hash[char] = 0;
    }
  });
  Object.keys(hash).forEach((char) => {
    if (hash[char] < 0) {
      hash[char] = -hash[char];
    }
  });
  return sum(Object.values(hash));
}

function sum(array) {
  return array.reduce((a, b) => a + b);
}

// function findLowestPrice(products, discounts) {
//   // Write your code here
// }

function findLowestPrice(products, discounts) {
  const discountMap = createDiscountMap(discounts);
  let total = 0;
  let t2 = 0;

  for (let i = 0; i < products.length; i++) {
    const price = parseInt(products[i][0]);
    t2 += price;
    let best = price;
    for (let j = 1; j < products[i].length; j++) {
      const newPrice = calcDiscountPrice(discountMap, products[i][j], price);
      best = Math.min(best, newPrice);
    }
    total += best;
  }

  return total;
}

const calcDiscountPrice = (discountMap, name, originalPrice) => {
  if (discountMap[name] === undefined) return originalPrice;

  switch (discountMap[name].type) {
    case 0:
      return discountMap[name].val;

    case 1:
      return Math.round(
        originalPrice - originalPrice * (discountMap[name].val / 100)
      );

    case 2:
      return Math.round(originalPrice - discountMap[name].val);

    default:
      return originalPrice;
  }
};

const createDiscountMap = (arr) => {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    map[item[0]] = { type: parseInt(item[1]), val: parseInt(item[2]) };
  }
  return map;
};