const readDatabase = require('../utils');

class StudentsController {
  // eslint-disable-next-line no-unused-vars
  static getAllStudents(request = null, response) {
    readDatabase(process.argv[2]).then((data) => {
      response.status(200).send(`This is the list of our students\nNumber of students in CS: ${data.csStudents.length}. List: ${data.csStudents.join(', ')}\nNumber of students in SWE: ${data.SWEStudents.length}. List: ${data.SWEStudents.join(', ')}`);
    }).catch((error) => response.status(500).send(error.message));
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
    }
    const readDB = readDatabase(process.argv[2]);
    if (major === 'CS') {
      readDB.then((data) => {
        response.status(200).send(`List: ${data.csStudents.join(', ')}`);
      }).catch((error) => response.status(500).send(error.message));
    } else if (major === 'SWE') {
      readDB.then((data) => {
        response.status(200).send(`List: ${data.SWEStudents.join(', ')}`);
      }).catch((error) => response.status(500).send(error.message));
    }
  }
}
module.exports = StudentsController;
