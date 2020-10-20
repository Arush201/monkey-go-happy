
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0
var ground 
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,200)
  monkey = createSprite(50,150,40,40)
  monkey.addAnimation("running",monkey_running)  
  monkey.scale = 0.1

  ground = createSprite(10,180,1200,10)
 
}



function draw() {
  background("white")
  
  ground.velocityX = -5

  if(keyDown("space")){
    monkey.velocityY = -12
  }
  
  monkey.velocityY = monkey.velocityY +0.5
  
  monkey.collide(ground);

  if (ground.x < 0){
    ground.x = ground.width/2;
    }
  
  stroke("white")
  textSize(20)
  fill("black")
  text("Score:"+score,450,50)
  score = Math.ceil(frameCount/frameRate())
  
  Spawnobstacles()
  Spawnfruit()
  
  drawSprites();
}

function Spawnfruit(){
  if(frameCount%50===0){
    banana = createSprite(600,150,10,10)
    banana.addImage(bananaImage)
    banana.scale = 0.1
    banana.velocityX = -7
    banana.y = Math.round(random(90,40))
  }
}

function Spawnobstacles(){
  if(frameCount%140===0){
  obstacle = createSprite(600,150,40,40)
  obstacle.addImage("stones",obstacleImage)
  obstacle.scale = 0.16
  obstacle.velocityX = -6
  obstacle.collide(monkey)
  
  }
  
}









