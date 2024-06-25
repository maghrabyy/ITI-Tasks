const user = {
    name:'Mahmoud Elmaghraby',
    address:'Giza',
    age:25
}


const userProxy = new Proxy(user,{
    set(target,prop,val){
        if(prop === 'name'){
            if(val.length <= 7){
                target[prop] = val
            }else{
                throw new Error('Characters length must not exceed 7 character.')
            }
        }
        if(prop === 'address'){
            if(typeof val === 'string'){
                target[prop] = val
            }else{
                throw new Error('Must be type of string only.')
            }
        }
        if(prop === 'age'){
            if(typeof val === 'number' && (val >= 25 && val <= 60)){

            }else{
                throw new Error('Must be a numerical value from 25 to 60.')
            }
        }
    },
})

userProxy.name = 'Mahmoud'

userProxy.address = 'Giza, Egypt'

userProxy.age = 25

