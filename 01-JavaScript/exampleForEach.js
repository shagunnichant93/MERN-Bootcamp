let fruits = ["Apple", "Banana", "Mango", "Orange"];
fruits.forEach((fruit) => {
    console.log(fruit);
});

let students = ["John", "Rahul", "Priya", "Shagun"];
students.forEach((student) => {
    console.log(student);
});

let cities = ["Delhi", "Mumbai", "Pune", "Bangalore"];
cities.forEach((city) => {
    console.log(city);
});

let products = ["Laptop","Mouse","Keyboard","Monitor"];
products.forEach((product) => {
    console.log(`Product: ${product}`);
});

let patients = ["Rahul","Amit","Priya"];
patients.forEach((patient) => {
    console.log(`Patient: ${patient}`);
});

let bankAccounts = ["ACC1001","ACC1002","ACC1003"];
bankAccounts.forEach((bankAccount, index) => {
    console.log(`Account ${index +1}: ${bankAccount}`);
});

let numbers = [10, 60, 30, 80, 90, 40];
numbers.forEach((number) => {
    if(number > 50)
    {
    console.log(number);
    }    
});

let names = ["john", "rahul", "priya"];
names.forEach((name) => {
    console.log(`${name.toUpperCase()}`);
});

students.forEach((student, index) => {
    console.log(`Student ${index+1} : ${student}`);
});

let items = ["Laptop", "Mouse", "Keyboard", "Headphones"];

items.forEach((item) =>{
    console.log(`Cart Item: ${item}`);
});

