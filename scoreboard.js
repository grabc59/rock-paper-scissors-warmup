$( document ).ready(function() {
    let scoreboard = $("#game-score");
    let result = $("#result");
    let wins = 0;
    let losses = 0;
    if (player wins){
      wins++;
      result.html("You win!")
      scoreboard.html(wins + " - " + losses);
    } else if (players loses){
      losses++;
      result.html("You lose!")
      scoreboard.html(wins + " - " + losses);
    } else {
      result.html("It's a draw!")
    }
});
