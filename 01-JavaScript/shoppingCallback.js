function item(callback){
    console.log("Item added");
    callback();
}
item(function(){
    console.log("Payment Successful");
    console.log("Invoice Generated");
});