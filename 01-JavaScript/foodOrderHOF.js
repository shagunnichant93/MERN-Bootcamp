function prepareFood() {
    console.log("Food Prepared");
    console.log("Food Delivered");
}

function placeOrder(callback) {
    console.log("Order Accepted");
    callback();
}

placeOrder(prepareFood);