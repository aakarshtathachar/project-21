var wall, thickness;
var bullet, speed, weight;




function setup() {
  createCanvas(1600,400);

  speed=random(223,321)
  weight=random(30,52)
  thickness = random(22,83);

bullet = createSprite(50, 200, 50, 50);
bullet.shapeColor = "white"
wall=createSprite(1200,200,thickness, height/2);
wall.shapeColor = "grey"
bullet.velocityX = speed;

}

function draw() {
  background(0,0,0);  



  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0
    var deformation=0.5 * weight * speed * speed/thickness * thickness * thickness;
    if(deformation < 10){
      wall.shapeColor = color("green");
    }

    if(deformation = 10){
      wall.shapeColor=color("green");
    }

    if(deformation > 10){
      wall.shapeColor = color("red");
    }
  }
  drawSprites();
}

function hasCollided(bullet, wall){
  bulletRightEdge=bullet.x +bullet.width
  wallLedtEdge=wall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true;
  }
return false;

}