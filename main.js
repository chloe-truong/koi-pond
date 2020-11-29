echo "# koi-pond" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/chloe-truong/koi-pond.git
git push -u origin main
                
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
