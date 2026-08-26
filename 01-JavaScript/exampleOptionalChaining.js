let student = { name: "Shagun", age: 25, course: "MERN" , address: {city: "Ghaziabad"}};
console.log(student?.address?.city);

let studentNew = { name: "Shagun", age: 25, course: "MERN"};
console.log(studentNew?.address?.city);

let patient = { id: "PAT101", name: "Rahul", age: 35, medical: {disease: "Fever" }};
console.log(patient?.medical?.disease);
console.log(patient?.medical?.roomNo);

let account = { accountNo: "ACC1001", customer:{name: "Amit", address: {city: "ghaziabad", state:"UP"}}, balance: 50000 };
console.log(account?.customer?.name);
console.log(account.customer.address.city);

let company = { name: "ABC", address: { location: { city: "Noida" } } };
console.log(company?.address?.location?.city);

let user ={name: "Shagun", email:"shagunnichant@gmail.com", profile: "admin", address: {city: "Noida", state :"UP"}};
console.log(user?.name);
console.log(user?.email);
console.log(user?.profile);
console.log(user?.address?.city);
console.log(user?.address?.state);