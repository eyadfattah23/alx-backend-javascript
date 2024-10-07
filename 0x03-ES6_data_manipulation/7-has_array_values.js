export default function hasValuesFromArray(set, array) {
  /* const set2 = new Set(array); */
  return new Set(array).isSubsetOf(set);
}
