module.exports = (string1, string2) => {
  if (typeof string1 !== "string" || typeof string2 !== "string") return false;
  if (
    string1.length - string2.length > 1 ||
    string2.length - string1.length > 1
  )
    return false;
  if (string1 === string2) return false;
  let editCount = 0;
  let i = 0;
  let j = 0;
  while (i < string1.length && j < string2.length) {
    let one = string1.charAt(i);
    let two = string2.charAt(j);
    if (one != two) {
      editCount++;
      if (string1.length > string2.length) i++;
      if (string2.length > string1.length) j++;
      if (string1.length == string2.length) {
        i++;
        j++;
      }
    } else {
      i++;
      j++;
    }
    if (editCount > 1) {
      return false;
    }
  }
  return true;
};
