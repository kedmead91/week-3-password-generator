// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input function
function writePassword() {
  //generatePassword is ran and stored in this variable
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {

  //checks what length the user wants their password to be 
  var passwordLength = prompt("Please enter a number between 8 and 128 for the length of your password");
  //shows an error message if the password is not the correct length & will run the code again
  if (passwordLength < 8 || passwordLength > 128 || passwordLength == null) {
    confirm("Try again");
    generatePassword();
    //if the user puts a valid input then it goes on to the next bit of code
  } else {

    //stores all the available characters in four sets of strings
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    var numbers = "0123456789";

    //asks the user what types of characters they want in their password
    var lowercasePref = confirm("Do you want lowercase letters?");
    var uppercasePref = confirm("Do you want uppercase letters?");
    var specialCharactersPref = confirm("Do you want special characters?");
    var numbersPref = confirm("Do you want numbers?");

    //checks that the user has at least chosen one type of character else it runs the function again 
    if (lowercasePref != true && uppercasePref != true
      && specialCharactersPref != true && numbersPref != true) {
      alert("Please choose at least one type of character or number for your password");
      generatePassword();

      //if the user has chosen at least one type of character the code runs the next bit of code
    } else {

      //stores the password characters that have been chosen in an empty string variable
      var passwordCharacters = "";

      if (lowercasePref) {
        //adds lowercase characters to the password if the user has chosen these
        passwordCharacters += lowercase;

      }

      if (uppercasePref) {
        //adds uppercase characters to the password if the user has chosen these
        passwordCharacters += uppercase;
      }

      if (specialCharactersPref) {
        //adds special characters to the password if the user has chosen these
        passwordCharacters += specialCharacters;
      }

      if (numbersPref) {
        //adds numbers characters to the password if the user has chosen these
        passwordCharacters += numbers;
      }
      //creates a empty string variable to store the random characters as a password
      var password = "";
      //generates a random character depending on what user has chosen for characters
      //selects a random character for as long as the password length that the user chose
      for (var i = 0; i < passwordLength; i++) {
        password += passwordCharacters.charAt(Math.floor(Math.random() * passwordCharacters.length));
      }
      //returns the generated random password
      return password;
    }
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
