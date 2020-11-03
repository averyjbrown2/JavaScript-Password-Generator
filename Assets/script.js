
    var specialChar = ["!", "@", "#", "$", "%", 
                        "^", "&", "*","(", ")", 
                        "-", "_", "+", "=", "?"]
    var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h",
                    "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
                    "s", "t", "u", "v", "w", "x", "y", "z"]
    var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
                    "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", 
                    "U", "V", "W", "X", "Y", "Z"]
    var numeric = ["O", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    

    function characterCheck (){
        var lengthCheck = parseINT(prompt("How many characters would you like your password to be, between 8 and 128?"));
        if (isNaN(lengthCheck)) {
            alert("You have not input a number");
            return;
        }
        if (lengthCheck <8 || lengthCheck > 128){
            alert("Length of password is either less than 8 characters or more than 128 characters.");
            return;
        }
        var specialConfirm = confirm("Click okay for special characters.");
        var lowercaseConfirm = confirm("Click okay for lowercase characters.");
        var uppercaseConfirm = confirm("Click okay for uppercase characters.");
        var numericConfirm = confirm("Click okay for numeric characters.");
        
        if (specialConfirm === false &&
             lowercaseConfirm === false &&
              uppercaseConfirm === false &&
               numericConfirm === false){
            alert("Must choose at least one option.");
                return;
               }
        var confirmVariables = {
            specialConfirm: specialConfirm, 
            lowercaseConfirm: lowercaseConfirm,
            uppercaseConfirm: uppercaseConfirm,
            numericConfirm: numericConfirm
        }
        return confirmVariables; 
        }

        var values = "";
        
        for (var i = 0, i < specialChar.length; i++) {
           console.log(Math.floor(Math.random() * specialChar.length);
            return values;
    
        for (var i = 0, i < lowercase.length; i++) {
            console.log(Math.floor(Math.random() * lowercase.length);
            return values;
        for (var i = 0, i < uppercase.length; i++) {
            console.log(Math.floor(Math.random() * uppercase.length);
            return values;
         
        for (var i = 0, i < numeric.length; i++) {
            console.log(Math.floor(Math.random() * numeric.length);
            return values;
         

        var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



