
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var stone1;
var boy;
var mango1;
function preload()
{
 
}

function setup() {
	createCanvas(800, 700);
 

	engine = Engine.create();
	world = engine.world;
  
  //Create the Bodies Here.
  stone=new Stone(200,350,10,10);
  boy=new Boy(150,350,10,10);
  mango1=new mango
  mango2=new mango
  mango3=new mango
  mango4=new mango
  Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  stone.display();
  boy.display();
  drawSprites();
 
}



