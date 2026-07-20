function patient(callback){
    console.log("Patient Registered");
    callback();
}
patient(function(){ 
    console.log("Doctor assigned");
    console.log("Medicine Prescribed");
});