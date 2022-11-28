// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
//Password must be 10-64 chars in length
//must be a valid numerical input (valid = true/false)
//must give user choice for each array (confirm yes/no)
//must have at least one user selection ()
function getPasswordOptions() {
  // User selects the password length
  var passwordLength = prompt("Please choose the length of your password. Must be between 10 and 64 characters");

  while (passwordLength < 10 || passwordLength > 64 || isNaN(parseInt(passwordLength))) {
    var passwordLength = prompt("You need to type a number between 10 and 64");
  }

  // User chooses character types to use in PW
  var choices = {
    "uppercaseChars": confirm("Would you like your password to contain uppercase letters?"),
    "lowercaseChars": confirm("Would you like your password to contain lowercase letters?"),
    "numericChars": confirm("Would you like your password to contain numbers?"),
    "specialChars": confirm("Would you like your password to contain special characters?"),
  }


  // User selections and starter data arrays concatinated to create final choices array
  userChoices = []

  for (var index in choices) {
    if (index == "uppercaseChars" && choices[index]) { userChoices = userChoices.concat(upperCasedCharacters) }

    else if (index == "lowercaseChars" && choices[index]) { userChoices = userChoices.concat(lowerCasedCharacters) }

    else if (index == "numericChars" && choices[index]) { userChoices = userChoices.concat(numericCharacters) }

    else if (index == "specialChars" && choices[index]) { userChoices = userChoices.concat(specialCharacters) }
  }

  // get a list with choices and length
  return [userChoices, parseInt(passwordLength)]

}

// Function to generate password with user input
function generatePassword() {
  userChoicesPasswordLength = getPasswordOptions()
  // String var for the password to be generated into
  var generatedPassword = ''


  //For the selected length, each for loop picks a character at random from the selected data sets and adds them to the generatedPassord var to give the final password.
  //negates the need for the getRandom(arr) which has been removed from previous commits

  for (var i = 0; i < userChoicesPasswordLength[1]; i++) {
    passwordElement = userChoicesPasswordLength[0][Math.floor(Math.random() * userChoicesPasswordLength[0].length)];
    generatedPassword += passwordElement
  };

  return generatedPassword
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);