'use strict'

const result  = document.getElementById('result');

let [comuter_score, user_score] = [0, 0];

let gameRules = {
    Rock: {
        Rock : 'draw',
        Scissors: 'win',
        Paper : 'lose'
    },
    Paper: {
        Paper : 'draw',
        Rock : 'win',
        Scissors : 'lose'
    },
    Scissors : {
        Scissors : 'draw',
        Paper: 'win',
        Rock : 'lose'
    },
};



function clicked(input){
    let choices = ['Rock', 'Paper', 'Scissors'];
    let randomNumber = Math.trunc(Math.random() * 3);
    let computer_choice = choices[randomNumber];
    document.getElementById('user_choice').
    innerHTML = `Computer Choose <span>${computer_choice.toUpperCase()}</span>`;
    document.getElementById('computer_choice').
    innerHTML = `You Choose <span>${input.toUpperCase()}</span>`;



switch (gameRules[input][computer_choice]) {
    case 'win':
    result.innerText = 'You win';
    user_score++;
    break;
    case 'lose':
        result.innerText = 'You lose';
        comuter_score++;
        break;   
        case 'draw':
            result.innerText = 'You draw';
            break;  
}

document.getElementById('computer_score').innerHTML = comuter_score ;
document.getElementById('user_score').innerHTML = user_score ;
}