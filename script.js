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

function operate(operator, a, b) {
    if (operator == "+") return sum(a, b);
    else if (operator == "-") return subtract(a, b);
    else if (operator == "*") return multiply(a, b);
    else if (operator == "/") return divide(a, b);
    else return "Invalid operator"
}
let latestInput;
function displayNumbers (event) {
    const buttonText = event.target.getAttribute('data-text');
    latestInput = document.querySelector('p');
    const displayElement = document.querySelector('.display');
    if (latestInput) {
        latestInput.textContent += buttonText;
        latestInput.classList.add('.firstNumber');
    } else {
        let input = document.createElement('p');
        input.textContent = buttonText;
        input.classList.add('.firstNumber');
        displayElement.appendChild(input);
    }
}

let displayed = document.querySelectorAll('.displayed');

displayed.forEach(function(element) {
    element.addEventListener('click', displayNumbers);
});

let storedNumber;
function storeNumbers() {
    storedNumber = parseInt(latestInput.textContent);
    latestInput.parentNode.removeChild(latestInput);
}

let operator = document.querySelectorAll('.operator');

operator.forEach(function(element) {
    element.addEventListener('click', storeNumbers);
});

