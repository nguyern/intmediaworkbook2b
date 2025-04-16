//Attributed to class acitivity provided
var storageData = [40, 30, 15, 10, 5];
var colours = ["deeppink", "pink", "hotpink", "palevioletred", "lightpink"];
var storageNames = ["overthinker", "pink!", "people pleaser?", "logical", "chronically online"];
var total;
function setup() {
 createCanvas(windowWidth, windowHeight);
 noLoop();
 noStroke();
 textFont("monospace")
}
function draw() {
 let lastPiece = 0;
 total = getTotal();
 for (let i = 0; i < storageData.length; i++) {
   fill(colours[i]);
   // re-map values so they distribute evenly around the circle
   let piece = map(storageData[i], 0, total, 0, TWO_PI);
   // draw the arc which represents the data
   arc(width/2, height/2, 300, 300, lastPiece, lastPiece+piece);
   /* add the value of the data to the last piece 
      so that the next piece/arc starts 
      at the end of the arc before it */
   lastPiece += piece;
 }
 
 drawLabels();
}
// this function adds the storageData values (to get a total)
function getTotal() {
 total = 0;
 for (let i = 0; i < storageData.length; i++) {
   total += storageData[i];
 }
 return total;
}

/* you can add labels here 
 by calling this function at the end of the draw loop
 you can also customise the position of the labels 
 by changing the values in the text function
*/
function drawLabels() {
  textSize(14);
  textAlign(LEFT);
  fill("deeppink")
 for (let i = 0; i < storageData.length; i++) {
       text(storageNames[i] + ": " + storageData[i] + "%", 50, 100 + i * 30);
 }
 
 textSize(14);
 text("me if you even care", 50, 50);
}
