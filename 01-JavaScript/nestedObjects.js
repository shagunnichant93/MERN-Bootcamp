let student = {
    name: "Shagun",
age: 30,
address: {
    city: "Delhi",
state: "Delhi",
pincode: 201206
},
education: {
    degree: "B.Tech.",
college: "MIT",
percentage: 77
}
};

console.log(`Student Name: ${student.name}`);
console.log(`City: ${student.address.city}`);
console.log(`State: ${student.address.state}`);
console.log(`Degree: ${student.education.degree}`);
console.log(`College: ${student.education.college}`);
console.log(`Percentage: ${student.education.percentage}`);