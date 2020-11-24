var play = 1;
var end = -1;
var gameState = 1;

var knife, sword;
var fruit, fruits;
var enemy , monster;
var score=0;

function preload() {
  knife = loadImage("sword.png")
  bg = loadImage("bg.jpg")
  fruit1 = loadImage("fruit1.png")
  fruit2 = loadImage("fruit2.png")
  fruit3 = loadImage("fruit3.png")
  fruit4 = loadImage("fruit4.png")
  monsterImage1=loadAnimation("alien1.png","alien2.png")
  gmov=loadImage("gameover.png")
  //monsterImage2=loadAnimation("alien2.png")
    

}

function setup() {
  createCanvas(500, 500)

  sword = createSprite(350, 350, 1, 1)
  sword.addImage("sword", knife)
  sword.scale = 0.7
  //
  fruitsgroup=new Group()
  enemygroup=new Group()
}

function draw() {
 fruits()
  enemy()
  background(bg)
  
  sword.y = World.mouseY
  sword.x = World.mouseX
  if(fruitsgroup.isTouching(sword)){
fruitsgroup.destroyEach()
  score=score+2
  }
  if(gameState===play){
    
    
  }else if(gameState===end){
    if (sword.isTouching(monster)){
sword.addImage(gmov)
sword.x=200;
sword.y=200;
    }
 
  }
drawSprites()
}

function fruits() {
  if (World.frameCount % 80 === 0) {
    fruit = createSprite(400, 200, 20, 20);
    fruit.scale = 0.2
    //fruit.debug=true;
    r = Math.round(random(1, 4))
    if (r == 1) {
      fruit.addImage(fruit1)
    } else if (r == 2) {
      fruit.addImage(fruit2)
    } else if (r == 3) {
      fruit.addImage(fruit3)
    } else {
      fruit.addImage(fruit4)
    }
    fruit.y = Math.round(random(50, 340))
fruit.velocityX=-7
    fruit.setLifetime=100
    
    fruitsgroup.add(fruit)
  }
}

function enemy(){
  if(World.frameCount%200===0){
  
  monster= createSprite(400,200,20,20)
  monster.addAnimation("monster",monsterImage1)
  monster.y=Math.round(random(100,300))
  monster.velocityX=-8
  monster.setLifetime=50
  
  enemygroup.add(monster)
}}