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
}
