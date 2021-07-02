const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas; 
var computerbase; 
var playerbase;
var player1;
var computerplayer;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object

computerbase= new Base1(300,500,180,150);
playerbase= new Base2(1100,500,180,150);
player1=new boy(1100,350,50,180);
computerplayer=new boy(300,350,50,180);

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
computerbase.display();
playerbase.display();


   //display Player and computerplayer
   player1.display();
   computerplayer.display();

}
