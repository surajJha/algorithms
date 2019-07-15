const grid = [
	[1, 1, 0, 0, 0],
	[0, 1, 0, 0, 1],
	[1, 0, 0, 1, 1],
	[0, 0, 0, 0, 0]
		[1, 0, 1, 0, 1],
];

const numIslands = function (grid) {
	const visited = initVisited(grid);
	let count = 0;
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			if (grid[i][j] == 1 && !visited[i][j]) {
				//  console.log(grid[i][j] == 1 && !visited[i][j]);
				dfs(grid, i, j, visited);
				count++;
			}
		}
	}

	console.log(`total number of islands is -> ${count}`);
};

var dfs = function (grid, row, col, visited) {
	const rowNumbers = [-1, -1, -1, 0, 0, 0, 1, 1, 1];
	const colNumbers = [-1, 0, 1, -1, 1, -1, 0, 1];

	visited[row][col] = true;
	console.log('set visited to true for ', row, col);
	for (let k = 0; k < 8; k++) {
		// console.log("isVisited " + visited[row][col]);
		console.log('-----------------------------------------');
		console.log('row : ', row);
		console.log('col : ', col);
		console.log('neighbour : ', row + rowNumbers[k], col + colNumbers[k]);

		console.log(row + rowNumbers[k] >= 0);
		console.log(row + rowNumbers[k] < grid.length);
		console.log(col + colNumbers[k] >= 0);
		console.log(col + colNumbers[k] < grid[row].length);
		console.log(grid[row][col] == 1);
		console.log(visited[row][col]);
		// console.log("should dfs be called ", (row + rowNumbers[k] >= 0) && (row + rowNumbers[k] < grid.length) && (col + colNumbers[k] >= 0) && (col + colNumbers[k] < grid[row].length) && (grid[row][col] == 1) && (!visited[row][col]));
		if ((row + rowNumbers[k] >= 0) && (row + rowNumbers[k] < grid.length) && (col + colNumbers[k] >= 0) && (col + colNumbers[k] < grid[row].length) && (grid[row][col] == 1) && (!visited[row][col])) {
			console.log('dfs called');
			dfs(grid, row + rowNumbers[k], col + colNumbers[k], visited);
		}
	}
};

var initVisited = function (grid) {
	const visited = [];
	for (var i = 0; i < grid.length; i++) {
		visited[i] = grid.slice();
	}
	for (var i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			visited[i][j] = false;
		}
	}
	return visited;
};

numIslands(grid);
