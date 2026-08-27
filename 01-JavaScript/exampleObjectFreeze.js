let student = {
    name: "Shagun",
    age: 25
};

Object.freeze(student);

student.age = 30;
student.course = "MERN";
delete student.name;

console.log(student);
//here object is frozen so operations can't be performed