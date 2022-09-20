// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//pick a random point in any of the user selection arrays

function randomInt(min, max){
  if(!max){
    max = min
    min = 0
}
 var rand = Math.random()
 return Math.floor(min*(1 - rand) + rand*max)
}

function getRandomChar(list) {
  return list[randomInt(0, list.length)]
}
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
 
    var inputLowerCase = window.confirm("Add lowercase letters to your password?")
    var inputUperCase = window.confirm("Add uppercase letter to your password?")
    var inputNumber = window.confirm("Add numbers to your password?")
    var inputSymbols = window.confirm("Add symbols to your password?")


    var lowercaselist = ["z","x","c","v","b","n","m","a","s","d","f","g","h","j","k","l","q","w","e","r","t","y","u","i","o","p"]
    var uppercaselist = ["Z","X","C","V","B","N","M","A","S","D","F","G","H","J","K","L","Q","W","E","R","T","Y","U","I","O","P"]
    var numberlist = ["1","2","3","4","5","6","7","8","9","0"]
    var symbollist = ["!","@","#","$","%","^","&","*","-","+","?","."]

    var userSelection = []
    
    console.log (userSelection)

    if (inputLowerCase === true) {
      userSelection.push(lowercaselist)//[Math.floor(Math.random() * lowercaselist.length)])
    }

    if (inputUperCase === true) {
      userSelection.push(uppercaselist)//[Math.floor(Math.random() * uppercaselist.length)])
    }

    if (inputNumber === true) {
      userSelection.push(numberlist)//[Math.floor(Math.random() * numberlist.length)])
    }

    if (inputSymbols === true) {
      userSelection.push(symbollist)//[Math.floor(Math.random() * symbollist.length)])
    }
    
    
    for (var i = 0; i < passwordLength; i++) {
      var randomList = getRandomChar(userSelection)
      var randomChar = getRandomChar(randomList)
      
console.log(randomChar)
    }

    }

    


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
