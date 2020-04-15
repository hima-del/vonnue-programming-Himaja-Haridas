const prime = (n) => {
  for (let x = 2; x < n; x++) {
    if (n % x == 0) {
      return false;
    }
    return true;
  }
};

console.log(prime(100));
