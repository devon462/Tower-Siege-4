
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon
var slingshot
var stand1,stand2
var block1,block2,block3,block4,block5,block6,block7,block8,block9

function preload () 
{
    polygon_img = loadImage("sprites/polygon.png");

}

function setup(){
    var canvas = createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600, height, 1200, 20);
    ground2 = new Ground(400, 300, 250, 10)
    ground3 = new Ground(900, 230, 300, 10)

    // ****** CODE TO CREATE A POLYGON BODY WITHOUT A CLASS ******
    polygon = Bodies.circle(50, 200, 20);
    World.add(world, polygon);
    slingshot = new SlingShot(this.polygon, { x: 100, y: 200 });
    //first level
    block1 = new Block(300, 275, 30, 40)
    block2 = new Block(330, 275, 30, 40)
    block3 = new Block(360, 275, 30, 40)
    block4 = new Block(390, 275, 30, 40)
    block5 = new Block(420, 275, 30, 40)
    block6 = new Block(450, 275, 30, 40)
    block7 = new Block(480, 235, 30, 40)
    block8 = new Block(510,235,30,40)
}

function draw() {
    background("brown")
    Engine.update(engine);
    //strokeWeight(4)
    ground.display();
    ground2.display();
    ground3.display();
    slingshot.display();
    strokeWeight(2);
    stroke(15);
    fill("skyblue");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display(); 
    imageMode(CENTER);
    image(polygon_img, polygon.position.x, polygon.position.y, 40, 40);
}





function mouseDragged(){
    if(gameState === "onSling") //if(gameState !== "launch")
    {
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launch"
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(polygon.body);
    }
}