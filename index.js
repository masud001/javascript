// Learning JavaScript Array
// array itself is an Object with key value paries....
// Array is a data structure, that we use to represent list of items
let selectedColors = [
	"red",
	"green",
	"yellow",
	12,
	3,
	22,
	true,
	false,
	undefined,
	null
];
// update an array
selectedColors[2] = "Masud";

console.log(selectedColors);

// adding an array

const numbers = [3, 4];
// add new elements in array
// END
numbers.push(5, 6);
// BEGINNING
numbers.unshift(1, 2);
// MIDDLE
numbers.splice(2, 0, "M", "A", "S", "U", "D");
console.log(numbers);
