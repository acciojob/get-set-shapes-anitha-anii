//complete this code
class Rectangle {
	constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get getWidth() {
    return this.width;
  }

  get getHeight() {
    return this.height;
  }

  getArea() {
    return this.width * this.height;
  }
} 

class Square extends Animal {
	constructor(side) {
    super(side, side);
    this.side = side;
  }

  get getPerimeter() {
    return 4 * this.side;
  }
}

const rectangle = new Rectangle(5, 10);
console.log(rectangle.getWidth); 
console.log(rectangle.getHeight); 
console.log(rectangle.getArea()); 

const square = new Square(7);
console.log(square.getWidth); 
console.log(square.getHeight); 
console.log(square.getArea()); 
console.log(square.getPerimeter); 

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
