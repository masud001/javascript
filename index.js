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
