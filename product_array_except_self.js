// ex: input: [1,2,3,4]

// output: [24, 12, 8, 6]
//139. word break - tabulation


/*
sum = 1
left: [1, 1, 2, 6]
right: [24, 12, 4, 1]
*/

var productExceptSelf = function (nums) {
  let output = [];
  let sumLeft = 1;
  let sumRight = 1;
  for (let i = 0; i < nums.length; i++) {
    output.push(sumLeft);
    sumLeft *= nums[i];
  }
  for (let j = nums.length - 1; j >= 0; j--) {
    output[j] *= sumRight;
    sumRight *= nums[j];
  }
  return output;
};

function product_array_except_self2(array) {
    let output = []; 
    let sumLeft = 1; 
    let sumRight = 1; 
    for (let i = 0; i < array.length - 1; i++) {
        output.push(sumLeft); 
        sumLeft *= array[i];
    }
    for (let j = array.length-1; j >= 0; j--) {
        output[j] *= sumRight;
        sumRight *= array[j];
    }
    return output; 
}

// 0. create an output variable = []; 
// 1. save the first integer of the input in a left product variable 
// 2. iterate through input array from idx 1 
// 3. inner loop iterates through the rest array creating the product that we want 
// 4. once product found, then push into output array 

function product_array_except_self(array) {
    let output = []; 
    // let left = array[0]; 
    for (let i = 0; i < array.length; i++) {
        let product = 1; 
        for (let j = 0; j < array.length; j++) {
            if (j !== i) {
                product *= array[j]; 
            }
        }
        output.push(product); 
    }
    return output; 
}