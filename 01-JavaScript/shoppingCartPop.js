let cart = [
    "Laptop",
    "Mouse",
    "Keyboard",
    "Headphones",
    "Monitor"
];

console.log(`Initial cart items: ${cart[0]}
    ${cart[1]}
    ${cart[2]}  
    ${cart[3]}  
    ${cart[4]}`);
console.log("------------------");
let removed = cart.pop();
console.log(`Shopping Cart after popping: ${cart[0]}
    ${cart[1]}
    ${cart[2]}  
    ${cart[3]}`);
console.log("------------------");
console.log(`Removed item from cart: ${removed}`);
console.log(`Total items in cart: ${cart.length}`);