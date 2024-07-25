console.log('hello world! Project initialized');

const getPlayerName = document.querySelector('#player1');

const marioModal = document.querySelector('.modal');

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
console.log(babyMario);
const marioPics = [babyMario, catMario, beeMario, booMario, capeMario, classicMario, doctorMario,fireMario,fluddMario,frogMario,tanookiMario,trexMario,tuxMario];

console.log(marioPics);

const randoMario = document.querySelector('#marioModalWrapper');

//let player1Name = localStorage.getItem('player1');

const displayMarioPic = function () {

   // Clear the employee table
 // randoMario.innerHTML = '';
        // Get the mario image
  let marioImg = document.createElement('img');
  console.log('image tag created');
   const randoMario = [Math.floor(Math.random() * marioPics.length)];
  let targetMario = marioPics[randoMario];
  marioImg.setAttribute(
        'src' , targetMario['src']
    );
   document.getElementById('marioModalWrapper').appendChild(marioImg);

};

displayMarioPic();

//if (marioPics === true) {
//    console.log('its a me!')
//    const imgTag = 'img';
//    document.body.createElement(marioPics)
//};
//add an array of Mario images with text as well

//add input name field Player1 to browser data
//localStorage.setItem('player1', player1Name);
//display modal -> display image area

//either create a gif of Mario images or use JS to rotate through the Mario images

//display randomized Mario image
//const randomEmployee = employeesArray[Math.floor(Math.random() * employeesArray.length)];
//console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);
//display Mario Image text in a string "You are ${marioName} Mario!"

//save marioName to browser data

//Change topName span to marioName player1
//const addTopPlayer = function () {

   // localStorage.setItem('', JSON.stringify(user));
//};

//Add Event Listener - click - submit
//randomMario.addEventListener('click', addTopPlayer);