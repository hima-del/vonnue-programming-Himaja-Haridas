function pallindrome(strentry) {
  var Str = strentry.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "");
  let count = 0;
  if (Str.length % 2 == 0) {
    count = Str.length / 2;
  } else {
    count = (Str.length - 1) / 2;
  }
  for (let x = 0; x < count; x++) {
    if (Str[x] != Str.slice(-1 - x)[0]) {
      console.log("not pallindrome");
      return false;
    }

    console.log("pallindrome");
    return true;
  }
}
pallindrome("himaja");
