// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function to prompt user for password options
function getPasswordOptions() {
  // Prompt user for password length
}
// Function for getting a random element from an array
function getRandom(arr) {}

// Function to generate password with user input
function generatePassword() {
  var passwordLength = parseInt(
    prompt("Enter the length of the password (between 8 and 128 characters):")
  );
  // Validate the password length
  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid number between 8 and 128.");
    passwordLength = parseInt(
      prompt("Enter the length of the password (between 8 and 128 characters):")
    );
    // prompts that will appear in the browser as pop ups
  }
  var wantsUppercase = confirm ("do you want upper case characters")
  var wantsLowercase = confirm ("do you want lower case characters")
  var wantsNumbers = confirm ("do you want numbers")
  var wantsSpecialChar = confirm ("do you want special characters")
  if (wantsUppercase === false && wantsLowercase === false && wantsNumbers === false && wantsSpecialChar === false) {
    alert("You must choose at least 1 option");
    return generatePassword ()
  }
  // Combines character arrays based on user preferences, creating an array named choices.
  var choices =[]
  if (wantsUppercase === true){
    choices = choices.concat(upperCasedCharacters)
  }
  if (wantsLowercase === true){
    choices = choices.concat(lowerCasedCharacters)
  }
  if (wantsNumbers === true){
    choices = choices.concat(numericCharacters)
  }
  if (wantsSpecialChar === true){
    choices = choices.concat(specialCharacters)
  }
  // creates a password by randomly selecting characters from the choices array until it reaches the desired length (passwordLength).
  var password = ""
  for(var i = 0; i < passwordLength; i ++){
    var randomChar = choices [Math.floor(Math.random()*choices.length)]
    password = password + randomChar
  }
  return password
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

