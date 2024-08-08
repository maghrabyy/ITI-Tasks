enum ShapeType { circle, square, rectangle }

abstract class Shape {
  factory Shape(ShapeType type) {
    switch (type) {
      case ShapeType.circle:
        return Circle();
      case ShapeType.square:
        return Square();

      case ShapeType.rectangle:
        return Rectangle();
      default:
        throw Exception("Invalid shape type.");
    }
  }
  void addShape() {}
}

class Circle implements Shape {
  @override
  void addShape() {
    print("a circle shape created.");
  }
}

class Square implements Shape {
  @override
  void addShape() {
    print("a square shape created.");
  }
}

class Rectangle implements Shape {
  @override
  void addShape() {
    print("a rectangle shape created.");
  }
}

void main() {
  Shape circle = Shape(ShapeType.circle);
  circle.addShape();
  Shape rectangle = Shape(ShapeType.rectangle);
  rectangle.addShape();
  Shape square = Shape(ShapeType.square);
  square.addShape();
}
