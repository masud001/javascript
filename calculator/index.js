// calculator class START
class Calculator{
	constructor(previousOperandTextElement,currentOperandTextElement) {
		this.previousOperandTextElement = previousOperandTextElement;
		this.currentOperandTextElement = currentOperandTextElement;
		this.clear();
	}
	// methods
	clear(){
		this.currentOperend = '';
		this.previousOperand = '';
		this.operation = undefined;
	}
	delete(){}
	appendNumber(number){
		if (number === '.' && this.currentOperend.includes('.')) return
		this.currentOperend =  this.currentOperend.toString() + number.toString()
	}
	chooseOperation(operation){
		this.operation = operation
		this.previousOperand = this.currentOperend;
		this.currentOperend = ''
	}
	compute(){}
	updateDisplay(){
		this.currentOperandTextElement.innerText = this.currentOperend;
		this.previousOperandTextElement.innerText = this.previousOperand;
	}
}
// calculator class END

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButtons = document.querySelector('[data-equals]');
const deleteButtons = document.querySelector('[data-delete]');
const allClearButtons = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

// click on number
numberButtons.forEach(button =>{
	button.addEventListener('click',()=>{
		calculator.appendNumber(button.innerText)
		calculator.updateDisplay()
	})
})


// click on operators
operationButtons.forEach(button =>{
	button.addEventListener('click',()=>{
		calculator.chooseOperation(button.innerText)
		calculator.updateDisplay()
	})
})


































let person = {
	name: "masud",
	age: 23
};

// 2 ways to declare a object in javaScript
// -------------------------------------------

//1. javascript object declatetion with DOT notation
person.name = "Masudur Rahman";
console.log(person.name);

//2. javaScript Bracket Notetion
let select = "age";
person[select] = "Muhammad Ali";

console.log(person.age);

console.log(person.age)
