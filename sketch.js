var runner , path  , pathImg, runnerImg
var leftBoundary, RightBoundary


function preload(){
  //pre-load images
  pathImg = loadImage("path.png")
  runnerImg = loadAnimation("runner-1.png","runner-2.png")

bombImg = loadImage( " bomb.png")
coinImg = loadImage("coin.png")
energyImg = loadImage("energyDrink.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here

path = createSprite(200,200)
path.velocityY = 5
path.scale = 1.2 
path.addImage(pathImg)


runner = createSprite( 180,340,30,30,)
runner.velocityY = 3
runner.addAnimation("boyRun",runnerImg)
runner.scale = 0.07

leftBoundary = createSprite(0,0,100,800)
leftBoundary.visible = false 

RightBoundary = createSprite(410,0,100,800)
RightBoundary.visible= false 


}

function draw() {


  runner.velocityY = 3

path.velocityY = 4

background(50)

//repeating background 

if(path.y>400){

path.y = height/2

}


//creating edges 

edges = createEdgeSprites()
runner.collide(edges)
runner.collide(leftBoundary)
runner.collide(RightBoundary)



runner.x=World.mouseX 



  drawSprites();

}
