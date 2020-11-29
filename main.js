echo "# koi-pond" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/chloe-truong/koi-pond.git
git push -u origin main
                
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
