var block1, block2, block3, block4, box;
var music, edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){

createCanvas(720,600);

    //create 4 different surfaces
 block1 = createSprite(40, 580, 180, 20);
 block1.shapeColor = "blue" ;

 block2 = createSprite(240, 580, 180, 20);
 block2.shapeColor = "red";

 block3 = createSprite(440, 580, 180, 20);
 block3.shapeColor = "orange";

 block4 = createSprite(640, 580, 180, 20);
 block4.shapeColor = "yellow";

    //create box sprite and give velocity
box = createSprite(random(20,670), 200, 20, 20);
box.shapeColor = "white";
box.velocityX = 3;
box.velocityY = 4;

edges = createEdgeSprites();
}


function draw() {
    background(rgb(169,169,169));
     //add condition to check if box touching surface and make it box
if(block1.isTouching(box) && box.bounceOff(block1)){
    box.shapeColor = "blue"
}

if(block2.isTouching(box) && box.bounceOff(block2)){
    box.shapeColor = "red"
}

if(block3.isTouching(box) && box.bounceOff(block3)){
    box.shapeColor = "orange"
}

if(block4.isTouching(box) && box.bounceOff(block4)){
    box.shapeColor = "yellow"
}

if(block1.isTouching(box) || block2.isTouching(box) || block3.isTouching(box) || block4.isTouching(box)){
    music.playSound();
}
     
createEdgeSprites();

box.bounceOff(edges);

box.bounceOff(block1);
box.bounceOff(block2);
box.bounceOff(block3);
box.bounceOff(block4);

    drawSprites();
}