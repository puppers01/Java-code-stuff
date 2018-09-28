var neuroevolution = new Neuroevolution(self.options);
var objects = []; // Array of objects
var popsize = 5;      // Population Size


function setup() {
  //createCanvas(600, 600);
  //let popu = new Neuroevolution();
  neuroevolution.options[2] = popsize;
  console.log(neuroevolution.options[2]);

  // how to change population size
  // popu.options[2] = 10;
  
}

function draw() {
  background(255);

}