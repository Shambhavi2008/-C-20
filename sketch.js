var m, f ;

function setup() {
  createCanvas(800,400);
   m=createSprite(400, 200, 50, 50);
   f=createSprite(400, 200, 50, 50);
   m.shapeColor="blue";
   f.shapeColor="blue";
}

function draw() {
  background(0); 
  m.x=mouseX 
  m.y=mouseY 
  if(m.x-f.x<m.width/2+f.width/2&&f.x-m.x<m.width/2+f.width/2&&m.y-f.y<m.height/2+f.height/2&&f.y-m.y<m.height/2+f.height/2){
   m.shapeColor="red"
    f.shapeColor="red";
  }
  else{
    m.shapeColor="blue"
    f.shapeColor="blue"
  }
  drawSprites();
}