function add(a, b) {
    console.log(a + b);
}

function calculate(a, b, operation) {
    operation(a, b);
}

calculate(20, 10, add);