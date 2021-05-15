//step 1
//namespacin OR nick name OR alias
//const Vyaan = Vyaan Chugh
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//step 2 - declaring the variables
var engine, world;

var box, ground, ball;


function setup() {
  createCanvas(1200,400);

  //step 3- create your own Engine
  engine = Engine.create();

  //step 4 - create your own World
  world = engine.world;

  //step 5 - create your Bodies
  box1 = new Box(700,320,70,70)
  box2 = new Box(920,320,70,70)
  pig1 = new Pig(810,350)
  log1 = new Log(810,260,300,PI/2)

  box3 = new Box(700,240,70,70)
  box4 = new Box(920,240,70,70)
  pig2 = new Pig(810,220)
  log2 = new Log(810,180,300,PI/2)

  box5 = new Box(810,160,70,70)
  log3 = new Log(760,120,150,PI/7)
  log4 = new Log(870,120,150,-PI/7)

  bird = new Bird(100,100)
  //changing proprties of the bodies
 
  ground = new Ground(600,height,1200,20)


  

  
}

function draw() {
  background("black");
  
  //step 7 - start the engine
  Engine.update(engine)

//  rect(x,y,w,h)
  box1.display()
  box2.display()
  pig1.display()
  log1.display()
  ground.display()

  box3.display()
  box4.display()
  pig2.display()
  log2.display()
 
  box5.display()
  log3.display()
  log4.display()
  
  bird.display()
}