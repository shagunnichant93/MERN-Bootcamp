let student = {
    name: "Shagun",
    age: 25,
    course: "MERN",
    city: "Delhi"
};
console.log(`Student Properties`);
console.log(`------------------------------`);
console.log(Object.keys(student));


let product = {
    name: "Laptop",
    price: 65000,
    brand: "HP",
    category: "Electronics"
};
console.log(`Product Properties`);
console.log(`------------------------------`);
console.log(Object.keys(product));

let patient = {
id: "PAT101",
name: "Rahul",
age: 35,
disease: "Fever",
roomNo: 301
};
console.log(Object.keys(patient).length);

let account = {
    accountNo: "ACC1001",
    customer: "Amit",
    balance: 50000,
    accountType: "Savings"
};

console.log(`Account Properties`);
console.log(`------------------------------`);
Object.keys(account).forEach((key) => {
    console.log(`${key}: ${account[key]}`)
});


let product1 = {
    name: "Laptop",
    price: 65000,
    brand: "HP",
    category: "Electronics"
};
console.log(`Product Properties`);
console.log(`------------------------------`);
Object.keys(product1).forEach((key) => {
    console.log(`${key}: ${product1[key]}`)
});
console.log(`------------------------------`);
console.log(`Total Properties: ${Object.keys(product1).length}`);
