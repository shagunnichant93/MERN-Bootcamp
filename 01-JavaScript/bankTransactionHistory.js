let transactions = [
"Deposit",
"Withdraw",
"Transfer",
"Bill Payment",
"Recharge",
"Loan EMI",
"Interest"
];

console.log(`Original Transactions:
     ${transactions[0]}
     ${transactions[1]}
     ${transactions[2]}
     ${transactions[3]}
     ${transactions[4]}
     ${transactions[5]}
     ${transactions[6]}`);
console.log("--------------------------------");
     let firstThreeTransactions = transactions.slice(0,3);
     console.log(`First three transactions: 
        ${firstThreeTransactions[0]}
        ${firstThreeTransactions[1]}
        ${firstThreeTransactions[2]}`);
console.log("--------------------------------");
     let lastTwoTransactions = transactions.slice(-2);
     console.log(`Recent transactions: 
        ${lastTwoTransactions[0]}
        ${lastTwoTransactions[1]}`);

console.log("--------------------------------");

console.log(`Original array still same`);