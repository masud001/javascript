// Learning JavaScript Functions.
// 'Function' is one of the funddamental biulding blocks of javascript.

// this is the function which is perfforming a task
function greet(firstName, lastName) {
	console.log("Hello " + firstName + " " + lastName);
}
greet("Masudur", "Rahman");

// V.V.I.N:
// in this example, the 'statement' we declare console.log("hello world"),
// So it should be terminated by semicolon [;]

// but when we declaring a function we don't need to add semicolon[;] at the end of function.
// because we are not declaring a variable let varName = "value"; . this is a function declaration.
// when i we call this function, this is a 'statement' so we need semicolon

// variable firstName and lastName are only meaningfull inside greet() function
// in this function, greet(firstName, lastName) here firstName, lastName is called parameter of this function,
// these parameter is not accessable from out side of this functions.
// when we pass variable  with function statement greet("Masudur", "Rahman"),
// here Masudur and Rahman is arguments of this functions

// functions performing a calculations

function squire(number) {
	return number * number;
}

let number = squire(2);
console.log(number);
// we can store this 'return value' in a variable here 'number' is a variable.
// we can use this value to initialize this in a variable "number"
console.log(squire(4));
// or we can declare this functon directly inside console
