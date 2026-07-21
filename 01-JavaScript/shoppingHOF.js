function payment() {
    console.log("Payment Successful");
}

function checkout(callback) {
    console.log("Items Checked Out");
    callback();
}

checkout(payment);