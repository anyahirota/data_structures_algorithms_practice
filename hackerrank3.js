
function playSegments(coins) {
  // Write your code here
  let player2 = 0;
  let numPlays = 0;
  let player1 = 0;
  for (let i = 0; i < coins.length; i++) {
    if (coins[i] === 1) player2 += 1;
    if (coins[i] === 0) player2 -= 1;
  }
  for (let j = 0; j < coins.length; j++) {
    if (player1 > player2) return numPlays;
    numPlays++;
    if (coins[j] === 1) {
      player1 += 1;
      player2 -= 1;
    }
    if (coins[j] === 0) {
      player1 -= 1;
      player2 += 1;
    }
  }
  return numPlays;
}

/*
 * Complete the 'calculateCost' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY arr
 *  2. INTEGER threshold
 */

function calculateCost(arr, threshold) {
    // Write your code here - too long 
    let length = 1;
    let lowestCost = null;  
    while (length <= threshold) {
        if (arr.length % length === 0) { 
            let arrCopy = arr.slice(0);    
            let sum = 0; 
            while (arrCopy.length > 0) {
                let subArr = arrCopy.splice(0, length); 
                sum += Math.max(...subArr);  
            }
            if (lowestCost === null || sum < lowestCost) {
                lowestCost = sum; 
            }
            length += 1; 
        }
    }
    return lowestCost; 
}

/*
 * Complete the 'maximumLearning' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY iv
 *  2. INTEGER_ARRAY articles
 *  3. INTEGER p
 */

function maximumLearning(iv, articles, p) {
    // Write your code here

}

