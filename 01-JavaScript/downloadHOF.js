function deposit() {
    console.log("Download");
    console.log("Install");
}

function transaction(action) {
    action();
}

transaction(deposit);