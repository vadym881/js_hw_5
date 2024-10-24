function findGCD(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return "Both inputs must be valid numbers!";
  } else {
    a = Number(a);
    b = Number(b);
    let max;
    let gcd;
    if (a >= b) {
      max = a;
    } else max = b;
    for (let i = max; ; i += max) {
      if (i % a == 0 && i % b == 0) {
        gcd = i;
        break;
      }
    }
    return gcd;
  }
}
const num1 = prompt("Enter the first number ->");
const num2 = prompt("Enter the second number ->");
if (isNaN(num1) || isNaN(num2)) {
  console.log("Both inputs must be valid numbers!");
} else {
  console.log(`The GCD of ${num1} and ${num2} is ${findGCD(num1, num2)}`);
}
