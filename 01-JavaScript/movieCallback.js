function movie(callback){   
    console.log("Ticket Booked");    
    callback();
}   

movie(function(){
    console.log("Enjoy Movie");    
});