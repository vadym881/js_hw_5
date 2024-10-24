const num1 = validateNumber(1);
const num2 = validateNumber(2);
console.log(`The GCD of ${num1} and ${num2} is ${findGCD(num1, num2)}`);

function findGCD(a, b) {
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

function validateNumber(counter) {
  let num = +prompt(`Enter number ${counter}`);
  let isNumInt = Number.isInteger(num);
  while (!isNumInt) {
    num = +prompt("Variable should be number, please try again");
    isNumInt = Number.isInteger(num);
  }
  return num;
}
