//Task 3 - Factory Pattern
class Toy{
    constructor(color,price){
        this.price = price
        this.color = color
    }
}

class ToyDuck extends Toy{}

class ToyCar extends Toy{
    constructor(color,price,name){
        super(color,price)
        this.name = name
    }
}

class ToyFactory{
    constructor(type){
        this.toyType = type
    }

    createToy(color,price,name){
        switch (this.toyType) {
            case "duck":
                return new ToyDuck(color,price)
            case "car":
                return new ToyCar(color,price,name)
            default:
                return "Invalid toy type."
        }
    }
}


const duckToy1 = new ToyFactory("duck").createToy("yellow",10)
const carToy1 = new ToyFactory("car").createToy("red",15,"Speed")
const unknownToy = new ToyFactory("abcd").createToy("red",15,"Speed")

console.log(duckToy1)
console.log(carToy1)
console.log(unknownToy)


