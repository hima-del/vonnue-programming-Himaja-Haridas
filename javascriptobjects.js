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

const addStudent = (studentArray, name, id) => {
  let marks = [];
  let add = {
    name,
    id,
    marks,
  };
  array.push(add);
  return studentArray;
};

// change class teacher

const changeTeacher = (inputClassName, inputTeacherName) => {
  if (inputClassName === classDetails.name) {
    classDetails.teacherName = inputTeacherName;
  }
  return classDetails;
};

// delete student

const deleteStudent = (studentArray, inputId) => {
  for (let i = 0; i < studentAarray.length; i++) {
    if (studentAarray[i].id === inputId) {
      studentArray.splice(i, 1);
    }
    return classDetails;
  }
};

// enter mark for a student

const enterMarkOfStudent = (studentArray, inputId, subject, mark) => {
  marks = { subject, mark };
  for (let i = 0; i < studentArray.length; i++) {
    if (studentArray.id === inputId) {
      for (let j = 0; j < studentArray.marks.length; j++) {
        if (studentAarray[i].marks[j].subject === subject) {
          studentArray[i].marks[j].mark = mark;
        }
      }
    }
  }
  return studentArray;
};

// delete subject

const deleteSubject = (studentArray, id, subject) => {
  for (let i = 0; i < studentAarray.length; i++) {
    if (studentArray.id === id) {
      for (let j = 0; j < studentArray.marks.length; j++) {
        if (studentArray[i].marks[j].subject === subject) {
          studentAarray[i].marks.splice(j, 1);
        }
      }
    }
    console.log(studentArray[i]);
  }
  return studentArray;
};

// topper of a class

const topperOfClass = (subject) => {
  let index = 0;
  let topperMark = classDetails.students[0].marks[subject];
  for (let i = 1; i < classDetails.students.length; i++) {
    if (classDetails.students[i].marks[subject] > topperMark) {
      topperMark = classDetails.students[i].marks[subject];
      index = i;
    }
  }
  return classDetails.students[index];
};

// average mark of a subject

const averageMark = (subject) => {
  let sum = 0;
  for (let i = 1; i < classDetails.students.length; i++) {
    sum = sum + classDetails.students[i].marks[subject];
  }
  return sum / classDetails.students.length;
};

// edit mark of a student

const editMarkOfStudent = (id, subject, inputMark) => {
  for (let i = 0; i < classDetails.students.length; i++) {
    if (classDetails.students[i].id === id) {
      classDetails.students[i].marks[subject] = inputMark;
    }
  }
  return classDetails;
};

// sort and display a list of students

const sortStudents = () => {
  for (let i = 0; i < classDetails.students.length - 1; i++) {
    for (let j = i + 1; j < classDetails.students.length; j++) {
      if (classDetails.students[i].name > classDetails.students[j].name) {
        let temp = classDetails.students[i];
        classDetails.students[i] = classDetails.students[j];
        classDetails.students[j] = temp;
      }
    }
  }
  return classDetails.students;
};

console.log("enter 1 to add new student");
console.log("enter 2 to change teacher name");
console.log("enter 3 to delete a a student");
console.log("enter 4 to add mark of a student");
console.log("enter 5 to delete subject");
console.log("enter 6 to get topper of a class");
console.log("enter 7 to get average mark");
console.log("enter 8 to edit mark of a student");
console.log("enter 9 to sort a list of students");

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
if (response === 4) {
  let id = parseInt(readline.question("enter ID of the student :"));
  let subject = parseInt(readline.question("enter the subject :"));
  let mark = parseInt(readline.question("enter the mark :"));
  console.log(enterMarkOfStudent(classDetails.students, id, subject, mark));
}
if (response === 5) {
  let id = parseInt(readline.question("enter ID of the student :"));
  let subject = parseInt(readline.question("enter the subject :"));
  console.log(deleteSubject(classDetails.students, id, subject));
}
if (response === 6) {
  let subject = parseInt(readline.question("enter the subject :"));
  console.log(topperOfClass(subject));
}
if (response === 7) {
  let subject = parseInt(readline.question("enter the subject :"));
  console.log(averageMark(subject));
}
if (response === 8) {
  let id = parseInt(readline.question("enter ID of the student :"));
  let subject = parseInt(readline.question("enter the subject :"));
  let mark = parseInt(readline.question("enter the new mark :"));
  console.log(editMarkOfStudent(id, subject, mark));
}
if (response === 9) {
  console.log(sortStudents());
}
