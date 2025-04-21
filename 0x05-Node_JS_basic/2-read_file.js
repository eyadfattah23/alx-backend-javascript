const fs = require("fs");
function countStudents(path) {
  try {
    let fileContent = fs.readFileSync(path, "utf-8").split('\n');
    const CSList = [];
    const SWEList = [];

    if (!fileContent[fileContent.length - 1]) {
      fileContent = fileContent.slice(1, -1);
      console.log(`Number of students:${fileContent.length}`);
    } else {
      fileContent = fileContent.slice(2);
    }
    for (let i = 0; i < fileContent.length; i++) {
      const student = fileContent[i].split(',');
      if (student[3] === 'CS') {
        CSList.push(student[0])
      } else[

        SWEList.push(student[0])
      ]

    }
    console.log(`Number of students in CS: ${CSList.join(', ')}`);
    console.log(`Number of students in SWE: ${SWEList.join(', ')}`);


  } catch (error) {
    if (error.errno === -2)
      throw new Error('Cannot load the database')
    else
      throw new Error(error.message)
  }
}
countStudents("database.csv")
