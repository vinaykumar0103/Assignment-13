"use strict"

// 1. Write a JavaScript program to get an array from the user and return the:
// a) Sum of all elements in the array using reduce()
// b) Average of all elements in the array using reduce()
// Sample Input:
// [ 1, 2, 3, 4, 5 ]
// Output:
// 15
// 3

const array = prompt("Enter an array of numbers separated by commas: ").split(",").map(Number);

const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

const average = array.reduce((accumulator, currentValue, index, array) => {
    accumulator += currentValue;
    if (index === array.length - 1) {
        return accumulator / array.length;
    } else {
        return accumulator;
    }
}, 0);
console.log(`The sum of all elements in the array is ${sum}.`);
console.log(`The average of all elements in the array is ${average}.`);



// 2) Write a JavaScript program to
// a) Calculate grades on basis of marks
// >90 = A
// >80 = B
// >70 = C
// >60 = D
// >50 = E
// else = F
// b) Map the grades of each student
// c) Group students according to the grades they have received and display.
// Sample Input:
// let students = [
// { name: "John", marks: “92” },
// { name: "Oliver", marks: “85” },
// { name: "Michael", marks: “79” },
// { name: "Dwight", marks: “95”},
// { name: "Oscar", marks: “64” },
// { name: "Kevin", marks: “48” },
// ];
// Output:

// {
// 'A': [ { name: "John", grade: “A” },
// { name: "Dwight", grade: “A” } ],
// 'B': [ { name: "Oliver", grade: “B” } ],
// 'C': [ { name: "Michael", grade: “C” } ],
// 'D': [ { name: "Oscar", grade: “D” } ],
// 'E': [ ],
// 'F': [ { name: "Kevin", grade: “F” } ],
// }

const gradingScale = [
  { score: 90, grade: 'A' },
  { score: 80, grade: 'B' },
  { score: 70, grade: 'C' },
  { score: 60, grade: 'D' },
  { score: 50, grade: 'E' },
  { score: 0, grade: 'F' }
];

let students = [
  { name: "John", marks: "92" },
  { name: "Oliver", marks: "85" },
  { name: "Michael", marks: "79" },
  { name: "Dwight", marks: "95" },
  { name: "Oscar", marks: "64" },
  { name: "Kevin", marks: "48" }
];


students = students.map(student => {
  const marks = parseInt(student.marks);
  const grade = gradingScale.find(grading => marks >= grading.score).grade;
  return { ...student, grade };
});


const grades = students.reduce((accumulator, student) => {
  if (!accumulator[student.grade]) {
    accumulator[student.grade] = [];
  }
  accumulator[student.grade].push({ name: student.name, grade: student.grade });
  return accumulator;
}, {});


console.log(grades);
