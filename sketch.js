const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload(){
  getTime();
}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand2 = new Ground(680,200,180,10);
  
  stone = new Polygon(150, 150, 30, 30);
   
  slingshot = new SlingShot(stone.body, {x:250, y:50});

  block1 = new Box(280, 275, 30, 40);
  block2 = new Box(310, 275, 30, 40);
  block3 = new Box(340, 275, 30, 40);
  block4 = new Box(370, 275, 30, 40);
  block5 = new Box(400, 275, 30, 40);
  block6 = new Box(430, 275, 30, 40);
  block7 = new Box(460, 275, 30, 40);
  block8 = new Box(490, 275, 30, 40);

  block9 = new Box(330, 235, 30, 40);
  block10 = new Box(360, 235, 30, 40);
  block11 = new Box(390, 235, 30, 40);
  block12 = new Box(420, 235, 30, 40);
  block13 = new Box(450, 235, 30, 40);

  block14 = new Box(360, 195, 30, 40);
  block15 = new Box(390, 195, 30, 40);
  block16 = new Box(420, 195, 30, 40);



  block17 = new Box(615, 175, 30, 40);
  block18 = new Box(645, 175, 30, 40);
  block19 = new Box(675, 175, 30, 40);
  block20 = new Box(705, 175, 30, 40);
  block21 = new Box(735, 175, 30, 40);
    
  block22 = new Box(630, 135, 30, 40);
  block23 = new Box(660, 135, 30, 40);
  block24 = new Box(690, 135, 30, 40);
  block25 = new Box(720, 135, 30, 40);
  
  block26 = new Box(645, 95, 30, 40);
  block27 = new Box(675, 95, 30, 40);
  block28 = new Box(705, 95, 30, 40);
}

function draw() {
 if(backgroundImg){
  background(backgroundImg);
  }

  ground.display();
  stand1.display();
  stand2.display();

  stone.display();
  
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();
  block31.display();
  block32.display();

  slingshot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
  Slingshot.fly();
}

async function getTime(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  console.log(responseJSON);
  var dateTime = responseJSON.datetime;
  var hour = dateTime.slice(11, 13);
  console.log(dateTime);
  console.log(hour);
  if(hour>=06 && hour<=19){
     bg = "bg.png"
  }
  else{
     bg = "bg2.jpg"
  }
  backgroundImg=loadImage(bg);
}