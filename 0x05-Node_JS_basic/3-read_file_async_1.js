const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
        return;
      }
      const students = data.split('\n').slice(1);
      if (!students[-1]) { students.pop(); }

      const csStudents = [];
      const SWEStudents = [];

      for (const student of students) {
        const std = student.split(',');
        if (std[3] === 'CS') { csStudents.push(student.split(',')[0]); }
        if (std[3] === 'SWE') { SWEStudents.push(student.split(',')[0]); }
      }
      const result = {
        total: `Number of students: ${students.length}`,
        CS: `Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`,
        SWE: `Number of students in SWE: ${SWEStudents.length}. List: ${SWEStudents.join(', ')}`,
      };
      resolve(result);
    });
  });
}
module.exports = countStudents;
