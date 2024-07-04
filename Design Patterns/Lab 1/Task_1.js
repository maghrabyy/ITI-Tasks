// First Task Singleton Pattern
class CEO{
    constructor(name,age,address){
        if(!CEO.instance){
            this.name = name
            this.age = age
            this.address = address
            CEO.instance = this
        }else{
            return CEO.instance
        }
    }
}

const companyCEO = new CEO("Mahmoud Elmaghraby",24,'Giza')
const anotherCEO = new CEO("Ahmed",28,'Cairo')


console.log(companyCEO) //Prints the companyCEO data
console.log(anotherCEO) //Prints the companyCEO data