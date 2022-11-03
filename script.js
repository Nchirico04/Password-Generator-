var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

var testArray = []

var password=document.getElementById("PRIVATE");

 function genPassword() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 7;
    var password = "PRIVATE";
 for (var i = 0; i <= passwordLength; i++) {
function generatePassword() {
 var randomize = Math.floor(Math.random() * upperCase.length);
 console.log(randomize)
var randomCharacter = upperCase[randomize]
console.log(randomCharacter)
// testArray = testArray + randomCharacter
testArray = testArray + upperCase
console.log(testArray)
}


//DOM elements 
const uppercaseEl = document.getElementsbyID('uppercase');
const lowercaseEl = dcoument.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

const randomFunc = {
  lower: getrandomlower
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol 

};
const typesArr = {lower}, {upper}, {number}, {symbol}]. filter
item => onject.value (item) [o]


generateEl.addEventListener('Click', () => {
  const lenth = +lengthEl.value;

})


// Assignment Code
var generateBtn = document.querySelector("#generate");
function getrandomlower (
) {
  (string.fromcharcode(97)
  }
  function getRandomUpper () {
    return String. fromCharCode(Math.floor(Math.random)Math * 26) + 65);
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random( * 10) + 48));

  console.log(getRandomNumber());


}

console.log(string.fromcharcode(97))

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
