let paintSize = 25;
let color = '#000000';
let cir = true;
let sq = false;

function setup() {
  createCanvas(displayWidth, displayHeight);
  pur = createButton('purple');
    pur.style('background-color', '#dabfff')
    pur.position(0, 25);
    pur.mousePressed(colorG);
  bl = createButton('blue');
    bl.style('background-color', '#aaefdf')
    bl.position(51, 25);
    bl.mousePressed(colorY);
  gr = createButton('green');
    gr.style('background-color', '#c3e991')
    gr.position(90, 25);
    gr.mousePressed(colorB);
  ye = createButton('yellow');
    ye.style('background-color', '#fde74c')
    ye.position(138, 25);
    ye.mousePressed(colorO);
  or = createButton('orange');
    or.style('background-color', '#f18f01')
    or.position(189, 25);
    or.mousePressed(colorP);
  b = createButton('black');
    b.style('background-color', '#000000');
    b.style('color', '#ffffff');
    b.position(244, 25);
    b.mousePressed(colorW);
  wh = createButton('white');
    wh.style('background-color', '#ffffff');
    wh.position(289, 25);
    wh.mousePressed(colorBl);
  sm = createButton('smaller');
    sm.style('background-color','#ffffff');
    sm.position(0,0);
    sm.mousePressed(sizeLg);
  lg = createButton('larger');
    lg.style('background-color','#ffffff');
    lg.position(56,0);
    lg.mousePressed(sizeSm);
  cr = createButton('circle');
    cr.style('background-color','#ffffff');
    cr.position(104,0);
    cr.mousePressed(brushShape);
  sq = createButton('square');
    sq.style('background-color','#ffffff');
    sq.position(149,0);
    sq.mousePressed(brushShape);
  clear = createButton ('clear');
    clear.style('background-color', '#ffffff');
    clear.position(204,0);
    clear.mousePressed(backColor);
}

function draw() {
  fill(color);
  noStroke();
}

function colorP() {color = '#dabfff';}
function colorB() {color = '#aaefdf';}
function colorG() {color = '#c3e991';}
function colorY() {color = '#fde74c';}
function colorO() {color = '#f18f01';}
function colorBl() {color = '#000000';}
function colorW() {color = '#ffffff';}

function sizeSm() {paintSize = paintSize -= 5;}
function sizeLg() {paintSize = paintSize += 5;}

function brushShape() {
  shape = random(0, 50)
  if (shape <= 25) {
    cir = true; sq = false;
  } else { if (shape >= 26) {
    cir = false; sq = true;
  } }
}

function backColor() {
  back = random(0,50);
  if (back <= 25) {
    background(0);
  } else { if (back >= 26) {
    background(255);
  } }
}

function mouseDragged() {
  if (cir) {
    ellipse(mouseX, mouseY, paintSize);
  } else { if (sq) {
    rect(mouseX,mouseY,paintSize);
  } }
}
