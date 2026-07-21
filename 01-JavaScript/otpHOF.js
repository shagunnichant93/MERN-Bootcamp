function login() {
    console.log("login successful");
}

function verifyOtp(callback) {
    console.log("verify OTP");
    callback();
}

verifyOtp(login);