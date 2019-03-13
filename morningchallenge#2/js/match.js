// Build a card game that allows a user to macth cards.  
// The game will start with 10 cards for the user to choose from
// and will alret the amount of times the user takes to find 5 sets
// of matches needed to complete the game.


//================pusdeo code===============//

// The user will choose 2 desired card by click, upon the click the cards turns over.
// After the user chooses the desired card then AI will check to see if the card match.
// If the card matches then AI will log the match and if the cards do not match the user 
// will have to try agian
// AI will long the users amount of attempts 

//1.The match card game will need one user to click on a pair of cards that flips over.
//2.Cards are to be shuffled and layed out upon a users clicking the start/restart button.
//3.The match game will also log the attempts the user uses to match pairs of cards.
//4.When creating the cards, the pairs will have the same classes(5)


window.addEventListener('load', function(){
  // console.log("this works");
  var cardValues = ["0","1","2","3","4","0","1","2","3","4"];
  cardValues.forEach(function(el){
    var card = document.createElement("section")
    card.innerHTML = "";
    card.className = "card";
    document.body.appendChild(card);
    console.log(card);
    card.addEventListener("click", function(e){
      console.log("hi");
    })
  })
})


// document.getElementById('flip').addEventListener( 'click', function(){
//     card.toggleClassName('flipped');
//   }, false);


  
// var faces = []; //array to store card images
//      faces[0] = 'images/king-of-diamonds.png';
//      faces[1] = 'images/king-of-hearts.png';
//      faces[2] = 'images/queen-of-diamonds.png';
//      faces[3] = 'images/queen-of-hearts.png';

// var cardsInPlay = [];

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






 



  


// // // start/reset
// // function startReset(){

// // }

// // function 

// // //checking conditons
// // function(){
// //     for (let =0; i<=; i++)
    
// // }

// // // ==============flipping cards==========//
// // function flipping(){
// //     const top1 = document.querySelector("#top1")
// //     const top2 = document.querySelector("#top2")
// //     const top3 = document.querySelector("#top3")
// //     const mid1 = document.querySelector("#mid1")
// //     const mid2 = document.querySelector("#mid2")
// //     const mid3 = document.querySelector("#mid3")
// //     const bot1 = document.querySelector("#bot1")
// //     const bot2 = document.querySelector("#bot2")
// //     const bot3 = document.querySelector("#bot3")
    
// // }
// // class Jordan{
// //     this.image = Jordan;
// //     this.flipped = false;
// // }

// // const = new Jordan

// // class Bird{
// //     this.image = Bird;
// //     this.flipped = false;
// // }

// // class Magic{
// //     this.image = Magic;
// //     this.flipped = false;
    
// // }

// // class DrJ {
// //     this.image = DrJ
// //     this.flipped = false;
// // }
// // class Kareem{
// //     this.image = Kareem;
// //     this.flipped = false;
// // }


