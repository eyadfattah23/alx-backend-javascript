export default function appendToEachArrayValue(array, appendString) {
  const Array = []
  for (let item of array) {
    let value = item
    Array.push(appendString + item)
  }
  return Array;
}
