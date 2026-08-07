let products = [
"Laptop",
"Mouse",
"Keyboard",
"Monitor",
"Headphones"
]

console.log(`Shopping Cart:
    ${products[0]}
    ${products[1]}
    ${products[2]}
    ${products[3]}
    ${products[4]}`);

console.log("----------------------");
if(products.includes("Keyboard"))
{
    console.log("Keyboard available");
}
else
{
    console.log("Keyboard not available")
}
console.log("----------------------");

if(products.includes("Printer"))
{
    console.log("Printer available");
}
else
{
    console.log("Printer not available")
}
console.log("----------------------");