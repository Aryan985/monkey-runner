
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(400,400);  

  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  
  ground=createSprite(400,350,900,10);
  ground.x=ground.width/2;
  console.log(ground.x)
  
  FoodGroup = createGroup();
  ObstacleGroup = createGroup();
}


function draw() {
background(220);
  
 if (keyDown("space")){
   monkey.velocityY=-9
 }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  
  
  monkey.collide(ground);
  
  
  fruit();
  spawnObstacle();

  
  
  
  drawSprites();
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);        
  
  
    if(ObstacleGroup.isTouching(monkey)){
        ground.velocityX = 0;
        monkey.velocityY = 0;
        ObstacleGroup.setVelocityXEach(0);
        FoodGroup.setVelocityXEach(0);
        ObstacleGroup.setLifetimeEach(-1);
        FoodGroup.setLifetimeEach(-1);
    
    
    }
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate()) 
  text("Survival Time: "+ survivalTime, 100,50);


  
}

function fruit(){
 
  if (frameCount % 80===0){
    var banana  = createSprite(600,120,40,10);
    banana.y=Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX=-3;
    
    banana.lifetime=200;
    monkey.depth = banana.depth +1;
    
    FoodGroup.add(banana);
    
    
  }
  
  
  
}

function spawnObstacle(){

 if (frameCount % 300 === 0){
   var obstacle = createSprite(600,330,10,40);
   obstacle.addImage(obstacleImage);
   obstacle.velocityX = -6;
   obstacle.scale=0.1;
    ObstacleGroup.add(obstacle);
 }
  
}


