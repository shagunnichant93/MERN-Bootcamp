let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(`Initial fruits: ${fruits}`);
fruits.splice(0,1);
console.log(`Fruits after removing first element: ${fruits}`);

let students = ["John", "Jane", "Jim"];
console.log(`Initial students: ${students}`);
students.splice(1,1);
console.log(`Students after removing second element: ${students}`);

let cities = ["New York", "Los Angeles", "Chicago"];
console.log(`Initial cities: ${cities}`);
cities.splice(1,0, "Delhi");
console.log(`Cities after inserting "Delhi" at index 1: ${cities}`);

let products = ["Laptop","Monitor", "Tablet", "Smartphone"];
console.log(`Initial products: ${products}`);
products.splice(0,1,"Gaming Laptop");
console.log(`Products after replacing first element: ${products}`);

let movies = ["Inception", "Spiderman", "The Dark Knight", "Interstellar","Avengers"];
console.log(`Initial movies: ${movies}`);
movies.splice(2,2);
console.log(`Movies after removing third and fourth elements: ${movies}`);

let bankAccounts = ["Savings", "Checking", "Investment"];
console.log(`Initial bank accounts: ${bankAccounts}`);
bankAccounts.splice(0,1,"Current");
console.log(`Bank accounts after replacing first element: ${bankAccounts}`);

let patients = ["Alice", "Bob", "Rahul","Charlie"];
console.log(`Initial patients: ${patients}`);
let removed = patients.splice(2,1);
console.log(`Removed Patient: ${removed}`);
console.log(`Remaining Patients: ${patients}`);

let array = ["JavaScript", "Python", "Java", "C++"];
console.log(`Initial array: ${array}`);
array.splice(1,0);
console.log(`Output with deletecount as zero: ${array}`);

let productsList = ["Monitor", "Tablet", "Smartphone", "Laptop","Keyboard"];
console.log(`Initial products list: ${productsList}`);
productsList.splice(2,2,"Smartwatch","Mouse");
console.log(`Products list after replacing third and fourth elements: ${productsList}`);

let arr = ["A", "B", "C", "D", "E"];
console.log(`Initial array: ${arr}`);
arr.splice(2,3);
console.log(`Array after removing all elements from index 2 onwards: ${arr}`); 