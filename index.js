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
let cards = Array.from(document.getElementsByClassName('card'));

for (let i = 0; i < cards.length; i++) {
  cards[i].classList.remove("hidden");
}

var x = document.getElementById("btn-play");
  x.style.display = "none";   

/* Generate random set of six word pairs*/
  var wordBank = [
    {'Welcome': 'Croeso'},
    {'Beer': 'Cwrw'},
    {'Good': 'Da'},
    {'Moring': 'Bore'},
    {'Afternoon': 'Prynhawn'},
    {'Night': 'Nos'},
    {'Welsh': 'Cymraeg'},
    {'English': 'Saesneg'},
    {'Thanks': 'Diolch'},
    {'Name': 'Enw'},
    {'Carrot': 'Moron'},
    {'Bread': 'Bara'},
    {'Apple': 'Afal'},
    {'Sausage': 'Selsig'},
    {'Goodbye': 'Hwyl Fawr'},
    {'Tea': 'Te'},
    {'Wine': 'Gwin'},
    {'Water': 'Dwr'},
    {'Coffee': 'Coffi'},
    {'Saucepan': 'Sosban'},
    {'Drink': 'Yfed'},
    {'Eat': 'Bwyta'},
    {'Dog': 'Ci'},
    {'Cat': 'Cath'},
    {'Egg': 'Wy'},
    {'Microwave': 'Meicrodon'},
    {'Jacket': 'Siaced'},
    {'Shoes': 'Esgidiau'},
    {'Skirt': 'Sgert'},
    {'Very': 'Iawn'},
    {'Awful': 'Ofnadwy'},
    {'Swimming': 'Nofio'},
    {'Yes': 'Ydw'},
    {'No': 'Nac ydw'},
    {'New': 'Newydd'},
    {'Again': 'Eto'},
    {'Breakfast': 'Brecwast'},
    {'Day': 'Dydd'},
    {'Shirt': 'Crys'},
    {'Milk': 'Llaneth'},
    {'Enjoy': 'Mwynhau'},
    {'Like': 'Hoffi'},
    {'One': 'Un'},
    {'Two': 'Dau'},
    {'Three': 'Tre'},
    {'Four': 'Pedwar'},
    {'Five': 'Pump'},
    {'Library': 'Llyfrgell'},
  ];

  const shuffle = (wordBank) 
    let oldElement;
    for (let i = wordBank.length - 1; i > 0; i--) {
      let rand = Math.floor(Math.random() * (i + 1));
      oldElement = wordBank[i];
      wordBank[i] = wordBank[rand];
      wordBank[rand] = oldElement;
      var wordBankShuffle = wordBank.slice(0, 6);
    }
/*Seperate the English and Welsh translations*/
    var iterator = wordBankShuffle.values();

    for (const value of iterator) {
      console.log(value);
      var welsh = Object.values(value);
      console.log(welsh);
      var english = Object.keys(value);
      console.log(english);
    };
 
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





