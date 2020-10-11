var boxside1, boxside2, boxbottom
var ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function preload(){
	
}

function setup() {
	createCanvas(800, 800);
	ground = new Ground(600,height,width,20)
	paperObject = new paper(200,790,20,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine)
  background(0);
  ground.display();
  paperObject.display();
  drawSprites();
 keypress();
}

function keypress(){
    if (keyCode == UP_ARROW) {
        Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});

	}


}

