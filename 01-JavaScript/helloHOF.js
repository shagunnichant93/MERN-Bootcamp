function welcome() {
    console.log("Welcome to MERN");
}

function executeTask(task) {
    task();
}

executeTask(welcome);