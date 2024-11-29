const fs = require('fs');

function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw Error('Cannot load the database');
  }

  const file = fs.readFileSync(path, 'utf-8');

  const students = file.split('\n').slice(1);
  if (!students[-1]) { students.pop(); }

  console.log(`Number of students: ${students.length}`);

  const csStudents = [];
  const SWEStudents = [];

  for (const student of students) {
    const std = student.split(',');
    if (std[3] === 'CS') { csStudents.push(std[0]); }
    if (std[3] === 'SWE') { SWEStudents.push(std[0]); }
  }
  console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
  console.log(`Number of students in SWE: ${SWEStudents.length}. List: ${SWEStudents.join(', ')}`);
}

module.exports = countStudents;
