'use strict';
let score0 = document.querySelector('#score--0');
let score1 = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
let btnNew = document.querySelector('.btn--new');
let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');
let current0 = document.getElementById('current--0');
let current1 = document.getElementById('current--1');

let player0 =  document.querySelector('.player--0');
let player1 =  document.querySelector('.player--1');
let score,playing,activePlayer,currentScore;

const init = function(){
    playing = true;
    currentScore = 0
    activePlayer = 0
    score = [0,0];

  score0.textContent = 0;
    score1.textContent = 0;
    current0.textContent = 0;
    current1.textContent = 0;
    diceEl.classList.add('hidden');
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
};
init();
const switchPlayer =  function(){

  document.getElementById(`current--${activePlayer}`).textContent = 0;
      activePlayer = activePlayer === 0 ? 1 : 0 ;
      currentScore = 0;
      player0.classList.toggle('player--active');
      player1.classList.toggle('player--active');
}

btnRoll.addEventListener('click',function(){
  if(playing){
    let dice = Math.trunc(Math.random()*6)+1;
    diceEl.classList.remove('hidden');

    diceEl.src = `dice-${dice}.png`;
    if(dice !== 1)
    {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }
    else{
        switchPlayer();      
    }
  }
})
btnHold.addEventListener('click',function(){
  if(playing){
    score[activePlayer]+=currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];  
    if(score[activePlayer] >= 20)
    {
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
      diceEl.classList.remove('hidden');
      playing = false;

    }
    else
    {
      switchPlayer();
    }
  }
})
btnNew.addEventListener('click',init);