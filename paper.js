class Paper{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:0.7
        }
        this.body=Bodies.circle(x,y,30,options);
        this.image=loadImage("sprites1/paper.png");
        this.radius=30;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        //rotate(this.body.angle);
        fill(255);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,70,70);
        pop();
    }
}