var neuro = new Neuroevolution(self.options);


class Bird {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;

    this.gravity = 0.8;
    this.lift = -16;
    this.velocity = 0;

  }

  show() {
    fill(255, 100);
    stroke(255);
    ellipse(this.x, this.y, 32, 32);
  }

  up() {
    this.velocity += this.lift;
  }

  think(otherObjects) {
    let closest = null;
    let closestD = Infinity;
    for (let i = 0; i < otherObjects.length; i++) {
      let d = (otherObjects[i].x + otherObjects[i].w) - this.x;
      if (d < closestD && d > 0) {
        closest = otherObjects[i];
        closestD = d;
      }
    }

    let inputs = [];
    inputs[0] = this.y / height;
    inputs[1] = closest.top / height;
    inputs[2] = closest.bottom / height;
    inputs[3] = closest.x / width;
    inputs[4] = this.velocity / 10;
    //for (var i in inputs) {
      //neuro.options[2] = inputs[i];
      //neuro.options[3] = activation(neuro.options[2] * randomClamped());
      //neuro.options[4] = activation(neuro.options[3] * randomClamped());
      var output = predict(inputs);
      console.log(output);
      if (output[0] > output[1] && this.velocity >= 0){
      this.up();
      }
    //}

    console.log(neuro.options);

  }


  offScreen() {
    return (this.y > height || this.y < 0);
  }

  update() {
    this.velocity += this.gravity;
    this.y += this.velocity;
  }
}