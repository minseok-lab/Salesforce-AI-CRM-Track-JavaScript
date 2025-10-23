const users = {
		"userA" : [50, 60, 70],
		"userB" : [80, 90, 100],
		"userC" : [75, 80, 90]
	}
	const { userA, userB } = users;
	const arr = [...userA, ...userB];
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	console.log(`userA와 userB의 점수 합계는 ${ sum }점.`);