// Assignment Code
//So, for this assignment, I have to generate a random password based on user input.
//Among other things, the users will select which type of characters they want their
//password to include.
//The following constant arrays will be used in my password generator function to
//create an array consisting of all of the types of characters that the users wants
//their password to include.
const LOWERCASE = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const UPPERCASE = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//Although spaces are technically a special character, I'm not including it, since passwords never allow it.
//!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
const SPECIAL = ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "\`", "{", "|", "}", "~"];

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //This empty string is where we'll add in all the characters for our password.
  var generatedPassword = "";
  //This array will be filled out with characters from the above constant arrays based on user input.
  var charsToChooseFrom = [];
  //Accepting user input to determine the length of the password to be generated.
  var passwordLength = parseInt(window.prompt("How many characters long would you like your password to be?\nPlease input a number between 8 and 128 (inclusive).\nNote that any 0s before your first nonzero digit will be ignored."));
  //This while loop prevents the user from proceeding without entering a valid number of characters.
  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    var passwordLength = parseInt(window.prompt("Invalid entry. Please enter a number between 8 and 128 (inclusive)."))
  }

  //Now we're going to start builing our charsToChooseFrom array. 
  //I'm going to nest this process in a while loop so that the user must approve at least one type of
  //character in order to proceed--the check will be if charsToChooseFrom remains empty.
  while(charsToChooseFrom.length === 0) {
    if(window.confirm("Can this password include lowercase letters?")) {
      charsToChooseFrom = charsToChooseFrom.concat(LOWERCASE);
    } 
    if(window.confirm("Can this password include uppercase letters?")) {
      charsToChooseFrom = charsToChooseFrom.concat(UPPERCASE);
    }
    if(window.confirm("Can this password include digits?")) {
      charsToChooseFrom = charsToChooseFrom.concat(DIGITS);
    }

    if(window.confirm("Can this password include special characters?")) {
      charsToChooseFrom = charsToChooseFrom.concat(SPECIAL);
    }

    if(charsToChooseFrom.length === 0) {
      window.alert("Whoa! We can't make you a password if we aren't allowed to use any characters! Let's try this again.");
    }
  }

  //Now we actually generate the password. We add the appropriate number of characters (passwordLength) 
  //randomly chosen from charsToChooseFrom to generatedPassword, and then return that.
  for(var i = 0; i < passwordLength; i++) {
    generatedPassword += charsToChooseFrom[Math.floor(Math.random() * charsToChooseFrom.length)];
  }

  return generatedPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
