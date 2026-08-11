let numbers = [10, 20, 30, 40,50,60];

let result = numbers.filter((num) => {
    return num > 50;
});

console.log(`Original Numbers: ${numbers}`);
console.log(`Numbers greater than 50: ${result}`);

let numberArr = [1, 2, 3, 4];

let even = numberArr.filter((num )=> {
    return num * 2
});

console.log(`Original numbers: ${numbers}`);
console.log(`Even numbers: ${even}`);

let students = ["John", "Rahul", "Priya", "Shagun"];

let name = students.filter((student) => {
    return student.length >= 4;
});

console.log(`Students name having more than 4 characters: ${name}`);


let prices = [5000, 12000, 8000, 2500, 3000];
let expensiveProducts = prices.filter((price) => {
    return price > 5000;
});

console.log(`Expensive products: ${expensiveProducts}`);

let patientAges = [12, 25, 67, 8, 45, 72];
let seniorPatients = patientAges.filter((age) => {
    return age > 50;
});

console.log(`Senior Patients: ${seniorPatients}`);

let balances = [5000, 25000, 10000, 75000, 3000];
let highBalanceAccounts = balances.filter((balance) => {
    return balance > 20000;
});

console.log(`Bank balances above 20000: ${highBalanceAccounts}`);

let cities = ["Delhi", "Mumbai", "Pune", "Bangalore"];
let citiesWithA = cities.filter((city) => {
    if(city.includes("a"))
    {
        return city;
    }
});
console.log(`City with a: ${citiesWithA}`);

let movies = ["SpiderMan", "Inception", "Interstellar","SuperMan"];
let moviesFilter = movies.filter((movie) =>{
    if(movie.length >= 8)
    {
        return movie;
    }
});
console.log(`movie length > 8: ${moviesFilter}`);