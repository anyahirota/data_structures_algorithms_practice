//O(n) Time
//O(1) Space

function findThreeLargestNumbers(array) {
  // Write your code here.
	//create a saved array of 3 null
	//loop through array if number is larger than last number 
	//push last two positions forward; then check middle; then check first
	
	let resultsArray = [null, null, null]; 
	
	for (let i = 0; i < array.length; i++) {
		if (array[i] >= resultsArray[2] || resultsArray[2] === null) {
			resultsArray[0] = resultsArray[1]; 
			resultsArray[1] = resultsArray[2]; 
			resultsArray[2] = array[i]; 
		} else if (array[i] >= resultsArray[1] || resultsArray[1] === null) {
			resultsArray[0] = resultsArray[1]; 
			resultsArray[1] = array[i];
		} else if (array[i] >= resultsArray[0] || resultsArray[0] === null) {
			resultsArray[0] = array[i]; 
		}
	}
	
	return resultsArray; 
}

// Do not edit the line below.
exports.findThreeLargestNumbers = findThreeLargestNumbers;