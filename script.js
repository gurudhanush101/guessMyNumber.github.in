'use strict';


let secret = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

//functions 
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}
const displayScore = function (score) {
    document.querySelector('.score').textContent = score;
}
const displayNumber = function (number) {
    document.querySelector('.number').textContent = number;
}


document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    displayScore(score);
    document.querySelector('.number').textContent = '?';
    displayMessage('Start guessing...');
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.background = '#222';


});



document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //when there is no input
    if (!guess) {
        displayMessage('No number⛔');
    }

    //when player wins🎉
    else if (guess === secret) {
        displayMessage('Correct Number🎉');

        document.querySelector('body').style.background = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        displayNumber(secret);

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }

    //when player is wrong🎉
    else if (guess !== secret) {
        if (score > 1) {
            document.querySelector('.message').textContent = guess > secret ? 'Too high📈....' : 'Too low📉........';
            score--;
            displayScore(score);
        } else {
            displayMessage('You Lost the Game🥲');
            displayScore(0);
        }

    }
});