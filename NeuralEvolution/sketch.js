let slider;

function setup() {
  createCanvas(600, 600);
  slider = createSlider(1, 100, 1);
  let popu = Neuroevolution(self.options.population);
  popu(10);
  console.log(popu);
}

function draw() {
  background(0);
  console.log()

}