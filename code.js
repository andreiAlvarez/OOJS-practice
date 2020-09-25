class Shape{
  constructor(name, sides, sideLength) {
  this.name = name;
  this.sides = sides;
  this.sideLength = sideLength;
  }
calcPerimeter(sides, sideLength) {
  return `${this.sides * this.sideLength}`;
} 
}

let shapeOne = new Shape('square', 4, 5);
let shapeTwo = new Shape('triangle', 3, 3);

class Square extends Shape{
  constructor(name, sides, sideLength){
  this.name = 'square';
  this.sides = 4;
  super(sideLength);
  }

  calcArea (sideLength) {
    return `${sideLength*sideLength}`
  } 
}
