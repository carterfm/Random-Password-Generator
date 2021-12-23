// Assignment Code
//So, for this assignment, I have to generate a random password based on user input.
//Among other things, the users will select which type of characters they want their
//password to include.
//The following constant arrays will be used in my password generator function to
//create an array consisting of all of the types of characters that the users wants
//their password to include.
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//Although spaces are technically a special character, I'm not including it, since passwords never allow it.
//!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
const special = ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "\`", "{", "|", "}", "~"];

var generateBtn = document.querySelector("#generate");

/*function generatePassword() {
  //This array will be filled out with characters from the above constant arrays based on user input.
  var charsToChooseFrom = [];
  var passwordLength = parseInt(window.prompt("");
}*/

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
