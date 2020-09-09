var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3;

function setup() {
  createCanvas(1200,800);
  // fixedRect = createSprite(600, 400, 50, 80);
  // fixedRect.shapeColor = "green";
  //fixedRect.debug = true;
  movingRect = createSprite(400,400,80,30);
  movingRect.shapeColor = "green";
 // movingRect.debug = true;

//  gameObject1 = createSprite(800,400,50,80);
//  gameObject1.shapeColor = "green";

 gameObject2 = createSprite(1000,400,50,80);
 gameObject2.shapeColor = "green";

//  gameObject3 = createSprite(400,400,50,80);
//  gameObject3.shapeColor = "green";

 movingRect.velocityX = 5;
 gameObject2.velocityX = -5;
 

}

function draw() {
  background(0,0,0);  
  // movingRect.x = World.mouseX;
  // movingRect.y = World.mouseY;

if(isTouching(movingRect,gameObject2)){

  //returns true
  gameObject2.shapeColor = "red";
  movingRect.shapeColor = "red";

}else{
  //returns false
  gameObject2.shapeColor = "green";
  movingRect.shapeColor = "green";

}


bounceOff(movingRect, gameObject2);

  
  drawSprites();
}


