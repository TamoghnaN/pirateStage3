class Boat{
    
  constructor(x, y, width, height,boatPos) {
    var options = {
      restitution:0.8,
      friction:1.0,
      density:1.0
    };
    this.ballImage = loadImage("assets/boat.png");
    this.width = width;
    this.height = height;
    this.boatPosition = boatPos;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.ballImage, 0, this.boatPosition, this.width, this.height);
    noTint();
    pop();
  }
      remove(index){
        Matter.World.remove(world,boats[index].body)
        boats.splice(index,1)
      }
}