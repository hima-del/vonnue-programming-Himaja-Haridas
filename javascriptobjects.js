const readline = require("readline-sync");
let classDetails = {
  name: "class B",
  teacherName: "Mary",
  students: [
    {
      name: "Himaja",
      id: 1,
      email: "himaja@gmail.com",
      age: 15,
      phoneNumber: 9098909999,
      marks: [
        { subject: "english", mark: 20 },
        { subject: "maths", mark: 40 },
        { subject: "computer", mark: 35 },
        { subject: "physics", mark: 45 },
        { subject: "chemistry", mark: 50 },
      ],
    },
    {
      name: "Seetha",
      id: 2,
      email: "seetha@gmail.com",
      age: 15,
      phoneNumber: 9098909999,
      marks: [
        { subject: "english", mark: 33 },
        { subject: "maths", mark: 44 },
        { subject: "computer", mark: 39 },
        { subject: "physics", mark: 46 },
        { subject: "chemistry", mark: 50 },
      ],
    },
    {
      name: "Rani",
      id: 3,
      email: "rani@gmail.com",
      age: 15,
      phoneNumber: 9098909999,
      marks: [
        { subject: "english", mark: 40 },
        { subject: "maths", mark: 40 },
        { subject: "computer", mark: 30 },
        { subject: "physics", mark: 40 },
        { subject: "chemistry", mark: 20 },
      ],
    },
    {
      name: "Adi",
      id: 4,
      email: "adi@gmail.com",
      age: 14,
      phoneNumber: 9098909999,
      marks: [
        { subject: "english", mark: 30 },
        { subject: "maths", mark: 20 },
        { subject: "computer", mark: 40 },
        { subject: "physics", mark: 45 },
        { subject: "chemistry", mark: 24 },
      ],
    },
    {
      name: "Anna",
      id: 5,
      email: "anna@gmail.com",
      age: 15,
      phoneNumber: 9098909999,
      marks: [
        { subject: "english", mark: 25 },
        { subject: "maths", mark: 48 },
        { subject: "computer", mark: 37 },
        { subject: "physics", mark: 43 },
        { subject: "chemistry", mark: 29 },
      ],
    },
  ],
};
// to add a student
const addStudent = (array, name, id) => {
  let marks = [];
  let add = {
    name,
    id,
    marks,
  };
  array.push(add);
  return array;
};

// change class teacher
const changeTeacher = (inputClassName, inputTeacherName) => {
  if (inputClassName === classDetails.name) {
    classDetails.teacherName = inputTeacherName;
  }
  return classDetails;
};

// delete student
const deleteStudent = (array, inputId) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].id === inputId) {
      array.splice(i, 1);
    }
    return classDetails;
  }
};

console.log("enter 1 to add new student");
console.log("enter 2 to change teacher name");
console.log("enter 3 to delete a astudent");
let response = parseInt(readline.question("Enter your Response: "));
if (response === 1) {
  let name = readline.question("enter new student name :");
  let id = parseInt(readline.question("enter ID of the student :"));
  console.log(addStudent(classDetails.students, name, id));
}
if (response === 2) {
  let inputClassName = "class B";
  let newTeacher = readline.question("enter new teacher name :");
  console.log(changeTeacher(inputClassName, newTeacher));
}
if (response === 3) {
  let id = parseInt(readline.question("enter ID of the student :"));
  console.log(deleteStudent(classDetails.students, id));
}
