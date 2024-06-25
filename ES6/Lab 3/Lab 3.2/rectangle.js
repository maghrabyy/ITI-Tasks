import { Shape } from "./shape.js"

export class Rectangle extends Shape{  
    #width;
    #height;  
    constructor(w,h){
        super();
        this.#width = w;
        this.#height = h;
    }

    getWidth(){
        return this.#width;
    }

    getHeight(){
        return this.#height;
    }


    calcArea(){
        return this.getWidth() * this.getHeight()
    }

    calcPerimeter(){
        return (this.getWidth() + this.getHeight())*2
    }
}