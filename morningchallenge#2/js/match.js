// Build a card game that allows a user to macth cards.  
// The game will start with 10 cards for the user to choose from
// and will alret the amount of times the user takes to find all 5 matches

//=======Variables==========//

// const cardValues = ["0","1","2","3","4","0","1","2","3","4"];
let cardOne = document.getElementsByClassName('frontCard');
let cardTwo = document.getElementsByClassName('backCard');

//======spred snytax====//
let card = [...gameCard]
//======================//



// The user will choose 2 desired card by click, upon the click the cards turns over.
// After the user chooses the desired card then AI will check to see if the card match.
// If the card matches then AI will log the match and if the cards do not match the user 
// will have to try agian
// AI will long the users amount of attempts 

//1.The match card game will need one user to click on a pair of cards that flips over.
//2.Cards are to be shuffled and layed out upon a users clicking the start/restart button.
//3.The match game will also log the attempts the user uses to match pairs of cards.
//4.When creating the cards, the pairs will have the same classes(5)


//==========================//



function shuffle(arry) {
  let fisrtIndex
}


//==============================Psudoe Code=================================//

// The memory match game starts off with 
// 10 cards lying backside up, 
//a user then chooes a card by clicking on it, next the card 
document.querySelectorAll('memory-game').addEventListener('click', pickCard)


function pickCard() {

  // turns face up and waits until a second card is choosen.

  // var checkForMatch = function() {
  //     if (cardsInPlay[0] === cardsInPlay[1]) {
  //           console.log("You found a match!");
  //         } else {
  //             console.log("Sorry, try again.");
  //         }
  // }

  // var flipCard = function(cardId) {

  //     document.getElementById('q').src=faces[cardId]

  //     checkForMatch();
  // }


}




// Upon the player second choice by clicking on the second card.
// the application then checks to see if the card choosen match,
// and if the cards match, the cards stay flipped over, 
// and if cards do not match the card then flip bact to backside up.
// and the user repeats the process.unitl the user finds all 5 pairs,
// then the game restarts after click of a button.


// ==========================================================================//




document.body.onload = startgame();
start / reset

function startReset() {

}

function

//checking conditons

for (let i = 0; i <= cards.length; i++){

console.log();
}

  // // }

  // // // ==============flipping cards==========//
function flipCard() {
  const top1 = document.querySelector("#top1")
  const top2 = document.querySelector("#top2")
  const top3 = document.querySelector("#top3")
  const mid1 = document.querySelector("#mid1")
  const mid2 = document.querySelector("#mid2")
  const mid3 = document.querySelector("#mid3")
  const bot1 = document.querySelector("#bot1")
  const bot2 = document.querySelector("#bot2")
  const bot3 = document.querySelector("#bot3")
  const bot3 = document.querySelector("#bot3")


}
class Jordan {
  this.image = Jordan;
  this.flipped = false;
}

for(var i = 0; i< cards.length; i++)
card = cards[i];

document.getElementsByClassName('memory-game').addEventListener('click', )
document.getElementsByClassName('memory-game').addEventListener('click', )


window.addEventListener('load', function () {
  console.log("this works");
  cardValues.forEach(function (el) {
    var card = document.createElement("section")
    card.innerHTML = "";
    card.className = "card";
    document.body.appendChild(card);
    console.log(card);
    card.addEventListener("click", function (e) {
      console.log("hi");
    })
  })
})