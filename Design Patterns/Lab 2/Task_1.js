//Observer Pattern
class Store{
    constructor(storeName){
        this.storeName = storeName
        this.customers = [];
        this.latestProduct = ''
    }

    registerCustomer(customer){
        this.customers.push(customer)
    }

    unregisterCustomer(customer){
        this.customers = this.customers.filter(cst=>cst != customer)
    }

    notifyAll(){
        this.customers.forEach(cst=>cst.notifyMe(this))
    }


    addProduct(productName){
        this.latestProduct = productName
        this.notifyAll()
    }
}

class Customer{
    constructor(name){
        this.name = name
    }

    notifyMe(store){
        console.log(`[${this.name}]: ${store.latestProduct} is now available at ${store.storeName}.`)
    }
}


const cst1 = new Customer("Mahmoud")
const cst2 = new Customer("Ahmed")
const cst3 = new Customer("Ali")

const bTech = new Store("BTech")
const mobileShop = new Store("Mobile Shop")

bTech.registerCustomer(cst1)
bTech.registerCustomer(cst2)//ahmed
bTech.unregisterCustomer(cst1)
bTech.registerCustomer(cst3)//ali

mobileShop.registerCustomer(cst1)//mahmoud
mobileShop.registerCustomer(cst3)//ali

bTech.addProduct("Lenovo Legion 5 Pro laptop")

mobileShop.addProduct("Samsung Galaxy s24 Ultra")

