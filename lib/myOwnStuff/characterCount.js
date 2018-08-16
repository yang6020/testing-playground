module.exports = string => {
  if (string === "" || string === undefined || !typeof string) {
    return 0;
  }
  let stringArray = string
    .replace(/[\W]/g, "")
    .toLowerCase()
    .split("");
  let uniqueArray = Array.from(new Set(stringArray));
  let workingArray = [];
  let resultingArray = [];
  uniqueArray.map(char => {
    workingArray.push({ char: char, count: 0 });
  });
  stringArray.map(character => {
    workingArray[workingArray.findIndex(char => char.char === character)]
      .count++;
    resultingArray.push(
      character,
      workingArray[workingArray.findIndex(char => char.char === character)]
        .count
    );
  });
  return resultingArray.join("");
};
