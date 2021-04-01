class Box3 {
    constructor(x, y, width, height){
      var options={
        friction:0.1,
        restitution:0.8
      }
      this.body3=Bodies.rectangle(x,y,width,height,options)
      this.width=width
      this.height=height
      this.Visiblity = 255;
      
      World.add(world,this.body3)
    }
    display(){
    
      if(this.body3.speed < 3){
      var pos =this.body3.position;
      var angle = this.body3.angle;
      push();
     
      rotate(angle)
      rectMode(CENTER)
      rect(this.body3.position.x,this.body3.position.y,this.width,this.height)
      fill(51,240,79);
      pop();
      }
      else{
        World.remove(world, this.body3);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        pop();
      }
    }
  }