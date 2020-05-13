const swap = (a, b) => {
  a = a + b;
  b = a - b;
  a = a - b;
  return [a, b];
};

const permutationOfString = (str, start, end) => {
    let results=[];
  if (start === end) {
    return str;
  } else {
    for (let i = start; i < end; i++) {
      swap(str[start], str[i]);
      permutationOfString(str, start + 1, end);
      swap(str[start], str[i]);
      results.push(permutationOfString(str))
    }
  }
  return results;
};
let str = "ABC";
let n = str.length;
console.log(permutationOfString(str, 0, n - 1));
