function add(a, b) {
    console.log("Addition:", a + b);
}

function subtract(a, b) {
    console.log("Subtraction:", a - b);
}

function multiply(a, b) {
    console.log("Multiplication:", a * b);
}

function calculator(a, b, operation) {
    operation(a, b);
}

calculator(20, 10, add);
calculator(20, 10, subtract);
calculator(20, 10, multiply);