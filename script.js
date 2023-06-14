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


// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
