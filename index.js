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
    x.style.display = "none";   
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

/* Generate random words from word bank*/

var wordBank = {'Croeso': Welcome, 'Cwrw': Beer, 'Da': Good, 'Bore': Morning, 
'Prynhawn': Afternoon, 'Nos': Night, 'Cymraeg': Welsh, 'Saesneg': English,
'Diolch': Thanks, 'Enw': Name, 'Moron': Carrot, 'Bara': Bread, 'Afal': Apple,
'Selsig': Sausage, 'Hwyl Fawr': Goodbye, 'Te': Tea, 'Gwin': Wine, 'Dwr': Water,
'Coffi': Coffee, 'Sosban': Saucepan, 'Yfed': Drink, 'Bwyta': Eat, 'Ci': Dog,
'Cath': Cat, 'Wy': Egg, 'Meicrodon': Microwave, 'Siaced': Jacket, 'Esgidiau': Shoes,
'Sgert': Skirt, 'Iawn': Very, 'Ofnadwy': Awful, 'Nofio': Swimming, 'Ydw': Yes, 'Nac ydw': No,
'Newydd': New, 'Eto': Again, 'Brecwast': Breakfast, 'Dydd': Day, 'Crys': Shirt, 'Llaeth': Milk,
'Mwynhau': Enjoy, 'Hoffi': Like, 'Un': One, 'Dau': Two, 'Tre': Three, 'Pedwar': Four, 'Pump': Five,
'Llyfrgell': Library };