class Bob{
    constructor(x,y){
       var options = {
            isStatic:false,
            resitution:3,
            friction:0,
            density:7,

        }
        
        this.body = Bodies.circle(x,y,25,options);
        World.add(world,this.body);

        console.log(this.body);
    }

    display(){
        push()
        ellipseMode(RADIUS);

        fill("yellow");

        ellipse(this.body.position.x, this.body.position.y,25,25);
        pop()
    }
}