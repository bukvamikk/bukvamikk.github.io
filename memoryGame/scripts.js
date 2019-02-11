const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
	if (lockBoard) return;
  if(this===firstCard) return; //double click prevent
	this.classList.add('flip');
	if (!hasFlippedCard) {
		//first click
		hasFlippedCard = true;
		firstCard = this;
		return;
	}
	//second click
	hasFlippedCard = false;
	secondCard = this;
	checkForMatch();
}

function checkForMatch() {
	let isMatch = firstCard.dataset.name === secondCard.dataset.name;
	//cards match
	isMatch ? disableCards() : unflipCards();
}

function disableCards() {
	firstCard.removeEventListener('click', flipCard);
	secondCard.removeEventListener('click', flipCard);
  resetBoard();
}

function unflipCards() {
  lockBoard=true;
	setTimeout(() => {
		firstCard.classList.remove('flip');
		secondCard.classList.remove('flip');
    resetBoard();
	}, 1500);
}
function resetBoard(){
  [hasFlippedCard,lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle(){
  cards.forEach(card =>{
    let randomPos = Math.floor(Math.random()*12);
    card.style.order=randomPos;
  });
})(); // Immediately Invoked Func. Expression

cards.forEach(card => card.addEventListener('click', flipCard));
