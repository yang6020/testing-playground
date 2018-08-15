module.exports = array => {
  if (!Array.isArray(array)) return 0;
  let sortArray = array.sort(function(a, b) {
    return a - b;
  });
  let setArray = new Set(sortArray);

  let copyArray = Array.from(setArray);
  let max = copyArray[copyArray.length - 1];
  let j = 0;
  let min = 0;
  while (copyArray[j] < 0) {
    copyArray.shift();
  }
  {
    min = copyArray[j];
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
