let firstCard = 10;
let secondCard = 7;
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard;
let hasBlackJeck = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector(".cards-el")

function startGame(){
    renderGame();
}
function renderGame(){
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: ";
    for(let i = 0; i < cards.length;  i++){
        cardsEl.textContent += cards[i] + " ";
    }
    if(sum < 21){
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJeck = true;
    } else {
        message = "You're out of the game! 😭"
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard(){
    console.log("Drawing a new card from the deck!");
    let newCard = 11;
    cards.push(newCard)
    sum += newCard;
    renderGame();
console.log(cards)
}
console.log(cards)