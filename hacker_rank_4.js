
function maxTickets(tickets) {
  tickets.sort((a, b) => a - b);
  if (tickets.length === 0) return 0;
  if (tickets.length === 1) return 1;
  let m = 1;
  let longestM = 0;
  let previous = tickets[0];
  for (let i = 1; i < tickets.length; i++) {
    if (tickets[i] - previous === 0 || tickets[i] - previous === 1) {
      m++;
      if (m > longestM) longestM = m;
    } else {
      m = 1;
    }
    previous = tickets[i];
  }
  return longestM;
}

function efficientJanitor(weight) {
  // Write your code here
  weight.sort((a, b) => a - b);
  let left = 0;
  let right = weight.length - 1;
  let trips = 0;
  while (left <= right) {
    if (weight[left] + weight[right] <= 3.0) {
      trips++;
      left++;
      right--;
    } else {
      trips++;
      right--;
    }
  }

  return trips;
}

function minimumMoves(arr1, arr2) {
  // Write your code here
  let newArr1 = arr1.join("");
  let newArr2 = arr2.join("");
  let count = 0;
  if (newArr1.length === newArr2.length) {
    for (let i = newArr1.length - 1; i >= 0; i--) {
      let num1 = parseInt(newArr1[i]);
      let num2 = parseInt(newArr2[i]);
      count += Math.abs(num1 - num2);
    }
  } else {
    //find longer arr and shorter array
    //iterate from back until shorter arr is done - save that index
    //iterate from front of longer array until that saved index - adding that number to the count
  }
  return count;
}
