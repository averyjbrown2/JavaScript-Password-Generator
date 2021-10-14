// Assignment Code
var generateBtn = document.querySelector("#generate");

///define criteria
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const uppercase = lowercase.map(function(lower) {
           return lower.toUpperCase();
        });
        console.log(uppercase);
const numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specialCharSet = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "<", ">", "`", "~", ".", ",", "/", "\", \"{", "}", "|", "+", "=", "-", "_", " ", ";", ":", "?"];
    

///write functions to ask questions
///Choose length of password
function generatePassword() {
    let numChar = prompt("Choose a password length between 8 and 128 characters");
    let lowerCaseConfirm = confirm("Do you want lowercase letters?");
    let upperCaseConfirm = confirm("Do you want uppercase letters?");
    let numericConfirm = confirm("Do you want numeric characters?");
    let specialCharConfirm = confirm("Do you want special characters?");    
}

generatePassword();

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
