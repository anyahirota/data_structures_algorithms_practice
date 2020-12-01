// Function NumberOfMoves(n, startRow, StartCol,endRow, EndCol){

// 	Let visited = new Set();
// 	visited.add(`${startRow} - ${startCol}`)
// 	Let count = 0
// Let queue  =[[stratRow, startCol]]
// Const possibleNextMoves = [
// 		[1, 2],
// [-1, 2],
// [-1, -2],
// [1, -2],
// [2, 1],
// [2, -1],
// [-2, 1],
// [-2, -1]
// ]

// while(queue.length){
// 	Let len = queue.length
// 	for(let i=0; i < len;i++){
// 	Let pos = queue.pop()
// 	for(let dir of possibleNextMoves){
// 		Let newX = pos[0]+ dir[0]
// 		Let newY = pos[1]+ dir[1]
// 		if(isValid(neX,newY) && !visited.has(`${newX} - ${newY}`)){
// 			if(endRow === newX && newY === endCol){
// 				Return count+1
// }
// queue.push([newX,newY])
// visited.add(${newX} - ${newY}`)
// }
// }
// }
// count++


// }
// Return -1
	









// }


var floodFill = function(image, sr, sc, newColor) {
    let startValue = image[sr][sc]; 
    let directions = [
        [0,1], 
        [1, 0], 
        [0, -1], 
        [-1, 0]
    ]; 
    let queue = [[sr, sc]]; 
    while (queue.length) {
        let pos = queue.shift(); 
        if (image[pos[0]][pos[1]] === startValue) image[pos[0]][pos[1]] = newColor; 
        for (let dir of directions) {
            let newRow = pos[0] + dir[0]; 
            let newColumn = pos[1] + dir[1];
            if (newRow >= 0 && newRow < image.length && newColumn >= 0 && newColumn < image[0].length) {
                queue.push([newRow, newColumn]); 
            }
        }
    }
    return image; 
};

console.log("hi"); 