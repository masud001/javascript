// if else conditions
let hour = 5;
console.log(typeof hour);
if (hour >= 6 && hour < 12) console.log("Good Morning!");
else if (hour >= 12 && hour < 18) console.log("Good Afternoon!");
else console.log("Good Evening");

// switch conditions start

let role = "Modarator";

switch (role) {
	case "User":
		console.log(`Welcome ${role}`);
		break;
	case "Guest":
		console.log(`Welcome ${role}`);
		break;
	case "Modarator":
		console.log(`Welcome ${role}`);
		break;
	default:
		console.log(`Default user : ${role}`);
}

// for loop in javascript
// for (initializations; conditions; increments/decrements) { }

for (let index = 0; index <= 5; index++) {
	if (index % 2 !== 0) {
		console.log(index);
	}
}

// while loop in javaScript
console.log("while loop in javaScript");
let i = 0;
while (i <= 5) {
	if (i % 2 !== 0) {
		console.log(i);
	}
	i++;
}

// do while loop
console.log("do while loop");
let j = 9;
do {
	if (j % 2 !== 0) {
		console.log(j);
	}
	j++;
} while (j <= 5);

// for In/Of loop which is works with object and array
let person = {
	name: "Masud",
	age: 20,
	color: "black",
	height: 5
};

// for in loop is wrking with Object
for (const key in person) {
	if (person.hasOwnProperty(key)) {
		const element = person[key];
		console.log(key + " : " + element);
	}
}

// for of loop is working with array

const color = ["green", "red", "yellow", "pink"];
for (const colors of color) {
	console.log(colors);
}
