
//var xoff1 = 0;
//var xoff2 = 1000;
var inc = 0.01;

function setup(){
  createCanvas(200,200);
  pixelDensity(1);
}

function draw(){
  loadPixels();
  for (var x = 0; x < width; x++){
    for (var y = 0; y < height, y++){
      var index = (x + y * width) * 4;
      pixels[index+0] = random(255);
      pixels[index+1] = 0;
      pixels[index+2] = 0;
      pixels[index+3] = 255;
    }
  }
  updatePixels();
}
