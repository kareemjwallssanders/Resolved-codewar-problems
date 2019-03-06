



    function accum(input){
// A place to store the results.

    let result = '';
//iterate over the string.
    for (let i = 0; i < input.length; i++){

// appened the current letter i + 1 to the string
    for (let k = 0; k < i + 1; k++){
//capitalize the first append
    if (k == 0){
        result += input[i].toUpperCase();
    }else{
        result += input[i].toLowerCase();
    }

    }
//Append a dash if it is not the last letter

    if(i != input.length - 1){
        result += "-";
    }
}
return result;
}

