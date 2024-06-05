function createCookie(name,value,expDate){
    var newCookie
    var cookieNameValue = name + '=' + value
    if(!expDate){
        newCookie = cookieNameValue
        document.cookie = newCookie;
    }else{
        var cookieExpiry = typeof expDate === ' number'? 'max-age=' + expDate : 'expires' + '=' +  expDate
        newCookie = cookieNameValue + '; ' + cookieExpiry
        document.cookie = newCookie;
    }
}

function getAllCookies(){
    var cookies = document.cookie.split('; ')
    var cookiesObj = {}
    for(i in cookies){
        var cookieData = cookies[i].split('=')
        cookiesObj[cookieData[0]] = cookieData[1]
    }
    return cookiesObj
}

function hasCookie(name){
    if(getAllCookies()[name]){
        return true
    }else{
        return false
    }
}

function getCookie(name){
    if(hasCookie(name)){
        return getAllCookies()[name]
    }else{
        console.log('Cookie doesn\'t exist.')
        return;
    }
}

function updateCookie(name,value, expDate){  
    if(hasCookie(name)){
        var cookieExpiry = typeof expDate === ' number'? 'max-age=' + expDate  : 'expires' + '=' +  expDate
        document.cookie = name + '=' + value + '; ' + cookieExpiry;
    }
    else{
        console.log('Cookie doesn\'t exist.')
    }
}

function removeCookie(name){
    if(hasCookie(name)){
        document.cookie = name + '=; max-age=0'
    }else{
        console.log('Cookie doesn\'t exist.')
    }
}