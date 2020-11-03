
    var specialChar = ["!", "@", "#", "$"]
    var lowercase = ["a" "b", "c", "d"]
    var uppercase = ["A", "B", "C"]
    var numeric = ["1", "2", "3"]
    

    function characterCheck (){
        var lengthCheck = parseINT(prompt("How many characters would you like your password to be?"));
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
            alert("Must choose at least one character.");
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

        
        
    



