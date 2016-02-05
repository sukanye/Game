function setup() {
  createCanvas(500,500);
}

function draw() {
  background(50);
  main();
  ninjas();
}

//function Dots() { 
  
  var main = function() { 
    fill('yellow');
    ellipse(mouseX,mouseY,50,50);
  }
  
  var ninjas = function(x,ninjaY) {
    var x = random(0,500);
    var ninjaY= 0; //starting ninja position
    var fr = 30; //frame rate for ninja 
    fill('black');
    ellipse(x,ninjaY,50,50);
    
    ninjaY = ninjaY + 1; //ninja falls
    
    if(ninjaY >= height) {
      fr = 30;
      frameRate(fr); 
    }
    else {
      ninjaY = 0;
    }
    
  }
  
 
//}
