setTimeout(() => console.log(1), 100)
setTimeout(() => console.log(2), 0)

Promise.resolve(42).then(() => {
	console.log(3);
	setTimeout(() => console.log(4), 50);
})
	.then(() => Promise.reject(new Error(22)))
	.then(() => console.log(5))
	.catch((e) => console.log(6, e.message))

console.log(7)

/* answers: */
/*
7
3
6 22
2

4
1
*/
