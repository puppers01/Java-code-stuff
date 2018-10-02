class ActivationFunction {
  constructor(a) {
    a = a;
  }

  activate = function(b) {
    console.log(b);
    bb = (-b) / 1;
    console.log(bb);
    return (1 / (1 + Math.exp(bb)));
  }
}
