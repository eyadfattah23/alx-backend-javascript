export default function appendToEachArrayValue (array, appendString) {
  const Array = [];
  for (const item of array) {
    Array.push(appendString + item);
  }
  return Array;
}
