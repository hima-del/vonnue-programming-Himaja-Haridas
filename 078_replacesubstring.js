const replaceSubstring = (str) => {
  let result = str.replace(/a/gi, "b");
  return result;
};

console.log(replaceSubstring("animal"));
