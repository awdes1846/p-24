class Bin {
    constructor(x,y,w,h){
     this.x=x;   
     this.y=y;
     this.w=w;
     this.h=h;

     var options={
         
        density:20,
        isStatic: false,
        friction:9,
        restitution:0
    
    
    }
     this.stick= Bodies.rectangle(x,y,w,h,options)
     World.add(world,this.stick)
    }
    display(){
    push()
    translate(this.stick.position.x,this.stick.position.y) 
    fill("red")
    rectMode(CENTER)
    rect(0,0,this.w,this.h)
    pop()
    }
}