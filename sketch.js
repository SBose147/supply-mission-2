var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,sprite;
var sprite1,sprite2,sprite3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	sprite1 = createSprite(400,600,200,20);
	sprite1.shapeColor ="red";
	sprite2 = createSprite(500,560,10,100);
	sprite2.shapeColor ="red";
	sprite3 = createSprite(300,560,10,100);
	sprite3.shapeColor ="red";
	
	packageSprite=createSprite(width/2, 270, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, 622, width,10);
	groundSprite.visible = true;
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 packageBody = Bodies.circle(400,200 , 5 , {restitution:0, isStatic:false});
	World.add(world, packageBody);
	sprite = Bodies.rectangle(400,585,200,20,{isStatic:true});
    World.add(world,sprite);
    

	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyDown(DOWN_ARROW)) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
    packageSprite.x= packageBody.position.x 
    packageSprite.y= packageBody.position.y 
	   
  }
}



