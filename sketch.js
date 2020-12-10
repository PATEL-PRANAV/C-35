var gameState = 0;

var playerCount,database;

var player,game,form;

function setup(){
    createCanvas(400,400);
    database = firebase.database();

}

function draw(){
    background("white");
    drawSprites();
}


