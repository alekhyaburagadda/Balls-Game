var r = 100;
var g = 50;
var b=200;
var square;


function setup(){

  createCanvas(1200,400)

  square=createSprite(800,800,30,30);
  square.shapeColor="yellow";
}


function draw(){
  background(g);
  square.x=World.mouseX;
  square.y=World.mouseY;

  if(square.x<200){
    background(r);
  }

  if(square.x>800){
    background(b);
  }
  
drawSprites();

}