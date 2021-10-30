
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var roof,bob1,bob2,bob3,bob4,bob5
function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(150,150,400,20);
	bob1 = new Bob(200,400);
	rope1 = new Rope(roof.body,bob1.body,0,0);
	
	bob2 = new Bob(240,400);
	rope2 = new Rope(bob2.body,roof.body,40,0);

	bob3 = new Bob(280,400);
	rope3 = new Rope(bob3.body,roof.body,80,0);

	bob4 = new Bob(320,400);
	rope4 = new Rope(bob4.body,roof.body,120,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  

  roof.display()
  bob1.display()
  rope1.display()
  bob2.display()
  rope2.display()
  bob3.display()
  rope3.display()
  bob4.display()
  rope4.display()



  drawSprites();
 
}

function keyPressed(){

	if(keyCode===UP_ARROW){

		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-200,y:-100})

	}
}



