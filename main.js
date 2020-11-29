echo "# koi-pond" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/chloe-truong/koi-pond.git
git push -u origin main
                
function lilypad(size){//making the lilypads by making a bunch of concentric circles getting smaller and moving in
penRGB(randomNumber(0,20),randomNumber(150,255),randomNumber(0,20));
var angle = [0,90];
var turn = angle[randomNumber(0,1)];
for (var radius=size; radius>0; radius-=0.1) {
  turnTo(turn);
  penDown();
  arcRight(330, radius);
  penUp();
  arcRight(30, radius);
  if(turn == 0){
    move(0.1,0);
  }else if(turn == 90){
    move(-0.002,0.115);
  }
}
turnTo(0);
}

function allLilypads(){//making all the lilypads in random different spots
for (var i = 0; i < randomNumber(5,8); i++) {
  moveTo(randomNumber(20,270),randomNumber(20,420));
  lilypad(randomNumber(20,40));
}
}

function lotus(size){ //making the lotus flowers by looping a bunch of shapes and rotating and repeating it but smaller
penRGB(randomNumber(200,235),randomNumber(150,180),randomNumber(220,255));
penWidth(size/4.5);
penDown();

for (var a = 0; a < 12; a++) {
  for (var b = 0; b < 4; b++) {
    moveForward(size);
    turnRight(109);
}
turnRight(73);
}
penUp();
penWidth(size/6.5);
move(-size/(size*2),-size/(size*0.35));
penDown();
penRGB(randomNumber(155,190),randomNumber(85,110),randomNumber(210,240));

for (var c = 0; c < 12; c++) {
  for (var d = 0; d < 4; d++) {
    moveForward(size/1.5);
    turnRight(109);
}
turnRight(73);
}

penUp();
penWidth(size/6.5);
move(-size/(size*0.9),-size/(size*0.35));
penDown();
penRGB(randomNumber(90,110),randomNumber(45,65),randomNumber(120,140));

for (var e = 0; e < 12; e++) {
  for (var f = 0; f < 4; f++) {
    moveForward(size/3.5);
    turnRight(109);
}
turnRight(73);
}  
penUp();
move(-size/12,-size/15);
penColor("#F1CD2C");
dot(size/9);
turnTo(0);
}

function allLotus(){//making all the lotus in different locations in random spots
for (var i = 0; i < randomNumber(5,8); i++) {
  moveTo(randomNumber(20,280),randomNumber(20,420));
  lotus(randomNumber(20,35));
}
}

function ripple(size){//making ripples by alternating arcs up and down to make concentric incomplete circles

penRGB(0,randomNumber(90,120),randomNumber(175,230),0.4);
penWidth(1);
penDown();

for (var radius1=size; radius1>0; radius1-=size/2.5) {
  penDown();
  arcRight(83, radius1);
  penUp();
  arcRight(37, radius1);
  penDown();
  arcRight(83, radius1);
  penUp();
  arcRight(37, radius1);    
  penDown();
  arcRight(83, radius1);
  penUp();
  arcRight(37, radius1);
  penUp();
  move(size/2.5,0);
}
move(-size,0);
for (var radius2=size*(4/5); radius2>0; radius2-=size/2.5) {
  penDown();
  penUp();
  arcRight(37, radius2);
  penDown();
  arcRight(83, radius2);
  penUp();
  arcRight(37, radius2);
  penDown();
  arcRight(83, radius2);    
  penUp();
  arcRight(37, radius2);
  penDown();
  arcRight(83, radius2);
  penUp();
  move(size/2.5,0);
}
}

function allRipple(){//making all ripples in random spots
  for (var i = 0; i < randomNumber(5,8); i++) {
  moveTo(randomNumber(20,300),randomNumber(20,425));
  turnTo(randomNumber(-10,10));
  ripple(randomNumber(20,45));
}
}

function koi1(){
penWidth(1);
penColor("white");

turnTo(0);
for (var radius2=50; radius2>0; radius2--) {
  penDown();
  arcRight(83, radius2);
  penUp();
  arcRight(277, radius2);
  move(0.5,-0.75);
}
turnTo(180);
move(24,-11);
for (var radius3=50; radius3>0; radius3--) {
  penDown();
  arcRight(83, radius3);
  penUp();
  arcRight(277, radius3);
  move(-0.5,0.75);
}

turnTo(0);
move(-15,4);
move(-4,0);
dot(4);
move(4,0);
penWidth(18);
penDown();
move(32,-33.5);
penUp();
move(1,1);
dot(6);
penColor("black"); //eyes
move(2,0);
dot(1);
move(-5,-5);
dot(1);
penRGB(randomNumber(130,255),randomNumber(0,30),randomNumber(0,40)); //color blobs
move(-5,15);
dot(4);
move(-2,-3);
dot(3);
move(4,0);
dot(3);
penRGB(randomNumber(200,255),randomNumber(120,160),randomNumber(0,30));
move(-20,14);
dot(5);
move(2,5);
dot(3);
move(-5,-2);
dot(4);
}

function koi2(size){ // koi fish by making a dot and carving off sides with background color
penUp();
penColor("white");
dot(size);
move(size/1.43,size/0.625);
turnTo(-90);
penWidth(size/1.667);
penColor(backColor);
penDown();
arcRight(180,size/0.625);
penUp();
arcRight(180,size/0.625);
move(-size/0.714,0);
arcRight(180,size/0.625);
penDown();
arcRight(180,size/0.625);
penUp();
penColor("black");
move(size/2,-size/0.435);
dot(size/25);
move(size/2.5,0);
dot(size/25);
penRGB(randomNumber(130,255),randomNumber(0,30),randomNumber(0,40)); //color blobs
move(-size/10,size/2);
dot(size/8.333);
move(-size/25,-size/16.667);
dot(size/10);
move(size/12.5,0);
dot(size/12.5);
penRGB(randomNumber(200,255),randomNumber(120,160),randomNumber(0,15)); 
move(-size/2.5,size/3.57);
dot(size/10);
move(size/25,size/10);
dot(size/16.667);
move(-size/10,-size/25);
dot(size/12.5);
penRGB(randomNumber(220,255),randomNumber(110,150),randomNumber(0,30)); 
move(size/2,size/3.125);
dot(size/10);
move(size/25,size/10);
dot(size/7.143);
move(-size/10,-size/25);
dot(size/8.333);
move(-size/3.333,size/3.333);

penColor("white"); //tail
penWidth(size/50);
penDown();
turnTo(100);
for (var i = 0; i < 25; i++) {
    var angle1 = randomNumber(100,180);
    var angle2 = randomNumber(100,180);
    var radius1 = randomNumber(size/3.333,size/2.5);
    var radius2 = (radius1*randomNumber(1,1.5));
    penDown();
    arcRight(angle1, radius1);
    arcLeft(angle2,radius2);
    penUp();
    arcLeft((360-angle2),radius1);
    arcRight((360-angle1), radius2);
  }
}

function allKoi(){
  for (var a = 0; a < randomNumber(2,4); a++) {
  moveTo(randomNumber(20,280),randomNumber(20,420));
  koi2(randomNumber(20,35));}

  for (var b = 0; b < randomNumber(1,3); b++) {
  moveTo(randomNumber(20,280),randomNumber(20,420));
  koi1();}
}
