
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand1,stand2,stand3,stand4,sling1;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
var polygon1;
function preload(){


}
function setup(){
    var canvas = createCanvas(1400,600);
    engine = Engine.create();   
    world = engine.world;
    
//first level
stand1 = new ground(680,360,280,20);
box1= new block(600,340,50,40) 
box2= new block(650,340,50,40) 
box3= new block(700,340,50,40) 
box4= new block(750,340,50,40) 
box5= new block(620,300,50,40) 
box6= new block(670,300,50,40) 
box7= new block(720,300,50,40) 
box8= new block(650,250,50,40) 
box9= new block(700,250,50,40) 
box10= new block(670,200,50,40)
//second level
stand2= new ground(1100,200,200,20)
box11= new block(1050,160,50,40) 
box12= new block(1100,160,50,40) 
box13= new block(1150,160,50,40)
box14= new block(1070,100,50,40) 
box15= new block(1120,100,50,40) 
box16= new block(1095,60,50,40)
//additional goal one
polygon1=new polygon(200,200,30)
//sling1=new rope(polygon1,{x:240,y:260})
stand4= new ground(200,300,180,10)
}

function draw(){
background("black")
    Engine.update(engine);
  textFont("Georgia")
  textSize(20)
  text("Drag The hexagonal Shape at the blocks and Release",800,400)
  stand1.display();
    box1.display();
     box2.display();
     box3.display();
     box4.display();
     box5.display();
     box6.display();
     box7.display();
     box8.display();
     box9.display();
     box10.display();
     box11.display();
     box12.display();
     box13.display();
     box14.display();
     box15.display();
     box16.display();
     polygon1.display();
       //sling1.display();  
     stand2.display();
     stand4.display();
      drawSprites();
    }
  