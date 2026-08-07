let fruits =  ["Cherry","Apple", "Banana","Mango"];
console.log(`Fruits: ${fruits}`);
console.log(`Sorted Fruits: ${fruits.sort()}`);

let students = ["Zen","Ken","Jake","Jack","Jill","John"];
console.log(`Students: ${students}`);
console.log(`Sorted students: ${students.sort()}`);

let cities =  ["Delhi","New York", "Los Angeles", "Chicago", "Houston"];
console.log(`cities`);
console.log(`Sorted cities: ${cities.sort()}`);

let movies = ["Inception", "Spiderman", "The Dark Knight", "Interstellar", "Avengers"];
console.log(`Movies:${movies}`);
console.log(`Sorted movies: ${movies.sort()}`);

let products = ["Laptop", "Monitor", "Tablet", "Smartphone"];
console.log(`Products: ${products}`);
console.log(`Sorted products: ${products.sort()}`);

let bankaccounts = ["Savings", "Checking", "Investment", "Current"];
console.log(`Bank Accounts:${bankaccounts}`);
console.log(`Sorted Bank Accounts: ${bankaccounts.sort()}`);


let numbers =[40,10,5,100,2];
console.log(`Numbers: ${numbers.sort()}`);
console.log(`Sorted Numbers without parameters: ${numbers.sort((a,b)=>a-b)}`);
console.log(`Ascending Numbers: ${numbers.sort((a,b)=>a-b)}`);
console.log(`Descending Numbers: ${numbers.sort((a,b)=>b-a)}`);
console.log(`Here sort changes the original array`);