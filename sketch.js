
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3,paper,ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground=new Ground(400,690,800,20);
	paper= new Paper(200,400);
	box1= new Dustbin(660,580,200,220);
	box2= Bodies.rectangle(570,570,20,240,{isStatic:true});
	World.add(world,box2);
	box3= Bodies.rectangle(750,570,20,210,{isStatic:true});
	World.add(world,box3);

}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
  ground.display();
  rect(box2.position.x,box2.position.y,20,210);
  rect(box3.position.x,box3.position.y,20,210);
  box1.display();
  paper.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:80,y:-90});
	}
}

