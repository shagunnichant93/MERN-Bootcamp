function verified() {
    console.log("send receipt");
}

function payment(callback) {
    console.log("verify payment");
    callback();
}

payment(verified);