let fruits =  ["Apple", "Banana","Mango"];
console.log(`Fruits: ${fruits}`);
let fruitAvailable = fruits.includes("Banana");
console.log(`Fruits have banana: ${fruitAvailable}`);

let students = ["Jake","Jack","Jill","John"];
console.log(`Students: ${students}`);
let johnAvailable = students.includes("John");
console.log(`John is available: ${johnAvailable}`);

let cities =  ["Delhi","New York", "Los Angeles", "Chicago", "Houston"];
console.log(`cities`);
let delhiAvailable = cities.includes("Delhi");
console.log(`delhi is available: ${delhiAvailable}`);

let products = ["Laptop", "Monitor", "Tablet", "Smartphone"];
console.log(`Products: ${products}`);
let laptopAvailable = products.includes("Laptop");
console.log(`Laptop available: ${laptopAvailable}`);

let movies = ["Inception", "Spiderman", "The Dark Knight", "Interstellar", "Avengers"];
console.log(`Movies:${movies}`);
let movieAvailable = movies.includes("Spiderman");
console.log(`Spiderman available: ${movieAvailable}`);

let bankaccounts = ["Savings", "Checking", "Investment", "Current"];
console.log(`Bank Accounts:${bankaccounts}`);
console.log(`Savings available : ${bankaccounts.includes("Savings")}`);

let array = ["JavaScript", "Python", "Java", "C++", "Ruby"];
console.log(`Languages:${array}`);
console.log(`Java available: ${array.includes("Java")}`);

let lang = [
"JavaScript",
"C++",
"Java"
];
console.log(`Languages: ${lang}`);
console.log(`Python available: ${lang.includes("Python")}`);

let numbers = [10,20,30,20,40];
console.log(numbers.includes(20,2));

let patients = ["Alice", "Bob", "Rahul", "Charlie", "David"];

if(patients.includes("Charlie"))
{
    console.log(`Patient Charlie found.`)
}
else
{
    console.log(`Patient not found.`)
}