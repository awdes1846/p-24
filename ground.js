class Ground{
constructor(x,y,w,h){
 
var options ={
    isStatic:true,
    //friction: 10
}

this.x=x;
this.y=y;
this.w=w;
this.h=h;

this.base=Bodies.rectangle(x,y,w,h,options)
World.add(world,this.base)

}

display(){

   push()
   translate(this.base.position.x,this.base.position.y) 
   rectMode(CENTER)
   fill("White") 
   rect(0,0,this.w,this.h);
   pop()
}














    
}