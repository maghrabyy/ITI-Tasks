import { Shape } from "./shape.js";

export class Circle extends Shape{
    #radius
    constructor(r){
        super();
        this.#radius = r
    }

    getRadius(){
        return this.#radius;
    }

    calcArea(){
        return Math.PI * (this.getRadius() * this.getRadius())
    }

    calcPerimeter(){
        return 2 * (Math.PI * this.getRadius())
    }

}