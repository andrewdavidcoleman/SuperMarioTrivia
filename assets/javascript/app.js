$( document ).ready(function(){
  console.log("letsago");
});

// $(".container").click(function(){

// 	gameClock.timesUp();

// });

//  Variable that will hold our setInterval that runs the gameClock
var intervalId;

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<gameClock object>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
var gameClock = {
  time: 60,
  timesUp: function() {
    gameClock.time = 60;
    // Hide the start screen and the game play screen, show the results screen when time is up.
    $(".start-screen").hide();
    $(".game-screen").hide();
    $(".game-over-screen").show();
  },
  start: function() {
    // DONE: Use setInterval to start the count here.
    intervalId = setInterval(gameClock.count, 1000);
  },
  count: function() {
    // DONE: decrement time by 1
    gameClock.time--;
    // DONE: Get the current time, pass that into the gameClock.timeConverter function,
    //       and save the result in a variable.
    var converted = gameClock.timeConverter(gameClock.time);
    console.log(converted);
    // DONE: Use the variable we just created to show the converted time in the "timer" div.
    $("#timer").html(converted);
  },
  timeConverter: function(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
    return minutes + ":" + seconds;
  }
};
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<End of gameClock object>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// $(".container").click(gameClock.start())

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<game object>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
var game = {
  waiting: function(){
    $(".start-screen").show();
    $(".game-screen").hide();
    $(".game-over-screen").hide();
    },
  play: function(){
    $(".start-screen").hide();
    $(".game-screen").show();
    $(".game-over-screen").hide();
   },
  results: function(){
    $(".start-screen").hide();
    $(".game-screen").hide();
    $(".game-over-screen").show();
   },
}
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<End of game object>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<game actions>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// screen displays waiting for the user to click the begin button
$(document).on("load", game.waiting());

// upon clicking the begin button the game screen displays and the timer begins running
$(".start-screen").click(function(){
  game.play();
});
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<end of game actions>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>




