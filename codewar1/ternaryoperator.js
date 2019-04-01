/* Write a code where Alex can input 'n' how ever many times the hoop goes
around and it will return him an encourageing message :)
If Alex gets 10 or more hoops return the string "Great, now move on to tricks"
If he doesn't get 10 hoops, return the string "Keep at it until you get it"*/

function hoopCount(n){
    // Used the ternary operator to create this conditional 
    return (n < 10) ? 'Keep at it until you get it' : 'Great, now move on to tricks'
  }