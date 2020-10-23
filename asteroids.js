// We are given an array asteroids of integers representing asteroids in a row.
// For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.
// Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.
// Example 1: 
// Input:
// asteroids = [1,2,3,-3,4,-2]
// Output = [1,2,4]


// Note:
// The length of asteroids will be at most 10000.
// Each asteroid will be a non-zero integer in the range [-1000, 1000]


function asteroids(array){ 
    let stack = [array[0]];    // []
    for(let i = 1; i < array.length; i++ ){
		if(array[i] > 0) {
            stack.push(array[i])
        } else {
            if(stack[stack.length-1] < 0 ) {
                stack.push(array[i]); 
            } else {
               while(stack.length && stack[stack.length-1] > 0) {
                    let top = stack.pop(); 
                    if(top === -array[i]){
                        break; 
                    } else if (top > -array[i]) {
                        stack.push(top);
	                    break;
                    } else {
                        if(stack.length === 0) stack.push(array[i]);
	                    continue;
                    }
               } 
            }
        }
    }
    return stack; 
}

	
