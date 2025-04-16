//Attributed to class activity and ChatGPT to helping adjust the orginial class activity
//array of button text
let anxiousThoughts = [
  "what if they hate me?",
  "did i sound weird?",
  "i shouldn’t have said that",
  "is it too late to unsend?",
  "why are they ignoring me?",
  "wait why didn’t they reply?",
  "did i do something wrong?",
  "was that cringe?",
  "no it's not my fault right?"
];

let clickCount = 0;
let maxClicks = 6;
let introButton;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("white");
  textFont("monospace");
  textSize(18);

  // first centered button
  introButton = createButton("wait are you spiralling right now?");
  introButton.style("color", "deeppink"); 
  let btnW = 240;
  let btnH = 40;
  introButton.position(width / 2 - btnW / 2, height / 2 - btnH / 2);
  introButton.mousePressed(spawnNewButton);
}

function spawnNewButton() {
  clickCount++;

  // create new anxious thought button
  let thought = random(anxiousThoughts);
  let newButton = createButton(thought);
  newButton.position(random(width - 250), random(height - 50));
  newButton.style("color", "deeppink");
  newButton.mousePressed(spawnNewButton);

  // final STOP button appears
  if (clickCount === maxClicks) {
    let stopButton = createButton("STOP");
    stopButton.position(width / 2 - 50, height - 100);
    stopButton.style("color", "white");
    stopButton.style("background-color", "deeppink");
    stopButton.style("padding", "10px 20px");
    stopButton.style("font-weight", "bold");
    stopButton.mousePressed(() => {
      window.location.href = "./weeksix/index.html";
    });
  }
}
