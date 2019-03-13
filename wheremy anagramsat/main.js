//What is an anagram? Well, two words are anagrams of 
//each other if they both contain the same letters. For example:

/*What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false
Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []*/


//given two inputs. one is a string, one is an array
//output is an array that has the strings that are anagrams of the given string input
//start from the given array. sort every string in alphapetical order. 
//when we are sorting them, make sure to convert the string to array form. 
//also sort the given string as well 
//we can use filter method on the array, and return any strings that ARE THE SAME as the given string after they are all sorted in alpha order. 
//at the end, make sure to return the array with all items in string form. 

var anagrams = function(string, array) {
    return array.filter(function(word) {
      return word.split("").sort().join("") === string.split("").sort().join("");
    });
  }
  anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']);

  
  
  
  
  
  
  
  
  
  //split it into a new array 
  //create a unique array
  //create a unique array again for each element inside the Array
  //compare if they are the same. 
  //same - true; not then false 
  
  /*function anagrams(word, array, callback) {
    var result = [];
    var word_array = word.split("");
    var word_unique = callback(word_array).sort();
    for (var i = 0; i < array.length; i++) {
      var letter = array[i].split("")
      var letter_unique = callback(letter).sort()
      if (letter_unique.toString() === word_unique.toString()) {
        result.push(array[i])
      }
    };
    return result;
  }
  
  var unique = function(array) {
    var unique = [];
    for (var i = 0; i < array.length; i++) {
      if (unique.indexOf(array[i]) === -1) {
        unique.push(array[i])
      }
    }
    return unique;
  }*/
  
  /*function anagrams(word, array) {
    var unique = function(array) {
    var unique = [];
    for (var i = 0; i < array.length; i++) {
      if (unique.indexOf(array[i]) === -1) {
        unique.push(array[i])
      }
    }
    return unique;
    }
    var result = [];
    var word_array = word.split("");
    var word_unique = unique(word_array).sort();
    for (var i = 0; i < array.length; i++) {
      var letter = array[i].split("")
      var letter_unique = unique(letter).sort()
      if (letter_unique.toString() === word_unique.toString()) {
        result.push(array[i])
      }
    };
    return result;
  }*/
  
  
  
  /*function anagrams(word, array) {
    return array.filter(function(words) {
      return words.split("").sort().join("") === word.split("").sort().join("")
    })
  }
  console.log(['a','b'].join(""))*/
  