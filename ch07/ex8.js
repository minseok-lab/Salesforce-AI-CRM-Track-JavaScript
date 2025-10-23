let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr1, ...arr2];

console.log(arr3);

let obj1 = { "id": "a1234", "name": "홍길동" };
let obj2 = { "country": "korea", "city" : "seoul" };
let obj3 = { ...obj1, ...obj2 };

console.log(obj3);