let student = {
    name: "Shagun",
    age: 25,
    course: "MERN",
    city: "Delhi"
};

console.log(`Student Details:`);
console.log(`-----------------------`);
console.log(`Name: ${student.name}`);
console.log(`Age: ${student.age}`);
console.log(`Course: ${student.course}`);
console.log(`City: ${student.city}`);

let product = {
    name: "Laptop",
    price: 65000,
    brand: "HP"
};

console.log(`Product Details:`);
console.log(`-----------------------`);
console.log(`Name: ${product.name}`);
console.log(`Price: ${product.price}`);
console.log(`Brand: ${product.brand}`);

let patient = {
    id: "PAT101",
    name: "Rahul",
    age: 35,
    disease: "Fever"
};

console.log(`Patient Details:`);
console.log(`-----------------------`);
console.log(`ID: ${patient.id}`);
console.log(`Name: ${patient.name}`);
console.log(`Age: ${patient.age}`);
console.log(`Disease: ${patient.disease}`);


let account = {
    accountNo: "ACC1001",
    customer: "Amit",
    balance: 50000
};
console.log(`Bank Account:`);
console.log(`-----------------------`);
console.log(`Account No: ${account.accountNo}`);
console.log(`Customer: ${account.customer}`);
console.log(`balance: ${account.balance}`);


let student1 = {
    name: "Shagun",
    age: 25,
    course: "MERN",
    city: "Delhi"
};

let key = "course";
console.log(`Selected Property`);
console.log(`---------------------`);
console.log(`course: ${student1[key]}`);

