function createPerson(fullName,age,jobTitle){
    return {
        fullName,
        age,
        jobTitle,
    }
}

function capitalizeFirstLetter(str){
    var firstLetter = str.substring(0,1).toUpperCase()
    var remainingLetters = str.substring(1)
    return  firstLetter + remainingLetters
}

function getterSetterGen(){
    for(var key in this){
        (function(k){
            if(typeof this[k] !== 'function'){
                var keyName = capitalizeFirstLetter(k)
                this[`get${keyName}`] = function(){ return this[k]}
                this[`set${keyName}`] = function(val) { 
                    this[k] = val
                } 
            }
        }).call(this,key)
    }
}