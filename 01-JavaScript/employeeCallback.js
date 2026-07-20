function employee(callback){    
    console.log("Employee Verified");
    callback();
}
employee(function(){
    console.log("Salary Credited");
    
});