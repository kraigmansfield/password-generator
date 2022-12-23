// First attempt


// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input

let userPassword = {
  // password parameters and password original state 
  charNum: "0123456789",
  charLower: "abcdefghijklmnopqrstuvwxyz",
  charUpper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  charSpecial: "!@#$%^&*()",
  passOriginalLength: 0,
  upperValue: false,
  lowerValue: false,
  numberValue: false,
  specialValue: false,
}

// Create alert asking user to select a password length between 8 and 128.
// If outside parameters, alert "Try Again"

//Made global for conditions outside of if statement


//While the toContinue condition is true, continue to prompt for a value in the desired range. 
function confirmPassLength(){
  let toContinue = true;
  while (toContinue) {
    try {
      userPassword.passOriginalLength = parseInt(window.prompt("Please enter a value between 8 and 128!"))
      } catch (error) {
         // If password length is inside the desired range, toContinue changes to false.
        if(userPassword.passOriginalLength >= 8 && userPassword.passOriginalLength <=128) {
          toContinue = false
  }         break;
      }
}
confirmPassLength();

//Collect user defined information in order to determine what characters to use for the password.


//Validating user defined information
function validateInfo() {
  while (!charLower && !charNum && !charSpecial && !charUpper){
    window.alert("Are you serious?")
  }
  userPassword.charUpper = window.confirm("Would you like it to contain uppercase letters?")
  userPassword.charLower = window.confirm("Would you like it to contain lowercase letters?")
  userPassword.charNum = window.confirm("Would you like it to contain numbers?")
  userPassword.charSpecial = window.confirm("Would you like it to contain special characters?")
}

//TODO: Call previous user input selections to determine which character inputs to use.
var gatherPassword = [
  function charNum() {
    return userPassword.charNum[Math.floor(Math.random() * userPassword.charNum.length)];
  }
  function charNum() {
    return userPassword.charLower[Math.floor(Math.random() * userPassword.charLower.length)];
  }
  function charNum() {
    return userPassword.charUpper[Math.floor(Math.random() * userPassword.charUpper.length)];
  }
  function charNum() {
    return userPassword.charSpecial[Math.floor(Math.random() * userPassword.charSpecial.length)];
  }
];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);