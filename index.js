// object-oriented programming (OOP)

// circle object

// circle.draw();

// factory function to create an object in javascript,
// no need to write NEW keyword....
// Factory Function
function createCircle(radius) {
	return {
		radius,
		locations: {
			x: 1,
			y: 2
		},
		isVisible: true,
		draw(a, b) {
			console.log("Draw function inside circle...", a, b);
		}
	};
}
const circle1 = createCircle(2);
console.log(circle1.draw("Masudur", " Rahman"));

// Constructor functions
// Naming conventions in javascript are 2 types:
// 1.CamelCase Notations... oneTwoThree.
// 2.Pascel Notations...OneTwoThree.
// IN A CONSTRUCTOR FUNCTION 3 THISNG HEPPENDS
// 1.'new' keywords creates EMPTY javascript object under the hude...
// 2.'this' keywords points to empty javascript object.
// 2.'new' keywords will returns in this new object from this function here "CircleConstructor"...
// Constructor uses Pascel Notations
function CircleConstructor(radius) {
	this.radius = radius;
	this.draw = function() {
		console.log("Constructor function draw method");
	};
}

const circle = new CircleConstructor(10);
console.log(circle.radius);
console.log(circle.draw());

// dynamic natue of object. it can be modify or delete or update...
const masud = {
	name: "Rahman",
	age: 20
};
masud.class = "Graguate";
masud.village = "madhnagar";
masud.eat = function() {
	console.log("he eat..");
};
delete masud.eat;
console.log(masud);
