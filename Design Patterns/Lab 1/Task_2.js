//Second Task - Factory Pattern
class Vehicle{
    repair(){}
}

class SUVVehicle extends Vehicle{
    repair(){
        console.log("SUV vehicle repaired.")
    }
}

class SedanVehicle extends Vehicle{
    repair(){
        console.log("Sedan vehicle repaired.")
    }
}


class HatchbackVehicle extends Vehicle{
    repair(){
        console.log("Hatchback vehicle repaired.")
    }
}

class CoupeVehicle extends Vehicle{
    repair(){
        console.log("Coupe vehicle repaired.")
    }
}

class VehicleFactory{
    constructor(vehicleType){
        this.vehicleType = vehicleType
    }

    createVehicle(){
        switch (this.vehicleType) {
            case "suv":
                return new SUVVehicle()
            case "sedan":
                return new SedanVehicle()
            case "hatchback":
                return new HatchbackVehicle()
            case "coupe":
                return new CoupeVehicle()
            default:
                console.log("Invalid vehicle type")
        }
    }
}

const hatchbackVehicle = new VehicleFactory("hatchback").createVehicle()
const sedanVehicle = new VehicleFactory("sedan").createVehicle()
const unknownVehicleType = new VehicleFactory("adsgfh").createVehicle()

hatchbackVehicle.repair()
sedanVehicle.repair()