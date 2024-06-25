const obj = {
    name:'mahmoud',
    age:24,
}

function iteratorGen(){
    let i = 0;
    return {
        next:()=>{ 
            if(i < Object.keys(this).length){ 
                return {value:Object.keys(this)[i++], done: false}
            }else{
                return {value: undefined, done: true}
            }
        }
    }
}

obj[Symbol.iterator] = iteratorGen


for(key of obj){
    console.log(obj[key])
}



