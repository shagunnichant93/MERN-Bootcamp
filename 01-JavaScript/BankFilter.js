let accounts = [
    { accountNo: "ACC1001", balance: 15000 },
    { accountNo: "ACC1002", balance: 75000 },
    { accountNo: "ACC1003", balance: 5000 },
    { accountNo: "ACC1004", balance: 45000 },
    { accountNo: "ACC1005", balance: 12000 }
];

console.log(`High Balance Accounts`);
console.log(`--------------------------`);
let highbal = accounts.filter((account) =>{
    return account.balance > 20000;
});

highbal.forEach((account) => {
    console.log(`${account.accountNo}-${account.balance}`);
});
