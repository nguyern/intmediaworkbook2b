//Attributed to class activity with own adjustments
let bottomImg;

function preload() {
  bottomImg = loadImage('./data/404.jpeg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bottomImg.resize(width, height);
   fill("white");
  noStroke();
  rect(0, 0, width, height);
  textFont('monospace');
  textSize(24);
  fill("deeppink");
  textAlign(CENTER, CENTER);
  text("OMG WAIT ... did he just text me?", width / 2, height / 2);
}

function draw() {
}

function mouseDragged() {
  // drag to reveal the 404 underneath
  copy(bottomImg, mouseX, mouseY, 80, 80, mouseX, mouseY, 80, 80);
}
