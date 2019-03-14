//A Narcissistic Number is a number which is the sum of its own digits, 
//each raised to the power of the number of digits in a given base. 
//In this Kata, we will restrict ourselves to decimal (base 10).




function narcissistic( value ) {
  var getPow = value.toString().split('').map(function(x) {
    return Math.pow(x, value.toString().length);
  });
  var getAccumValue = getPow.reduce(function(a, c) {
	  return a + c;
  });

  // Passing result.
  return getAccumValue === value;
}

console.log(5, 8);