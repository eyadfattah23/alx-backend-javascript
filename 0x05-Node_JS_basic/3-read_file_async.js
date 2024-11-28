const fs = require('fs');

function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw Error('Cannot load the database');
  }

  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(error);
        throw Error('Cannot load the database');
      }
      const students = data.split('\n').slice(1);
      if (!students[-1]) { students.pop(); }

      console.log(`Number of students: ${students.length}`);
      const csStudents = [];
      const SWEStudents = [];

      for (const student of students) {
        const std = student.split(',');
        if (std[3] === 'CS') { csStudents.push(student.split(',')[0]); }
        if (std[3] === 'SWE') { SWEStudents.push(student.split(',')[0]); }
      }
      console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
      console.log(`Number of students in SWE: ${SWEStudents.length}. List: ${SWEStudents.join(', ')}`);
      resolve();
      return null;
    });
  });
}
module.exports = countStudents;
