function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

let base = parseInt(prompt("Enter the base:"));
let exponent = parseInt(prompt("Enter the exponent:"));
console.log(`${base} raised to the power of ${exponent} is ${power(base, exponent)}`);
