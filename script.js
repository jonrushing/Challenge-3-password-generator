// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var inputLength = window.prompt("How long would you like your password? (Between 8-128 characters)")


  //parseInt used to determine is user inputs a letter or number in prompt as well as if a number is less than or more than the requirements
  var passwordLength = parseInt(inputLength)

  //alert message for improper parameters
  var inputAlert = "Please choose a number between 8-128"

    if (isNaN (passwordLength)) {
      window.alert(inputAlert)
      return
        
    }

    if (passwordLength < 8 || passwordLength > 128) {
      window.alert(inputAlert)
      return
    }
 

    //following promts that ask for number, lower or uppercase letter, and/or sybols for password generation 
    var inputLowerCase = window.confirm("Add lowercase letters to your password?")
    var inputUperCase = window.confirm("Add uppercase letter to your password?")
    var inputNumber = window.confirm("Add numbers to your password?")
    var inputSymbols = window.confirm("Add symbols to your password?")


    //arrays used to determine what will randomly selected
    var lowercaselist = ["z","x","c","v","b","n","m","a","s","d","f","g","h","j","k","l","q","w","e","r","t","y","u","i","o","p"]
    var uppercaselist = ["Z","X","C","V","B","N","M","A","S","D","F","G","H","J","K","L","Q","W","E","R","T","Y","U","I","O","P"]
    var numberlist = ["1","2","3","4","5","6","7","8","9","0"]
    var symbollist = ["!","@","#","$","%","^","&","*","-","+","?","."]


    // empty array that will be filled with user's selection as well as the true modifier I needed for the for loop
    var userSelection = []

    //had some problems with the math it was multiplying the user input with the number of true statements this var fixes that
    var trueModifier = (0)


      if (inputLowerCase === true) {trueModifier++
        }

      if (inputUperCase === true) {trueModifier++
      }

      if (inputNumber === true) {trueModifier++
      }

      if (inputSymbols === true) {trueModifier++
      }
      

/*the main code for random generation. each selction is randomly generated (if selected), looped 
  (depending on the user's prefrence), and placed into userSelection array*/
  for (var i = 0; i < (passwordLength/trueModifier); i++) {
    if (inputLowerCase === true) {
      userSelection.push(lowercaselist[Math.floor(Math.random() * lowercaselist.length)])
    }

    if (inputUperCase === true) {
      userSelection.push(uppercaselist[Math.floor(Math.random() * uppercaselist.length)])
    }

    if (inputNumber === true) {
      userSelection.push(numberlist[Math.floor(Math.random() * numberlist.length)])
    }

    if (inputSymbols === true) {
      userSelection.push(symbollist[Math.floor(Math.random() * symbollist.length)])
     
    }
  }
  //the final generation combining all strings into one
    return userSelection.join("")
 }

    


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
