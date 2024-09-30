class Shape {
  name;
  sides;
  sideLength;

  constructor (name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }

  calcPerimeter () {
    return this.sides * this.sideLength;
  }
}

const square = new Shape('square', 4, 5);

console.log(square.calcPerimeter());

class Square extends Shape {
  constructor (name, sides, sideLength) {
    super('square', 4);
    this.sideLength = sideLength;
  }

  calcArea () {
    return this.sideLength * this.sideLength;
  }
}

const square2 = new Square('square', 4, 6);
console.log(square2.calcPerimeter());
console.log(square2.calcArea());
