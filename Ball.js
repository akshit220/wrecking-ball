class Ball{
    constructor(x, y, width, height, angle) {
        var options = {
            
            'frictionAir':0.005,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, width, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        fill("violet");
        stroke("red");
        strokeWeight(4);
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS)
        ellipse(0, 0, this.width, this.height);
        
        pop();
      }
}