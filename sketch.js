
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var b1,b2,b3,b4,b5;
var r1,r2,r3,r4,r5;
var roof1;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	roof1 = new Roof(width/2,height/4,width/7,20);

	bobDiameter=40;
	 startBobPositionX=width/2;
	  startBobPositionY=height/4+500; 
	  b1=new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	  b2 = new bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	  b3 =new bob(startBobPositionX,startBobPositionY,bobDiameter); 
	  b4=new bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	  b5=new bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);

	  r1=new rope(bobObject1.body,roofObject.body,-bobDiameter*2, 0);
	  r2=new rope(bobObject2.body,roofObject.body,-bobDiameter*1, 0);
	  r3=new rope(bobObject3.body,roofObject.body,0, 0);
	  r4=new rope(bobObject4.body,roofObject.body,bobDiameter*1, 0);
	  r5=new rope(bobObject5.body,roofObject.body,bobDiameter*2, 0);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  roof1.display();
  b1.display();
  b2.display();
  b3.display()
  b4.display();
  b5.display();
  r1.display();
  r2.display();
  r3.display();
  r4.display();
  r5.display();
}
function keyPressed() {
  if (keyCode === UP_ARROW){
   Matter.Body.applyForce(b1.body,b1.body.position,{x:-50,y:-45})
  }
}