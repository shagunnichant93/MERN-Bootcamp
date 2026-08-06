let fruits = ["Apple", "Banana","Mango"];
console.log(`Fruits:${fruits}`);
console.log(`Banana index: ${fruits.indexOf("Banana")}`)

let students = ["Jake","Jack","Jill","John"];
console.log(`Students:${students}`);
console.log(`John is at ${students.indexOf("John")} place`);

let cities =  ["Delhi","New York", "Los Angeles", "Chicago", "Houston"];
console.log(`Cities:${cities}`);
console.log(`Delhi index: ${cities.indexOf("Delhi")}`);

let products = ["Laptop", "Monitor", "Tablet", "Smartphone"];
console.log(`Products:${products}`);
console.log(`Laptop is found at index: ${products.indexOf("Laptop")}`);

let movies = ["Inception", "Spiderman", "The Dark Knight", "Interstellar", "Avengers"];
console.log(`Movies:${movies}`);
console.log(`Found Spiderman at ${movies.indexOf("Spiderman")}`);

let bankaccounts = ["Savings", "Checking", "Investment", "Current"];
console.log(`Bank Accounts:${bankaccounts}`);
console.log(`Savings is at : ${bankaccounts.indexOf("Savings")}`);

let array = ["JavaScript", "Python", "Java", "C++", "Ruby"];
console.log(`Languages:${array}`);
console.log(`Java is at: ${array.indexOf("Java")}`);

let arr = ["A","B","C"];
console.log(`Array:${arr}`);
console.log(`D is at: ${arr.indexOf("D")}`);

let numbers = [10,20,30,20,40];
console.log(`Numbers: ${numbers}`)
console.log(`Index of 20: ${numbers.indexOf(20,2)}`);

let patients = ["Charlie","Alice", "Bob", "Rahul", "Charlie", "David"];

if(patients.includes("Charlie"))
{
    console.log(`Patient Charlie index: ${patients.indexOf("Charlie")}`)
}
else
{
    console.log(`Patient not found.`)
}