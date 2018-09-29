var neuroevolution = new Neuroevolution(self.options);
var objects = []; // Array of circles
var otherObjects = []; // Array of blocks
var popsize = 5;      // Population Size
var numInputs = 0;
var numHiddens = 0;
var numOutputs = 0;
var counter = 0;

function setup() {
  createCanvas(550, 450);

  for (let i = 0; i < popsize; i++) {
    objects[i] = new Bird();
  }

  //console.log(neuro.options[2]);

}

function draw() {
  background(0);

  

  if (counter % 75 == 0){
    otherObjects.push(new Pipe());
  }
  counter++;

  for (let i = otherObjects.length - 1; i >= 0; i--) {
    otherObjects[i].update();

    //if (otherObjects[i].offscreen()) {
    //  otherObjects.splice(i, 1);
    //}

    //if(objects[i].offScreen()) {
    //  objects.splice(i, 1);
    //}
  }

  for (let bird of objects) {
    bird.think(otherObjects);
    bird.show();
    bird.update();
  }

  for (let pipe of otherObjects) {
    pipe.show();
  }
}
