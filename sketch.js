
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball, chain;
var ground, box1, box2,box3,boxes=[];



function setup() {
  createCanvas(1200,800);
engine=Engine.create();
world=engine.world;
ball=new Ball(500,350,100);
ground=new Ground(600,790,1200,20);
chain=new SlingShot(ball.body,{x:500,y:100});
for(var i=0;i<7 ; i++){

  box1=new Box(900,100,70,70);
  box2=new Box(800,100,70,70);
  box3=new Box(700,100,70,70);
boxes.push(box1);
boxes.push(box2);
boxes.push(box3);
}

}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
ball.display();
chain.display();
ground.display();
for( var i=0;i<boxes.length;i++){
  boxes[i].display();
}
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}