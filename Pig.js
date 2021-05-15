class Pig{
    //all the properties are included inside the constructor(). 
    //construcor is a function that gets called when an object is made
    //the object is referred to as "this"
    constructor(x,y){ 

        var options = {
            restitution: 0.8,
            friction:0.3,
            density:1.0
        }

        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height = 50;
        World.add(world,this.body)
    }

    //functions
    display(){
        //nick name
        var pos = this.body.position;
        var angle = this.body.angle;

        angleMode(RADIANS);
        push();
        //move the 0,0 axis to the body's center using translate
        translate(pos.x,pos.y)
        rotate(angle)
        
        fill("green")
        rectMode(CENTER); 
        rect(0,0,this.width,this.height);
        pop()
    }
}