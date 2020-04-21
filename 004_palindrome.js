const palindrome = (strentry) => {
  let str = strentry.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "");
  let count = 0;
  for (let x = 0; x < count; x++) {
    if (str[x] != str.slice(-1 - x)[0]) {
      console.log("not pallindrome");
      return false;
    }
    console.log("pallindrome");
    return true;
  }
};
pallindrome("himaja");
