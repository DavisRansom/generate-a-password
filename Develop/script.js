var generateBtn = document.querySelector("#generate");

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialCharacters = [",", "!", "#", "$", "%"]

function generatePassword() {
  var passwordOptions = []

  var charactersLength = parseInt(prompt("How many characters would you like your new, unique password to be?: "));
  if (charactersLength < 8 || charactersLength > 128) {
    return alert("Invalid length. Please choose a number between 8 and 128.");
  }
  var lowerCaseLettersChoice = confirm("Press OK if you would like to include Lowercase Letters. If not, press Cancel.");
  var upperCaseLettersChoice = confirm("Press OK if you would like to include Uppercase Letters. If not, press Cancel.");
  var numbersChoice = confirm("Press OK if you would like to include Numbers in your password. If not, press Cancel.");
  var specialCharactersChoice = confirm("Press OK if you would like to include Special Characters in your password. If not, press Cancel.");

  if (lowerCaseLettersChoice === false &&
    upperCaseLettersChoice === false &&
    numbersChoice === false &&
    specialCharactersChoice === false) {
    return alert("Please choose at least one selection");
  }

  if (lowerCaseLettersChoice === true) {
    passwordOptions = passwordOptions.concat(lowerCase)
  }

  if (upperCaseLettersChoice) {
    passwordOptions = passwordOptions.concat(upperCase)
  }

  if (numbersChoice) {
    passwordOptions = passwordOptions.concat(numbers)
  }

  if (specialCharactersChoice) {
    passwordOptions = passwordOptions.concat(specialCharacters)
  }

  var password = "";
  for (let i = 0; i < charactersLength; i++) {
    var randomCharacter = passwordOptions[Math.floor(Math.random() * passwordOptions.length)]
    password = password + randomCharacter
  }



  return password
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
