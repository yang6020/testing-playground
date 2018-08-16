module.exports = array => {
  if (!Array.isArray(array)) return 0;
  let copyArray = Array.from(new Set(array.sort(function (a, b) { return a - b; })));
  let max = copyArray[copyArray.length - 1];
  let min = 0;
  while (copyArray[0] < 0) {
    copyArray.shift();
  }
  {
    min = copyArray[0];
  }
  let counter = min;
  if (min == max) return max;
  for (let i = 0; i < copyArray.length; i++) {
    if (typeof copyArray[i] !== "number") return 0;
    if (copyArray[i] !== counter) return counter;
    counter++;
  }
  return 0;
};
