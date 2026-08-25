let student = { name: "Shagun", age: 25, course: "MERN" , address: {city: "Ghaziabad", state:"UP", pincode: 301305}};
console.log(`Name: ${student.name}`);
console.log(`City: ${student.address.city}`);
console.log(`State: ${student.address.state}`);
console.log(`PinCode: ${student.address.pincode}`);
console.log(`------------------`);

let product = { name: "Laptop", price: 65000, brand: "HP", supplier: {name: "Shagun", city: "Delhi",phone: "9876543214"} };

console.log(`Supplier Info`);
console.log(`------------------`);
console.log(`Name: ${product.supplier.name}`);
console.log(`City: ${product.supplier.city}`);
console.log(`Phone: ${product.supplier.phone}`);

let patient = { id: "PAT101", name: "Rahul", age: 35, medical: {disease: "Fever", roomNo: 205 }};

console.log(`Patient Info`);
console.log(`------------------`);
console.log(`Name: ${patient.name}`);
console.log(`Disease: ${patient.medical.disease}`);
console.log(`Room No.: ${patient.medical.roomNo}`);

let account = { accountNo: "ACC1001", customer:{name: "Amit", address: {city: "ghaziabad", state:"UP"}}, balance: 50000 };
console.log(`Account Info`);
console.log(`------------------`);
console.log(`Account number: ${account.accountNo}`);
console.log(`Customer Name: ${account.customer.name}`);
console.log(`State: ${account.customer.state}`);

let studentNew = { name: "Shagun", address: { city: "Delhi", state: "UP" } };
let stu = {...studentNew, city: "Mumbai"};
console.log(`student Info`);
console.log(`------------------`);
console.log(stu);

let company= {name: "ABC", department: "HR", manager:{name: "Amit", experience: 7},
location: {city: "Noida", state: "UP", country: "India"}};
console.log(`Conmpany Info`);
console.log(`--------------------`);
console.log(`Company Name: ${company.name}`);
console.log(`Manager Name: ${company.manager.name}`);
console.log(`Manager Exp: ${company.manager.experience}`);
console.log(`City: ${company.location.city}`);
console.log(`State: ${company.location.state}`);
console.log(`Country: ${company.location.country}`);

