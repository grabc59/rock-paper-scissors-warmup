$(document).ready(function(){
  console.log('cool');
var userInput;
var arr = ['rock', 'paper', 'scissors'];
var winner;
var $result = $('#result');

$('#game-container').on('click', function() {
  var et = event.target;
  if(et.hasClass('rock')) {
    userInput = 'rock';
  }
  else if(et.hasClass('paper')) {
    userInput = 'paper';
  }
  else if(et.hasClass('scissors')){
    userInput = 'scissors';
  }
  compare(userInput);
})

function compare(userInput) {
  // var compInput = arr[Math.floor(Math.random() * 3)];
  var compInput = 'scissors';
  if(userInput === 'rock') {
    if(compInput === 'scissors') {
      win();
    }
    else if(compInput === 'rock') {
      //tie
    }
    else {
      //lose
    }
  }
  else if(userInput === 'scissors') {
    if(compInput === 'paper') {
      //win
    }
    else if(compInput === 'scissors') {
      //tie
    }
    else {
      //lose
    }
  }
  else if(userInput === 'paper') {
    if(compInput === 'rock') {
      //win
    }
    else if(compInput === 'paper') {
      //tie
    }
    else if(compInput === 'scissors') {
      //lose
    }
  }
}


function win() {
  result.text('You won');
}
});
