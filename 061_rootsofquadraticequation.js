const findRootsOfQuadraticEquation = (a, b, c) => {
  let denominator = 2 * a;
  let numerator1 = -b + Math.sqrt(b * b - 4 * a * c);
  let numerator2 = -b - Math.sqrt(b * b - 4 * a * c);
  let root1 = Math.floor(numerator1 / denominator);
  let root2 = Math.floor(numerator2 / denominator);
  return [root1, root2];
};
console.log(findRootsOfQuadraticEquation(1, 4, 4));
