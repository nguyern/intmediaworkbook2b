//Attributed to karen anns spin text acitivity
var spin=0;
var letterSize=14;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(255);
  fill(0);
  angleMode(DEGREES);
  textAlign(CENTER);
  frameRate(15);
}

function draw() {
  fill("deeppink"); //text ink color!
  //stroke("deeppink");
  push();
  translate(width/2,height/2);
  rotate(spin);
  textSize(letterSize);
  text ('breathe in, breathe out', 0,-letterSize*0.3);

  //this will make the mouseX affect the spin direction and speed
  spin+=map(mouseX,0,width,-10,10); 
  letterSize=map(mouseY,0,height,8,72);
  //circle(0,0,letterSize/2);
  noFill();
  stroke("deeppink");
  circle(0,0,letterSize*10);
  pop();
  background(255, 51);
}
