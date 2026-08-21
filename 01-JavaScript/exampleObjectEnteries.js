let student = {
    name: "Shagun",
    age: 25,
    course: "MERN",
    city: "Delhi"
};
console.log(`Student Details`);
console.log(`-----------------------`);
Object.entries(student).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});
console.log(`-----------------------`);

let product = {
    name: "Laptop",
    price: 65000,
    brand: "HP",
    category: "Electronics"
};
console.log(`Product Details`);
console.log(`-----------------------`);
Object.entries(product).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});
console.log(`-----------------------`);

let patient = {
    id: "PAT101",
    name: "Rahul",
    age: 35,
    disease: "Fever",
    roomNo: 205
};
console.log(`Patient Details`);
console.log(`-----------------------`);
Object.entries(patient).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});
console.log(`-----------------------`);

let account = {
    accountNo: "ACC1001",
    customer: "Amit",
    balance: 50000,
    accountType: "Savings"
};
console.log(`Account Details`);
console.log(`-----------------------`);
Object.entries(account).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});
console.log(`-----------------------`);

let product1 = {
    name: "Laptop",
    price: 65000,
    brand: "HP",
    stock: 10
};
console.log(`Product Information`);
console.log(`-----------------------`);
Object.entries(product1).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});
console.log(`-----------------------`);