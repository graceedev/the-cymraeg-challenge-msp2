/* global wordbank variable */
var wordBank = [
  {'english': 'Welcome',
  'welsh': 'Croeso'},
  {'english': 'Beer',
  'welsh': 'Cwrw'},
  {'english': 'Good',
  'welsh': 'Da'},
  {'english':'Morning',
  'welsh': 'Bore'},
  {'english': 'Afternoon',
   'welsh': 'Prynhawn'},
  {'english': 'Night',
  'welsh': 'Nos'},
  {'english': 'Welsh',
  'welsh': 'Cymraeg'},
  {'english': 'English',
  'welsh': 'Saesneg'},
  {'english': 'Thanks',
  'welsh': 'Diolch'},
  {'english': 'Name',
  'welsh': 'Enw'},
  {'english': 'Carrot',
  'welsh': 'Moron'},
  {'english': 'Bread',
  'welsh': 'Bara'},
  {'english': 'Apple',
  'welsh': 'Afal'},
  {'english': 'Sausage',
  'welsh': 'Selsig'},
  {'english': 'Goodbye',
  'welsh': 'Hwyl Fawr'},
  {'english': 'Tea',
  'welsh': 'Te'},
  {'english': 'Wine',
  'welsh': 'Gwin'},
  {'english': 'Water',
  'welsh': 'Dwr'},
  {'english': 'Coffee',
  'welsh': 'Coffi'},
  {'english': 'Saucepan',
  'welsh': 'Sosban'},
  {'english': 'Drink',
  'welsh': 'Yfed'},
  {'english':'Eat',
  'welsh': 'Bwyta'},
  {'english':'Dog',
  'welsh': 'Ci'},
  {'english': 'Cat',
  'welsh': 'Cath'},
  {'english':'Egg',
  'welsh': 'Wy'},
  {'english':'Microwave',
  'welsh': 'Meicrodon'},
  {'english': 'Jacket',
  'welsh': 'Siaced'},
  {'english': 'Shoes',
  'welsh': 'Esgidiau'},
  {'english':'Skirt',
  'welsh': 'Sgert'},
  {'english':'Very',
  'welsh': 'Iawn'},
  {'english':'Awful',
  'welsh': 'Ofnadwy'},
  {'english': 'Swimming',
  'welsh': 'Nofio'},
  {'english': 'Yes',
  'welsh': 'Ydw'},
  {'english':'No',
  'welsh': 'Nac ydw'},
  {'english': 'New',
  'welsh': 'Newydd'},
  {'english': 'Again',
  'welsh': 'Eto'},
  {'english': 'Breakfast',
  'welsh': 'Brecwast'},
  {'english': 'Day',
  'welsh': 'Dydd'},
  {'english': 'Shirt',
  'welsh': 'Crys'},
  {'english': 'Milk',
  'welsh': 'Llaneth'},
  {'english': 'Enjoy',
  'welsh': 'Mwynhau'},
  {'english': 'Like',
  'welsh': 'Hoffi'},
  {'english': 'One',
  'welsh': 'Un'},
  {'english': 'Two',
  'welsh': 'Dau'},
  {'english': 'Three',
  'welsh': 'Tre'},
  {'english': 'Four',
  'welsh': 'Pedwar'},
  {'english': 'Five',
  'welsh': 'Pump'},
  {'english': 'Library',
  'welsh': 'Llyfrgell'},
];

const cardContainer = [];

/* global welsh and english variables */ 
var welsh = [];
var english = [];

var clickedCards = [];
var dataCompare = [];

function cardClicked(event) {
  this.firstChild.classList.remove('hidden');
  this.classList.add('done');
  dataCompare.push(this.getAttribute('data-index'))
  clickedCards.push(this);
  console.log(dataCompare);
  console.log(clickedCards);

  if (dataCompare.length >= 2) {
    if (dataCompare[0] !== dataCompare[1]) {
      console.log('you suck');
      dataCompare = [];
      clickedCards = [];
    } else {
      console.log('YAY');
      dataCompare = [];
      clickedCards = [];
    }
  }
}


/* Show text when 'how to play' is clicked */
function clickHowTo() {
  var x = document.getElementById("how-to-text");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

/* Start game - reveal cards, remove play button*/
function changeCards() {
var x = document.getElementById("btn-play");
  x.style.display = "none";   

/* Generate random set of six word pairs*/
    let oldElement;
    for (let i = wordBank.length - 1; i > 0; i--) {
      let rand = Math.floor(Math.random() * (i + 1));
      oldElement = wordBank[i];
      wordBank[i] = wordBank[rand];
      wordBank[rand] = oldElement;
      var wordBankShuffle = wordBank.slice(0, 6);
    }

    /* create cardContainer for each welsh/english word*/ 
    for (i = 0; i < wordBankShuffle.length; i++) {
      var engCard = document.createElement('div');
      engCard.dataset.index = i;
      engCard.setAttribute('class', 'card');
      engCard.innerHTML = wordBankShuffle[i].english;
      org_text = engCard.innerHTML;
      new_html = "<p class='hidden'>" + org_text + "</p>";
      engCard.innerHTML = new_html;
      cardContainer.push(engCard);
    }
    for (i = 0; i < wordBankShuffle.length; i++) {
      var welCard = document.createElement('div');
      welCard.dataset.index = i;
      welCard.setAttribute('class', 'card');
      welCard.innerHTML = wordBankShuffle[i].welsh;
      org_text = welCard.innerHTML;
      new_html = "<p class='hidden'>" + org_text + "</p>";
      welCard.innerHTML = new_html;
      cardContainer.push(welCard);
    }
    var i = cardContainer.length;
    if (i == 0) return false;
    while ( --i ) {
      var j = Math.floor(Math.random() * ( i + 1 ));
      var tempi = cardContainer[i];
      var tempj = cardContainer[j];
      cardContainer[i] = tempj;
      cardContainer[j] = tempi;
    }

  /*insert new cards into DOM*/ 
  let setOne = cardContainer.slice(0, 3);
  let setTwo = cardContainer.slice(3, 6);
  let setThree = cardContainer.slice(6, 9);
  let setFour = cardContainer.slice(9, 12)

  for (let i of setOne) {
    var element = document.getElementById("game-row");
    element.appendChild(i);
  }

  for (let i of setTwo) {
    var element = document.getElementById("game-row2");
    element.appendChild(i);
  }
  
  for (let i of setThree) {
    var element = document.getElementById("game-row3");
    element.appendChild(i)
  }

  for (let i of setFour) {
    var element = document.getElementById("game-row4");
    element.appendChild(i)
  }
    /* Click cards to reveal words */
    let cards = document.querySelectorAll('.card');
    for (i = 0; i < cards.length; i++) {
      cards[i].addEventListener('click', cardClicked);
    }
}
