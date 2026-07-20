function anonymous(callback){
    console.log("Processing...");
    callback();
}
anonymous(function(){
    console.log("Process Complete");
});

