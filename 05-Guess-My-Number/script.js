'use strict';
let secretNumber =Math.floor(Math.random()*20)+1;
let score = 20;
let highScore = 0;
const textMessage = function(message)
        {
            document.querySelector('.message').textContent = message;
        };
document.querySelector('.check').addEventListener('click', function(){
    let guess = Number(document.querySelector('.guess').value);
    if(!guess)
    {   
        textMessage('enter a number');
    }
    else if(guess === secretNumber)
    {
        textMessage("Correct Number");
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#00FF00';
        document.querySelector('.number').style.width = '30rem';
        if(score>highScore)
        {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
        }
 } 
 else if (guess !== secretNumber)
 {
    if(score>1)
    {
        document.querySelector('.message').textContent = guess > secretNumber ? "Too High" : "TOO Low";
        score--;   
        document.querySelector('.score').textContent =score; 
    }else{
        textMessage("😔 Game Over");
        document.querySelector('.score').textContent =score; 

    }
 
 }

 
 });
 document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    secretNumber =Math.floor(Math.random()*20)+1;
    textMessage('Enter a number again');
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = "?"; 
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

 
 });