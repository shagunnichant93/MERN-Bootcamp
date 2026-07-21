function prepareFood() {
    console.log("Food Prepared");
}

function placeOrder(callback) {
    console.log("Order Accepted");
    callback();
}

placeOrder(prepareFood);