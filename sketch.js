
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground,bin1,bin2,bin3,world,engine;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);
 
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball= new Ball(100,300,20);
    ground=new Ground(400,590,800,20)
	bin1=new Bin(600,550,20,100)
	bin2=new Bin(720,550,20,100)
	bin3=new Bin(660,580,99,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  ball.display();
  ground.display();
  bin1.display();
  bin2.display();
  bin3.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball.body,ball.body.position,{x:60,y:-60});
  
	}
}

