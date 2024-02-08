// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {

  var passwordLength = prompt("Please enter a number between 8 and 128 for the length of your password");
  if (passwordLength < 8 || passwordLength > 128 || passwordLength == null) {
    confirm("Try again");
    generatePassword();

  } else {

    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    var numbers = "0123456789";

    var lowercasePref = confirm("Do you want lowercase letters?");
    var uppercasePref = confirm("Do you want uppercase letters?");
    var specialCharactersPref = confirm("Do you want special characters?");
    var numbersPref = confirm("Do you want numbers?");

    if (lowercasePref != true && uppercasePref != true
      && specialCharactersPref != true && numbersPref != true) {
      alert("Please choose at least one type of character or number for your password");
      generatePassword();
    } else {

      var passwordCharacters = "";

      if (lowercasePref) {
        passwordCharacters += lowercase;
        console.log(lowercasePref);
      }

      if (uppercasePref) {
        passwordCharacters += uppercase;
      }

      if (specialCharactersPref) {
        passwordCharacters += specialCharacters;
      }

      if (numbersPref) {
        passwordCharacters += numbers;
      }
      var password = "";
      for (var i = 0; i < passwordLength; i++) {
        password += passwordCharacters.charAt(Math.floor(Math.random() * passwordCharacters.length));
      }
      return password;
    }
  }
}

/*
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharacters = "!,#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var numbers = "0123456789";
 
//user password length 
var passwordLength = prompt("Please enter a number between 8 and 128 for the length of your password");
 
if (passwordLength < 8 || passwordLength > 128 || passwordLength == null) {
  confirm("Try again");
  generatePassword();
}
//get user preference 
var lowercasePref = confirm("Do you want lowercase letters?");
var uppercasePref = confirm("Do you want uppercase letters?");
var specialCharactersPref = confirm("Do you want special characters?");
var numbersPref = confirm("Do you want numbers?");
 
if (lowercasePref != true && uppercasePref != true
  && specialCharactersPref != true && numbersPref != true) {
  alert("Please choose at least one type of character or number for your password");
  generatePassword();
 
  var passwordCharacters = "";
 
  if (lowercasePref) {
    passwordCharacters += lowercase;
  }
 
  if (uppercasePref) {
    passwordCharacters += uppercase;
  }
 
  if (specialCharactersPref) {
    passwordCharacters += specialCharacters;
  }
 
  if (numbersPref) {
    passwordCharacters += numbers;
  }
 
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    password += passwordCharacters.charAt(Math.floor(Math.random() * passwordCharacters.length));
    console.log(password);
  }
  console.log(password);
  return password;
}
 
 
}*/
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
