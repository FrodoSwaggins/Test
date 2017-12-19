function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  translate(200, 200);
  rotate(-90);

  let hr = hour();
  let mn = minute();
  let sc = second();

  noFill();
  strokeWeight(8);
  angleMode(DEGREES);
  let secondAngle = map(sc, 0, 60, 0, 360);
  let minuteAngle = map(mn, 0, 60, 0, 360);
  let hourAngle = map(hr % 12, 0, 12, 0, 360);

  push();
  rectMode(CENTER);
  rotate(secondAngle);
  beginShape();
  stroke(255, 100, 150);
  rect(0, 0, 300, 300);
  fill(0);
  stroke(0);
  rect(0, 150, 0.5, 0.5);
  endShape();
  pop();

  push();
  rectMode(CENTER);
  rotate(minuteAngle);
  beginShape();
  stroke(150, 100, 255);
  rect(0, 0, 280, 280);
  fill(0);
  stroke(0);
  rect(0, 140, 0.5, 0.5);
  endShape();
  pop();

  push();
  rectMode(CENTER);
  rotate(hourAngle);
  beginShape();
  stroke(150, 255, 100);
  rect(0, 0, 260, 260);
  fill(0);
  stroke(0);
  rect(0, 130, 0.5, 0.5);
  endShape();
  pop();



  push();
  fill(51);
  noStroke();
  rotate(90);
  textAlign(CENTER);
  textSize(50);
  text(hr % 12 + ':' + mn + ':' + sc, 0, 0);
  pop();



}
