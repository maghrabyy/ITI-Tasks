function createPerson(fullName,age,jobTitle){
    return {
        fullName,
        age,
        jobTitle,
    }
}

function capitilizeFirstLetter(str){
    var firstLetter = str.substring(0,1).toUpperCase()
    var remainingLetters = str.substring(1)
    return  firstLetter + remainingLetters
}

function getterSetterGen(){
    for(let key in this){
        if(typeof this[key] !== 'function'){
            var keyName = capitilizeFirstLetter(key)
            this[`get${keyName}`] = function(){ return this[key]}
            this[`set${keyName}`] = function(val) {
                this[key] = val
            } 
        }
    }
}