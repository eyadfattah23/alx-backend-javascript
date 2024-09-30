export default function iterateThroughObject(reportWithIterator) {
  const employees = [];

  for (const element of reportWithIterator) {
    employees.push(element);
  }
  return employees.join(' | ');
}
