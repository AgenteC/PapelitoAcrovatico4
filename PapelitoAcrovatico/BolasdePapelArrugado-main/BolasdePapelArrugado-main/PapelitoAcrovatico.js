class Circle {
constructor(x,y,r){
var options = {
isStatic:false,
restitution:0.3,
friction:0.1,
density:1.2

}
//Bodies.circle(this.x,this.y,(this.r-20)/2,options)
this.x = x
this.y = y
this.r = r
this.body = Bodies.circle(this.x,this.y,(this.r-20)/2,options)
this.image = loadImege("paper.png")
World.add(world,this.body)
}
display(){
var rubberpos=this.body.position
push()
//translate(rubberpos.x,rubberpos.y)
rectMode(CENTER)
strokeWeight(2)
stroke("black")
fill("blue")
ellipse(0,0,this.r,this.r);
pop()
}
}

