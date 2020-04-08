var fixedRect,movingRect;




function setup() {
  createCanvas(1200,1200);
  fixedRect=createSprite(0, 0, 50, 100);
  movingRect=createSprite(1200,1200,100,50);
  fixedRect.velocityX= 6;
  movingRect.velocityX= - 6;
  fixedRect.velocityY= 6;
  movingRect.velocityY= - 6;
}

function draw() {
  background("black");  







  bounceOff(fixedRect,movingRect);
  

  drawSprites();
}






