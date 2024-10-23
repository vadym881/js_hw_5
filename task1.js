function reverseString(str) {
  return str.split("").reverse().join("");
}
const userInput = prompt("Enter a word");
console.log(reverseString(userInput));