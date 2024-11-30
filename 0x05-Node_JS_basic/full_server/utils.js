const fs = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const students = data.split('\n').slice(1);

      if (!students[-1]) { students.pop(); }
      const csStudents = [];
      const SWEStudents = [];
      const firstNames = [];

      for (const student of students) {
        const std = student.split(',');
        firstNames.push(std[0]);
        if (std[3] === 'CS') { csStudents.push(std[0]); }
        if (std[3] === 'SWE') { SWEStudents.push(std[0]); }
      }
      const result = {
        total: students.length,
        csStudents,
        SWEStudents,
        firstNames,
      };
      resolve(result);
    });
  });
}
module.exports = readDatabase;
