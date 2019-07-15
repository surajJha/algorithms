/**
 * this is a top-down dynamic programming approach. In a bottom up
 * approach, we will calculate all the fib numbers from 2 to n and
 * store them in an array in step 1. then we can directly use them.
 * @param n
 * @param memo
 * @returns {*}
 */
function fibonachhiDynamic(n, memo) {
	if (n === 0 || n === 1) { return n; }
	if (!memo[n]) {
		memo[n] = fibonachhiDynamic(n - 1, memo) + fibonachhiDynamic(n - 2, memo);
	}
	return memo[n];
}

/**
 * This is the driver function
 * @param n
 * @returns {*}
 */
function fibo(n) {
	const memo = [];
	return fibonachhiDynamic(n, memo);
}

console.time('start');
console.log(fibo(40));
console.timeEnd('start');
