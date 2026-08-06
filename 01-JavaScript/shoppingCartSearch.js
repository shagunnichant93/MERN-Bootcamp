let products = [
"Laptop",
"Mouse",
"Keyboard",
"Monitor",
"Headphones"
];

console.log(`Original array: 
    ${products[0]}
    ${products[1]}
    ${products[2]}
    ${products[3]}
    ${products[4]}`);
console.log("------------------------");
console.log(`Keyboard found at Index: ${products.indexOf("Keyboard")}`);
console.log("------------------------");
if(products.includes("Printer"))
{
    console.log(`Printer found at ${products.indexOf("Printer")}`);
}
else
{
    console.log("Product not found");
}


