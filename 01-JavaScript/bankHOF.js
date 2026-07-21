function deposit() {
    console.log("Money Deposited");
    console.log("SMS sent");
}

function transaction(action) {
    action();
}

transaction(deposit);