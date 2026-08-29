let student = {
    name: "Shagun",
    age: 25,
    course: "MERN"
};

Object.seal(student);

student.age = 30;
student.city = "Delhi";
delete student.course;

console.log(student);

let product = { name: "Laptop", price: 65000, brand: "HP" };
Object.seal(product);
product.price = 70000;
product.stock ="ABC";

console.log(product);

let studentNew = {
    name: "Shagun",
    age: 25,
    course: "MERN"
};
console.log(Object.isSealed(studentNew));

Object.seal(studentNew);

console.log(Object.isSealed(studentNew));

let patient = { id: "PAT101", name: "Rahul", age: 35, disease: "Fever"};

Object.seal(patient);
patient.disease = "Nausea";
patient.roomNo = 301;

delete patient.age;

console.log(patient); 

let NewStu = {name: "Shagun", address: { city: "Pune", state: "Maharashtra"}};
Object.seal(NewStu);
NewStu.name = "Shanu";
NewStu.address.city = "Mumbai";
console.log(NewStu);

let account = { accountNo: "ACC1001", customer: "Amit", balance: 50000, accountType: "savings" };
Object.seal(account);
account.branch = "ABC";
account.balance = 55000;
delete account.accountType;

console.log(account);
console.log(Object.isSealed(account));