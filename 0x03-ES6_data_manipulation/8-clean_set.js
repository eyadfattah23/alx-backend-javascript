export default function cleanSet(set, startString) {
  return startString ? Array.from(set)
    .filter((str) => typeof str === 'string' && str.startsWith(startString))
    .map((str) => str.replace(startString, ''))
    .join('-') : '';

  /*   if (!startString) {
      return [];
    }
   */

  /*   for (let index = 0; index < stringList.length; index += 1) {
      if (stringList[index].includes(startString)) {
        stringList[index].replace(startString, '');
      } else {
        delete stringList[index];
      }
    }
    console.log(stringList);
    return stringList.join('-'); */
}
