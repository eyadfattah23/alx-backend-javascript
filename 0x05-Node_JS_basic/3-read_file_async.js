const fs = require("fs");
function countStudents(path) {

  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) {
        if (error.errno === -2)
          reject(new Error('Cannot load the database'));
        else
          reject(new Error(error.message));
      }
      let fileContent = data.split('\n');
      const CSList = [];
      const SWEList = [];

      if (!fileContent[fileContent.length - 1]) {
        fileContent = fileContent.slice(1, -1);
        console.log(`Number of students: ${fileContent.length}`);
      } else {
        fileContent = fileContent.slice(2);
      }
      for (let i = 0; i < fileContent.length; i++) {
        const student = fileContent[i].split(',');
        if (student[3] === 'CS') {
          CSList.push(student[0])
        } else
          SWEList.push(student[0])

      }
      console.log(`Number of students in CS: ${CSList.join(', ')}`);
      console.log(`Number of students in SWE: ${SWEList.join(', ')}`);
      resolve();
    })
  })
}
countStudents("database.csv").then(() => {
  console.log("Done!");
})
  .catch((error) => {
    console.log(error);
  });
console.log("After!");
