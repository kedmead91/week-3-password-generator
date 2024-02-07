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
  var passwordLength = prompt("Please enter a number between 8 and 128 for the length of your password");
  //if passwordLength input is less than 8 or greater than 20 asks again for password length input
  if (passwordLength < 8 || passwordLength > 128 || passwordLength == null) {
    confirm("Try again");
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
  //TODO write if statement for this function
  //creates the available characters
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialCharacters = "!,#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  var numbers = "0123456789";
  writePassword();
}

// Add event listener to generate button
generateBtn.addEventListener("click", passwordLength); //writePassword);
