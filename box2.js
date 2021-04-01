class Box2 {
    constructor(x, y, width, height){
      var options={
        friction:0.1,
        restitution:0.8
      }
      this.body2=Bodies.rectangle(x,y,width,height,options)
      this.width=width
      this.height=height
      this.Visiblity = 255;
      World.add(world,this.body2)
    }
    display(){
      if(this.body2.speed < 3){
      var pos =this.body2.position;
      var angle = this.body2.angle;
      push();
     
      rotate(angle)
      rectMode(CENTER)
      rect(this.body2.position.x,this.body2.position.y,this.width,this.height)
      fill(51,240,79);
      pop();
      }
      else{
        World.remove(world, this.body2);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        pop();
      }
    }
  }