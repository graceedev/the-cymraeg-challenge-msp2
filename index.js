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

/* Start game - reveal cards, remove play button*/
function changeCards() {
let cards = Array.from(document.getElementsByClassName('card'));

for (let i = 0; i < cards.length; i++) {
  cards[i].classList.remove("hidden");
}

var x = document.getElementById("btn-play");
  x.style.display = "none";   

/* Generate random set of six word pairs*/
  const shuffle = (wordBank) 
    let oldElement;
    for (let i = wordBank.length - 1; i > 0; i--) {
      let rand = Math.floor(Math.random() * (i + 1));
      oldElement = wordBank[i];
      wordBank[i] = wordBank[rand];
      wordBank[rand] = oldElement;
      var wordBankShuffle = wordBank.slice(0, 6);
    }
    console.log(wordBankShuffle)
  }