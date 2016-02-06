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
  
  var Ninja = function(ninjaColor, x, y) {
    this.ninjaX = x;
    this.ninjaY = y;
    
    this.renderNinja = function() {
      fill(ninjaColor);
      ellipse(this.ninjaX,this.ninjaY,50,50);
    }
    this.updateNinja = function() {
      
    }
  }
  
  
    // this.collide = function() {
    //   if(mouseX === ninjaX && mouseY === ninjaY) {
    //     this.renderNinja
    //   }
    // }
  
  var setup = function() {
  createCanvas(500,500);
  //blackNinja.renderNinja();
}

  var makeNinjas = true;
  var draw = function() {
  // background(50);
  main();
  
  for (var i = 0; i < 2; i++) {
    ninjasArray.push(new Ninja('black',random(0,width),0));
    ninjasArray[i].renderNinja();

  }
  
  makeNinjas = false
  
  

  
 // blackNinja.renderNinja(); //calling black ninja
  //redNinja.renderNinja();
}

  