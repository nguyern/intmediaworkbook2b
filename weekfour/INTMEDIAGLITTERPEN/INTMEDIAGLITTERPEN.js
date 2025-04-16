//Attributed to class activity
var pic;

function preload(){
  pic=loadImage("data/fluffypen.png")
}
function setup() {
createCanvas(windowWidth, windowHeight); 
background("white");
imageMode(CENTER, CENTER);
}


function draw() {
  image(pic, mouseX, mouseY, 200,200);
}
