var nonExistentCookieError = new Error('Cookie doesn\'t exist.')
var alreadyExistentCookieError = new Error('This cookie already exist.')

function cookieConstuctor(name, value, properties){
    var cookieNameValue = name + '=' + value    
    if(!properties){
        document.cookie = cookieNameValue
    }else{
        var cookieExpiry = properties?.expDate?(typeof  properties.expDate === 'number'? 'max-age=' + properties.expDate  : 'expires=' +  properties.expDate) : ''
        var pathName =properties?.path? ('path=/' +   properties.path) : ''
        if(!properties.expDate){
            document.cookie =  cookieNameValue + '; ' + pathName
        }
        else if(!properties.path){
            document.cookie =  cookieNameValue + '; ' + cookieExpiry
        }
        else{
            document.cookie =  cookieNameValue + '; ' + cookieExpiry + '; ' + pathName
        }
    }
}

function createCookie(name,value,properties){
    if(arguments.length > 1 && arguments.length < 4){
        if(!hasCookie(name)){
            cookieConstuctor(name,value,properties)
        }else{
            throw alreadyExistentCookieError
        }
    }else{
        throw atLeastOneArgError = new Error('Function Expects atleast two or less than 4 argument(s) but found ' + arguments.length + '.')
    }
}

function getAllCookies(){
    if(arguments.length === 0){
        var cookies = document.cookie.split('; ')
        var cookiesObj = {}
        for(i in cookies){
            var cookieData = cookies[i].split('=')
            cookiesObj[cookieData[0]] = cookieData[1]
        }
        return cookiesObj
    }else{
        throw new Error('Function expected zero argument but found ' + arguments.length + '.')
    }
}

function hasCookie(name){
    if(arguments.length === 1){
        if(getAllCookies()[name]){
            return true
        }else{
            return false
        }
    }else{
        throw new Error('Function expected 1 argument but found ' + arguments.length + '.')
    }
}

function getCookie(name){
    if(arguments.length === 1){
        if(hasCookie(name)){
            return getAllCookies()[name]
        }else{
            throw nonExistentCookieError
        }
    }else{
        throw new Error('Function expected 1 argument but found ' + arguments.length + '.')
    }
}

function updateCookie(name,value, properties){  
    if(arguments.length > 1 && arguments.length < 4){
        if(hasCookie(name)){
            cookieConstuctor(name,value,properties)
        }
        else{
            throw nonExistentCookieError
        }
    }else{
        throw atLeastOneArgError = new Error('Function Expects atleast two or less than 4 argument(s) but found ' + arguments.length + '.')
    }
}

function removeCookie(name){
    if(arguments.length === 1){
        if(hasCookie(name)){
            document.cookie = name + '=; max-age=0'
        }else{
            throw nonExistentCookieError
        }
    }else{
        throw new Error('Function expected 1 argument but found ' + arguments.length + '.')
    }
}