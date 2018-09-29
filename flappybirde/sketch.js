var neuroevolution = new NeuralEvolution(self.options);
var objects = []; // Array of objects
var popsize = 50;      // Population Size
var numInputs = 0;
var numHiddens = 0;
var numOutputs = 0;

function setup() {
  createCanvas(600, 600);

  console.log(neuroevolution);

  neuroevolution.options[0] = numInputs; // # of inputs
    console.log(neuroevolution.options[0]);
  neuroevolution.options[1] = numHiddens; // # of hiddens
    console.log(neuroevolution.options[1]);
  neuroevolution.options[2] = numOutputs; // # of outputs
    console.log(neuroevolution.options[2]);
  neuroevolution.options[3] = popsize; // population size
    console.log(neuroevolution.options[3]);
  
}

function draw() {
  background(0);
}
