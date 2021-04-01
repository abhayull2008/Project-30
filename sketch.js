const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var a;
var circles=[];
function preload(){
  polygon_img=loadImage("polygon.png")
}
function setup() {
  createCanvas(1200,700);
  stroke(255)
  engine = Engine.create();
  world = engine.world;
 
  a = height;
  circles.push(width/2)
  stand1 = new Ground(510,465,240,15)
  stand2 = new Ground(940,280,180,15)
  box1 = new Box(420,437,30,40)
  box2 = new Box(450,437,30,40)
  box3 = new Box(480,437,30,40)
  box4 = new Box(510,437,30,40)
  box5 = new Box(540,437,30,40)
  box6 = new Box(570,437,30,40)
  box7 = new Box(600,437,30,40)
  box8 = new Box2(450,397,30,40)
  box9 = new Box2(480,397,30,40)
  box10 = new Box2(510,397,30,40)
  box11 = new Box2(540,397,30,40)
  box12 = new Box2(570,397,30,40)
  box13 = new Box3(480,357,30,40)
  box14 = new Box3(510,357,30,40)
  box15 = new Box3(540,357,30,40)
  box16 = new Box4(510,320,30,40)
  box17 = new Box(880,252,30,40)
  box18 = new Box(910,252,30,40)
  box19 = new Box(940,252,30,40)
  box20 = new Box(970,252,30,40)
  box21 = new Box(1000,252,30,40)
  box22 = new Box2(910,212,30,40)
  box23 = new Box2(940,212,30,40)
  box24 = new Box2(970,212,30,40)
  box25 = new Box4(940,172,30,40)
  polygon=Bodies.circle(100,350,20);
  World.add(world,polygon);
  sling=new SlingShot(polygon,{x:100,y:350});
 
  Engine.run(engine)
}

function draw() {
  
  background(25,25,25);  
  
  
  a=a-1;
  
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
 
 Engine.update(engine)
 stand1.display()
 stand2.display()
 box1.display()
 box2.display()
 box3.display()
 box4.display()
 box5.display()
 box6.display()
 box7.display()
 box8.display()
 box9.display()
 box10.display()
 box11.display()
 box12.display()
 box13.display()
 box14.display()
 box15.display()
 box16.display()
 box17.display()
 box18.display()
 box19.display()
 box20.display()
 box21.display()
 box22.display()
 box23.display()
 box24.display()
 box25.display()
 sling.display()
 imageMode(CENTER)
 image(polygon_img,polygon.position.x,polygon.position.y,40,40);

 
 drawSprites();
}

function keyPressed(){
  if(keyCode === 32){
    sling.attach(this.polygon);
  }
} 

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  sling.fly();
}