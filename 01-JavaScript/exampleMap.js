let fruits = ["Apple", "Banana", "Mango", "Orange"];
fruits.map((fruit) => {
    console.log(fruit);
});

let students = ["John", "Rahul", "Priya", "Shagun"];
students.map((student) => {
    console.log(student);
});

let cities = ["Delhi", "Mumbai", "Pune", "Bangalore"];
cities.map((city) => {
    console.log(city);
});

let products = ["Laptop","Mouse","Keyboard","Monitor"];
products.map((product) => {
    console.log(`Product: ${product}`);
});

let patients = ["Rahul","Amit","Priya"];
patients.map((patient) => {
    console.log(`Patient: ${patient}`);
});

let bankAccounts = ["ACC1001","ACC1002","ACC1003"];
bankAccounts.map((bankAccount, index) => {
    console.log(`Account ${index +1}: ${bankAccount}`);
});

let numbers = [10, 60, 30, 80, 90, 40];
numbers.map((number) => {
    if(number > 50)
    {
    console.log(number);
    }    
});