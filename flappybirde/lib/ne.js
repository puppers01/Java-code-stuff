class NeuralEvolution {

  constructor(options) {
  
    var self = this;
    let inputs;
    let hiddens;
    let outputs;
    let population;
    
    self.options = [
      // variables
      // TODO: add more options
      inputs = 0, // amount of inputs recieved [0]
      hiddens = 0, // amount of hidden layers [1]
      outputs = 0, // amount of outputs sent [2]
      population = 0, // amount of neuronevolution networks [3]

    ]
  }

  set(options) {
    for (var i in options) {
      if (this.options[i] = undefined) {
        self.options[i] = options[i];
      //} else {
       // self.options.push(options[i]);
      }
    }
  }
  

  // sigmoid function
  activation(a) {
    ab = (-a) / 1;
    return (1 / (1 + Math.exp(ab)));
  }

  // edited random number function
  randomN() {
    return Math.random() * 2 - 1;
  } 

  // create function to create value and weights arr
  data() {
    this.value = 0;
      console.log('data value: ' + this.value);
    this.weights = [];
      console.log('weights: ' + this.weights);
  }

  // initialize weight values using randomN
  populateData(num) {
    this.weights = [];
    for (var i = 0; i < num; i++) {
      this.weights.push(this.options.randomN);
        console.log('new weight values: ' + this.weights);
    }

  }
  
}