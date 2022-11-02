let paintSize = 25;
let color = '#000000';
let cir = true;
let sq = false;

function setup() {
  createCanvas(displayWidth, displayHeight);
}

function draw() {
  fill(color);
  noStroke();
  pur = createButton('purple');
    pur.style('background-color', '#dabfff')
    pur.position(0, 25);
    pur.mousePressed(colorP);
  bl = createButton('blue');
    bl.style('background-color', '#aaefdf')
    bl.position(51, 25);
    bl.mousePressed(colorB);
  gr = createButton('green');
    gr.style('background-color', '#c3e991')
    gr.position(90, 25);
    gr.mousePressed(colorG);
  ye = createButton('yellow');
    ye.style('background-color', '#fde74c')
    ye.position(138, 25);
    ye.mousePressed(colorY);
  or = createButton('orange');
    or.style('background-color', '#f18f01')
    or.position(189, 25);
    or.mousePressed(colorO);
  ba = createButton('black');
    ba.style('background-color', '#000000');
    ba.style('color', '#ffffff');
    ba.position(244, 25);
    ba.mousePressed(colorBa);
  wh = createButton('white');
    wh.style('background-color', '#ffffff');
    wh.position(289, 25);
    wh.mousePressed(colorW);
  sm = createButton('smaller');
    sm.style('background-color','#ffffff');
    sm.position(0,0);
    sm.mousePressed(sizeSm);
  lg = createButton('larger');
    lg.style('background-color','#ffffff');
    lg.position(56,0);
    lg.mousePressed(sizeLg);
  cr = createButton('circle');
    cr.style('background-color','#ffffff');
    cr.position(104,0);
    cr.mousePressed(brushC);
  sq = createButton('square');
    sq.style('background-color','#ffffff');
    sq.position(149,0);
    sq.mousePressed(brushS);
  bkb = createButton ('background-black');
    bkb.style('background-color', '#000000');
    bkb.style('color', '#ffffff');
    bkb.position(204,0);
    bkb.mousePressed(backB);
  bwb = createButton ('background-white');
    bwb.style('background-color','#ffffff');
    bwb.position(323,0);
    bwb.mousePressed(backW);
}

function colorP() {color = '#dabfff';}
function colorB() {color = '#aaefdf';}
function colorG() {color = '#c3e991';}
function colorY() {color = '#fde74c';}
function colorO() {color = '#f18f01';}
function colorBa() {color = '#000000';}
function colorW() {color = '#ffffff';}

function sizeSm() {paintSize = paintSize -= 5;}
function sizeLg() {paintSize = paintSize += 5;}

function brushC() {cir = true; sq = false;}
function brushS() {cir = false; sq = true;}

function backB() {background(0);}
function backW() {background(255);}

function mouseDragged() {
  if (cir) {
    ellipse(mouseX, mouseY, paintSize);
  } else { if (sq) {
    rect(mouseX,mouseY,paintSize);
  } }
}
