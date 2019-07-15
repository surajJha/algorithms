/**
 *
 * A child is running up a staircase with n steps
 * and can hop either 1 step, 2 steps, or 3 steps at a time.
 * Implement a method to count how many possible ways the child can run up the stairs.
 * Allowed number of steps are 1,2 or 3
 * @param n
 * @returns {number}
 */

function threeStepRecursive(n) {
	// there is only one way of taking 0 or 1 step
	if (n === 0 || n === 1) { return 1; }
	// there are two ways of moving 2 steps , 1,1 or directly 2
	if (n === 2) { return 2; }
	// recursively calculate for 3,2 and 1 step taken at a time
	return threeStepRecursive(n - 3) + threeStepRecursive(n - 2) + threeStepRecursive(n - 1);
}
console.time('start');
console.log(threeStepRecursive(40));
console.timeEnd('start');

