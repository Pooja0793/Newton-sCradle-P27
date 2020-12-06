class Bob{
    constructor(x,y){
        var options={
            isStatic:false,
            density:0.8,
            friction:0.3,
            restitution:1
        }
        this.body=Bodies.circle(x,y,25,options);
        
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;

        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        fill("lightskyblue");
        ellipse(0,0,25,25);
        pop();
    }
}