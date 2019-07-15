
a = [1, 2, 3, 4, 5];
d = 4;
function rotLeft(a, d) {
	for (let i = 0; i < d; i++) {
		const x = a.shift();
		a.push(x);
	}
	return a.join(' ');
}

console.log(rotLeft(a, d));
