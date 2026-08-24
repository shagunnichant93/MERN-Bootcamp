let student = { stuName: "Shagun", age: 25, course: "MERN", city: "Delhi" };
let { stuName, course } = student;
console.log(`Student Details`);
console.log(`---------------------`);
console.log(stuName);
console.log(course);

let product = { name: "Laptop", price: 65000, brand: "HP", category: "Electronics" };

let { name:proName, price } = product;

console.log(`Product Details`);
console.log(`---------------------`);
console.log(proName);
console.log(price);

let patient = { id: "PAT101", name: "Rahul", age: 35, disease: "Fever", roomNo: 101 };

let { name: patName, disease, roomNo } = patient;
console.log(`Patient Details`);
console.log(`---------------------`);
console.log(patName);
console.log(disease);
console.log(roomNo);

let account = { accountNo: "ACC1001", customer: "Amit", balance: 50000, accountType: "Savings" };

let { accountNo, balance } = account;
console.log(`Account Details`);
console.log(`---------------------`);
console.log(accountNo);

console.log(balance);

let studentNew = { name: "Shagun", age: 25 };
let {name: studentName, age: studentAge} = studentNew;
console.log(`Student Details`);
console.log(`---------------------`);
console.log(studentName);

console.log(studentAge);

let employee = { name: "Shagun", department: 25, salary: 70000, designation: "HR" };

console.log(`Employee Details`);
console.log(`---------------------`);
let { name: empName,salary} = employee;
console.log(empName);
console.log(salary);
let { designation: jobTitle} = employee;
console.log(jobTitle);