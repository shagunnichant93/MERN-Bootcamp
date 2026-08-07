let fruits =  ["Apple", "Banana","Mango"];
console.log(`Fruits: ${fruits}`);
let fruitjoin = fruits.includes("Banana");
console.log(`Fruits after joining: ${fruits.join()}`);

let students = ["Jake","Jack","Jill","John"];
console.log(`Students: ${students}`);
let studentJoin = students.join(" ");
console.log(`Students after joining: ${studentJoin}`);

let cities =  ["Delhi","New York", "Los Angeles", "Chicago", "Houston"];
console.log(`cities`);
let citiesJoin = cities.join("-");
console.log(`Cities after joining: ${citiesJoin}`);

let products = ["Laptop", "Monitor", "Tablet", "Smartphone"];
console.log(`Products: ${products}`);
let productsJoin = products.join("|");
console.log(`Laptop available: ${productsJoin}`);

let movies = ["Inception", "Spiderman", "The Dark Knight", "Interstellar", "Avengers"];
console.log(`Movies:${movies}`);
let movieJoin = movies.join("->");
console.log(`Movies after joining: ${movieJoin}`);

let bankaccounts = ["Savings", "Checking", "Investment", "Current"];
console.log(`Bank Accounts:${bankaccounts}`);
console.log(`Bank accounts after joining : ${bankaccounts.join(",")}`);

let arr = ["J", "A", "V", "A"];
console.log(`Array: ${arr}`);
let result = arr.join("");
console.log(`Array after joining: ${arr.join("")}`);


let emptyArray = [];
console.log(`Empty Array after join: ${emptyArray.join()}`);

let typeOfResult = typeof result;
console.log(`Type of result: ${typeOfResult}`);
console.log(`Original Array: ${arr}`);