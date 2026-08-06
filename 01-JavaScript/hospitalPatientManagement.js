let patients = [
"Rahul",
"John",
"Priya",
"Amit",
"Shagun"
];

console.log(`Initial Queue:
    ${patients[0]}
    ${patients[1]}
    ${patients[2]}
    ${patients[3]}
    ${patients[4]}`
);
console.log("--------------------------------");
let removedPatient = patients.splice(1,1);
console.log(`Removed Patient: ${removedPatient}`);
console.log("--------------------------------");
patients.splice(1,0,"Emergency Patient");
console.log("--------------------------------");
console.log(`Updated Queue after removing second patient:
    ${patients[0]}
    ${patients[1]}
    ${patients[2]}
    ${patients[3]}
    ${patients[4]}`);
console.log("--------------------------------");
console.log(`Total Patients in Queue: ${patients.length}`);