var buttonColors = ["red", "blue", "green", "yellow"]

var gamepattern = [];
var userClickedPattern = [];


function nextSequence(){
    var randomNumber =  Math.floor(Math.random()*4);
    
    var randomChoosenColor = buttonColors[randomNumber];  
    
    playSound(randomChoosenColor);
    $('#'+randomChoosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    gamepattern.push(randomChoosenColor);

}



$(".btn").click(function(e){
    var idClicked = e.target.id;

    playSound(idClicked);
    userClickedPattern.push(idClicked);
    animatePress(idClicked);

//    console.log(userClickedPattern);

});


function playSound(name){
//    console.log(name);
    var audio = new Audio('sounds/'+name+'.mp3')
    audio.play();
}


function animatePress(currentColor){
    console.log(currentColor);
    $("."+currentColor).addClass("pressed");

    setTimeout(function(){ $("."+currentColor).removeClass('pressed'); },200);
}


$(document).keypress(nextSequence());