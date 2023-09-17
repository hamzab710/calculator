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

function displayNumbers (event) {
    const buttonText = event.target.getAttribute('data-text');
    const existingNumber = document.querySelector('p');
    const displayElement = document.querySelector('.display');
    if (existingNumber) {
        existingNumber.textContent += buttonText
    } else {
        const number = document.createElement('p');
        number.textContent = buttonText;
        displayElement.appendChild(number);
    }
}

let displayed = document.querySelectorAll('.displayed');

displayed.forEach(function(element) {
    element.addEventListener('click', displayNumbers);
});

