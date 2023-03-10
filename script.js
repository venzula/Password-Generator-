// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz" 
var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "1234567890"
var bigarray= ""

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();

  var passwordText = document.querySelector("#password");
  
  var lowerCaseLetters  = confirm("loweCase letters?")
  var upperCaseLetters  = confirm("upperCase letters?")
  var specialCaseLetters  = confirm("specialCharacters letters?")
  var numbersQuerry  = confirm("numbers ?")
  var length  = prompt("What is the length of the password?")


  
  if(lowerCaseLetters == true) {
      bigarray  += lowerCaseCharacters
  }

  if(upperCaseLetters == true) {
    bigarray  += upperCaseCharacters
}

if(specialCaseLetters == true) {
  bigarray  += specialCharacters
}

if(numbersQuerry == true) {
  bigarray  += numbers
}
var randomPass = ""
if(length < 8  && length >128){
  alert("password is not between 8 and 128")

}
else if(lowerCaseLetters && upperCaseLetters && specialCaseLetters && numbersQuerry){
  alert("enter a valid selection")
}else{
for(var i=0; i<length; i++){
   randomPass  += bigarray.charAt(Math.floor(Math.random() * bigarray.length))
}}

  passwordText.value = randomPass;



}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
