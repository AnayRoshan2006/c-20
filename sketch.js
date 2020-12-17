var a,harry;

function setup() {
  createCanvas(800,400);
 a = createSprite(400, 200, 50, 50);
 harry = createSprite(200, 200, 60, 60);
 a.shapeColor="green";
 harry.shapeColor="green";
}

function draw() {
  background(255,255,255);
 a.x=mouseX;
 a.y=mouseY
 if(a.x-harry.x<a.width/2+harry.width/2&&
  harry.x-a.x<a.width/2+harry.width/2&&
  a.y-harry.y<a.height/2+harry.height/2&&
  harry.y-a.y<a.height/2+harry.height/2)
 {
  a.shapeColor="red"
  harry.shapeColor="red"
}
else{
  a.shapeColor="green";
  harry.shapeColor="green";
}
  drawSprites();
 
}