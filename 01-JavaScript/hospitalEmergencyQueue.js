let patients = [
    "Rahul",
    "John",
    "Priya",
    "Amit"
];

console.log(`Initial Queue: 
    ${patients[0]}
    ${patients[1]}
    ${patients[2]}
    ${patients[3]}`
);

patients.unshift("Emergency Patient");
console.log(`UpdatedQueue : 
    ${patients[0]}
    ${patients[1]}
    ${patients[2]}
    ${patients[3]}
    ${patients[4]}`);

console.log(`Total Patients in Queue: ${patients.length}`);