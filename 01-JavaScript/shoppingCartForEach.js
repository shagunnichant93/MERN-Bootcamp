let cart = ["Laptop", "Mouse", "Keyboard", "Monitor"];

console.log(`Shopping Cart`);
console.log(`-----------------`);
cart.forEach((item, index) =>{    
    console.log(`Item ${index +1}: ${item}`);
});
console.log(`-----------------`);
console.log(`Total Items: ${cart.length}`);