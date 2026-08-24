let student = { name: "Shagun", age: 25, course: "MERN" };

let studentCopy = { ...student };

console.log(studentCopy);


let studentd = { name: "Shagun", age: 25, course: "MERN" };
let updatedStudent = { ...studentd, city: "Delhi" };

console.log(updatedStudent);


let studentNew = { name: "Shagun", age: 25, course: "MERN" };

let updatedStudent1 = { ...studentNew, age: 26 };
console.log(updatedStudent1);

let basicDetails = { name: "Shagun", age: 25 };

let educationDetails = { course: "MERN", city: "Delhi" };

let studentdet = { ...basicDetails, ...educationDetails };

console.log(studentdet);


let product = { name: "Laptop", price: 65000, brand: "HP" };

let updatedProduct = { ...product, price: 60000 };

console.log(updatedProduct);


let patient = { id: "PAT101", name: "Rahul", age: 35, disease: "Fever", roomNo: 205 };

let updatedPatient = { ...patient, disease: "Cold", roomNo: 305 };

console.log(updatedPatient);



let account = { accountNo: "ACC1001", customer: "Amit", balance: 50000 };

let updatedAccount = { ...account, balance: 60000 };
console.log(updatedAccount);


let student1 = { name: "Shagun", age: 25 };

let student2 = { age: 30, course: "MERN" };

let studentNewA = { ...student1, ...student2 };

console.log(studentNewA);