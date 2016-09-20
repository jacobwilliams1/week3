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
    $('body').css("background-image", "url(http://20px.com/wp-content/uploads/2013/02/unicorn_pooping_a_rainbow_20px.jpg)");  
    $("#btnGuess").hide();
    }else{
$("#message").text("Nope, try again!");
$("#tbxGuess").val("");
$('body').css("background-color", "red");
$('body').fadeOut();  
$('body').fadeIn();     } 
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