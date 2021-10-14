// Assignment Code
var generateBtn = document.querySelector("#generate");

///write functions to ask questions
///Choose length of password
function generatePassword() {
    let NumChar = prompt("Choose a password length between 8 and 128 characters");
    let lowerCaseLetters = prompt("Do you want lowercase letters?");
    let upperCaseLetters = prompt("Do you want uppercase letters?");
    let numeric = prompt("Do you want numeric characters?");
    let specialChar = prompt("Do you want special characters?");
    

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
