var NeuralEvolution = function(options) {
  
    var self = this;
    self.options = [
      // sigmoid function - runs in every neuron
      activation = function(a) {
        ab = (-a) / 1;
        return (1 / (1 + Math.exp(ab)));
      },
      // edited random number function
      randomN = function() {
      return Math.random() * 2 - 1;
      },

      // Variables
      // TODO: add more options
      inputs = 0, // amount of inputs recieved [2]
      hiddens = 0, // amount of hidden layers [3]
      outputs = 0, // amount of outputs sent [4]
      population = 10, // amount of neuronevolution networks [5]
      mutationRate = 0.1, // mutation rate [6]
      mutationRange = 0.5, // mutation range [7]
      network = [inputs, [hiddens], outputs], // network of inputs, hiddens, and outputs
      nbChild = 1,
    ]
    
    self.set = function(options) {
      for (var i in options) {
        if (this.options[i] != undefined) {
          self.options[i] = options[i];
        //} else {
        // self.options.push(options[i]);
        }
      }
    }  
  

  // create function to create value and weights arr
  var Neuron = function() {
    this.value = 0;
    this.weights = [];
  }

  // initialize weight values using randomN
  Neuron.prototype.populate = function(num) {
    this.weights = [];
    for (var i = 0; i < num; i++) {
      this.weights.push(self.options.randomN);
    }
  }

  Layer = function(index) {
    this.id = index || 0;
    this.neurons = [];
  }

  Layer.prototype.populate = function(nbNeurons, nbInputs) {
    this.neurons = [];
    for (var i = 0; nbNeurons; i++) {
      var n = new this.Neuron();
      n.populate(nbInputs);
      this.neurons.push(n);
    }
  }

  var Network = function() {
    this.layers = [];
  }

  Network.prototype.networkGeneration = function(input, hidden, output) {
    // Input layer
    var index = 0;
    var previousNeurons = 0;
    var layers = new Layer(index);
    layer.populate(input, previousNeurons);
    this.layers.push(layer);
    index++;
    // Hidden Layer
    for (var i in hidden) {
      var layer = new Layer(index);
      layer.populate(hidden[i], previousNeurons);
      previousNeurons = hidden[i];
      this.layers.push(layer);
      index++;
    }
    // Output layer
    var layer = new Layer(index);
    layer.populate(output, previousNeurons);
    this.layers.push(layer);
  }

  // Computation step
  Network.prototype.compute = function(inputs) {

    for (var i in inputs) {
      if (this.layers[0] && this.layers[0].neurons[i]) {
        this.layers[0].neurons[i].value = inputs[i];
      }
    }
    var prevLayer = this.layers[0];
    // iterate through neurons in data
    for (var i = 1; i < this.layers.length; i++) {
      var sum = 0;
      for (var j in this.layers[i].neurons) {
        sum += prevLayer.neurons[k].value * this.layers[i].neurons[j].weights[k];
      }
      this.layers[i].neurons[j].value = self.options.activation(sum);
    }
    prevLayer = this.layer[i];
  }

  // Genome
  var genome = function(score, network) {
    this.score = score || 0;
    this.network = network || null;
  }

  // Generation
  var Generation = function() {
    this.genomes = [];
  }

  // add genome to the current generation
  Generation.prototype.addGenome = function(genome) {
    for (var i = 0; i < this.genome.length; i++) {
      if (self.options < 0) {
        if (genome.score > this.genome[i].score) {
          break;
        }
      } else {
        if (genome.score < this.genomes[i].score) {
          break;
        }
      }
    }

    // add the genome
    this.genomes.splice(i, 0, genome);
  }

  // time to reproduce
  Generation.prototype.breed = function(g1, g2, nbChild) {
    var datas = [];
    for (var nb = 0; nb < nbChilds; nb++) {
      var data = JSON.parse(JSON.stringify(g1));
      for ( var i in g2.network.weights) {
        if (Math.random() <= 0.5) {
          data.network.weights[i] = g2.network.weights[i];
        }
      }

      // add mutation weights
      for (var i in data.network.weights) {
        if (Math.random() <= self.options.mutationRate) {
          data.network.weights[i] += Math.random() * self.options.mutationRange * 2 - self.options.mutationRange;
        }
      }
      datas.push(data);
    }

    // return list of breeded genomes
    return datas;
  }
}



  
