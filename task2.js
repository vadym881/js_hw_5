function isPalindrome(str) {
  const reversedString = str.split("").reverse().join("");
  if (str === reversedString) {
    return `String "${str}" is palindrome`;
  } else {
    return `String "${str}" is not palindrome`;
  }
}
const inputString = prompt("Enter a word");
console.log(isPalindrome(inputString));
