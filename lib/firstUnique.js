module.exports = string => {
  if (string === "" || string === undefined || typeof string != "string") {
    return 0;
  }
  let stringArray = string
    .replace(/[\W]/g, "")
    .toLowerCase()
    .split("");
  let uniqueArray = Array.from(new Set(stringArray));
  let workingArray = [];
  uniqueArray.map(char => {
    workingArray.push({ char: char, count: 0 });
  });
  stringArray.map(character => {
    workingArray[workingArray.findIndex(char => char.char === character)]
      .count++;
  });
  if (
    workingArray.find(char => {
      return char.count == 1;
    }) === undefined
  )
    return 0;
  else {
    return workingArray.find(char => {
      return char.count == 1;
    }).char;
  }
};

//OTHER SOLUTIONS
// module.exports = string => {
//   if (typeof string !== "string" || !string.length) return 0;
//   let stringIgnore = string.replace(/[\W]/g, "").toLowerCase();
//   for (let i = 0; i < stringIgnore.length; i++) {
//     if (
//       stringIgnore.indexOf(stringIgnore.charAt(i)) == i &&
//       stringIgnore.indexOf(stringIgnore.charAt(i), i + 1) === -1
//     ) {
//       return stringIgnore.charAt(i);
//     }
//   }
//   return 0;
// };

// module.exports = string => {
//   if (typeof string !== "string" || !string.length) return 0;
//   let stringIgnore = string
//     .replace(/[\W]/g, "")
//     .toLowerCase()
//     .split("");
//   let unique = [];
//   let nonUnique = [];
//   for (let i = 0; i < stringIgnore.length; i++) {
//     if (unique.includes(stringIgnore[i])) {
//       nonUnique.push(stringIgnore[i]);
//       unique.splice(unique.indexOf(stringIgnore[i]), 1);
//     }
//     if (
//       !unique.includes(stringIgnore[i]) &&
//       !nonUnique.includes(stringIgnore[i])
//     ) {
//       unique.push(stringIgnore[i]);
//     }
//   }
//   if (unique.length == 0) {
//     return 0;
//   }
//   return unique[0];
// };
