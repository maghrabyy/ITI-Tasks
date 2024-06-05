var fullName = document.getElementById('user-fullName')
var userEmail = document.getElementById('user-email')
var userImg = document.getElementById('user-img')
var visitFreq = document.getElementById('visitFreq')

var numOfVisits = getCookie('visted')

fullName.innerText = getCookie('fullName')
userEmail.innerText = getCookie('email')
userImg.src =  getCookie('gender') === 'male'? 'asset/1.jpg' : 'asset/2.jpg' 
visitFreq.innerText = numOfVisits

var afterOneMonth = new Date(new Date().setMonth(new Date().getMonth()+1))
updateCookie('visted',++numOfVisits,afterOneMonth)


// //Test Cookies Lib
// console.log(getAllCookies()) // Cookies Object

// console.log(getCookie('myAge')) // Cookie doesn't exist
// console.log(hasCookie('myAge')) // False
// console.log(hasCookie('age')) // True

// updateCookie('fullName','Mahmoood')
// console.log(getAllCookies()) // Cookies Object

// removeCookie('age')
// console.log(getAllCookies()) // Cookies Object
