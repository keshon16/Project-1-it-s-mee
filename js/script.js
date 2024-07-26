const player1submit = document.querySelector('#submit');

const marioModal = document.querySelector('.modal');

const closeModal = document.querySelector('.closeModal');

const marioName = document.querySelector('.marioName');
//add an array of Mario images with text as well
const babyMario = {
   name: 'Baby',
   src: './img/baby-mario.png',
};
const beeMario = {
   name: 'Bee',
   src: './img/bee-mario.png',
};
const booMario = {
   name: 'Boo',
   src: './img/boo-mario.png',
};
const capeMario = {
   name: 'Super',
   src: './img/cape-mario.png',
};
const catMario = {
   name: 'Cat',
   src: './img/cat-mario.png',
};
const classicMario = {
   name: 'OG',
   src: './img/classic-mario.png',
};
const doctorMario = {
   name: 'Doctor',
   src: './img/dr-mario.png',
};
const fireMario = {
   name: 'Fire',
   src: './img/fire-mario.png',
};
const fluddMario = {
   name: 'Sunshine',
   src: './img/fludd-mario.png',
};
const frogMario = {
   name: 'Frog',
   src: './img/frog-mario.png',
};
const tanookiMario = {
   name: 'Tanooki',
   src: './img/tanooki-mario.png',
};
const trexMario = {
   name: 'Dino',
   src: './img/trex-mario.png',
};
const tuxMario = {
   name: 'Tuxedo',
   src: './img/tux-mario.png',
};
//console.log(babyMario);
const marioPics = [babyMario, catMario, beeMario, booMario, capeMario, classicMario, doctorMario,fireMario,fluddMario,frogMario,tanookiMario,trexMario,tuxMario];

//console.log(marioPics);

const displayMarioPic = function () {
   //display modal -> 
   marioModal.setAttribute( 'style', 'display: block;');
   
   const getPlayerName = document.querySelector('#player1');
   const player1SaveName = getPlayerName.value;
   localStorage.setItem('player1', player1SaveName);
   
   const player1Name = localStorage.getItem('player1');
   
  // console.log(getPlayerName);
  // console.log(player1Name);
   // Clear the top player table
 // randoMario.innerHTML = '';
        // Get the mario image
  let marioImg = document.createElement('img');
  let marioTxt = document.createElement('p');
  //console.log('image tag created');
  // const randoMario = [Math.floor(Math.random() * marioPics.length)];
  //let targetMario = marioPics[randoMario];
   let targetMario = marioPics[Math.floor(Math.random() * marioPics.length)];
//   console.log(targetMario);
  marioImg.setAttribute(
        'src' , targetMario['src']
    );
   const randomMarioName = targetMario['name'];
 //  console.log(randomMarioName);
   marioTxt.textContent = `You've Got ${randomMarioName} Mario!`;
   //display randomized Mario image
//   console.log(marioTxt);
   localStorage.setItem('marioPlayerName', randomMarioName);

   marioName.textContent = `${randomMarioName} ${player1Name}`;
   document.getElementById('marioModalWrapper').appendChild(marioImg);
  // display Mario text
   document.getElementById('marioModalWrapper').appendChild(marioTxt);
   localStorage.removeItem(player1SaveName);
   localStorage.removeItem('marioPlayerName');

   closeModal.addEventListener('click', () => {
      marioModal.setAttribute('style', 'display: none;');
      marioImg.remove();
      marioTxt.remove();
   }
   );
};

//add input name field Player1 to browser data



//either create a gif of Mario images or use JS to rotate through the Mario images

//Add Event Listener - click - submit
player1submit.addEventListener('click', displayMarioPic);

