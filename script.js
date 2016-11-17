$(document).ready(function(){
console.log('cool');
var userInput;
var arr = ['rock', 'paper', 'scissors'];
var winner;
var $result = $('#result');

$('#game-container').on('click', function(event) {
  var et = $(event.target);
  if(et.has('rock')) {
    console.log('super ok');
    userInput = 'rock';
  }
  else if(et.has('paper')) {
    userInput = 'paper';
  }
  else if(et.has('scissors')){
    userInput = 'scissors';
  }
  compare(userInput);
})

function compare(userInput) {
  console.log('in here');
  console.log(userInput);
  var compInput = arr[Math.floor(Math.random() * 3)];
  if(userInput === 'rock') {
    if(compInput === 'scissors') {
      console.log('ok;')
      win();
    }
    else if(compInput === 'rock') {
      tie();
    }
    else {
      lose();
    }
  }
  else if(userInput === 'scissors') {
    if(compInput === 'paper') {
      win();
    }
    else if(compInput === 'scissors') {
      tie();
    }
    else {
      lose();
    }
  }
  else if(userInput === 'paper') {
    if(compInput === 'rock') {
      win();
    }
    else if(compInput === 'paper') {
      tie();
    }
    else if(compInput === 'scissors') {
      lose();
    }
  }
}


function win() {
  $result.text('You won');
}
function tie() {
  $result.text('It is a tie');
}
function lose() {
  $result.text('You lost');
}
});
