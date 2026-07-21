function creditSalary() {
    console.log("Salary Credited");
}

function verifyEmployee(callback) {
    console.log("Employee Verified");
    callback();
}

verifyEmployee(creditSalary);