let student = {
    name: "Shagun",
    age: 25,
    course: "MERN"
};

let studentCopy ={};

console.log(`Original Student`);
console.log(`------------------------`);
console.log(student);

console.log(`Copied Student`);
console.log(`------------------------`);
console.log(Object.assign(studentCopy,student));

let basicDetails = {
    name: "Shagun",
    age: 25
};

let educationDetails = {
    course: "MERN",
    city: "Delhi"
};
let studentNew ={};
console.log(`------------------------`);
console.log(`Student Details`);

console.log(`------------------------`);
console.log(Object.assign(studentNew,basicDetails,educationDetails));

let productBasic = {
    name: "Laptop",
    brand: "HP"
};

let productDetails = {
    price: 65000,
    category: "Electronics"
};
let product ={};
console.log(`------------------------`);
console.log(`Product Details`);

console.log(`------------------------`);
console.log(Object.assign(product,productBasic,productDetails));

let patientBasic = {
    id: "PAT101",
    name: "Rahul"
};

let patientMedical = {
    age: 35,
    disease: "Fever",
    roomNo: 205
};
let patient ={};
console.log(`------------------------`);
console.log(`Patient Details`);

console.log(`------------------------`);
console.log(Object.assign(patient,patientBasic,patientMedical));

let studentBasic = {
    name: "Shagun",
    age: 25
};

let studentUpdate = {
    age: 30,
    course: "MERN"
};
let stuNew= {};
console.log(`------------------------`);
console.log(`Student Details`);

console.log(`------------------------`);
console.log(Object.assign(stuNew,studentBasic,studentUpdate));
