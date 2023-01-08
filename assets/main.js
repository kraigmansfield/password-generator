// Assignment Code
var generateBtn = document.querySelector("#generate");


//Password criteria for generation/set initial characters to false


let password = {
    passwordLength: 0,
    upperCaseLetters: false,
    lowerCaseLetters: false,
    numbers: false,
    specialCharacters: false,
    lowerCasePool: 'abcdefghijklmnopqrstuvwxyz',
    upperCasePool: 'ABSCEFGHIJKLMNOPQRSTUVWXYZ',
    numberPool: '0123456789',
    specialCharacterPool: '!@#$%^&*()',
}


//

//Confirm users password length is between 8-128 characters

function collectPasswordLength() {
    var confirmPassLength = parseInt(prompt("Please select a password length between 8 and 128 characters!"));
    if (!confirmPassLength) {
        alert("Please enter a value!")
    } else if (confirmPassLength < 8 || confirmPassLength > 128) {
        confirmPassLength = parseInt(prompt("Please choose between 8 and 128!"))
    } return
    }

// Used to determine what the user wants in their password pool.
function validatePrompts() {
    confirmUpperCharacters = window.confirm("Should it contain uppercase letters? (Ok = Yes | Cancel = No)");
    confirmLowerCharacters = window.confirm("Should it contain lowercase letters? (Ok = Yes | Cancel = No)");
    confirmNumericCharacters = window.confirm("Should it contain numbers? (Ok = Yes | Cancel = No)");
    confirmSpecialCharacters = window.confirm("Should it contain special characters? (Ok = Yes | Cancel = No)");
}
// Colecting Edge cases for selecting no on each prompt
    while(confirmUpperCharacters === false && confirmLowerCharacters === false && confirmNumericCharacters === false && confirmSpecialCharacters === false) {
        window.alert("Really? You should choose at least 2!");
        confirmUpperCharacters = window.confirm("Should it contain uppercase letters? (Ok = Yes | Cancel = No)");
        confirmLowerCharacters = window.confirm("Should it contain lowercase letters? (Ok = Yes | Cancel = No)");
        confirmNumericCharacters = window.confirm("Should it contain unumbers? (Ok = Yes | Cancel = No)");
        confirmSpecialCharacters = window.confirm("Should it contain special characters? (Ok = Yes | Cancel = No)")
    }
//Calling the two previous functions in order to validate user choices.
function validateUser() {
    collectPasswordLength();
    validatePrompts();
}

    //if the user selects a lowercase/uppercase/special/numerical character, and there is space left in the amount of character slots in the 
//password, then add characters until the threshold is reached. Creates a password
function gatherPassword(){
    var result = "";
    

    while (password.passwordLength < 128) {
        if (confirmLowerCharacters === true && password.passwordLength < confirmPassLength) {
            var lowerCasePool = passOriginalLength[Math.floor(Math.random() * 26)]
            resultLC = resultLC + lowerCaseLetters;
            passOriginalLength++;
        }
        if (confirmUpperCharacters === true && password.passwordLength < confirmPassLength) {
            var upperCasePool = passOriginalLength[Math.floor(Math.random() * 26)]
            resultUC = resultUC + upperCaseLetters;
            passOriginalLength++;
        }
        if (confirmNumericCharacters === true && password.passwordLength < confirmPassLength) {
            var numberPool = passOriginalLength[Math.floor(Math.random() * 10)]
            resultNum = resultNum + numericCharacters;
            passOriginalLength++;
        }
        if (confirmSpecialCharacters === true && password.passwordLength < confirmPassLength) {
            var specialCharacterPool = passOriginalLength[Math.floor(Math.random() * 10)]
            resultSC = resultSC + specialCharacters;
            passOriginalLength++;
        }
        return result;
    }
    
    

    //Reset options to start over if desired

    upperCaseLetters = false;
    lowerCaseLetters = false;
    numbers == false;
    specialCharacters = false;

    return password;
}
// Write password to the #password input
function writePassword() {
    var password = "";
    var passwordText = document.querySelector("#password");
  
    // variable 'password' is displayed to the text area in html
    passwordText.value = password;
  
}

console.log(password)
//Randomize selected characters in a string
password.shuffle = function gatherPassword() {
//
// creates a random variable to split the characters in the collected string
    var random = this.split(""),
//sets n = to the variable "random"s length.
        n = random.length;
// for each iteration of i where the 
    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = random[i];
        random[i] = random[j];
        random[j] = temp;
    }
    return random.join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", collectPasswordLength);
