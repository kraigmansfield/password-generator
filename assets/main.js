// Assignment Code
var generateBtn = document.querySelector("#generate");


//Arrays needed for password characters
var charNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
var charSpecial = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var charLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var passOriginalLength = 0;


//Confirmation declarations
var confirmPassLength = "";
var confirmSpecialCharacters;
var confirmNumericCharacters;
var confirmUpperCharacters;
var confirmLowerCharacters;

//Global var for individual results of prompts
var resultUC = "";
var resultLC = "";
var resultSC = "";
var resultNum = "";

//TODO: Promt #1: Asking a user how long they would like their password to be. If a password is outside parameters, return to question.
//If condition
//
// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    // variable 'password' is displayed to the text area in html
    passwordText.value = password;
  
}

function collectPasswordLength() {
    var confirmPassLength = parseInt(prompt("Please select a password length between 8 and 128 characters!"));
    if (!confirmPassLength) {
        alert("Please enter a value!")
    } else if (confirmPassLength < 8 || confirmPassLength > 128) {
        confirmPassLength = parseInt(prompt("Please choose between 8 and 128!"))
    }
    }
collectPasswordLength();   

// Used to determine what the user wants in their password pool.
    confirmUpperCharacters = window.confirm("Should it contain uppercase letters? (Ok = Yes | Cancel = No)");
    confirmLowerCharacters = window.confirm("Should it contain lowercase letters? (Ok = Yes | Cancel = No)");
    confirmNumericCharacters = window.confirm("Should it contain unumbers? (Ok = Yes | Cancel = No)");
    confirmSpecialCharacters = window.confirm("Should it contain special characters? (Ok = Yes | Cancel = No)");

// Colecting Edge cases for selecting no on each prompt
    while(confirmUpperCharacters === false && confirmLowerCharacters === false && confirmNumericCharacters === false && confirmSpecialCharacters === false) {
        window.alert("Really? You should choose at least 2!");
        confirmUpperCharacters = window.confirm("Should it contain uppercase letters? (Ok = Yes | Cancel = No)");
        confirmLowerCharacters = window.confirm("Should it contain lowercase letters? (Ok = Yes | Cancel = No)");
        confirmNumericCharacters = window.confirm("Should it contain unumbers? (Ok = Yes | Cancel = No)");
        confirmSpecialCharacters = window.confirm("Should it contain special characters? (Ok = Yes | Cancel = No)")
    }

    //if the user selects a lowercase/uppercase/special/numerical character, and there is space left in the amount of character slots in the 
//password, then add characters until the threshold is reached.
function gatherPassword(){
    var result = "";
    

    while (passOriginalLength < confirmPassLength) {
        if (confirmLowerCharacters === true && passOriginalLength < confirmPassLength) {
            var lowerCaseLetters = passOriginalLength[Math.floor(Math.random() * 26)]
            resultLC = resultLC + lowerCaseLetters;
            passOriginalLength++;
        }
        if (confirmUpperCharacters === true && passOriginalLength < confirmPassLength) {
            var upperCaseLetters = passOriginalLength[Math.floor(Math.random() * 26)]
            resultUC = resultUC + upperCaseLetters;
            passOriginalLength++;
        }
        if (confirmNumericCharacters === true && passOriginalLength < confirmPassLength) {
            var numericCharacters = passOriginalLength[Math.floor(Math.random() * 10)]
            resultNum = resultNum + numericCharacters;
            passOriginalLength++;
        }
        if (confirmSpecialCharacters === true && passOriginalLength < confirmPassLength) {
            var specialCharacters = passOriginalLength[Math.floor(Math.random() * 10)]
            resultSC = resultSC + specialCharacters;
            passOriginalLength++;
        }
        return result;
    }
    
    }
gatherPassword();

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
generateBtn.addEventListener("click", writePassword);
