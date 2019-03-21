//Write a function cakes() which takes the recipe (object) 
//and the available ingredients (also an object) and returns
// the maximum number of cakes Pete can bake (integer). For 
//simplicity there are no units for the amounts (e.g. 1 lb of 
//flour or 200 g of sugar are simply 1 or 200). Ingredients 
//that are not present in the objects, can be considered as 0.

// Examples:

// // must return 2
var rec1 = {flour: 500, sugar: 200, eggs: 1}
var ing1 = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};

// // must return 0
var rec2 = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}
var ing2 = {sugar: 500, flour: 2000, milk: 2000}




function cakes(recipe, available) {
  // For CodeWars test, don't modify original objects
  // var recipeCopy = Object.assign({}, recipe),
      // availableCopy = Object.assign({}, available);
      
  var moar = true,
      maxCakes = 0;
      
  while(moar) {
    for (var ingred in recipe) {
      if (!available[ingred] || available[ingred] < recipe[ingred]) moar = false;
      else (available[ingred] -= recipe[ingred]);
    }
    // maxCakes++;
    if (moar) maxCakes++;
  }
  
  return maxCakes;
}
cakes(rec1, ing1);