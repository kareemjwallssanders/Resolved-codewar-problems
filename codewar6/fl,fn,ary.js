function digitize(n) {
    // Created an empty string to put numbers in
      let array = [],
          // converted number variable into a string
          sNumber = n.toString();
      // Using for loop to put numbers into empty array
      for (let i = 0, len = sNumber.length; i < len; i += 1) {
      // Pushing numbers into array
        array.push(+sNumber.charAt(i));
      }
      // Reversing array items
      return array.reverse()
    }
    
    // Updated version
    function digitize(n) {
      return String(n).split('').map(Number).reverse()
    }