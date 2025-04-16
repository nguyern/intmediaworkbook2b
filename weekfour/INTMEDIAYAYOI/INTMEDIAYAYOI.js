let flowers = []; //stores all flowers
let flowerImages = []; //store flower images
let totalFlowers = 450; // how many to show
let interval = 5; // milliseconds between each flower
let lastTime = 0; //tracks last time we added flower

function preload() {
  flowerImages[0] = loadImage("data/redflower.png");
  flowerImages[1] = loadImage("data/redflower2.png");
  flowerImages[2] = loadImage("data/redsunflower.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  background("white");
  fill("crimson")
  textAlign(CENTER, CENTER);
  textSize(18);
  textFont("monospace");
  text("roses are red, wait, do you even like flowers?", width / 2, height / 2);
}

//assistance of ChatGPT to understand how to pick flowers from array at random
function draw() {
  if (flowers.length < totalFlowers && millis() - lastTime > interval) {
    addFlower(); //if time amount of milliseconds have passed place flower
    lastTime = millis(); //millis is number of milliseconds since sketch started
  }

  for (let i = 0; i < flowers.length; i++) {
    let f = flowers[i]; 
    image(f.img, f.x, f.y, f.s, f.s);
  } //goes through entire flower array and draws it on screen
}

function addFlower() {
  let f = {
    img: random(flowerImages), // pick flowers at random
    x: random(width),
    y: random(height),
    s: random(50, 300) //random size
  };
  flowers.push(f); //add random flower to array
}
