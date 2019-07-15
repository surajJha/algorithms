function getDiff(o1, o2, s1, s2) {
	let diff = 0;
	for (const key in o1) {
		if (s1.indexOf(key) !== -1) {
			const d = Math.abs(o1[key] - o2[key]);
			diff += d;

			console.log('char ', key);
			console.log('first val ', o1[key]);
			console.log('second val ', o2[key]);
			console.log('diff ', d);
			console.log('final difference ----- ', diff);
		}
	}
	return diff;
}

function getCharCounts(s, obj) {
	const counts = Object.assign({}, obj);
	for (let i = 0; i < s.length; i++) {
		counts[s[i]] = counts[s[i]] + 1;
	}
	return counts;
}

// Complete the anagram function below.
function anagram(s) {
	if (s.length % 2 !== 0) { return -1; }
	const s1 = s.slice(0, s.length / 2);
	const s2 = s.slice(s.length / 2);
	const obj = {
		a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0, m: 0, n: 0, o: 0, p: 0, q: 0, r: 0, s: 0, t: 0, u: 0, v: 0, w: 0, x: 0, y: 0, z: 0,
	};
	const s1counts = getCharCounts(s1.split(''), obj);
	const s2counts = getCharCounts(s2.split(''), obj);
	console.log('s1   ', s1counts);
	console.log('s2   ', s2counts);
	const diff = getDiff(s1counts, s2counts, s1, s2);
	return diff;
}


const s = 'xaxbbbxx';
const result = anagram(s);
console.log(result);
// xaxb     bbxx

