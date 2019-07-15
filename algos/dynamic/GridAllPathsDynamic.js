/**
 * Count all possible paths from top left to bottom right of a mXn matrix
 The problem is to count all the possible paths from top left to bottom right
 of a mXn matrix with the constraints that from each cell you can either move
 only to right or down
 */

function countPathsDynamic(row, col) {
	const cache = [];
	// initializing the cache mxn array with null values
	for (let i = 0; i < row; i++) {
		cache[i] = [];
		for (let j = 0; j < col; j++) {
			cache[i][j] = null;
		}
	}
	// for the first column, we can have only one path to reach anywhere
	for (let i = 0; i < row; i++) {
	    cache[i][0] = 1;
	}
	// for the first row, we can have only one patch to reach anywhere
	for (let j = 0; j < col; j++) {
		cache[0][j] = 1;
	}
	// caching the recursive call in bottom-top fashion and returning the last filled cell
	for (let i = 1; i < row; i++) {
	    for (let j = 1; j < col; j++) {
	        cache[i][j] = cache[i - 1][j] + cache[i][j - 1];
		}
	}
	return cache[row - 1][col - 1];
}


console.log(countPathsDynamic(3, 3));
