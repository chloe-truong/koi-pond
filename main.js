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

