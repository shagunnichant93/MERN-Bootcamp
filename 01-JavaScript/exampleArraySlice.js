let fruits = ["Banana", "Orange", "Apple", "Mango"];
let citrus = fruits.slice(0,2);
console.log(`First two fruits: ${citrus}`);

let students = ["John", "Jane", "Jim", "Jack"];
let last2Students = students.slice(-2);
console.log(`Last two students: ${last2Students}`);

let cities = ["New York", "Los Angeles", "Chicago", "Houston"];
let middleCities = cities.slice(0,3);
console.log(`First three cities: ${middleCities}`);

let products = ["Laptop", "Monitor", "Tablet", "Smartphone"];
let productsfromIndex2 = products.slice(2);
console.log(`Products from index 2: ${productsfromIndex2}`);

let middleThreeProducts = products.slice(1,4);
console.log(`Middle three products: ${middleThreeProducts}`);

let movies = ["Inception", "Spiderman", "The Dark Knight", "Interstellar", "Avengers"];
let selectedMovies = movies.slice(0,4);
console.log(`Selected First Four movies: ${selectedMovies}`);

let bankaccounts = ["Savings", "Checking", "Investment", "Current"];
let lastBankAccount = bankaccounts.slice(-1);
console.log(`Last bank account: ${lastBankAccount}`);

let patients = ["Alice", "Bob", "Rahul", "Charlie", "David"];
let first3Patients = patients.slice(0,3);
console.log(`All patients: ${patients}`);
console.log(`First three patients: ${first3Patients}`);

let array = ["JavaScript", "Python", "Java", "C++", "Ruby"];
let slicewithoutIndex = array.slice();
console.log(`Array without index: ${slicewithoutIndex}`);

let arr = ["A", "B", "C", "D", "E"];
let copyOfArr = arr.slice();
console.log(`Original array: ${arr}`);
console.log(`Copy of array: ${copyOfArr}`);