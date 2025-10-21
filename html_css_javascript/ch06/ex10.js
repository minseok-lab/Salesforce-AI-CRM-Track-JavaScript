var hege = ["Cecilie", "Lone"];
var stale = ["Emil", "Tobias", "Linus"];
var children = hege.concat(stale);

console.log(children);
// ["Cecilie", "Lone", "Emil", "Tobias", "Linus"]

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);
// ["Apple", "Banana", "Mango", "Orange"]

var energy = fruits.join();
console.log(energy);
// "Apple,Banana,Mango,Orange"

fruits.push("Kiwi");
console.log(fruits);
// ["Apple", "Banana", "Mango", "Orange", "Kiwi"]

console.log(fruits.pop());
// "Kiwi"
console.log(fruits.pop());
// "Orange"

console.log(fruits);
// ["Apple", "Banana", "Mango"]