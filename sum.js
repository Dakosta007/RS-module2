function sum(a, b) {
  if (typeof a === "string" || typeof b === "string") {
    a = Number(a);
    b = Number(b);
  }
  return a + b;
}
module.exports = sum;
