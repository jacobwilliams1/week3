var answer;
function setUpGame(params) {
    
$("#tbxGuess").val("");
$("#message").val("");

answer = parseInt(Math.random() * 10);

console.log("cheater! Dont't you dare enter " + answer)

$("#intro").show();
$("#game").hide();
$("#resetBtn").hide();
}
function handleGuess() {
    var guess = $("#tbxGuess").val();
    if (+guess == answer) {
    $("#message").text("You're Right!");
    }else{
$("#message").text("Nope, try again!");
$("#tbxGuess").val("");
    } 
    $("#tbxGuess").focus();
}

function playGame() {
   $("#intro").hide();
$("#game").show();
$("#tbxGuess").focus();
}
$(function() {
//wire up event handlers
$("#startGame").on("click", playGame);
$("#btnGuess").on("click", handleGuess);
//start the game
setUpGame();
$('#reset').on("click", function(){
    location.reload();
});
});