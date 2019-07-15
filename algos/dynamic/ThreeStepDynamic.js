function threeStepDynamic(n, cache) {
	if (n === 0 || n === 1) { return 1; }
	if (n === 2) { return 2; }
	if (!cache[n]) { cache[n] = threeStepDynamic(n - 3, cache) + threeStepDynamic(n - 2, cache) + threeStepDynamic(n - 1, cache); }
	return cache[n];
}

const cache = [];
console.log(threeStepDynamic(40, cache));
