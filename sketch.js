var mouseTeasing;
var mouseThumbsUp;
var mouseStanding;
var catSleeping;
var catMoving;
var catStanding;
var tom, jerry;
var gardenImg;
function preload() {
    //load the images here
    catSleeping = loadAnimation ("images/cat1.png");
    catMoving = loadAnimation ("images/cat2.png", "images/cat3.png");
    catStanding = loadAnimation ("images/cat4.png");
    mouseTeasing = loadAnimation ("images/mouse1.png");
    mouseThumbsUp = loadAnimation ("images/mouse2.png", "images/mouse3.png");
    mouseStanding = loadAnimation ("images/mouse4.png");
    gardenImg = loadImage ("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(870,600);
    tom.addAnimation("cat1", catSleeping);
    tom.addAnimation("cat2", catMoving);
    tom.addAnimation("cat3", catStanding);
    tom.scale = 0.2;

    jerry = createSprite(200,600);
    jerry.addAnimation("mouse1", mouseTeasing);
    jerry.addAnimation("mouse2", mouseThumbsUp);
    jerry.addAnimation("mouse3", mouseStanding);
    jerry.scale = 0.15;
}

function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide
    if ((tom.x - jerry.x) < (tom.width/2 - jerry.width/2) ){
        tom.velocityX = 0;
        tom.x = 300;
        tom.changeAnimation("cat3", catStanding);
        jerry.changeAnimation("mouse3", mouseStanding);
    }
    drawSprites();
}


function keyPressed(){
    //For moving and changing animation write code here
    if (keyCode === LEFT_ARROW){
        jerry.changeAnimation("mouse2", mouseThumbsUp);
        jerry.frameDelay = 25;
        tom.changeAnimation("cat2", catMoving);
        tom.velocityX = -5;
    }   

}
