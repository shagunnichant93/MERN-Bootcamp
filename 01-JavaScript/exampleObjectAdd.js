let student = {
    name: "Shagun",
    age: 25
};
student.course="MERN";
student.city ="Delhi";
console.log(`Student Details`);
console.log(`------------------------`);
console.log(student);

let product = {
    name: "Laptop",
    price: 65000
};

product.brand="HP";
product.category="Electronics";
console.log(`Product Details`);
console.log(`--------------------`);
console.log(product);

let patient = {
    id: "PAT101",
    name: "Rahul",
    age: 35
};
patient.disease="Fever";
patient.roomNo= 205;

console.log(`Patient Details`);
console.log(`---------------------`);
console.log(patient);

let account = {
    accountNo: "ACC1001",
    customer: "Amit",
    balance: 50000
};

account.accountType = "Savings";
account.branch = "Delhi";
console.log(`---------------------`);
console.log(account);
console.log(`---------------------`);

let student1 = {
    name: "Shagun",
    age: 25
};

let key = "course";
let value = "MERN";
student[key] = value;

console.log(`Student Details`);
console.log(`---------------------`);
console.log(student1);