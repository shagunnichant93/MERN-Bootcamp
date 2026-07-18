let deposit = function (balance, amount) {
    return balance + amount;
};
let withdraw = function (balance, amount) {
    return balance - amount;
};

console.log(deposit(1000, 500));
console.log(withdraw(1000, 200));