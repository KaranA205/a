
var trex ,trex_running;
function preload(){
 trex_running=loadAnimation("trex1.png","trex3.png","trex4.png") 
ground_image=loadImage("ground2.png")
}

function setup(){
  
  createCanvas(600,200)
  
  //create a trex sprite
 trex= createSprite(50,160,20,50)
trex.addAnimation("running",trex_running)
trex.scale=0.5;
// create a ground 
 ground = createSprite(200,180,400,20);
 ground.addImage(ground_image)
 ground.velocityX=-10;
 // create invisible_ground
 invisible_ground=createSprite(200,190,400,20);
 invisible_ground.visible=false;
}


function draw(){
  // set background to yellow
  background("yellow");
  // if space pressed, trex will jump
  if(keyDown("space")&&trex.y>100){
   trex.velocityY= -10; 
  }
  // ground's x is divided by its width
if (ground.x<0){
ground.x=ground.width/2;
}
trex.velocityY=trex.velocityY+0.5;
trex.collide(invisible_ground)
drawSprites();

}
