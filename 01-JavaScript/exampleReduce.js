let numbers = [10, 20, 30, 40, 50];
let total = numbers.reduce((sum,number) => {
    return sum + number;
});
console.log(`Total: ${total}`);
console.log(`-------------------------------`);
let products = [
    { name: "Laptop", price: 65000 },
    { name: "Mouse", price: 1000 },
    { name: "Keyboard", price: 2500 },
    { name: "Monitor", price: 20000 },
    { name: "Headphones", price: 5000 }
];
console.log(`Shopping Cart`);
console.log(`-------------------------------`);
let prod = products.forEach((product) => {  

    console.log(`${product.name}-${product.price}`);
});

console.log(`-------------------------------`);
let totalPrice = products.reduce((sum,product) => {
    return sum + product.price;
},0);
console.log(`Total Amount: ${totalPrice}`);
console.log(`-------------------------------`);

let bills = [5000, 3000, 7000, 2000];
console.log(`Hospital Bills`);
console.log(`-------------------------------`);
let totalBill = bills.reduce((sum,bill) =>{
    return sum + bill;
},0);
console.log(`Total Bill: ${totalBill}`);
console.log(`-------------------------------`);
let accounts = [
    { accountNo: "ACC1001", balance: 15000 },
    { accountNo: "ACC1002", balance: 75000 },
    { accountNo: "ACC1003", balance: 25000 },
    { accountNo: "ACC1004", balance: 45000 }
];
console.log(`Bank Accounts`);
console.log(`-------------------------------`);
let totalAcc = accounts.reduce((sum, account) => {
    return sum + account.balance;
},0);
console.log(`Total Balance: ${totalAcc}`);
console.log(`-------------------------------`);

let marks = [80, 75, 90, 85, 70];
console.log(`Student Marks`);
console.log(`-------------------------------`);
let totalMarks = marks.reduce((sum,mark) => {
    return sum + mark;
},0);
console.log(`Total Marks: ${totalMarks}`);
console.log(`-------------------------------`);

let cart = [
    { product: "Laptop", quantity: 1 },
    { product: "Mouse", quantity: 2 },
    { product: "Keyboard", quantity: 1 },
    { product: "Headphones", quantity: 3 }
];
console.log(`Shopping Cart`);
console.log(`-------------------------------`);
let totalItems = cart.reduce((sum,item) => {
    return sum + item.quantity;
},0);
console.log(`Total Items: ${totalItems}`);

