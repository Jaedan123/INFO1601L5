//816038271 - Jaedan Doughlin - Lab 5
let bob = {
  fname: "bob",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1603',
      grades: [ 89, 34, 67 ]
    },
    {
      course: 'INFO 1601',
      grades: [ 89, 34, 67 ]
    }
  ]
};

let sally = {
  fname: "sally",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1601',
      grades: [ 100, 89, 79 ]
    }
  ]
};

let paul = {
  fname: "paul",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1600',
      grades: [ 89, 34, 67 ]
    }
  ]
};

const students = [bob, sally, paul];

function getAverageGrade(student, course) {
  const courseData = student.transcript.find(c => c.course === course);
  if (!courseData) return -1; 
  const grades = courseData.grades;
  const average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
  return average;
}

function getAssignmentMark(student, course, num) {
  const courseData = student.transcript.find(c => c.course === course);
  if (!courseData || num < 1 || num > courseData.grades.length) return -1; 
  return courseData.grades[num - 1]; 
}

function averageAssessment(students, courseName, assignment) {
  let total = 0;
  let count = 0;

  for (const student of students) {
    const mark = getAssignmentMark(student, courseName, assignment);
    if (mark !== -1) { 
      total += mark;
      count++;
    }
  }

  return count > 0 ? total / count : -1; 
}



console.log(getAverageGrade(bob, 'INFO 1603')); 
console.log(getAssignmentMark(bob, 'INFO 1603', 2)); 
console.log(averageAssessment(students, 'INFO 1601', 2)); 