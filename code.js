// Excercise 1

function Shape(name, sides, sideLength) {
  this.name = name;
  this.sides = sides;
  this.sideLength = sideLength;

calcPerimeter = (sides, sideLength) => {
return `${this.sides * this.sideLength}`;
}

}

let shapeOne = new Shape('square', 4, 5);

calcPerimeter(shapeOne);

let shapeTwo = new Shape('triangle', 3, 3);

calcPerimeter(shapeTwo);

