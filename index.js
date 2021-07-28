/* Show text when 'how to play' is clicked */
function clickHowTo() {
    var x = document.getElementById("how-to-text");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

/* Start game - reveal cards and start timer */
function changeCards() {
  let cards = Array.from(document.getElementsByClassName('card'));

  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.remove("hidden");
  }

  var x = document.getElementById("btn-play");
    x.classList.add("hidden");
}

/* Click cards to reveal words */
function cardClicked(event) {
  this.style.background = "var(--dk-green)";
  this.firstChild.classList.remove("hidden");
}


let cards = document.getElementsByClassName('card');
let i = 0;
for (i = 0; i < cards.length; i++) {
cards[i].addEventListener('click', cardClicked);
}