export class Shape{
    constructor(){
        if(this.constructor === 'Shape'){
            throw new Error("You can't initiate an object from this class.")
        }
    }

    calcArea(){
        throw new Error("calcArea Method isn't implemented")
    }
    calcPerimeter(){
        throw new Error("calcPerimeter Method isn't implemented")
    }

  toString(){
    console.log(`Area: ${this.calcArea()} Perimeter: ${this.calcPerimeter()}`)
  }
}
