class Ball {
constructor(x,y,r){


var options = {
density:1.2,
isStatic:false,
friction:0.5,
restitution:0.3
    
}

this.x = x;
this.y = y;
this.r = r;

this.body = Bodies.circle(this.x,this.y,this.r,options);
World.add(world,this.body);


}
display(){


push()
translate(this.body.position.x,this.body.position.y)
rectMode(CENTER)
fill("yellow")
ellipse(0,0,this.r,this.r)
pop()
}













}       
            