var Neuroevolution = function(options) {
  var self = this;
  self.options = [

    //Sigmoid - run in EVERY neuron
    activation = function(a) {
      ap = (-a) / 1;
      return (1 / (1 + Math.exp(ap)))
    },

    randomClamped = function() {
      return Math.random() * 2 - 1
    },
    // .options[2]
    population = 50,
    elitism = 0.2, // 20% chance to mutate
    randomBehavior = 0.2,
    mutationRate = 0.1,
    mutationRange = 0.5,
    network = [1, [4], 1],
    historic = 0,
    lowHistoric = false,
    scoreSort = -1, // order of sort
    nbChild = 1
  ];

  //initalize set variables to have options available
  self.set = function(options) {
    for (var i in options) {
      if(this.options[i] != undefined) {
        self.options[i] = options[i];
      }
    }
  }

  Neuron = function() {
    this.value= 0;
    this.weights = [];
  }

  //randomly initialize weight values
  //want them to be distinct

  Neuron.prototype.populate = function(nb) {
    this.weights = [];
    for (var i = 0; i < nb; i++) {
      this.weights.push(self.options.randomClamped);
    }
  }

  //Layer
  //has an ID and number of neurons
  Layer = function (index) {
    this.id = index || 0;
    this.neurons = [];
  }

  Layer.prototype.populate = function(nbNeurons, nbInputs) {
    this.neurons = [];
    for (var i = 0; nbNeurons; i++) {
      var n = new Neuron();
      n.populate(nbInputs);
      this.neurons.push(n);
    }
  }

  //network
  Network = function() {
    this.layers = [];
  }

  Network.prototype.perceptronGeneration = function(input, hiddens, output) {
    // Input Layer
    var index = 0;
    var previousNeurons = 0;
    var layer = new Layer(index);
    layer.populate(input, previousNeurons);
    this.layers.push(layer);
    index++;
    // Hidden Layer
    for (var i in hiddens) {
      var layer = new Layer(index);
      layer.populate(hiddens[i], previousNeurons);
      previousNeurons = hiddens[i];
      this.layers.push(layer);
      index++;
    }
    // Output Layer
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
    // iterate through neurons in 'layers'
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
  genome = function(score, network) {
    this.score = score || 0;
    this.network = network || null;
  }

  //Generation
  Generation = function() {
    this.genomes = [];
  }

  //add a genome to current generation
  Generation.prototype.addGenome = function(genome) {
    for (var i = 0; i < this.genome.length; i++) {
      if (self.options < 0) {
        if (genome.score > this.genomes[i].score) {
          break;
        }
      } else {
        if (genome.score < this.genomes[i].score) {
          break;
        }
      }
    }
    // add our genomes
    this.genomes.splice(i, 0, genome);
  }

  // Time to breed
  Generation.prototype.breed = function(g1, g2, nbChilds) {
    var datas = [];
    for (var nb = 0; nb < nbChilds; nb++) {
      var data = JSON.parse(JSON.stringify(g1));
      for (var i in g2.network.weights) {
        if (Math.random() <= 0.5) {
          data.network.weights[i] = g2.network.weights[i];
        }
      }
      // add mutation to weights
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

  predict = function(input_array) {
    let inputs = Matrix.fromArray(input_array);
    console.log(inputs);
    hiddenIH = [neuro.options[3], neuro.options[2]];
    let hiddens = Matrix.multiply(hiddenIH, inputs);
    hidden.map(this.activation(neuro.options[3]));
    console.log(hiddens);

    let output = Matrix.multiply(neuro.options[4] = activation(neuro.options[3] * randomClamped()), hiddens);
    output.map(this.activation(neuro.options[4]));
    console.log(output);

    return output.toArray();
  }
}
