let student = {
    name: "Shagun",
    age: 25,
    course: "MERN"
};
console.log(`Student Property check`);
console.log(`Name exists:${"name" in student}`);
console.log(`City exists:${"city" in student}`);
console.log(`Course exists:${"course" in student}`);

let product = {
    name: "Laptop",
    price: 65000,
    brand: "HP"
};
console.log(`Product Property check`);
console.log(`Price exists:${"price" in product}`);
console.log(`Brand exists:${"brand" in product}`);
console.log(`Category exists:${"category" in product}`);

let patient = {
    id: "PAT101",
    name: "Rahul",
    age: 35,
    roomNo: 205
};
console.log(`Patient Property check`);
console.log(`disease exists:${"disease" in patient}`);
console.log(`roomNo exists:${"roomNo" in patient}`);
console.log(`age exists:${"age" in patient}`);

let account = {
    accountNo: "ACC1001",
    customer: "Amit",
    balance: 50000
};
console.log(`Account Property check`);
console.log(`accountNo exists:${account.hasOwnProperty("accountNo")}`);
console.log(`balance exists:${account.hasOwnProperty("balance")}`);
console.log(`accountType exists:${account.hasOwnProperty("accountType")}`);

let product1 = {
    name: "Laptop",
    price: 65000,
    brand: "HP"
};

let key = "price";
let key1 = "category";
console.log(`Product Property dynamic check`);
console.log(`Price exists:${key in product1}`);
console.log(`category exists:${key1 in product1}`);