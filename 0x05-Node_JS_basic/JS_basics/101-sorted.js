const dict = {
  89: 1,
  90: 2,
  91: 1,
  92: 3,
  93: 1,
  94: 2
};

const result = {};

for (element in dict) {
  if (dict[element] in result) {
    result[dict[element]].push(element)
  } else {
    result[dict[element]] = []
    result[dict[element]].push(element)
  }
}

console.log(result);
