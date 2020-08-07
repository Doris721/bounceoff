var mrect,frect,sprite1,sprite2,sprite3;



function setup() {
  createCanvas(800,400);
  mrect=createSprite(400, 200, 50, 50);
  frect=createSprite(200,200,50,50);
  mrect.shapeColor="green";
  frect.shapeColor="blue";
  sprite1=createSprite(100,200,50,20);
  sprite2=createSprite(300,200,50,20);
  sprite3=createSprite(700,200,50,20);
  sprite1.shapeColor="red";
  sprite2.shapeColor="red";
  sprite3.shapeColor="red";
  sprite1.velocityX=2;
  sprite3.velocityX=-2;
}

function draw() {
  background(255,255,255);  
mrect.x=mouseX;
mrect.y=mouseY;

if(istouching(sprite2,mrect)){
  //sprite2.shapeColor="blue";
  sprite2.destroy();
}
else{
  sprite2.shapeColor="red";
}

bounceoff(sprite3,sprite1);
  drawSprites();
}
