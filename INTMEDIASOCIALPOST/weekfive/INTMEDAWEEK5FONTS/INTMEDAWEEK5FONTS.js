//Attributed to class activity with own adjustments
let font, points, bounds, sampleF; 

function preload() {
 font=loadFont("data/Sloop-ScriptThree.ttf");
}
function setup() {
createCanvas(windowWidth, windowHeight);
background ("white");
sampleF =0.2;
points=font.textToPoints("does he loves me?", width/4-200, height/2, 200, {
  sampleFactor: sampleF, simplifyThreshold: 0});
  rectMode(CENTER);
}

function draw() {
  background("white")
sampleF = map(mouseX, 0, width, 0, 1);
points=font.textToPoints("does he loves me?", width/4-200, height/2, 200, {
  sampleFactor: sampleF, simplifyThreshold: 0});

for (let i=0; i<points.length; i++) {
  stroke("pink");
  //line(points[i].x, points[i].y, mouseY, mouseX);
  //fill(random(256), random(256), random(256));
  fill("deeppink")
  circle(points[i].x+random(5), points[i].y+random(5), 10);
  
}
}
