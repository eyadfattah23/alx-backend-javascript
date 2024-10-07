export default function updateStudentGradeByCity(length, position, value) {
  const buff = new ArrayBuffer(length);
  const dv = new DataView(buff);

  try {
    dv.setInt8(position, value);
  } catch (error) {
    throw new Error('Position outside range');
  }

  return dv;
}
