let numbers = [10, 20, 30, 40, 50];

let result = numbers.find((number) => {
    return number > 25;
});

console.log(`First number greater than 25: ${result}`);
console.log(`-------------------------`);

let patients = [
    { id: "PAT101", name: "Rahul", age: 25 },
    { id: "PAT102", name: "Amit", age: 67 },
    { id: "PAT103", name: "Priya", age: 32 },
    { id: "PAT104", name: "Shagun", age: 72 }
];

let search = patients.find((patient) => {
    return patient.id === "PAT103";
});
console.log(`Patient Found`);
console.log(`-------------------------`);
console.log(`ID: ${search.id}
Name: ${search.name}
Age: ${search.age}`);
console.log(`-------------------------`);
let accounts = [
    { accountNo: "ACC1001", customer: "Rahul", balance: 15000 },
    { accountNo: "ACC1002", customer: "Amit", balance: 75000 },
    { accountNo: "ACC1003", customer: "Priya", balance: 25000 },
    { accountNo: "ACC1004", customer: "Shagun", balance: 45000 }
];

let searchAcc = accounts.find((account) => {
    return account.accountNo === "ACC1002";
});
console.log(`Account Found`);
console.log(`-------------------------`);
console.log(`Account No: ${searchAcc.accountNo}
Customer: ${searchAcc.customer}
Balance: ${searchAcc.balance}`);

let products = [
    { name: "Mouse", price: 1000 },
    { name: "Keyboard", price: 2500 },
    { name: "Headphones", price: 5000 },
    { name: "Monitor", price: 20000 },
    { name: "Laptop", price: 65000 }
];
let expProduct = products.find((product) => {
    return product.price > 10000;
});
console.log(`-------------------------`);
console.log(`First Premium product`);
console.log(`-------------------------`);
console.log(`Product:${expProduct.name}
    Price: ${expProduct.price}`);
console.log(`-------------------------`);

let searchProduct = products.find((product) => {
    return product.name === "Tablet";
});

if(searchProduct)
{
    console.log(`Product: ${searchProduct.name}
        Price: ${searchProduct.price}`);
}
else
{
    console.log(`Product Not Found`);
}
console.log(`-------------------------`);
let customers = [
    { id: 101, name: "Rahul", city: "Delhi" },
    { id: 102, name: "Amit", city: "Mumbai" },
    { id: 103, name: "Priya", city: "Pune" },
    { id: 104, name: "Shagun", city: "Delhi" }
];
let searchcust = customers.find((customer) => {
    return customer.id === 103;
});
console.log(`Customer Found`);
console.log(`-------------------------`);
console.log(`Customer: ${searchcust.id}
Name: ${searchcust.name}
City: ${searchcust.city}`);
console.log(`-------------------------`);

let patientsList = [
    { name: "Rahul", age: 35 },
    { name: "Amit", age: 67 },
    { name: "Priya", age: 72 },
    { name: "John", age: 65 }
];

let senior = patientsList.find((patientL) =>{
    return patientL.age >= 60;
});
console.log(`First Senior Patient`);
console.log(`-------------------------`);
console.log(`Name: ${senior.name}
Age: ${senior.age}`);