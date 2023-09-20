let operator = null;
let firstNumber = null;
let secondNumber = null;
let waitingForSecondNumber = false;
let resultCalculated = false;

function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) return "Can not divide by zero";
    return a / b;
}

function operate(operator, firstNumber, secondNumber) {
    if (operator === "+") return sum(firstNumber, secondNumber);
    else if (operator === "-") return subtract(firstNumber, secondNumber);
    else if (operator === "*") return multiply(firstNumber, secondNumber);
    else if (operator === "/") return divide(firstNumber, secondNumber);
}

let displayed = document.querySelectorAll('.displayed');

displayed.forEach(function(element) {
    element.addEventListener('click', displayNumbers);
});

function displayNumbers(event) {
    const buttonText = event.target.getAttribute('data-text');
    const displayElement = document.querySelector('.display');
    if (resultCalculated) {
        // If a result has been calculated, set firstNumber to the result
        // and clear the secondNumber
        firstNumber = result;
        secondNumber = null;
        resultCalculated = false;
    }
    if (waitingForSecondNumber) {
        // Second number input
        if (secondNumber === null) {
            secondNumber = '';
        }
        secondNumber += buttonText;
        displayElement.textContent = secondNumber;
    } else {
        // First number input
        if (firstNumber === null) {
            firstNumber = '';
        }
        firstNumber += buttonText;
        displayElement.textContent = firstNumber;
    }
}

let operatorButtons = document.querySelectorAll('.operator');

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (!resultCalculated) {
            if (waitingForSecondNumber) {
                // If a second operator is clicked before calculating,
                // calculate the current operation first
                calculateResult();
            }
            operator = button.getAttribute('data-operator');
            waitingForSecondNumber = true;
        } else {
            // If a result has been calculated, use it as the new firstNumber
            firstNumber = result;
            operator = button.getAttribute('data-operator');
            waitingForSecondNumber = true;
            resultCalculated = false;
        }
    });
});

let equal = document.querySelector('.equal');

equal.addEventListener('click', calculateResult);

function calculateResult() {
    if (operator && firstNumber !== null && waitingForSecondNumber) {
        result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
        const displayElement = document.querySelector('.display');
        displayElement.textContent = result;
        // Reset the state for further calculations
        firstNumber = result;
        secondNumber = null;
        waitingForSecondNumber = false;
        resultCalculated = true;
    }
}

// reset the calculator's state and clear the display when the clear button is clicked.
function clearAll() {
    const displayElement = document.querySelector('.display');
    displayElement.textContent = "";
    operator = null;
    firstNumber = null;
    secondNumber = null;
    waitingForSecondNumber = false;
    resultCalculated = false;
}

let clear = document.querySelector('.clear');

clear.addEventListener('click', clearAll);

// delete the last number entered
function deleteNum() {
    const displayElement = document.querySelector('.display');
    if (resultCalculated) {
        clearAll()
    } else if (waitingForSecondNumber) {
        secondNumber = secondNumber.slice(0, -1);
        displayElement.textContent = secondNumber;
    } else {
        firstNumber = firstNumber.slice(0 , -1);
        displayElement.textContent = firstNumber;
    }
};

let cancel = document.querySelector('.delete');

cancel.addEventListener('click', deleteNum);