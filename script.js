let operator = null;
let firstNumber = null;
let secondNumber = null;
let waitingForSecondNumber = false;

function sum(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    if (b == 0) return "Can not divide by zero"
    return a / b
}

function operate(operator, firstNumber, secondNumber) {
    if (operator == "+") return sum(firstNumber, secondNumber);
    else if (operator == "-") return subtract(firstNumber, secondNumber);
    else if (operator == "*") return multiply(firstNumber, secondNumber);
    else if (operator == "/") return divide(firstNumber, secondNumber);
}

let displayed = document.querySelectorAll('.displayed');

displayed.forEach(function(element) {
    element.addEventListener('click', displayNumbers);
});

function displayNumbers (event) {
    const buttonText = event.target.getAttribute('data-text');
    const displayElement = document.querySelector('.display');
    if (waitingForSecondNumber) {
        // Second number input
        if (secondNumber === null) {
            secondNumber = '';
        }
        secondNumber += buttonText;
    } else {
        // First number input
        if (firstNumber === null) {
            firstNumber = '';
        }
        firstNumber += buttonText;
    }
    displayElement.textContent = waitingForSecondNumber ? secondNumber : firstNumber;
}

let operatorButtons = document.querySelectorAll('.operator');

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        operator = button.getAttribute('data-operator');
        waitingForSecondNumber = true;
    })
})
let result;
function calculateResult() {
    if (operator && firstNumber !== null && waitingForSecondNumber) {
        const result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
        const displayElement = document.querySelector('.display');
        displayElement.textContent = result;

        // Reset the state
        firstNumber = null;
        waitingForSecondNumber = false;
    }
}

let equal = document.querySelector('.equal');

equal.addEventListener('click', calculateResult);