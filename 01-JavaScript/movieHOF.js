function enjoyMovie() {
    console.log("Enjoy the Movie");
}

function bookTicket(callback) {
    console.log("Ticket Booked");
    callback();
}

bookTicket(enjoyMovie);