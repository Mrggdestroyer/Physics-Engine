const World=Matter.World;
const Bodies=Matter.Bodies;
const Engine=Matter.Engine;
var ground, ball;
var myEngine, myWorld;

function setup() {
  createCanvas(800,400);

  myEngine = Engine.create();
  myWorld = myEngine.world;

  var groundOptions = 
  {
    isStatic: true
  }
  ground = Bodies.rectangle(400,350,800,20, groundOptions);
  World.add(myWorld, ground);


  var ballOptions = 
  {
    restitution: 1.2
  }
  ball = Bodies.circle(400,200,30, ballOptions);
  World.add(myWorld, ball);

}

function draw() {
  background(0);
  
  Engine.update(myEngine);
  
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 800, 20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 30, 30);

  drawSprites();
}