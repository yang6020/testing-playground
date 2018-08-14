module.exports = text => {
  if (typeof (string) !== "string") return "error not a string"
  let textIgnoreChar = text.replace(/[\W]/g, "").toLowerCase().split("");
  return textIgnoreChar.join("") === textIgnoreChar.reverse().join("");
};
