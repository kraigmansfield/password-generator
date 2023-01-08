// Assignment Code
var generateBtn = document.querySelector("#generate");

// Password criteria stored in an obj
let pass = {
  passLength: 0,
  upper: false,
  lower: false,
  numeric: false,
  special: false,
  alphabet: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  uniqueChar: ` !"#$%'()*+,-./:;<=>?@[]^_{|}~`
}

// Makes sure user entered value for password length is a number and between 8 to 128 -- The value is saved to corresponding obj property
function validatePasswordLength() {
  // Value used to keep the loop running - will keep running until 'toContinue' is false
  let toContinue = true;
  while (toContinue) {
    // The User is prompted to enter a desired length for the password. The prompt saves the value as a STRING. The 'try' block will attempt to convert the value received
    // from the prompt to a NUMBER and save it to the 'passLength' property. If the user enters a value other than a number an error is thrown. To prevent the code from ending, 
    // the error is dealt with by the 'catch' block which ignores it. The 'if' block checks if the user entered value meets the criteria, if it doesn't the while loop will repeat. 
    try {
      pass.passLength = parseInt(window.prompt("Please enter a value for your password length. It must be a number and the value should be between 8 and 128."));
    } catch (error) {
      // Ignore
    }

    // If the password meets the criteria, the 'toContinue' value is updated to 'false' so the loop can exit.
    if (pass.passLength && (pass.passLength >= 8 && pass.passLength <= 128)){
      toContinue = false;
    }
  } 
}

// Makes sure that the user selects yes to atleast one of the prompts and saves the value(s) to the corresponding obj property
function validatePrompts() {
  // Loop will continue until user selects OK on at least one prompt
  while (!pass.upper && !pass.lower && !pass.numeric && !pass.special){
    // Lets user know to select OK on at least one prompt
    window.alert("Be sure to select 'OK' for at least one of the following!");
    // A prompt is displayed for each password property and either 'true' (yes) or 'false' (no) is saved to the corresponding obj property
    pass.upper = window.confirm("Should it contain uppercase letters? (Ok = Yes | Cancel = No)");
    pass.lower = window.confirm("Should it contain lower case letters? (Ok = Yes | Cancel = No)");
    pass.numeric = window.confirm("Should it contain numeric values? (Ok = Yes | Cancel = No)");
    pass.special = window.confirm("Should it contain special characters? (Ok = Yes | Cancel = No)")
  }
}

// Calls previous two defined functions to validate user choices and save values to the obj properties.
function gatherInfo() {
  validatePasswordLength();
  validatePrompts();
}

// Creates the password based off of the information from 'gatherInfo()'
function generatePassword(){
  // Updates object properties
  gatherInfo();

  // Value that stores the generated password
  let password = '';
  // Value used to make sure the loop continues until the password length is met
  let iterator = 1;

  // This loop runs until the amount of characters is equal to the desired password length
  while (iterator <= pass.passLength){

    // Checks if user wants upper case letters and makes sure the generated password isn't over the desired length
    if (pass.upper & iterator <= pass.passLength){
      // Adds a random upper case letter to the variable 'password'
      password += pass.alphabet[Math.floor(Math.random() * pass.alphabet.length)].toUpperCase();
      // Increases the value of 'iterator' by 1 so that it matches the amount of characters in the variable 'password'
      iterator++;
    }

    // Checks if user wants lower case letters and makes sure the generated password isn't over the desired length
    if (pass.lower & iterator <= pass.passLength){
      // Adds a random lower case letter to the variable 'password'
      password += pass.alphabet[Math.floor(Math.random() * pass.alphabet.length)];
      // Increases the value of 'iterator' by 1 so that it matches the amount of characters in the variable 'password'
      iterator++;
    }

    // Checks if user wants numbers and makes sure the generated password isn't over the desired length
    if (pass.numeric & iterator <= pass.passLength){
      // Adds a random number to the variable 'password'
      password += pass.numbers[Math.floor(Math.random() * pass.numbers.length)];
      // Increases the value of 'iterator' by 1 so that it matches the amount of characters in the variable 'password'
      iterator++;
    }

    // Checks if user wants special characters and makes sure the generated password isn't over the desired length
    if (pass.special & iterator <= pass.passLength){
      // Adds a random upper case letter to the variable 'password'
      password += pass.uniqueChar[Math.floor(Math.random() * pass.uniqueChar.length)];
      // Increases the value of 'iterator' by 1 so that it matches the amount of characters in the variable 'password'
      iterator++
    }

  }
  
  // Resets object properties so that another password can be generated later with different parameters if the user wants
  pass.upper = false;
  pass.lower = false;
  pass.numeric = false;
  pass.special = false;

  // Returns the newly generated 'password' value so that it can be saved in a new variable
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // variable 'password' is displayed to the text area in html
  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
