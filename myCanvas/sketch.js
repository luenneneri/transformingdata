
function setup() {
//   this line sets up the canvas that will be drawn on
  createCanvas(windowWidth,windowHeight)

}
function draw() {
  background(0)
  textSize(48);
  var theTime = hour() + ":" + minute() + ":" + second();
  fill(255);
  stroke(0,0,0)
  text(theTime,100,100)


  noFill();
  stroke(166, 76, 76)
  strokeWeight(1);
  for(var k=0; k < hour(); k++) {
   var xposition = windowWidth/2;
   var yposition = windowHeight/2;
   strokeWeight((k+1)/1.5)
   ellipse(xposition,yposition,720+k*40,720+k*40)
  }


  noFill();

  strokeWeight(1);
  stroke(82, 175, 222)
  for(var j=0; j < minute(); j++) {
   var xposition = windowWidth/2;
   var yposition = windowHeight/2;
   strokeWeight((j+1)/15)
   ellipse(xposition,yposition,124+j*10,124+j*10)
  }

  noFill();
  stroke(230, 184, 85)
  strokeWeight(3);
  for(var i=0; i < second(); i++) {
   var xposition = windowWidth/2;
   var yposition = windowHeight/2;
   ellipse(xposition,yposition,i*2,i*2)
  }









// AND HERE
// your outline should he commented out, so use these: //


}
