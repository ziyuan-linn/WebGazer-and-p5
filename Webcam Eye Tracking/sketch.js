let gazeX = 0; //the x position of where the eyes are gazing, relative to the viewport
let gazeY = 0; //the y position of where the eyes are gazing, relative to the viewport

function setup() {
  webgazer.setGazeListener(gotData) //provides the callback function gotData
  webgazer.begin(); //starts the eye tracker

  webgazer.showVideo(true); //shows the webcam video
  webgazer.showFaceOverlay(true); //shows the face tracking points
  webgazer.showFaceFeedbackBox(true); //shows a bounding box for the face
  webgazer.showPredictionPoints(false); //shows a point at the gaze position, turned off because we are using p5 to draw our own points

  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  let ellipseX = gazeX;
  let ellipseY = gazeY;
  //the if statements prevents the ellipse from exiting the canvas border
  if(ellipseX < 0) ellipseX = 0;
  if(ellipseX > width) ellipseX = width;
  if(ellipseY < 0) ellipseY = 0;
  if(ellipseY > height) ellipseY = height;
  
  ellipse(ellipseX, ellipseY, 20, 20); //draw an ellipse at the gaze position
}

function gotData(data) { //invoked constantly to provide gaze position
  if (data == null) {
      return;
  }
  gazeX = data.x;
  gazeY = data.y;
  //console.log(gazeX + ", " + gazeY);
}