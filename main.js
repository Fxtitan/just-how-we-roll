
/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];


/*******************************************************************
 * METHOD-Y HELPER FUNCTIONS YOUR BACK-END DEV HAS WRITTEN FOR YOU *
 ******************************************************************/


const getRandomNumber = function(max) {
  const rand = Math.random();
  const range = rand * max;
  const result = Math.ceil(range);

  return result;
}

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}



/******************
 * BUTTON QUERIES *
 ******************/
const dieOne = document.querySelector('#d6-roll')
const twoDie = document.querySelector('#double-d6-roll-1')
const twoOfTwo =  document.querySelector('#double-d6-roll-2')
const twelveSideDie = document.querySelector('#d12-roll')
const twentySideDie = document.querySelector('#d20-roll')
//const allTheDice = 'images/d6/dice' +  getRandomNumber(6) + '.png'; //this should link all of my dice to function*/
//const soloDie = document.querySelector('.roll').setAttribute('src', allTheDice)//my first die picture
const restart = document.querySelector('#reset-button') //linking button to variable
/******************
 * CLICK HANDLERS *
 ******************/
const rollTheDice = () => {
  let randomNum = getRandomNumber(6);
  sixes.push(randomNum);
  dieOne.src = `images/d6/${randomNum}.png`;
}

const rollTwoDie = () => {
  let randomNum = getRandomNumber(6);
  let otherRandomNum = getRandomNumber(6);
  doubleSixes.push(randomNum);
  doubleSixes.push(otherRandomNum);
  twoDie.src = `images/d6/${randomNum}.png`;
  twoOfTwo.src = `images/d6/${otherRandomNum}.png`;
}

const twelveSides = () => {
  let randomNum = getRandomNumber(12);
  twelves.push(randomNum);
  twelveSideDie.src = `images/d6/${randomNum}.png`;
}

const twentySides = () => {
  let randomNum = getRandomNumber(20);
  twenties.push(randomNum);
  twentySideDie.src = `images/d6/${randomNum}.png`;  
}

const squareOne = () => {
  let randomNum = getRandomNumber(1);
  dieOne.src = `images/d6/${randomNum}.png`;
  twoDie.src = `images/d6/${randomNum}.png`;
  twoOfTwo.src = `images/d6/${randomNum}.png`;
  twelveSideDie.src = `images/d6/${randomNum}.png`;
  twentySideDie.src = `images/d6/${randomNum}.png`;  
}




/*******************
 * EVENT LISTENERS *
 *******************/
dieOne.addEventListener('click',rollTheDice);
twoDie.addEventListener('click',rollTwoDie);
twoOfTwo.addEventListener('click',rollTwoDie);
twelveSideDie.addEventListener('click', twelveSides);
twentySideDie.addEventListener('click', twentySides);
restart.addEventListener('click', squareOne);
/****************
 * MATH SECTION *
 ****************/



/********************
* MATH-AREA QUERIES *
********************/

/******************
 * My Section *
 ******************/










