function reverseString(str) {
  return str.split("").reverse().join("");
}
const userInput = prompt("Введіть щось");
console.log(reverseString(userInput));