class NeuralEvolution {

  constructor(options) {

    this.options = [
      // variables
      // TODO: add more options
      inputs = 0, // amount of inputs recieved
        console.log('inputs: ' + inputs),
      hiddens = 0, // amount of hidden layers
        console.log('hiddens: ' + hiddens),
      outputs = 0, // amount of outputs sent
        console.log('outputs: ' + outputs),
      population = 0, // amount of neuronevolution networks
        console.log('population size: ' + population),

      // sigmoid function
      activation = function(a) {
        ab = (-a) / 1;
        return (1 / (1 + Math.exp(ab)));
      },

      // edited random number function
      randomN = function() {
        return Math.random() * 2 - 1;
      }

    ];
  }

  // create function to create value and weights arr
  data = function() {
    this.value = 0;
      console.log('data value: ' + this.value);
    this.weights = [];
      console.log('weights: ' + this.weights);
  }

  // initialize weight values using randomN
  populateData = function(num) {
    this.weights = [];
    for (var i = 0; i < num; i++) {
      this.weights.push(this.options.randomN);
        console.log('new weight values: ' + this.weights);
    }

  }
  
}