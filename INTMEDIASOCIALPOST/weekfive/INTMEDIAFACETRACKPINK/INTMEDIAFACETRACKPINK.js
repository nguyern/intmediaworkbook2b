//Attributed to karenanndonnachie Face Tracking p5.js 
let faceapi;
let detections = [];

let video;
let canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  background(0);
  canvas.id("canvas");
  video = createCapture(VIDEO);// Creat the video
  video.id("video");
 video.size(windowWidth, windowHeight); // only show half screen width

  const faceOptions = {
    withLandmarks: true,
    withExpressions: true,
    withDescriptors: true,
    minConfidence: 0.5
  };
  faceapi = ml5.faceApi(video, faceOptions, faceReady);
}

function faceReady() {
  faceapi.detect(gotFaces);// Start detecting faces
}

// Got faces
function gotFaces(error, result) {
  if (error) {
    console.log(error);
    return;
  }
  detections = result; //Now all the data --> detections
  clear();
  drawBoxs(detections); //Draw box
  drawLandmarks(detections); // Draw face points
  drawExpressions(detections, 20, height/2, 20);
  faceapi.detect(gotFaces);
}

function drawBoxs(detections){
  if (detections.length > 0) { //If at least 1 face is detected
    for (f=0; f < detections.length; f++){
      let {_x, _y, _width, _height} = detections[f].alignedRect._box;
      stroke("deeppink");
      strokeWeight(1);
      noFill();
      rect(_x, _y, _width, _height);
    }
  }
}

function drawLandmarks(detections){
  if (detections.length > 0) { //If at least 1 face is detected: 
    for (f=0; f < detections.length; f++){
      let points = detections[f].landmarks.positions;
      for (let i = 0; i < points.length; i++) {
        stroke("deeppink");
        strokeWeight(3);
        square(points[i]._x, points[i]._y,2);
      }
    }
  }
}

function drawExpressions(detections, x, y, textYSpace){
  if(detections.length > 0){ //If at least 1 face is detected
    let {neutral, happy, angry, sad, disgusted, surprised, fearful} = detections[0].expressions;
    textFont('monospace');
    textSize(14);
    noStroke();
    fill("deeppink");

    text("eyes: too close together? " + nf(neutral*100, 2, 2)+"%", x, y);
    text("mouth: said too much again " + nf(happy*100, 2, 2)+"%", x, y+textYSpace);
    text("nose: should i go to turkey? " + nf(angry*100, 2, 2)+"%", x, y+textYSpace*2);
    text("cheeks: am i breaking out again? "+ nf(sad*100, 2, 2)+"%", x, y+textYSpace*3);
    text("jaw: ugh do i have a double chin? " + nf(disgusted*100, 2, 2)+"%", x, y+textYSpace*4);
    text("forehead: ate way too much sugar. " + nf(surprised*100, 2, 2)+"%", x, y+textYSpace*5);
    text("eyebrows: where are the tweezers? " + nf(fearful*100, 2, 2)+"%", x, y+textYSpace*6);
  } else { //If no faces is detected
    text("eyes: ", x, y);
    text("mouth: ", x, y + textYSpace);
    text("nose: ", x, y + textYSpace*2);
    text("cheeks: ", x, y + textYSpace*3);
    text("jaw: ", x, y + textYSpace*4);
    text("forehead: ", x, y + textYSpace*5);
    text("eyebrows: ", x, y + textYSpace*6);
  }
}
