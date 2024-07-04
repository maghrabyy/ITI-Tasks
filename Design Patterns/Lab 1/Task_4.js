//Task 3 - Singleton Pattern
class ConfigureVals{
    constructor(xpoint=0,ypoint=0,shape=null){
        if(!ConfigureVals.instance){
            this.xpoint = xpoint
            this.ypoint = ypoint
            this.shape = shape
            ConfigureVals.instance = this
        }
    }

    getConfiguration(){
        return ConfigureVals.instance
    }
}

// const myConfig1 = new ConfigureVals()
const myConfig1 = new ConfigureVals(12.5,18,"circle")
const myConfig2 = new ConfigureVals()

console.log(myConfig1.getConfiguration())
console.log(myConfig2.getConfiguration())