// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


function generatePassword() {

  var inputLength = window.prompt("How long would you like your password? (Between 8-128 characters)")
  
  var passwordLength = parseInt(inputLength)

  var inputAlert = "Please choose a number between 8-128"

    if (isNaN (passwordLength)) {
      window.alert(inputAlert)
      return
        
    }

    if (passwordLength < 8 || passwordLength > 128) {
      window.alert(inputAlert)
      return
    }
    
}

console.log(generatePassword)
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
