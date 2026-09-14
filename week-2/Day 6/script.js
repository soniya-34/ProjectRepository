//21
function sumDigits(num) {
    if (num === 0) {
        return 0;
    }

    return (num % 10) + sumDigits(Math.floor(num / 10));
}

console.log(sumDigits(1234));

//22
function createCounter(initialValue) {
    let count = initialValue;

    return function () {
        count++;
        return count;
    };
}

const counter1 = createCounter(0);
const counter2 = createCounter(10);

console.log(counter1());
console.log(counter1());
console.log(counter2());
console.log(counter2());

//23
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}

//23
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}

//24
// function sum(n) {
//     if (n === 0) return 0;
//     return n + sum(n);
// }

//24
function sum(n) {
    if (n === 0) return 0;

    return n + sum(n - 1);
}

console.log(sum(5));


//calculator app
const display = document.getElementById("display");


// Closure to manage calculator state
function createCalculator() {

    let currentValue = "";
    let previousValue = "";
    let pendingOperator = null;


    // Addition
    function add(a, b) {
        return a + b;
    }


    // Subtraction
    function subtract(a, b) {
        return a - b;
    }


    // Multiplication
    function multiply(a, b) {
        return a * b;
    }


    // Division
    function divide(a, b) {
        if (b === 0) {
            return "Error";
        }

        return a / b;
    }


    // Modulus
    function modulus(a, b) {
        if (b === 0) {
            return "Error";
        }

        return a % b;
    }


    // Update display
    function updateDisplay() {

        if (currentValue === "") {
            display.value = "0";
        } else {
            display.value = currentValue;
        }

    }


    // Handle number input
    function inputNumber(number) {

        if (currentValue === "Error") {
            currentValue = "";
        }

        if (currentValue === "0") {
            currentValue = number;
        } else {
            currentValue += number;
        }

        updateDisplay();
    }


    // Handle decimal point
    function inputDecimal() {

        if (currentValue === "Error") {
            currentValue = "";
        }

        // Prevent multiple decimal points
        if (currentValue.includes(".")) {
            return;
        }

        if (currentValue === "") {
            currentValue = "0.";
        } else {
            currentValue += ".";
        }

        updateDisplay();
    }


    // Calculate result using switch
    function calculate() {

        if (
            previousValue === "" ||
            currentValue === "" ||
            pendingOperator === null
        ) {
            return;
        }

        const previous = Number(previousValue);
        const current = Number(currentValue);

        let result;

        switch (pendingOperator) {

            case "+":
                result = add(previous, current);
                break;

            case "−":
                result = subtract(previous, current);
                break;

            case "×":
                result = multiply(previous, current);
                break;

            case "÷":
                result = divide(previous, current);
                break;

            case "%":
                result = modulus(previous, current);
                break;

            default:
                return;
        }

        currentValue = String(result);
        previousValue = "";
        pendingOperator = null;

        updateDisplay();
    }


    // Handle operators
    function chooseOperator(operator) {

        if (currentValue === "" && previousValue === "") {
            return;
        }

        // Handle consecutive operators
        if (pendingOperator !== null && currentValue === "") {
            pendingOperator = operator;
            return;
        }

        if (previousValue !== "" && currentValue !== "") {
            calculate();
        }

        previousValue = currentValue;
        currentValue = "";
        pendingOperator = operator;
    }


    // Clear calculator
    function clearCalculator() {

        currentValue = "";
        previousValue = "";
        pendingOperator = null;

        updateDisplay();
    }


    // Public methods
    return {
        inputNumber,
        inputDecimal,
        chooseOperator,
        calculate,
        clearCalculator
    };

}


// Create calculator instance
const calculator = createCalculator();


// Number button events
const numberButtons = document.querySelectorAll(".number");

numberButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        calculator.inputNumber(button.textContent);

    });

});


// Operator button events
const operatorButtons = document.querySelectorAll(".operator");

operatorButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        calculator.chooseOperator(button.textContent);

    });

});


// Decimal button event
const decimalButton = document.querySelector(".decimal");

decimalButton.addEventListener("click", function () {

    calculator.inputDecimal();

});


// Equals button event
const equalsButton = document.querySelector(".equals");

equalsButton.addEventListener("click", function () {

    calculator.calculate();

});


// Clear button event
const clearButton = document.querySelector(".clear");

clearButton.addEventListener("click", function () {

    calculator.clearCalculator();

});