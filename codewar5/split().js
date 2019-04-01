/* Write a function to convert a name into initials. This kata strictly takes
two words with one space in between them.
The output should be two capital letters with a dot seperating them.
It should look like this:
Same Harris => S.H
Patrick Feeney => P.F
*/

function abbrevName(name){
    return name.split(' ').map(a => a[0].toUpperCase()).join('.')
  }