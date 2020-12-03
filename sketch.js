
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var ground;
var box1,box2,box3;

function preload() {

}

function setup() {
  createCanvas(1250, 550);

  engine = Engine.create();
  world = engine.world;

  paper = new Paper(50, 500, 30);
  ground = new Ground(625,520,1250,20);
  box1 = new Box(900,500,300,20)
  box2 = new Box(760,370,20,250)
  box3 = new Box(1040,370,20,250)
  Engine.run(engine);

}


function draw() {
  background(0);


  Engine.update(engine);
 

  paper.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();



  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:1,y:-3});
   
  }
  if(keyCode === DOWN_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:1,y:3});
   
  }
  
}





