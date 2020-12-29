
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground,invisibleGround;
var survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
  
  monkey = createSprite(100,300,20,20);
 monkey.addAnimation("running",monkey_running);
  monkey.scale=0.12;

  ground= createSprite(300,335,900,10);
 ground.x=ground.width/2;
  ground.velocityX=-3;

  invisibleGround = createSprite(300,335,900,10);
  invisibleGround.visible = false;
  
   bananaGroup = createGroup();
  obstacleGroup = createGroup();
  
  
}


function draw() {
  background(250)
  text (mouseX+","+mouseY,mouseX,mouseY);
  
  if (ground.x < 300){
      ground.x = ground.width/2;
    }
  
 monkey.collide(invisibleGround);
  
  
 
  
 
  
  if (keyDown("space")){
    monkey.velocityY=-10 ;
     
  }
  
  if (monkey.y<160){
    monkey.velocityY=monkey.velocityY+1;
  }
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score: "+ score,500,50);
  
  stroke("black")
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival Time: "+ survivalTime,100,50);
  
  if (obstacleGroup.isTouching(monkey)){
    ground.velocityX = 0;
    ground.velocityY=0;
    
    
  }
  
  
   spawnObstacles();
  spawnFood();
  drawSprites(); 
 
  
}


function spawnObstacles(){
  
  if (frameCount % 300 ===0){
  var obstacle = createSprite(Math.round(random(300,500)),330,20,20);
  obstacle.addImage(obstacleImage)
  obstacle.scale=0.12;
    obstacle.lifetime = 80;
    obstacle.collide(invisibleGround);
    obstacle.velocityX=-5;
    obstacleGroup.add(obstacle);
  }
  
}

function spawnFood()
{
  if (frameCount % 80 === 0){
    var food = createSprite(403,Math.round(random(120,200)),20,20);
    
    food.addImage(bananaImage);
   food.scale=0.12;
    food.velocityX=-6;
    food.lifetime=200;
    
    
    
  }
  
  
  
}



