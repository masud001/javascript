// object-oriented programming (OOP)

// circle object

// circle.draw();

// factory function

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
