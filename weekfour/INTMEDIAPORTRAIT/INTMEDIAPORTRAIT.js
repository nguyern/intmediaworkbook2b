//Assistance of ChatGPT to troubleshoot
isWinking = false;

function setup() {
  createCanvas(windowWidth, windowHeight); // fullscreen
  noLoop();
  drawFace();
}

function drawFace() {
  background(255);
  let x = width / 2;
  let y = height / 2;

  // face
  fill('#FFD700'); // yellow
  stroke(0);
  strokeWeight(2);
  ellipse(x, y, 200, 200);

  // eyes
  noStroke();
  fill(0);

  if (!isWinking) {
    // left eye
    ellipse(x - 40, y - 30, 15, 35);
    // right eye
    ellipse(x + 40, y - 30, 15, 35);
    
    // highlights
    fill(255); // white
    ellipse(x - 40, y - 40, 5, 5);
    ellipse(x + 40, y - 40, 5, 5);
  } else {
    // left eye
    fill(0);
    ellipse(x - 40, y - 30, 15, 35);
    fill(255); // white highlight
    ellipse(x - 40, y - 40, 5, 5);

    // winked eye is just a line (no highlight)
    stroke(0);
    strokeWeight(5);
    line(x + 30, y - 30, x + 50, y - 30);
  }

  // mouth
  noFill();
  stroke(0);
  strokeWeight(5);
  arc(x, y + 30, 100, 60, 0, PI);

  // tongue (only when winking)
if (isWinking) {
  noStroke();
  fill('#FF4C4C'); // red tongue
  arc(x, y + 55, 40, 40, 0, PI, CHORD); // curved top
}
}

function mousePressed() {
  isWinking = !isWinking;
  drawFace();
}
