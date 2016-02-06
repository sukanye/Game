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
    noStroke();
    ellipse(mouseX,mouseY,50,50);
  }
  
  var ninjas = function() {
    this.ninjaX = random(0,500);
    this.ninjaY= random(0,500); //starting ninja position
    
    fill('black');
    ellipse(ninjaX,ninjaY,50,50);
  
  }
  
  //var collide = function() {
  //  if()
  //}
  
 
//}
