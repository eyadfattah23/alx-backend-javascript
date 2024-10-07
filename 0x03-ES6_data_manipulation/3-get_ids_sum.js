export default function getStudentIdsSum(objects) {
  return objects.reduce((accumulator, object) => (accumulator + object.id), 0);
}
