// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  //added in passwordLength function so it will run the first step
  passwordLength();
}

function passwordLength() {
  //Stores user input in a variable for length of password
  var passwordLength = prompt("What length do you want your password to be?");
  //if passwordLength input is less than 8 or greater than 20 asks again for password length input
  if (passwordLength < 8 || passwordLength > 128) {
    prompt("Please enter a number greater than 8 and smaller than 20");
  } else {
    chooseCharacters();
  }
}

//asks the user what types of characters that they would like
//if user fails to choose one type the function is ran again so they can choose

function chooseCharacters() {
  var lowercasePref = confirm("Do you want lowercase letters?");
  var uppercasePref = confirm("Do you want uppercase letters?");
  var specialCharactersPref = confirm("Do you want special characters?");
  var numbersPref = confirm("Do you want numbers?");
  if (lowercasePref != true && uppercasePref != true
    && specialCharactersPref != true && numbersPref != true) {
    alert("Please choose at least one type of character or number for your password");
    chooseCharacters();
  } else {
    generatePassword();
  }
}

function generatePassword() {
  return "password";

  //creates the available characters
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialCharacters = "!,#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  var numbers = "0123456789";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
