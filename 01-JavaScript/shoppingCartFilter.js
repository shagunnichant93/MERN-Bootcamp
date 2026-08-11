let products = [
    { name: "Laptop", price: 65000 },
    { name: "Mouse", price: 1000 },
    { name: "Keyboard", price: 2500 },
    { name: "Monitor", price: 20000 },
    { name: "Headphones", price: 5000 }
];

console.log(`Shopping cart`);
console.log(`-------------------`);
products.forEach((product) => {
console.log(`${product.name} - ${product.price}`);
});


console.log(`-------------------`);
console.log(`Premium Products (Above 10000)`);
let result1 = products.filter((product) => {
    return product.price > 10000;
    
});
result1.forEach((product) => {
console.log(`${product.name} - ${product.price}`);
});

console.log(`-------------------`);
console.log(`Premium Products (Above 5000)`);

let filter5000 = products.filter((product) => {
    return product.price > 5000;
    
});
filter5000.forEach((product) => {
console.log(`${product.name} - ${product.price}`);
});