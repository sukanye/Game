function setup() {
  createCanvas(500,500);
}

function draw() {
  background('blue');
}

function Follow(x,y) {
  var dotX = x;
  var dotY = y;
  
  this.renderDot() = function(){ //what the dot looks like
    fill('yellow');
    ellipse(dotX,dotY,50,50);
  }
  
  this.followMouse() = function(){
    
  }
}