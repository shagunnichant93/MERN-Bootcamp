function deposit(balance,amount)
{
    return balance + amount;
}
function withdraw(balance,amount)
{
    return balance - amount;
}

let newBalance = deposit(1000,500);
console.log("New Balance after deposit: " + newBalance);

let updatedBalance = withdraw(newBalance,200);
console.log("Updated Balance after withdrawal: " + updatedBalance);