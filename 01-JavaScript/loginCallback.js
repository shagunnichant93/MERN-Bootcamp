function login(callback){   
    console.log("Login Successful");
    callback();
}

login(function(){
    console.log("Dashboard Loaded");
});