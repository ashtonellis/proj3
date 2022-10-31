let paintSize = 25

function setup() {
  createCanvas(displayWidth, displayHeight);
}

function draw() {
}

function mouseDragged() {  
  let r = random(200,255);
  let g = random(200,255);
  let b = random(200,255);
  fill(r,g,b);
  noStroke();
  ellipse(mouseX, mouseY, paintSize);
}