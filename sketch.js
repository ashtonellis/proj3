let paintSize = 25
let color = '#000000'
let img;

function preload() {
  img = loadImage('assets/controls.png')
}

function setup() {
  createCanvas(displayWidth, displayHeight);
}

function draw() {
  fill(color);
  noStroke();
  image(img, 0, 0, 300,120);
}

function mouseDragged() {
  ellipse(mouseX, mouseY, paintSize);
}

function keyTyped() {
  if (key === 'p') {
    color = '#dabfff';
  } else if (key === 'y') {
    color = '#fde74c';
  } else if (key === 'g') {
    color = '#c3e991';
  } else if (key === 'o') {
    color = '#f18f01';
  } else if (key === 'b') {
    color = '#aaefdf';
  } else if (key === 'w') {
    color = '#ffffff';
  } else if (key === 'x') {
    color = '#000000';
  } 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    paintSize = paintSize += 5;
  } else { if (keyCode === DOWN_ARROW) {
    paintSize = paintSize -= 5;
  } }

  if (keyCode === CONTROL) {
    background(0);
  } else { if (keyCode === ALT) {
    background(255);
  } } 
}