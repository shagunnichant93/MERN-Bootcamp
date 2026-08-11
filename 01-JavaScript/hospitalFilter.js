let patients = [
    { name: "Rahul", age: 25 },
    { name: "Amit", age: 67 },
    { name: "Priya", age: 32 },
    { name: "Shagun", age: 72 },
    { name: "John", age: 45 }
];
console.log(`Senior Patients`);
console.log(`----------------------------`);

let seniorPatients = patients.filter((patient) =>
{
    return patient.age>60;
});
seniorPatients.forEach((patient) =>
{
    console.log(`${patient.name}-${patient.age}`);
});
