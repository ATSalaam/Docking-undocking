var backgroundImg
var iss, spacecraft;
var hasDocked = false;

var issImg, spacefraftImg;
var spacecraftImgL, spacecraftImgR, spacecraftImgF;

function preload(){
  backgroundImg = loadImage("images/images/spacebg.jpg");
  issImg = loadImage("images/images/iss.png");
  spacecraftImg = loadImage("images/images/spacecraft1.png");
  spacecraftImgL = loadImage("images/images/spacecraft4.png");
  spacecraftImgR = loadImage("images/images/spacecraft3.png");
  spacecraftImgF = loadImage("images/images/spacecraft2.png");
}

function setup() {
  createCanvas(800,400);
  iss = createSprite(400, 200, 50, 50);
  iss.addImage(issImg);
  iss.scale = (1.1);

  spacecraft = createSprite(random(350,450),random(300,370), 20, 20);
  spacecraft.addImage(spacecraftImg);
  spacecraft.scale = 0.12;

}

function draw() {
  background(backgroundImg);

  if(!hasDocked){
    if(keyIsDown(LEFT_ARROW)){
      spacecraft.addImage(spacecraftImgL);
      spacecraft.velocityX = -1;
    }
    if(keyIsDown(RIGHT_ARROW)){
      spacecraft.addImage(spacecraftImgR);
      spacecraft.velocityX = 1;
    }
    if(keyIsDown(DOWN_ARROW)){
      spacecraft.addImage(spacecraftImgF);
      spacecraft.velocityY = 0;
      spacecraft.velocityX = 0;
    }
    if(keyIsDown(UP_ARROW)){
      spacecraft.addImage(spacecraftImg);
      spacecraft.velocityY = -1;
    }
    if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
      hasDocked = true;
      spacecraft.velocityY = 0;
      spacecraft.velocityX = 0;
    }
  }
  if(hasDocked === true){
    spacecraft.addImage(spacecraftImg);
    fill("white");
    text("Docking Succesful", 370, 300);
  }

  drawSprites();
}