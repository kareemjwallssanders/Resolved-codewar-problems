/*The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.
Task :
Given a year, return the century it is in.*/

function century(year) {
    //1 - 100 = 1st century
    // 101 - 200 = 2nd century
    //201 - 300 = 3rd century
    
    return Math.ceil(year/100);
  }