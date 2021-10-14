// Assignment Code
var generateBtn = document.querySelector("#generate");

///write functions to ask questions
function generatePassword() {
    let NumChar = prompt("Choose a password length between 8 and 128 characters");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
