let products = [
    { name: "Laptop", price: 65000 },
    { name: "Mouse", price: 1000 },
    { name: "Keyboard", price: 2500 },
    { name: "Monitor", price: 20000 },
    { name: "Headphones", price: 5000 }
];

console.log(`Affordable Products`);
console.log(`----------------------------`);

let Price5000 = products.filter((product) =>{
return product.price >5000;
});

Price5000.forEach((product) => {
    console.log(`${product.name} - ${product.price}`);
})