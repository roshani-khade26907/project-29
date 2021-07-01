class Stone{
  construtor(x,y,width,height){
    options={
      restitution:0.8
    }
    this.body=Bodies.rect(x,y,width,height,options);
    this.w=width;
    this.h=height;    
    //this.r=radius;
    World.add(world,this.body);   
  }

  show(){
    
    push();
    translate(this.body.position.x,this.body.position.y);
    //rotate (this.body.angle)
    fill ("white");
    //ellipseMode(RADIUS);
    ellipse(0,0,this.w,this.h);
    pop();
  }
    
}