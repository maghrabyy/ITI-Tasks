//Strategy Pattern
class FootballMatch{
    setStrategy(strategy){
        this.strategy = strategy
    }

    printGameStrategy(){
        this.strategy.strategyInfo()
    }
}

class Attack{
    constructor(){
        this.strategy = "Attack Strategy"
    }
    strategyInfo(){
        console.log(`Strategy Type: ${this.strategy}`)
    }
}
class Defense{
    constructor(){
        this.strategy = "Defense Strategy"
    }
    strategyInfo(){
        console.log(`Strategy Type: ${this.strategy}`)
    }
}

class Medium{
    constructor(){
        this.strategy = "Medium Strategy"
    }
    strategyInfo(){
        console.log(`Strategy Type: ${this.strategy}`)
    }
}

const attackStrategy = new Attack()
const defenseStrategy = new Defense()
const mediumStrategy = new Medium()

const match1 = new FootballMatch()

match1.setStrategy(defenseStrategy)
match1.setStrategy(attackStrategy)

match1.printGameStrategy()