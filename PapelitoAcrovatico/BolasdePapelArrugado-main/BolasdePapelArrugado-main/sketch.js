
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var PapelitoAcrovatico1
var PapelitoAcrovatico1Img

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
   PapelitoAcrovatico1 = new Circle(100,50,30)
   
   PapelitoAcrovatico1.scale = 0.9
	Engine.run(engine);
}


function draw() {
  imageMode(CENTER);
  image(this.image,0,0,this.r,this.r);
  background(230);
  keyPressed();

  groundObject.display();
  dustbinObj.display();
PapelitoAcrovatico1.display();
}

function keyPressed(){

	if(keyCode === UP_ARROW){
Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145})
}
}
