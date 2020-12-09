const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block21,block22,block23,block24,block25,block26,block27;
//level three
var block31,block32,block33,block34,block35,block36,block37
//level four
var block41,block42,block43,block44,block45,block46
//level five
var block51,block52,block53,block54,block55
//level six
var block61,block62,block63,block64
//level seven
var block71,block72,block73
//level eight
var block81,block82
//level nine
var block91
var ground1
var constraint 
var polygon1
var gameState = "onSling"

var score = 0
function setup() {
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground1 = new Ground(600,370,1300,10)
    //second level
    block21 = new Block(610,350,20,20)
    block22 = new Block(630,350,20,20)
    block23 = new Block(650,350,20,20)
    block24 = new Block(670,350,20,20)
    block25 = new Block(690,350,20,20)
    block26 = new Block(710,350,20,20)
    block27 = new Block(730,350,20,20)
    block28 = new Block(750,350,20,20)
    //third level
    block31 = new Block(620,330,20,20);
    block32 = new Block(640,330,20,20)
    block33 = new Block(660,330,20,20)
    block34 = new Block(680,330,20,20)
    block35 = new Block(700,330,20,20)
    block36 = new Block(720,330,20,20)
    block37 = new Block(740,330,20,20)
    //fourth level
    block41 = new Block(630,310,20,20)
    block42 = new Block(650,310,20,20)
    block43 = new Block(670,310,20,20)
    block44 = new Block(690,310,20,20)
    block45 = new Block(710,310,20,20)
    block46 = new Block(730,310,20,20)
    //fifth level
    block51 = new Block(640,290,20,20)
    block52 = new Block(660,290,20,20)
    block53 = new Block(680,290,20,20)
    block54 = new Block(700,290,20,20)
    block55 = new Block(720,290,20,20)
    //sixth level
    block61 = new Block(650,270,20,20)
    block62 = new Block(670,270,20,20)
    block63 = new Block(690,270,20,20)
    block64 = new Block(710,270,20,20)
    //seventh level
    block71 = new Block(660,250,20,20)
    block72 = new Block(680,250,20,20)
    block73 = new Block(700,250,20,20)
    //eighth level
    block81 = new Block(670,230,20,20)
    block82 = new Block(690,230,20,20)
    //ninth leve
    block91 = new Block(680,210,20,20)

    
    polygon1 = new Polygon(200,300,80,80)
    rope = new Rope(polygon1.body,{x:200,y:100})
  
  }

function draw() {
    background("pink")
    Engine.update(engine);
ground1.display()

  //second level
  block21.display()
  block22.display()
  block23.display()
  block24.display()
  block25.display()
  block26.display()
  block27.display()
  block28.display()

  //third level
  block31.display()
  block32.display()
  block33.display()
  block34.display()
  block35.display()
  block36.display()
  block37.display()
  //fourth level
  block41.display();
  block42.display();
  block43.display();
  block44.display();
  block45.display();
  block46.display();
  //fifth level
  block51.display();
  block52.display()
  block53.display()
  block54.display()
  block55.display()
  //sixth level
  block61.display()
  block62.display()
  block63.display()
  block64.display()
  //seventh level
  block71.display()
  block72.display()
  block73.display()
  //eighth level
  block81.display()
  block82.display()
  //ninth floor
  block91.display()
  //polygon and slingshot
  polygon1.display()
  rope.display()
text("score:"+score,1100,100)  
}

function mouseDragged(){
  
  Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
  
}

function mouseReleased(){
  rope.fly();
  gameState = "launched"
}

function keyPressed(){
if(keyCode === 32){
  rope.attach(polygon1.body)
}

}