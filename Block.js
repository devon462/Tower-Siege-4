class Block extends BaseClass {
  constructor(x,y,width,height) 
  {
    super(x,y,width,height);
  }

  // ****** WROTE NEW DISPLAY FUNCTION TO CHANGE THE IMAGE FUNCTION TO RECT FUNCTION ON LINE 16
  // SINCE OUR CODE DOES NOT HAVE IMAGES FOR THE BLOCKS ******
  
  display(){
    var angle = this.body.angle;
    var pos= this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0,0,this.width, this.height);
    pop();
  }  

}