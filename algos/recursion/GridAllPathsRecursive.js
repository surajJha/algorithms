/**
 * Count all possible paths from top left to bottom right of a mXn matrix
 The problem is to count all the possible paths from top left to bottom right
 of a mXn matrix with the constraints that from each cell you can either move
 only to right or down
 */


function countPaths(row, col) {
	if (row === 1 || col === 1) { return 1; }

	return countPaths(row - 1, col) + countPaths(row, col - 1);
}

const row = 2;
const col = 3;
console.log(countPaths(row, col));
