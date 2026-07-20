function exam(callback){
    console.log("Exam Completed");
    callback();
}

exam(function(){
    console.log("Result Published");
});
