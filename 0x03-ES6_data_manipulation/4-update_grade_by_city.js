export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const updatedStudent = { ...student }; // Avoid directly mutating `student`
      const nstudent = newGrades.find((ngstudent) => ngstudent.studentId === updatedStudent.id);
      updatedStudent.grade = nstudent ? nstudent.grade : 'N/A';
      return updatedStudent;
    });
}
/* return students.filter((student) => student.location === city).map((student) => {
  const nstudent = newGrades.find((ngstudent) => ngstudent.studentId === student.id);
  student.grade = nstudent ? nstudent.grade : 'N/A';
  return student;
}); */

/*   for (const student of cstudents) {
    const nstudent = newGrades.find((ngstudent) => ngstudent.studentId === student.id);
    student.grade = nstudent.grade ? nstudent.grade : 'N/A';
    console.log(student);
  } */
