// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// ..........

// Listen for CLICK of 'Generate Password' button
// When click happens, prompt asking for length of password:
      // FIRST [ideal a slide bar between 8 and 128 characters, but might just be asking for a number between 8 and 128]
        // if input is a number between 8 and 128, store as variable (#characters?)
    
        // else respond, something like 'response needs to meet criteria, please try again' and either ask for the response there or be able to go back to previous prompt w/ 'ok'
      // 
      // SECOND 
        // [ideally, checkboxes to choose which of the other characters to add to password, otherwise go one by one]
        // window.confirm:
          // uppercase
          // lowercase
          // numeric
          // special 
        // for each window.confirm, if True, add an array/object(?) of those characters to the pool that the generate password function can randomly choose from
          // --> at any rate, adjust the pool with each answer
        // after all four prompts are done:
          // if the pool has no members, say something like, "at least one character type must be chosen, try again", and restart the prompts

        // var password = null(??);
        // For (var i=0; i < #-of-char-variable from first prompt; i++) {
          // var generateCharacter = function() {
            // randomSelect from all the values in the pool of characters to generate a single-character-string and store as such in generateCharacter
            // password = password + generateCharacter [should be the previous string plus string in generateCharacter]
            // if(i === #-of-char-variable) {
              // open a window that prints the password string
            //}    
        //}

        // See this for generating random password: https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript