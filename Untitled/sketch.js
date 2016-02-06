var ninjasArray = [];
  
  var main = function() { 
    var mainMovement = function() {
      if(mouseY <= 500 && mouseY >= 250){
        ellipse(mouseX,mouseY,50,50);
      }
      else if(mouseY = 250) {
        ellipse(mouseX,250,50,50);
        fill('yellow');
        noStroke();
      }
    
    }
    fill('yellow');
    noStroke();
    
    mainMovement();
  }
  
  var Ninja = function(ninjaColor, x, y, speed) {
    this.ninjaX = x;
    this.ninjaY = y;
    this.ninjaSpeed = speed;
    this.renderNinja = function() {
      fill(ninjaColor);
      ellipse(this.ninjaX,this.ninjaY,30,30);
    }
    
    this.rainNinja = function() {
      if(this.ninjaY <= height){
        this.ninjaY+= this.ninjaSpeed;
      }
      else if(this.ninjaY = height) {
        this.ninjaY = 0;
        this.ninjaX = random(0,width);
      }
    }
  }
  
  
    // this.collide = function() {
    //   if(mouseX === ninjaX && mouseY === ninjaY) {
    //     this.renderNinja
    //   }
    // }
  
  var setup = function() {
  createCanvas(500,500);
}

  var makeNinjas = true;
  var draw = function() {
  background(50);
  main();
  
  if (makeNinjas) {
    for (var i = 0; i < 40; i++) {
      ninjasArray.push(new Ninja('black',random(0,width),0, .5*i));
      ninjasArray[i].renderNinja();
      print(ninjasArray.length)
    }
  }
  
  for (var j = 0; j < ninjasArray.length; j++) {
    ninjasArray[j].rainNinja();
    ninjasArray[j].renderNinja();
  }

  makeNinjas = false;
}

  