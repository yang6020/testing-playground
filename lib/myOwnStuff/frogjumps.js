module.exports = (start, end, jumpLength) => {
  if (jumpLength <= 0) return undefined;
  return Math.ceil(Math.abs(end - start) / jumpLength);
};
