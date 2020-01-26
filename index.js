// Overview of oparators
// we have 5 types of oparators in javascript

// 1. Arithmetic Oparators
let x = 10;
let y = 20;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);
// 1.1 Increments Oparators (++)
// increment first then add add one so output is 11
console.log(++x);
// first asign 10 on x then it increments 1 so value is 10 for now
console.log(x++);
// but if i print this value again the it will be 11
console.log(x);

// 1.2 Decrements Oparators (--)
// it will decrements first then asign valu toit it is 9 for now
console.log(--x);
// 2. Assignment Oparators
let a = 2;
a++;
console.log(a);
// this a++  is axactly same as
a = a + 1;
console.log(a);
// this is not going to work here
let b = 2;
// here line 34 and 35 are exactly same
// b = b + 5;
b += 5;
console.log(b);

// 3. Comparison Oparators
// 3.1 relational oparators
console.log(a > 1);
console.log(a < 1);
console.log(a >= 1);
console.log(a <= 1);
// 3.2 equality oparators
console.log(a == 2);
console.log(a != 2);
// 3.3 strict Equality (type and value) are the same!
console.log(a === 2);
// 3.4 loose Equality (value OR type) are not same
console.log("1" == 1);
console.log("1" == 1);
// 4. Logical Oparators
// 4.1 Ternary Oparetor
// NOTE conditions : if a customar have more than 100 points then it will be considered golden
// if it is less than 100 then it is silver customar.
let points = 100;
let type = points >= 100 ? "Gold" : "silver";
console.log(type);
// 5. Bitwise Opearators

import React, { Component } from "react";

export class index extends Component {
	render() {
		return (
			<div>
				<div className="className">
					<div className="exampleClass"></div>
				</div>
			</div>
		);
	}
}

export default index;
