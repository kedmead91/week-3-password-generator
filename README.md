# week-3-password-generator

Task:

To create a random password generator to meet this user story:

Link to deployed application:



## User Story

AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

Sources:
- Jasons(instructor) walkthrough video
- MDN Docs
- W3 Schools 

To meet each of the acceptance criterias below I have done the following tasks:

1 - I had to create the generatePassword function that was included in the write
password function.

2 - The code creates the option for a user to choose the length that they want their password to be. The prompt method is in a passwordLength variable to allow the user to enter a number between 8 and 128. Then an if statement checks that they enter a valid input and if they don't then there is an error message and then the function generatePassword starts again but if the user enters a valid input then it runs onto the next bit of code.

3 - The code creates four variables with a string of characters, which included:
lowercase letters, uppercase letters, special characters and numbers.
The confirm method then asks the user what types of characters/numbers that they want in their password. After this the code checks if they have chosen at least one character type and if not it returns an error message and restarts the code.
If they have chose at least one character type the code then goes on to four if statements to select the chosen characters and adds them to an empty string variable called passwordCharacters.

3 - 
The code then creates a variable called password with an empty string for the finished password to generate into. Then a for loop runs for the length of the password that the user has chosen in which it chooses random characters from the strings of characters.
It then returns the password.

4 - After the generatePassword function is closed then an event listener is added to the generate password button so when the user clicks the button the writePassword function is called which calls the generatePassword function which will generate the password then write the random password within the generate password box so the user can see it and copy it. 

What I found Easy:

I found that the overall function structure made more sense to me after research and practice of putting the code together.

What I found Hard:
I had some issues with the syntax at times as I created the code and I kept getting an unrefined error message back so I had to break up some of the code by commenting out parts of it and using console.log to see where the error was coming from especially as I used multiple functions at first but found it easier when I had it all in just the one generatePassword function.

Screenshots: 

https://github.com/kedmead91/week-3-password-generator/blob/main/Screenshot%202024-02-08%20110949.png

https://github.com/kedmead91/week-3-password-generator/blob/main/Screenshot%202024-02-08%20112951.png

https://github.com/kedmead91/week-3-password-generator/blob/main/Screenshot%202024-02-08%20113024.png

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```
