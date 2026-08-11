let products = [
    { name: "Laptop", price: 65000 },
    { name: "Mouse", price: 1000 },
    { name: "Keyboard", price: 2500 },
    { name: "Monitor", price: 20000 },
    { name: "Headphones", price: 5000 }
];

let productSearch = products.find((product) => {
    return product.name === "Keyboard";
});
console.log(`Product Found`);
console.log(`--------------------`);
console.log(`${productSearch.name}-${productSearch.price}`);