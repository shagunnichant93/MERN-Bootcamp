let fruits = ["Banana", "Orange", "Mango"];
console.log(`Initial fruits: ${fruits}`); 
let length = fruits.unshift("Apple");
console.log(`Fruits after unshift: ${fruits}`);

let students = ["John", "Jane", "Jim"];
console.log(`Initial students: ${students}`);
students.unshift("Shagun");
console.log(`Students after unshift: ${students}`);

let cities = ["New York", "Los Angeles", "Chicago"];
console.log(`Initial cities: ${cities}`);
cities.unshift("Delhi");
console.log(`Cities after unshift: ${cities}`);

let patients = ["Alice", "Bob", "Charlie"];
console.log(`Initial patients: ${patients}`);
patients.unshift("Emergency Patient");
console.log(`Patients after unshift: ${patients}`);

let products = ["Monitor", "Tablet", "Smartphone"];
console.log(`Initial products: ${products}`);
products.unshift("Laptop");
console.log(`Products after unshift: ${products}`);

let movies = ["Inception", "Spiderman", "The Dark Knight"];
console.log(`Initial movies: ${movies}`);
movies.unshift("Interstellar");
console.log(`Movies after unshift: ${movies}`);

let bankAccounts = ["Savings", "Checking", "Investment"];
console.log(`Initial bank accounts: ${bankAccounts}`);
bankAccounts.unshift("VIP-0001");
console.log(`Bank accounts after unshift: ${bankAccounts}`);

let emptyArray = [];
console.log(`Initial empty array: ${emptyArray}`);
let total = emptyArray.unshift("JavaScript");
console.log(`Empty array after unshift: ${emptyArray}`);
console.log(`Returned length: ${total}`);

console.log(`New Length of fruits array: ${length}`);

fruits.unshift("Grapes", "Pineapple");
console.log(`Fruits after adding multiple elements: ${fruits}`);