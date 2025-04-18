const esrever = function (list) {
  for (let i = 0, j = list.length - 1; i < j; i++, j--) {
    const tmp = list[i];
    list[i] = list[j];
    list[j] = tmp;
  }
  return list;
}
console.log(esrever([1, 2, 3, 4, 5]));
console.log(esrever(["School", 89, { id: 12 }, "String"]));
