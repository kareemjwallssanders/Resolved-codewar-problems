/*
Complete the method that takes a boolean value and return a "Yes" string fot
"true", or a "No" string for false.
*/

function boolToWord(bool){
  if(bool === true) return "Yes"
  else if (bool === false) return "No"
}

// Alternative
let boolToWord = bool => return bool ? "Yes" : "No"