//variables for password characters
var specialChar = ["!", "@", "#", "$", "%",
    "^", "&", "*", "(", ")",
    "-", "_", "+", "=", "?"]
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h",
    "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
    "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
    "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
    "U", "V", "W", "X", "Y", "Z"]
var numeric = ["O", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var generateBtn = document.querySelector("#generate");
var characterLock =[]
function characterCheck() {
   
    var lengthCheck = parseInt(prompt("How many characters would you like your password to be, between 8 and 128?"));
 //Ensures that user inputs numbers within the given range
    if (lengthCheck > 7 && lengthCheck < 129) {
        //call some function
        characterSelect(lengthCheck)
    } else {
        alert("Length of password is either less than 8 characters or more than 128 characters.");
        characterCheck()
    }
}
generateBtn.addEventListener("click", characterCheck);
function characterSelect(length) {
    characterLock =[]
    var selectedChar = []
    //pushes random choices for each variable into end of array
    if (confirm("Click okay for special characters.")) {
        selectedChar.push(specialChar)
        characterLock.push(specialChar[Math.floor(Math.random()*specialChar.length)])
    }
    if (confirm("Click okay for lowercase characters.")) {
        selectedChar.push(lowercase[Math.floor(Math.random()*lowercase.length)])
    }
    if (confirm("Click okay for uppercase characters.")) {
        selectedChar.push(uppercase[Math.floor(Math.random()*uppercase.length)])
    }
    if (confirm("Click okay for numeric characters.")) {
        selectedChar.push(numeric[Math.floor(Math.random()*numeric.length)])
    }
    if (selectedChar.length !== 0) {
    //call next function and pass length and array of arrays
        console.log(selectedChar)
        passwordGenerator(length, selectedChar)
    }
    else {
        alert("You must select one character type")
        characterSelect(length)
    }
}

//
function passwordGenerator(length, specialChar) {
    var password = []
    for (var i = 0; i < length; i++) {
        var selectedArray = specialChar[Math.floor(Math.random() * specialChar.length)]
        var selectedCharacter = selectedArray[Math.floor(Math.random() * selectedArray.length)]
        password.push(selectedCharacter)
    }

    // password[i] = characterLock[i]
    password = password.join("")
    //for (i=0; i<length; i++) 
    var passwordText = document.querySelector("#password");
    passwordText.value = password;

}



