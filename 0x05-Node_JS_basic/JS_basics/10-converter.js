function converter(base) {
  function numberConverter(number) {
    return number.toString(base)
  }
  return numberConverter
}

let myConverter = converter(10);

console.log(myConverter(2));
console.log(myConverter(12));
console.log(myConverter(89));


myConverter = converter(16);

console.log(myConverter(2));
console.log(myConverter(12));
console.log(myConverter(89));
