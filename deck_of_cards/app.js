let baseURL = 'https://deckofcardsapi.com/api/deck';
let deckCardID = '';
const drawButton = document.querySelector('button');
const imageBox = document.querySelector('.images-box');




//1
axios.get(`${baseURL}/new/draw/`)
    .then((res) => {
        let { suit, value } = res.data.cards[0];
        console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
    });


//2

axios.get(`${baseURL}/new/draw/`)
.then(res => {
  firstCard = res.data.cards[0];
  let deckId = res.data.deck_id;
  return axios.get(`${baseURL}/${deckId}/draw/`);
})
.then(res => {
  let secondCard = res.data.cards[0];
  [firstCard, secondCard].forEach(function(card) {
    console.log(
      `${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`
    );
  });
});


//3


axios.get(`${baseURL}/new/draw/`)
    .then((res) => {
        console.log(res)
       deckCardID = res.data.deck_id
    });

drawButton.addEventListener('click', function(){
    axios.get(`https://deckofcardsapi.com/api/deck/${deckCardID}/draw/?count=1`)
        .then(res => {
            imgSrc = res.data.cards[0].image;
            let img = document.createElement('img');
            img.src = imgSrc;
            imageBox.append(img)
     
        })
})