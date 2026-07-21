function assignDoctor() {
    console.log("Doctor Assigned");
}

function registerPatient(callback) {
    console.log("Patient Registered");
    callback();
}

registerPatient(assignDoctor);