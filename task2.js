function isPalindrome(str) {
  const reversedString = str.split("").reverse().join("");
  if (str == reversedString) {
    return `Слово "${str}" є паліндромом`;
  } else {
    return `Слово "${str}" не є паліндромом`;
  }
}
const userInput = prompt("Введіть щось");
console.log(isPalindrome(userInput));
