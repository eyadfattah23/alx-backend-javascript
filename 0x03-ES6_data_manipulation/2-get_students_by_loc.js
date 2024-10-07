export default function getStudentsByLocation(objects, city) {
  return objects.filter((object) => object.location === city);
}
