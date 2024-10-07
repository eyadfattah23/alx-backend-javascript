export default function hasValuesFromArray(set, array) {
  const set2 = new Set(array);
  return set2.isSubsetOf(set);
}
