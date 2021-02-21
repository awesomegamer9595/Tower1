class polygon{
    constructor(x, y,r ) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
            
        }
        this.x=x
        this.y=y
        this.r=r
         this.image=loadImage("polygon.png")
        this.body = Bodies.circle(this.x,this.y,this.r,options);
        
         
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r*2, this.r*2);
        pop();
      }
}