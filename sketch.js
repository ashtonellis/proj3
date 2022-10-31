let paintSize = 25
let color = '#000000'

function setup() {
  createCanvas(displayWidth, displayHeight);
}

function draw() {
  fill(color);
  noStroke();
}

function mouseDragged() {
  ellipse(mouseX, mouseY, paintSize);
}

function keyTyped() {
  if (key === 'p') {
    color = '#d5d6ea';
  } else if (key === 'y') {
    color = '#f6f6eb';
  } else if (key === 'g') {
    color = '#d7ecdd';
  } else if (key === 'o') {
    color = '#f5d5cb';
  } else if (key === 'b') {
    color = '#cdecff';
  } else if (key === 'w') {
    color = '#ffffff';
  } else if (key === 'x') {
    color = '#000000';
  } 
}