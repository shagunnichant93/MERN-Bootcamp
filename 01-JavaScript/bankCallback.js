function deposit(callback){
    console.log("Money deposited");
    callback();
}

deposit(function(){
    console.log("SMS sent");
});