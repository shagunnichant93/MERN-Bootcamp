function add(a,b){
    console.log("Addition is: ",a+b);
}
function subtract(a,b){
    console.log("Subtraction is: ",a-b);
}
function multiply(a,b){
    console.log("Multiplication is: ",a*b);
}
function calculate(a,b,callback){
    callback(a,b);
}
calculate(20,10,add);
calculate(20,10,subtract);
calculate(20,10,multiply);