let student = {
    name: "Shagun",
    age: 25,
    course: "MERN",
    city: "Delhi"
};
console.log(`Student details`);
console.log(`--------------------------`);
Object.values(student).forEach((value) => {
    console.log(value);
});

let product ={
name: "Laptop",
price: 65000,
brand: "HP",
category: "Electronics"
};
console.log(`--------------------------`);
console.log(`Product details`);
console.log(`--------------------------`);
Object.values(product).forEach((value) => {
    console.log(value);
});

let patient = {id: "PAT101",
name: "Rahul",
age: 35,
disease: "Fever",
roomNo: 205
};
console.log(`--------------------------`);
console.log(`Patient details`);
console.log(`--------------------------`);
Object.values(patient).forEach((value) => {
    console.log(value);
});

let bankAccount = {accountNo: "ACC1001",
customer: "Amit",
balance: 50000,
accountType: "Savings"
};
console.log(`--------------------------`);
console.log(`Bank Account details`);
console.log(`--------------------------`);
Object.values(bankAccount).forEach((value) => {
    console.log(value);
});

let product1 = {
    name: "Laptop",
    price: 65000,
    brand: "HP",
    category: "Electronics"
};
console.log(`--------------------------`);
console.log(`Total Values: ${Object.values(product1).length}`);