export default function getListStudents(objects) {
  if (!Array.isArray(objects)) {
    return [];
  }
  return objects.map((object) => (object.id));
}
