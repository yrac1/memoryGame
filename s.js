const game= document.getElementById('game'); 
const div=document.querySelector('div')
let Card1 = null;
let Card2 = null;
const flippedCards= 0;
const  noClick= false;


const COLORS= [
  {color: 'red'},
  {color:'red'},
  {color:'blue'},
  {color:'blue'},
  {color:'green'},
  {color:'green'},
  {color:'yellow'},
  {color:'yellow'},
  {color:'purple'},
  {color:'purple'},
  {color:'pink'},
  {color:'pink'}, 
]

// shuffle the colors 

function shuffleColors() {
  const cardColors = COLORS;
  cardColors.sort(() => Math.random() - 0.5);
  return cardColors;
}

let shuffColors= shuffleColors(COLORS)

 // recreating a function that will loop through all of the elements and create a frontCard for them 
 let card1= null;
 let card2= null; 
 function frontC(){
   COLORS.forEach((item)=>{
     console.log(item)
     // create new divs of front facing card and Attach them to original cards
     let card=document.createElement('div')
    let frontCard= document.createElement('div')
    card.classList='card';
    frontCard.classList= 'frontCard'; 
    game.appendChild(card);
    card.appendChild(frontCard);

   // add color to the new Divs 
    card.style.backgroundColor=item.color


    // adding an event listener that will remove frontCard 
    frontCard.addEventListener('click', (evt)=>{
      evt.preventDefault();
      frontCard.parentNode.removeChild(frontCard)
    })

   })
 }

 frontC()

// // creating an event listener that will remove the front faceing card when clicked 

// frontCard().forEach(frontC=>{ // will loop through all the cards and listen for a click 
//   frontC.addEventListener('click',(evt) =>{
//     evt.preventDefault();
//     console.log(evt.target);

//   })

// })