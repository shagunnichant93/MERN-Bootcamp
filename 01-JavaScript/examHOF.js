function publishResult() {
    console.log("Result Published");
}

function completeExam(callback) {
    console.log("Exam Completed");
    callback();
}

completeExam(publishResult);