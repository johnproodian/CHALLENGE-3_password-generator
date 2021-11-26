// Assignment code here
var charLength = null;

var generatePassword = function() {
  charLength = prompt("How many characters would you like your password to contain? (8-128)");
  if (charLength < 8 || charLength > 128 || isNaN(charLength)) {
    alert("Please choose a number betwee 8 and 128.");
  } 
  console.log("charLength is " + charLength);
  // WORK ON FEATURE BRANCH NEXT TIME!!!
  // Next: it needs to keep prompting until it gets a numver between 8 and 128 --> see gladiators 

}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var writePassword = function() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  console.log("password is " + password);

  passwordText.value = password;
    // This seems to be saying that the value of the element will be the value of the password

}

// Add event listener to generate button
// When the generate button 'hears' a click, it will run the writePassword function
generateBtn.addEventListener("click", writePassword);

// ----------

// So here's what I understand the original code trying to do:
// 1. select the 'generate password' button element and store it as a variable --> that way we can listen for its getting clicked and perform a function (namely, generate produce password) later
// 2. declare the function that will be called when a click happens later
//      a. what will the function(s) do?
          // i. a whole bunch of steps that will produce a password to be stored as variable 'password'. Let's break this down:
              // (1) Deliver various prompts to the user and store each as its own variable:


          // ii. more steps that will present the value of the 'password' variable (namely, the password generated) as text in the '#password' textarea element





// ---------
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