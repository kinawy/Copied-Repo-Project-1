// Game pattern is  array  for the random color the player have to follow this pattern to jump between levles 
var gamePattern = [];
// User pattern is array to store input of user then compare it with game pattern
var userPattern = [];
// We have only 4 color 
var buttonColours = ["red", "blue", "green", "yellow"];
// In the beginning level start with 0
var level = 0;
// Game status , So if it false not stat  and if it true is start 
var gameStarted = false;
// To start the game you have to press any key 
$(document).keydown("keydown", function(e){
  if (!gameStarted) {
$("#level-title").text("Level 0");
console.log("Game start ");
nextSequence();
gameStarted = true;
console.log(e.key);
}
});
//Go to next level 
function nextSequence(){
  level++;

  $("#level-title").text("Level " + level);
  //Gives random color
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColours[randomNumber];
  $("#"+randomChosenColor).fadeOut(100).fadeIn(100);
  gamePattern.push(randomChosenColor);
  playSound(randomChosenColor);
  console.log("Game: " + gamePattern);

}
//When the button click 
$("div.btn").click (function (){
    $(this).addClass("pressed");
    var buttonClicked = $(this).attr("id");
    userPattern.push(buttonClicked);
    playSound(buttonClicked);
    console.log("User: " + userPattern);
    
    setTimeout(function(){
    $("."+buttonClicked).removeClass("pressed");
    }, 100);
    //console.log(gamePattern.includes(buttonClicked));
    
    
    check(userPattern.length-1);
    });
    //Here to check the user pattren and compare it with game pattren
    function check(currentLevel){
    
      if (userPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("right answer");
    
    
      if (userPattern.length === gamePattern.length) {
        setTimeout(function(){
          nextSequence();
            userPattern = [];
        }, 1000);
    }
      } else {
        var wrongSound = new Audio('sounds/wrong.mp3');
        wrongSound.play();
        $("body").addClass("game-over");
    
        setTimeout(function(){
        $("body").removeClass("game-over");
        }, 200);
    
        $("#level-title").text("Game Over, Press Any Key to Restart");
    
        startOver();
    
      }
    //Restart game
    function startOver() {
      level = 0;
      userPattern = [];
      gamePattern = [];
      gameStarted = false;
    }
    
    
    }
    function playSound(color) {

        switch (color) {
          case "red":
          var redSound = new Audio('sounds/red.mp3');
          redSound.play();
            break;
      
            case "blue":
            var blueSound = new Audio('sounds/blue.mp3');
            blueSound.play();
            break;
      
            case "green":
            var greenSound = new Audio('sounds/green.mp3');
            greenSound.play();
            break;
      
            case "yellow":
            var yellowSound = new Audio('sounds/yellow.mp3');
            yellowSound.play();
      
      
            break;
      
      
          default:
      
        }
      }
      








  