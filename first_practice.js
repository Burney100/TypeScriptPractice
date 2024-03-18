"use strict";
let a = 1; // inter 
let b = "Abid"; // string
let c = true; // boolean
let d = 21.12; // float
a = 9;
console.log(a); //1
console.log(a); //9
console.log(b);
console.log(c);
console.log(d);
console.log("hina");
//  array
let hamza = [5, 6, 7];
console.log(hamza[0]);
console.log(hamza[1]);
console.log(hamza[2]);
let hamza1 = ["1-c block 2", "true", "7"];
console.log(hamza1[0], hamza1[1], hamza1[2]);
console.log(hamza1[1]);
console.log(hamza1[2]);
let business = ["pakistani business", "karachi", "1940"];
console.log(business[0], business[1], business[2]);
let array2 = [1, 2, 3];
console.log(array2[2]);
// empty array
let array5 = [];
array5.push(1234);
console.log(array5);
// object
let teacher = {
    name: "Zeeshan",
    experience: 10
};
console.log(teacher.name);
console.log(teacher["experience"]);
console.log(teacher.experience);
// Type Declaration
let student;
student = {
    name: "Hira",
    age: 30
};
console.log(student["name"]);
console.log(student.age);
//object
let employee = {
    firstName: 'Abid',
    lastName: 'Muhammad',
    age: 25,
    jobTitle: 'CSM',
    jobaddress: 'Karachi 7400',
    subjects: ["urdu", "math", "english"]
};
console.log(employee.firstName);
console.log(employee.age);
console.log(employee.jobTitle);
console.log(employee.jobaddress);
console.log(employee.lastName);
console.log(employee.subjects[2]);
console.log(employee);
