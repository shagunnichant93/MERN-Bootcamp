function order(callback){   
    console.log("Order Accepted");    
    callback();
}

order(function(){
    console.log("Food Prepared");
    console.log("Delivered");
});