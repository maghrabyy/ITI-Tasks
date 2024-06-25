import { Shape } from "./shape.js"

export class Square extends Shape{
    #side
    constructor(s){
        super();
        this.#side = s
    }

    getSide(){
        return this.#side
    }

    calcArea(){
        return this.getSide() * this.getSide()
    }

    calcPerimeter(){
        return this.getSide() * 4
    }

}
