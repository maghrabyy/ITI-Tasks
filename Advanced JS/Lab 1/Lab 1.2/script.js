//B.1
function reverseArgs(){
    return Array.from(arguments).reverse()
}

var reverseArgs2 = function(...num){
    return num.reverse() 
}

//B.2
function twoParamsFunc(){
    if(arguments.length > 2){
        throw new Error('The function only takes two arguments.')
    }
    else if(arguments.length < 2){
        throw new Error('The function requires atleast two arguments.')
    }
    else{
        console.log('First Arg',arguments[0])
        console.log('Second Arg',arguments[1])
    }
}

//B.3
function add(){
    if(arguments.length > 0){
        if(Array.from(arguments).every(arg=>typeof arg === 'number')){
            return Array.from(arguments).reduce((a,b)=>a+b,0)
        }else{
            throw new Error('Function only accept arguments of type Number.')
        }
    }else{
        throw new Error('Function requires atleast one argument.')
    }
}