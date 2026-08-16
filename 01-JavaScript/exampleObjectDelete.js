let student = {
    name: "Shagun",
    age: 25,
    course: "MERN",
    city: "Delhi"
};
console.log(`--------------------`);
console.log(`Original Students:`);
console.log(student);
delete student.city;
console.log(`Updated Students:`);
console.log(student);

let product = {
    name: "Laptop",
    price: 65000,
    brand: "HP",
    category: "Electronics"
};
console.log(`--------------------`);
console.log("Original products:");
console.log(product);
delete product.brand;
console.log("Updated products:");
console.log(product);

let patient = {
    id: "PAT101",
    name: "Rahul",
    age: 35,
    disease: "Fever",
    roomNo: 205
};
console.log(`--------------------`);
console.log("Original patients:");
console.log(patient);
delete patient.disease;
console.log("Updated patients:");
console.log(patient);

let account = {
    accountNo: "ACC1001",
    customer: "Amit",
    balance: 50000,
    accountType: "Savings"
};
console.log(`--------------------`);
console.log("Original Account:");
console.log(account);
delete account.accountType;
console.log("Updated Account:");
console.log(account);

let product1 = {
    name: "Laptop",
    price: 65000,
    brand: "HP",
    category: "Electronics"
};

let key = "category";

console.log(`--------------------`);
console.log("Original dynamic product:");
console.log(product1);

delete product1[key];

console.log("Updated dynamic product:");
console.log(product1);
