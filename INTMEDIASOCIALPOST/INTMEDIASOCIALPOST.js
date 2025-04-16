//Attributed to ChatGPT in helping me figure out how to redirect to another html page from here after clicking on the page enough times
let likeCount = 0;
let postX, postY, postW, postH;
let img; 
let redirected = false;

function preload() {
  img = loadImage("data/fakeinsta.jpg"); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textFont("monospace");

  postW = 300;
  postH = 300;
  postX = width / 2 - postW / 2;
  postY = height / 2 - postH / 2;
}

function draw() {
  background(255);
  
fill("deeppink");
noStroke();
textSize(12);
textAlign(CENTER, TOP); // top-align is better for wrapping
textWrap(WORD);

//dimensions to center text and wrap it into a paragraph
let maxTextWidth = 360;
let headingX = width / 2 - maxTextWidth / 2;
let headingY = postY - 80;
let headingH = 100;

text(
  "u r a slave to my algorithm — please double tap and like my photo so i feel super validated and more inclined to share the details of my life (sorry i'm an anxious attachment)",
  headingX,
  headingY,
  maxTextWidth,
  headingH
);
  // post frame
  stroke(200);
  fill(245);
  rect(postX, postY, postW, postH, 12);

  if (img) {
    image(img, postX, postY, postW, postH);
  }

  // pink overlay until unlocked
  if (likeCount < 10) {
    fill(255, 105, 180, 180); // soft pink overlay
    rect(postX, postY, postW, postH);

    fill(255);
    textSize(14);
    text("(do you like me?)", postX + postW / 2, postY + postH / 2);

    // display like count
    fill("deeppink");
    noStroke();
    textSize(16);
    text(`❤ ${likeCount}`, postX + postW / 2, postY + postH + 30);
  } else if (!redirected) {
    // once unlocked, redirect
    redirected = true;
    window.location.href = "./weekfive/index.html"; 
  }
}

function mousePressed() {
  if (mouseX > postX && mouseX < postX + postW &&
      mouseY > postY && mouseY < postY + postH && likeCount < 10) {
    likeCount++;
  }
}
